sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Demo.ListApp.controller.MainList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Demo.ListApp.view.MainList
		 */
		onInit: function () {
        var oData = new sap.ui.model.json.JSONModel("model/list.json");
        this.getView().byId("listID").setModel(oData);
		},
		
		onItemPress: function (oEvent) {
			// Get the pressed item's binding context
			var oListItem = oEvent.getParameter("listItem");
			var oList = oEvent.getSource();

			// Get the index of the pressed item
			var iIndex = oList.indexOfItem(oListItem);

			// Display the row number in a toast message
			MessageToast.show("Row number: " + (iIndex + 1));
		}

		

	});

});