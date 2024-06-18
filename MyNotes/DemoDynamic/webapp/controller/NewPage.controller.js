sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Test.Demo.controller.NewPage", {

      onInit: function () {
         this.getRouter().attachRoutePatternMatched(this.onRouteMatched,this);
		},
		onRouteMatched:function(evt){
			debugger
		},
		HandelNex1t:function(){
			debugger
			this.getRouter().navTo("S3")
		},
		getRouter:function()
         {
	return sap.ui.core.UIComponent.getRouterFor(this);
         },
	

	});

});