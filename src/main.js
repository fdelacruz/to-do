require(['task_manager', 'smokesignals'], function (taskManager, smokesignals) {
	'use strict';

	var aTask = taskManager.createTask('My first task!');
	console.log(smokesignals);
});
define();
