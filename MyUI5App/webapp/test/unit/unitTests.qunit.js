/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Demo1/MyUI5App/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});