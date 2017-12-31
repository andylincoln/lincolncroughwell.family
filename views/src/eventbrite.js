// eventbrite.js
import axios from "axios";

export default class EventBrite {

	constructor(api_token) {
		this.API_TOKEN = `/?token=${api_token}`;
		this.API_ENDPOINT = "https://www.eventbriteapi.com/v3";
		this.API_USERS = "/users";
		this.API_MY_PROFILE = `${this.API_USERS}/me`;
		this.API_OWNED_EVENTS = `${this.API_MY_PROFILE}/owned_events`;
	}

	get_owned_events() {
		return axios.get(`${this.API_ENDPOINT}${this.API_OWNED_EVENTS}${this.API_TOKEN}`);
	}

	get_my_profile() {
		return axios.get(`${this.API_ENDPOINT}${this.API_MY_PROFILE}${this.API_TOKEN}`);
	}

}