require(['task_manager'], function (taskManager) {
	'use strict';

	var aTask = taskManager.createTask('My first task!');
	console.log(aTask);
});
