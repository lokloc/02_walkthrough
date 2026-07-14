sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});


// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], (XMLView) => {
// 	"use strict";

// 	XMLView.create({
// 		viewName: "ui5.walkthrough.view.App"
// 	}).then((oView) => oView.placeAt("content"));
// });




// sap.ui.define([
// 	"sap/m/Text"
// ], (Text) => {
// 	"use strict";

// 	new Text({
// 		text: "환영합니다~"
// 	}).placeAt("content");
// });


// sap.ui.define([], () => {
// 	"use strict";
// 	alert("UI5 is ready");
// });