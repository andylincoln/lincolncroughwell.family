// main.js
import EventBrite from "./eventbrite";

const event_module = new EventBrite("DYBWVZY6AGL3HOH6W5QR");
(function() {
	event_module.get_owned_events().then(res => {
		console.log(res);
	});

	event_module.get_my_profile().then(res => {
		console.log(res);
	});
})();
