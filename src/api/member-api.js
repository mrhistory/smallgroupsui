import {HttpClient} from 'aurelia-http-client';

export class MemberApi {
	static inject() { return [HttpClient]; }
	constructor(http) {
		this.baseUrl = "http://localhost:3000/api/Members/"; //REPLACE WITH A CONFIG ENTRY!
		this.http = http.configure(x => {
			x.withBaseUrl(this.baseUrl);
			x.withHeader('Content-Type', 'application/json;charset=UTF-8');
		});
	}

	login(email, password) {
		var params = {email: email, password: password};
		return this.http.post('login', params);
	}

	logout(access_token) {
		return this.http.post(`logout?access_token=${access_token}`);
	}
}
