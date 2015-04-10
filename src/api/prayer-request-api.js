import {HttpClient} from 'aurelia-http-client';

export class PrayerRequestApi {
	static inject() { return [HttpClient]; }
	constructor(http) {
		this.baseUrl = "http://localhost:3000/api/PrayerRequests/"; //REPLACE WITH A CONFIG ENTRY!
		this.http = http.configure(x => {
			x.withBaseUrl(this.baseUrl);
			x.withHeader('Content-Type', 'application/json;charset=UTF-8');
		});
	}

	ping() {
		return this.http.get('?filter[limit]=1');
	}

	getPrayerRequests() {
		return this.http.get();
	}
}
