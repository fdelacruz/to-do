define(['list_manager', 'knockout', 'ui_strings'], function (listManager, ko, uiStrings) {
	'use strict';

	function ListViewModel() {
		this.placeholderText = uiStrings.createTaskPlaceholderText;
		this.addText = uiStrings.addText;
		this. saveText = uiStrings.saveText;

		this.listName = ko.observable('');
		this.enableAdd = ko.observable(false);
		this.taskName = ko.observable('');

		this.isButtonEnabled = ko.computed(function () {
			if (this.taskName() !== '') {
				this.enableAdd(true);
			} else {
				this.enableAdd(false);
			}
		}, this);
	}

	return ListViewModel;
});

