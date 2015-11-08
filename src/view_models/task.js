define(['knockout'], function (ko) {
	'use strict';

	function TaskViewModel() {
		this.name = ko.observable('');
		this.completed = ko.observable(false);

		this.deleteTask = function () {
			var task = document.querySelector('#' + this.id);
			task.parentNode.parentNode.removeChild(task.parentNode);
			this.emit('taskremoved');
		};
		this.deleteTaskHandler = this.deleteTask.bind(this);
	}

	return TaskViewModel;
});
