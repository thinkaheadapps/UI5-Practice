sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Demo.RoutingNavigation.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Demo.RoutingNavigation.view.View2
		 */
		onInit: function () {

		},
		
		 onPressForm2Btn: function() {
           var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("View1", {});
        }
    });
});