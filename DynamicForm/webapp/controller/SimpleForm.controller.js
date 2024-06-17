sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Tutorial.DynamicForm.controller.SimpleForm", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Tutorial.DynamicForm.view.SimpleForm
		 */
		onInit: function () {
			var button = new sap.m.Button({
				text: "Divya"
			})

			// var simpleform = new sap.ui.layout.form.SimpleForm({
			// 	id: "SimpleFormChange354",
			// 	minWidth: 1024,
			// 	maxContainerCols: 2,
			// 	editable: true,
			// 	layout: "ResponsiveGridLayout",
			// 	labelSpanL: 3,
			// 	labelSpanM: 3,
			// 	emptySpanL: 4,
			// 	emptySpanM: 4,
			// 	columnsL: 1,
			// 	columnsM: 1,
			// 	class: "editableForm",
			// 	content: [
			// 		new sap.m.Label({
			// 			text: "Name"
			// 		}),
			// 		new sap.m.Input({
			// 			value: "{name}"
			// 		}),
			// 		new sap.m.Label({
			// 			text: "Roll No."
			// 		}), new sap.m.Input({
			// 			value: "{roll}"
			// 		}), new sap.m.Label({
			// 			text: "Email-id/Mobile No"
			// 		}), new sap.m.Input({
			// 			value: "{email}"
			// 		}), new sap.m.Input({
			// 			value: "{mobile}",
			// 			layoutData: [new sap.ui.layout.GridData({
			// 				span: "L2 M2 S4"
			// 			})]
			// 		}), new sap.m.Label({
			// 			text: "Course"
			// 		}), new sap.m.Select({
			// 			items: [new sap.ui.core.Item({
			// 				text: "{course}"
			// 			})]
			// 		})
			// 	]
			// });

			var page_ID = this.getView().byId("SimpleFormId");
			//page_ID.addContent(simpleform);
			page_ID.addContent(button);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Tutorial.DynamicForm.view.SimpleForm
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Tutorial.DynamicForm.view.SimpleForm
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Tutorial.DynamicForm.view.SimpleForm
		 */
		//	onExit: function() {
		//
		//	}

	});

});