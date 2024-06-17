sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Tutorial.DynamicForm.controller.DynamicButton", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Tutorial.DynamicForm.view.DynamicButton
		 */
		onInit: function () {
         	var button = new sap.m.Button({
				text: "Default",
				press: this.onButtonPress 
			})
			
			var page_ID = this.getView().byId("dynamicButtonForm");
			page_ID.addContent(button);
		},
    	onButtonPress: function () {
        sap.m.MessageToast.show("Button Pressed!");
    	}
	
	});

});