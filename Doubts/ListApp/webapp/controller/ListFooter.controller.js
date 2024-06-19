sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Demo.ListApp.controller.ListFooter", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Demo.ListApp.view.ListFooter
		 */
		onInit: function () {
        var oData = new sap.ui.model.json.JSONModel("model/list.json");
        this.getView().byId("listFooterID").setModel(oData);
		},

	});

});