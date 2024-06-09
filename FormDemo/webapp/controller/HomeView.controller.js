sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("i2.FormDemo.controller.HomeView", {
        onInit: function () {
           //	debugger
    		var filePath = new sap.ui.model.json.JSONModel();
    		filePath.loadData("model/Data.json",null,false);
    		this.getView().setModel(filePath)
    		var formID = this.getView().byId("SimpleFormChange354")
    		formID.bindElement("/empData/2")
            
        },

        onSimpleForm1: function () {
        	debugger
            this.getView().byId("SimpleFormChange354").setVisible(true);
            this.getView().byId("SimpleFormChange354wide").setVisible(false);
            this.getView().byId("SimpleFormChange354wideDual").setVisible(false);
            this.getView().byId("SimpleFormChange471").setVisible(false);
            
        },

        onSimpleForm2: function () {
            this.getView().byId("SimpleFormChange354").setVisible(false);
            this.getView().byId("SimpleFormChange354wide").setVisible(true);
            this.getView().byId("SimpleFormChange354wideDual").setVisible(false);
            this.getView().byId("SimpleFormChange471").setVisible(false);
            this.bindFormData("SimpleFormChange354wide", "0")

        },

        onSimpleForm3: function () {
            this.getView().byId("SimpleFormChange354").setVisible(false);
            this.getView().byId("SimpleFormChange354wide").setVisible(false);
            this.getView().byId("SimpleFormChange354wideDual").setVisible(true);
            this.getView().byId("SimpleFormChange471").setVisible(false);
            this.bindFormData("SimpleFormChange354wideDual", "1")

        },
        
        onSimpleForm4: function () {
            this.getView().byId("SimpleFormChange354").setVisible(false);
            this.getView().byId("SimpleFormChange354wide").setVisible(false);
            this.getView().byId("SimpleFormChange354wideDual").setVisible(false);
            this.getView().byId("SimpleFormChange471").setVisible(true);
            this.bindFormData("SimpleFormChange471", "2")

        },
        
        //parameterised function to load json file and bindElements to the form control
        bindFormData: function (formName, arrayIndex) {
            var filePath = new sap.ui.model.json.JSONModel();
            filePath.loadData("model/Data.json", null, false);
            this.getView().setModel(filePath);
            var formID = this.getView().byId(formName);
            //arrayIndex
            var finalDataWithIndex = "/empData/" + arrayIndex;
            formID.bindElement(finalDataWithIndex);
        }
    });
});
