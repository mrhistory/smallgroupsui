import {MemberApi} from './api/member-api';

export class Admin {
	static inject() { return [MemberApi]; }
	constructor(memberApi) {
		this.heading = "Admin";
		this.memberApi = memberApi;
		this.testResults = [];
		this.accessToken = '';
	}

	runTests() {
		this.clearTestResults();
		this.runLoginTest(this).then(function(_this) {
			_this.runLogoutTest(_this);
		});
	}

	clearTestResults() {
		this.testResults = [];
	}

	runLoginTest(_this) {
		return new Promise(function(resolve, reject) {
			_this.memberApi.login('mrhistory@gmail.com', 'pw123').then(function(res) {
				_this.accessToken = res.content.id;
				_this.testResults.push({test: 'Login', result: 'Passed'});
				resolve(_this);
			}, function(err) {
				_this.testResults.push({test: 'Login', result: 'Failed'});
				reject(err);
			});
		});
	}

	runLogoutTest(_this) {
		return new Promise(function(resolve, reject) {
			_this.memberApi.logout(_this.accessToken).then(function(res) {
				_this.testResults.push({test: 'Logout', result: 'Passed'});
				resolve(_this);
			}, function(err) {
				_this.testResults.push({test: 'Logout', result: 'Failed'});
				reject(err);
			});
		});
	}
}
