sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Test.Demo.controller.S3", {

		onInit: function () {
			this.getRouter().attachRoutePatternMatched(this.onRouteMatched, this);
			
			var buttoneessss = new sap.m.Button({
				text:"Rahul"
			})
			
				var simpleform = new sap.ui.layout.form.SimpleForm({
				id: "SimpleFormChange354",
				minWidth: 1024,
				maxContainerCols: 2,
				editable: true,
				layout: "ResponsiveGridLayout",
				labelSpanL: 3,
				labelSpanM: 3,
				emptySpanL: 4,
				emptySpanM: 4,
				columnsL: 1,
				columnsM: 1,
				class: "editableForm",
				content: [
					
					
					new sap.m.Label({
					text: "Name"
			
				}), 
				
				
				new sap.m.Input({
					value: "{name}"
				}), 
				
				
				new sap.m.Label({
					text: "Roll No."
				}), new sap.m.Input({
					value: "{roll}"
				}), new sap.m.Label({
					text: "Email-id/Mobile No"
				}), new sap.m.Input({
					value: "{email}"
				}), new sap.m.Input({
					value: "{mobile}",
					layoutData: [new sap.ui.layout.GridData({
						span: "L2 M2 S4"
					})]
				}), new sap.m.Label({
					text: "Course"
				}), new sap.m.Select({
					items: [new sap.ui.core.Item({
						text: "{course}"
					})]
				})]
			});
	
			var page_ID = this.getView().byId("pageid");
			page_ID.addContent(simpleform);
			page_ID.addContent(buttoneessss);

		},
		onRouteMatched: function (evt) {
			debugger
		},
		HandelNex1t: function () {
			debugger
			debugger
			this.getRouter().navTo("NewPage", {
				objectId: "test"
			});
		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
	});

});