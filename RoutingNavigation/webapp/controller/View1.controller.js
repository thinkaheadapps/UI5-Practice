sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Demo.RoutingNavigation.controller.View1", {
		onInit: function () {
        //this.onPressForm1Btn();
		},
		
		onPressForm1Btn: function() {
            //sap.m.MessageToast.show("Button pressed!");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("View2", {});
        }
	});
});