/*global QUnit*/

sap.ui.define([
	"Tutorial/DynamicForm/controller/Container.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Container Controller");

	QUnit.test("I should test the Container controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});