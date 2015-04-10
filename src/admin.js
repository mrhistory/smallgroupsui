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
		var memberTestResult = this.runMemberTest(this.memberApi).then(function() {
			return true;
		}).catch(function(err) {
			return false;
		});
		var groupTestResult = this.runGroupTest(this.groupApi).then(function() {
			return true;
		}).catch(function(err) {
			return false;
		});
		var prayerRequestTestResult = this.runPrayerRequestTest(this.prayerRequestApi).then(function() {
			return true;
		}).catch(function(err) {
			return false;
		});
		this.testResults.push({test: 'Member API', result: memberTestResult ? 'Passed' : 'Failed'});
		this.testResults.push({test: 'Group API', result: groupTestResult ? 'Passed' : 'Failed'});
		this.testResults.push({test: 'Prayer Request API', result: prayerRequestTestResult ? 'Passed' : 'Failed'});
	}

	clearTestResults() {
		this.testResults = [];
	}

	runMemberTest(memberApi) {
		return new Promise(function(resolve, reject) {
			memberApi.getMembers().then(
				function(res) {	resolve(); },
				function(err) {	reject(err); }
			);
		});
	}

	runGroupTest(groupApi) {
		return new Promise(function(resolve, reject) {
			groupApi.getGroups().then(
				function(res) {	resolve(); },
				function(err) {	reject(err); }
			);
		});
	}

	runPrayerRequestTest(prayerRequestApi) {
		return new Promise(function(resolve, reject) {
			prayerRequestApi.getPrayerRequests().then(
				function(res) {	resolve(); },
				function(err) {	reject(err); }
			);
		});
	}
}
