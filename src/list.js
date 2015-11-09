define(['list_manager', 'require'], function (listManager, require) {
	'use strict';

	require(['list_manager'], function (listManager) {
		console.log(listManager.createList);
	});

	function List(listId) {
		this.tasks = [];
		this.id = listId;
	}
	List.prototype = {};
	List.prototype.constructor = List;

	return List;
});
