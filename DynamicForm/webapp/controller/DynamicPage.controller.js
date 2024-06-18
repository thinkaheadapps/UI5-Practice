sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Tutorial.DynamicForm.controller.DynamicPage", {

		
		onInit: function () {
			var page = new sap.m.Page ({
			showHeader: true,
			showNavButton: true,
			title: "PageTitle"
			
			})
			
			var page_ID = this.getView().byId()
			

		},

		

	});

});