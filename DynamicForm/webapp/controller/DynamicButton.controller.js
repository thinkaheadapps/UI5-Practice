sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Tutorial.DynamicForm.controller.DynamicButton", {

		/**
		https://sapui5.hana.ondemand.com/#/api/sap.m.ButtonType%23overview
		
		1. 	Retrieve Container:

			var page_ID = this.getView().byId("dynamicButtonForm");
			This line retrieves a control (container) from the view by its ID. The ID in this case is "dynamicButtonForm". This container is where the buttons will be added.
		2. Create Button:

			var buttonDefault = new sap.m.Button({ ... });
			This line creates a new instance of a button with certain properties (e.g., text, type, event handler).
		3. Add Button to Container:

			page_ID.addContent(buttonDefault);
			This line adds the buttonDefault instance to the content aggregation of the container retrieved in step 1. In other words, it makes the buttonDefault button a child of the container with ID "dynamicButtonForm".
		
		Example:-
		Assume you have an XML view with a VBox container that has the ID dynamicButtonForm:
		 
		<mvc:View
			 controllerName="Tutorial.DynamicForm.controller.DynamicButton"
			 xmlns:mvc="sap.ui.core.mvc"
			 xmlns="sap.m">
			 <VBox id="dynamicButtonForm">
    			  <!-- Buttons will be added dynamically here -->
    		</VBox>
		</mvc:View> 
		
		
		In your controller, you create a button and add it to this VBox:
		
		sap.ui.define([
    	"sap/ui/core/mvc/Controller",
		"sap/m/Button",
    	"sap/m/MessageToast"
		], function (Controller, Button, MessageToast) {
		 "use strict";

    		return Controller.extend("Tutorial.DynamicForm.controller.DynamicButton", {

			        onInit: function () {
			            // Create a Default Button
			            var buttonDefault = new Button({
			                text: "Default",
			                type: "Default",
			                press: this.onDefaultPress.bind(this)
			            });
			
			            // Retrieve the VBox container by its ID
			            var page_ID = this.getView().byId("dynamicButtonForm");
			
			            // Add the button to the VBox
			            page_ID.addContent(buttonDefault);
			        },
			
			        onDefaultPress: function () {
			            MessageToast.show("Default Button Pressed!");
			        }
			
			    });
			
			});
			
			Summary
			this.getView().byId("dynamicButtonForm"): Retrieves the container (e.g., VBox) from the view by its ID.
			new sap.m.Button({ ... }): Creates a new button instance with specified properties.
			page_ID.addContent(buttonDefault);: Adds the created button to the container, making it a child of the VBox.
			This way, you dynamically add UI elements to your view at runtime based on your application's logic.
		
		*/
		onInit: function () {
			// Default Button
			var buttonDefault = new sap.m.Button({
				text: "Default",
				type: "Default",
				press: this.onDefaultPress.bind(this)
			});

			// Accept Button
			var buttonAccept = new sap.m.Button({
				text: "Accept",
				type: "Accept",
				press: this.onAcceptPress.bind(this)
			});

			// Attention Button
			var attentionButton = new sap.m.Button({
				text: "Attention",
				type: "Attention",
				press: this.onAttentionPressed.bind(this)
			});

			// Back Button
			var backButton = new sap.m.Button({
				text: "Back",
				type: "Back",
				press: this.onBackButtonPressed.bind(this)
			});

			// Up Button
			var upButton = new sap.m.Button({
				text: "Up",
				type: "Up",
				press: this.onUpButtonPressed.bind(this)
			});

			// Transparent Button
			var transparentButton = new sap.m.Button({
				text: "Transparent",
				type: "Transparent",
				press: this.onTransparentBtnPressed.bind(this)
			});

			// Unstyled Button
			var unstyledButton = new sap.m.Button({
				text: "Unstyled",
				type: "Unstyled",
				press: this.onUnstyledBtnPressed.bind(this)
			});

			// Reject Button
			var rejectButton = new sap.m.Button({
				text: "Reject",
				type: "Reject",
				press: this.onRejectBtnPressed.bind(this)
			});

			// Neutral Button
			var neutralButton = new sap.m.Button({
				text: "Neutral",
				type: "Neutral",
				press: this.onNeutralBtnPressed.bind(this)
			});

			// Negative Button
			var negativeButton = new sap.m.Button({
				text: "Negative",
				type: "Negative",
				press: this.onNegativeButtonPressed.bind(this)
			});

			// Ghost Button
			var ghostButton = new sap.m.Button({
				text: "Ghost",
				type: "Ghost",
				press: this.onGhostBtnPressed.bind(this)
			});
			/*
			The line page_ID.addContent(buttonDefault); 
			is adding the buttonDefault button control to a container within the view.
			*/
			var page_ID = this.getView().byId("dynamicButtonForm");
			page_ID.addContent(buttonDefault);
			page_ID.addContent(buttonAccept);
			page_ID.addContent(attentionButton);
			page_ID.addContent(backButton);
			page_ID.addContent(upButton);
			page_ID.addContent(transparentButton);
			page_ID.addContent(unstyledButton);
			page_ID.addContent(rejectButton);
			page_ID.addContent(neutralButton);
			page_ID.addContent(negativeButton);
			page_ID.addContent(ghostButton);
		},
		onDefaultPress: function () {
			sap.m.MessageToast.show("Default Button Pressed!");
		},

		onAcceptPress: function () {
			sap.m.MessageToast.show("Accept Button Pressed!");
		},

		onAttentionPressed: function () {
			sap.m.MessageToast.show("Attention Button Pressed!");
		},

		onBackButtonPressed: function () {
			sap.m.MessageToast.show("Back Button Pressed!");
		},

		onUpButtonPressed: function () {
			sap.m.MessageToast.show("Up Button Pressed!");
		},

		onTransparentBtnPressed: function () {
			sap.m.MessageToast.show("Transparent Button Pressed!");
		},

		onUnstyledBtnPressed: function () {
			sap.m.MessageToast.show("Unstyled Button Pressed!");
		},

		onNegativeButtonPressed: function () {
			sap.m.MessageToast.show("Negative Button Pressed!");
		},

		onRejectBtnPressed: function () {
			sap.m.MessageToast.show("Reject Button Pressed!");
		},

		onNeutralBtnPressed: function () {
			sap.m.MessageToast.show("Neutral Button Pressed!");
		},

		onGhostBtnPressed: function () {
			sap.m.MessageToast.show("Ghost Button Pressed!");
		}

	});

});