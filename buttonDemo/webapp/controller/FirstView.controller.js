sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("demo.buttonDemo.controller.FirstView", {
		onInit: function () {

		},
		onSave: function() {
			MessageToast.show("Save Button Pressed");
		},
		onInfo: function() {
			MessageToast.show("Info Button Pressed");
		},
		wideButtonPress: function() {
			MessageToast.show("Wide Button Pressed");
		},
		dissableButtonPress: function() {
			MessageToast.show("Dissable Button Pressed");
		}
		
	});
});