sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Test.Demo.controller.App", {
		onInit: function () {
         this.getRouter().attachRoutePatternMatched(this.onRouteMatched,this);
		},
		onRouteMatched:function(evt){
			debugger
		 if(evt.mParameters.name != "App"){
		 	return
		 }
		},
		HandelNext:function(){
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