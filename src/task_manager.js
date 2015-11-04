define(['task', 'exports'], function (Task, exports) {
	'use strict';

	function createTask(name) {
		return new Task(name);
	}

	// return {
	// 	createTask: createTask
	// };
	
	// Simplified CommonJS Wrapping
	exports.createTask = createTask;
});
