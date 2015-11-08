define(['list_manager', 'knockout', 'i18n!nls/ui_strings', 'task_manager', 'renderer', 'view_models/task', 'text!views/task.html', 'smokesignals'], function (listManager, ko, uiStrings, taskManager, renderer, TaskViewModel, taskView, smokesignals) {
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

		this.addTask = function () {
			var task = taskManager.createTask(this.taskName()),
					container  = document.querySelector('.todo_app ul'),
					taskViewModel = new TaskViewModel();

			this.list.tasks.push(task);

			taskViewModel.id = 'task' + (this.list.tasks.length - 1);
			taskViewModel.name(task.name);
			taskViewModel.completed(false);

			renderer.render(container, taskView, taskViewModel, true);

			smokesignals.convert(taskViewModel);
			taskViewModel.on('taskremoved', this.removeTaskHandler);
			
			this.taskName('');

			return taskViewModel;
		};
		this.addTaskHandler = this.addTask.bind(this);

		this.removeTask = function (index) {
			this.list.tasks.splice(index, 1);
		};
		this.removeTaskHandler = this.removeTask.bind(this);
	}

	return ListViewModel;
});

