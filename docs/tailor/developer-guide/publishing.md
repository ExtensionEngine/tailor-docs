# Publishing

## Webhooks

When Tailor content is published, it is stored on configured storage of choice (usually AWS S3) and ready for application ingestion and delivery. However, this doesn’t happen automatically. There are many reasons for that:

* Authors can create and publish new versions but shouldn’t be able to publish them live (published area using as staging)
* The time between publishing and live version differs (content developed and tested in fragments, then published live)
* Multiple instances of the same repository within consumer system with different versions (e.g. programs with different course versions; old versions shouldn’t be updated due to progress and other implications; e.g. next year/gen course)
* QA process for verification

This version introduces hooks to make the consumer system aware that the new content is published, which makes automatic ingestion easier. 

### Configuration

This version implements the consumer system’s ability to know when something got published. OAuth 2.0 authorization protocol is expected on the consumer end. In order to configure the publishing set:

* **CONSUMER_WEBHOOK_URL**
* **CONSUMER_CLIENT_ID**
* **CONSUMER_CLIENT_SECRET**
* **CONSUMER_CLIENT_TOKEN_HOST**
* **CONSUMER_CLIENT_TOKEN_PATH**

Once the activity is published, the configured webhook will be called, reporting activity details. Activity ID can be then used to retrieve the newly published version of a particular activity.
