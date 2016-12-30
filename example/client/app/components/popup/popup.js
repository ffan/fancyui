import angular from 'angular';
import popupComponent from './popup.component';
import popup from './popup.controller';

let popDialogModule = angular.module('popDialog', [])
	.controller('PopupController', popup)
	.component('popup', popupComponent);

export default popDialogModule;

