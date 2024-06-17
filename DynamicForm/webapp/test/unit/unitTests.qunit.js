/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Tutorial/DynamicForm/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});