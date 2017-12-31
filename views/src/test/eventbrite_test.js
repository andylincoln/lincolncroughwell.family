/* global process */
process.env.NODE_ENV = 'test';

import { should } from "chai";
import { describe, it } from "mocha";
import EventBrite from "../eventbrite";

const event_module = new EventBrite("DYBWVZY6AGL3HOH6W5QR");

describe('EventBrite module', function() {
	it('should get our profile', function(done) {
		event_module.get_my_profile().then((res) => {
			// TODO finish asserting that the info is there
		});
	});
});

