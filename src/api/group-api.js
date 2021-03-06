import {HttpClient} from 'aurelia-http-client';

export class GroupApi {
    static inject() { return [HttpClient]; }
    constructor(http) {
        this.baseUrl = "http://localhost:3000/api/Groups"; // REPLACE WITH A CONFIG ENTRY!
        this.http = http.configure(x => {
            x.withBaseUrl(this.baseUrl);
            x.withHeader('Content-Type', 'application/json;charset=UTF-8');
        });
    }

    ping() {
		return this.http.get('?filter[limit]=1');
	}

    getGroups() {
        return this.http.get();
    }
}
