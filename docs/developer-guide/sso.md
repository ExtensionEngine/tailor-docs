# SSO

This version introduces support for federated login using OIDC protocol. It’s possible to use any OIDC-compliant identity provider (like Auth0 or Okta).

Regarding the user creation, there are two options:
* Signup over OIDC is allowed. If set, every user who has an account on identity provider can log in (their account will be automatically created on Tailor).
* Signup over OIDC is disallowed (only users with accounts created on Tailor will be able to log in).

To enable SSO via OIDC: 
* Configure Identity provider
* Configure Tailor (done by developers using environment variables)

![SSO login](~@source/assets/images/sso.png)

## Setup

Login is achieved using [OpenID Connect Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) which is the safest approach to login since it uses a combination of:

* front-channel - to allow users to be able to log in and give consent,
* back-channel - for user data transfer.

Logout uses [OpenID Connect RP Initiate Logout Flow](https://openid.net/specs/openid-connect-rpinitiated-1_0.html#RPLogout).
To enable SSO you need to add the appropriate configuration to Talor’s `.env` file and to your IdP of choice.

### IdP configuration

* Create new application/client; usually called ‘*Regular Web App*’
* Allow Authorization Code Flow
* Set Callback URLs for your client 
    * [https://{tailor.domain}/api/oidc/callback](https://{tailor.domain}/api/oidc/callback)
    * [https://{tailor.domain}/api/oidc/callback?silent=true](https://{tailor.domain}/api/oidc/callback?silent=true)
* Set Logout URLs: 
    * [https://{tailor.domain}/api/oidc/callback?action=logout](https://{tailor.domain}/api/oidc/callback?action=logout)

### Tailor configuration

All configuration on Tailor is done via environment variables:
* **OIDC_ENABLED** - Flag to enable SSO via OIDC. Truthy value enables OIDC and falsely disables
* **OIDC_CLIENT_ID** - Id of Tailor client/app
* **OIDC_CLIENT_SECRET** - Client Secret 
* **OIDC_ISSUER** - Domain of your IdP; e.g. [https://my-idp.com](https://my-idp.com)
* **OIDC_JWKS_URL** - IdP URL for fetching JWKS (keyset used for JWT validation)*
* **OIDC_AUTHORIZATION_ENDPOINT** - IdP url for OIDC Authorization request*
* **OIDC_TOKEN_ENDPOINT** - IdP URL for obtaining ID token*
* **OIDC_USERINFO_ENDPOINT** - IdP URL for claims about the authenticated user*
* **OIDC_LOGOUT_ENABLED** - Flag to enable OIDC logout
    * Enabling this will make logout go through IdP to end their respective session there. Setting this will also enable Silent Authentication.
    * If the IdP you’re using has not implemented a logout endpoint that respects RP Initiated Logout flow (e.g. Google) you can disable OIDC logout. That will make logout be only local i.e. terminating session only on Tailor. Also, this will disable Silent Authentication and sync of Tailor and IdP sessions.
* **OIDC_LOGOUT_ENDPOINT** - IdP URL for initiating logout
* **OIDC_POST_LOGOUT_URI_KEY** [Optional] - Name of the logout request redirect URL query param;
    * You can leave this blank if your IdP respects the spec and accepts the `post_logout_redirect_uri` query param (e.g. Okta)
    * Fill this with the name of query param used (e.g. Auth0 users *redirectTo*)
* **OIDC_LOGIN_TEXT** - OIDC login button label (e.g. Login with My IdP)
* **OIDC_ALLOW_SIGNUP** [Optional] - Flag to allow signup from SSO
    * Allowing will auto-create accounts for all users who successfully login via OIDC
    * Disallowing will allow login only for users with existing accounts on Tailor (checked by matching emails)
    * Defaults to false
* **OIDC_DEFAULT_ROLE** [Optional] - Role that will be assigned to users who signup over OIDC; defaults to *USER*.
* **SESSION_SECRET** - Secret for short-lived session used between OIDC Code flow requests. Populate this with any random string

\* These IdP URLs can be found in the documentation of your IdP or via a mandatory implemented `/.well-known/openid-configuration` endpoint of your Issuer.

### Major IdPs cheatsheet

#### Okta

::: tip TODO
Add documentation
:::

#### Auth0

::: tip TODO
Add documentation
:::

#### Google

::: tip TODO
Add documentation
:::