sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/m/MessageToast"
],function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("Demo1.MyUI5App.controller.App", {
        onPress: function () {
            MessageToast.show("Button Pressed");
        }
    });
});