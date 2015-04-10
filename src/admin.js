import {MemberApi} from './api/member-api';
import {GroupApi} from './api/group-api';
import {PrayerRequestApi} from './api/prayer-request-api';

export class Admin {
	static inject() { return [MemberApi, GroupApi, PrayerRequestApi]; }
	constructor(memberApi, groupApi, prayerRequestApi) {
		this.heading = "Admin";
		this.memberApi = memberApi;
		this.groupApi = groupApi;
		this.prayerRequestApi = prayerRequestApi;
		this.testResults = [];
	}

	runTests() {
		this.clearTestResults();
		this.runMemberTest(this.memberApi).then(function() {
			this.addTestResult('Member API', 'Passed');
		}.bind(this)).catch(function(err) {
			this.addTestResult('Member API', 'Failed');
		}.bind(this));
		var groupTestResult = this.runGroupTest(this.groupApi).then(function() {
			this.addTestResult('Group API', 'Passed');
		}.bind(this)).catch(function(err) {
			this.addTestResult('Group API', 'Failed');
		}.bind(this));
		var prayerRequestTestResult = this.runPrayerRequestTest(this.prayerRequestApi).then(function() {
			this.addTestResult('Prayer Request API', 'Passed');
		}.bind(this)).catch(function(err) {
			this.addTestResult('Prayer Request API', 'Failed');
		}.bind(this));
	}

	clearTestResults() {
		this.testResults = [];
	}

	addTestResult(testName, testResult) {
		this.testResults.push({test: testName, result: testResult});
	}

	runMemberTest(memberApi) {
		return new Promise(function(resolve, reject) {
			memberApi.ping().then(function(res) { resolve(); }, function(err) { reject(err); });
		});
	}

	runGroupTest(groupApi) {
		return new Promise(function(resolve, reject) {
			groupApi.ping().then(function(res) { resolve(); }, function(err) { reject(err); });
		});
	}

	runPrayerRequestTest(prayerRequestApi) {
		return new Promise(function(resolve, reject) {
			prayerRequestApi.ping().then(function(res) { resolve(); }, function(err) { reject(err); });
		});
	}
}
