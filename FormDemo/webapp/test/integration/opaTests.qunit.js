/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"i2/FormDemo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});