/* eslint no-console: ["error", { allow: ["groupCollapsed", "groupEnd", "log"] }] */
export const consoleMessages = store => next => action => {
	console.groupCollapsed(`dispatching action => ${action.type}`);
	console.log(store.getState());
	const result = next(action);

	console.log(`

		state: ${store.getState()}
		action: ${action}
		
	`);

	console.groupEnd();

	return result;
};
