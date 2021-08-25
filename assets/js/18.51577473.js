(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{398:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"generating-routes-and-oas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generating-routes-and-oas"}},[t._v("#")]),t._v(" Generating Routes and OAS")]),t._v(" "),s("h2",{attrs:{id:"using-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-cli"}},[t._v("#")]),t._v(" Using CLI")]),t._v(" "),s("h3",{attrs:{id:"basic-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-commands"}},[t._v("#")]),t._v(" Basic Commands")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate OAS")]),t._v("\ntsoa spec\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate routes")]),t._v("\ntsoa routes\n")])])]),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("h4",{attrs:{id:"openapi-specification-oas-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openapi-specification-oas-generation"}},[t._v("#")]),t._v(" OpenAPI Specification (OAS) generation")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: tsoa spec [options]\n\nOptions:\n   --configuration, -c  tsoa configuration file; default is tsoa.json in the working directory  [string]\n   --host  API host                                                                             [string]\n   --basePath  Base API path                                                                    [string]\n")])])]),s("h4",{attrs:{id:"route-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-generation"}},[t._v("#")]),t._v(" Route generation")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: tsoa routes [options]\n\nOptions:\n  --configuration, -c  tsoa configuration file; default is tsoa.json in the working directory   [string]\n  --basePath  Base API path                                                                     [string]\n")])])]),s("p",[t._v("You can find the Reference for the tsoa configuration file "),s("a",{attrs:{href:"https://tsoa-community.github.io/reference/interfaces/_tsoa_runtime.config-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("For information on the configuration object (tsoa.json), you may also me interested in:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/lukeautry/tsoa/blob/master/packages/runtime/src/config.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration definition"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/lukeautry/tsoa/blob/master/tests/tsoa.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration sample"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"programmatic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#programmatic"}},[t._v("#")]),t._v(" Programmatic")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  generateRoutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  generateSpec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ExtendedRoutesConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ExtendedSpecConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tsoa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" specOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExtendedSpecConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    basePath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entryFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./api/server.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    specVersion"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    outputDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./api/dist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    controllerPathGlobs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./routeControllers/**/*Controller.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routeOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExtendedRoutesConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    basePath"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entryFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./api/server.ts"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    routesDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateSpec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("specOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateRoutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routeOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Note:")]),t._v(" If you use tsoa pragmatically, please be aware that tsoa's methods can (under rare circumstances) change in minor and patch releases. But if you are using tsoa in a .ts file, then TypeScript will help you migrate to any changes. We reserve this right to change what are essentially our internal methods so that we can continue to provide incremental value to the majority user (our CLI users). The CLI however will only receive breaking changes during a major release.")])])}),[],!1,null,null,null);a.default=e.exports}}]);