(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{439:function(e,t,s){"use strict";s.r(t);var a=s(62),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"containers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#containers"}},[e._v("#")]),e._v(" Containers")]),e._v(" "),s("p",[e._v("Containers hold content elements inside of Tailor. This feature gives an easy way to develop and configure new containers.")]),e._v(" "),s("p",[e._v("The default content containers only allow minimum configuration that does not impact their presentation, nor does it allow setting user-facing meta-information. Custom content containers are Tailor’s way of allowing such functionality. If there is a need for one of the following requirements, we use custom containers:")]),e._v(" "),s("ul",[s("li",[e._v("custom presentation of the basic list (either showing the list in a different way or allowing meta-information to be set),")]),e._v(" "),s("li",[e._v("a more complex grouping of content elements (multiple lists grouped together, branching logic, etc.).")])]),e._v(" "),s("p",[e._v("The way of adding them is the same way that custom content elements are added. There is a separate section for them in the extensions folder.")]),e._v(" "),s("h2",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),s("h3",{attrs:{id:"set-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[e._v("#")]),e._v(" Set up")]),e._v(" "),s("p",[e._v("A template exists which can be used to create the basic structure for a content element. It can be found "),s("a",{attrs:{href:"https://github.com/ExtensionEngine/tailor-container-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" along with instructions on how to get started with it.")]),e._v(" "),s("h3",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),s("p",[e._v("Below is a rundown of all the files located in the template and what their purpose is.")]),e._v(" "),s("h4",{attrs:{id:"index-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#index-js"}},[e._v("#")]),e._v(" "),s("code",[e._v("index.js")])]),e._v(" "),s("p",[e._v("The file used by Tailor's front-end build process to include the container. This file must exist.")]),e._v(" "),s("h4",{attrs:{id:"info-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#info-js"}},[e._v("#")]),e._v(" "),s("code",[e._v("info.js")])]),e._v(" "),s("p",[e._v("The file that contains basic information about this container which can be useful to the front-end and the back-end. This file does not need to exist but then its contents need to be found in any file that needs them ("),s("code",[e._v("index.js")]),e._v(" and "),s("code",[e._v("server/index.js")]),e._v(" in this template use it).")]),e._v(" "),s("h4",{attrs:{id:"server-index-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-index-js"}},[e._v("#")]),e._v(" "),s("code",[e._v("server/index.js")])]),e._v(" "),s("p",[e._v("The file that holds the server logic. It does not need to exist. The server logic covers the following:")]),e._v(" "),s("ul",[s("li",[e._v("custom publishing structure (any custom container can have a unique structure of the published JSON document),")]),e._v(" "),s("li",[e._v("custom asset resolution (if it has a unique structure it needs custom asset resolution logic),")]),e._v(" "),s("li",[e._v("custom publishing summary (if the default container summary: id, uid, type, publishedAs, elementCount, does not cover the requirements).")])]),e._v(" "),s("h4",{attrs:{id:"edit-index-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-index-vue"}},[e._v("#")]),e._v(" "),s("code",[e._v("edit/index.vue")])]),e._v(" "),s("p",[e._v("The file used by the front-end to display the container. This file needs to exist in some form but it does not need to be in an "),s("code",[e._v("edit")]),e._v(" folder or with this name. The only requirement is that it is imported in the "),s("code",[e._v("index.js")]),e._v(" file as "),s("code",[e._v("Edit")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("There needs to be an "),s("code",[e._v("index.js")]),e._v(" file inside of the "),s("code",[e._v("content-containers")]),e._v(" folder for Tailor to load any custom container. If such file does not exist it needs to be created first and it should look like this:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("For Tailor to use any custom container, add the name of the folder that contains the custom container to the array. It should look something like this:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<name-of-folder-given-to-degit>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TODO")]),e._v(" "),s("p",[e._v("Add a basic example")])])])}),[],!1,null,null,null);t.default=n.exports}}]);