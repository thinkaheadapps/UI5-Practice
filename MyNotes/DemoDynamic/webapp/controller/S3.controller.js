sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Test.Demo.controller.S3", {

	onInit: function () {
         this.getRouter().attachRoutePatternMatched(this.onRouteMatched,this);
		},
		onRouteMatched:function(evt){
			debugger
		},
		HandelNex1t:function(){
			debugger
			debugger
			this.getRouter().navTo("NewPage", {
				objectId: "test"
			});
		},
		getRouter:function()
         {
	return sap.ui.core.UIComponent.getRouterFor(this);
         },
	});

});