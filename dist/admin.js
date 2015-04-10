System.register(["./api/member-api", "./api/group-api", "./api/prayer-request-api"], function (_export) {
	var MemberApi, GroupApi, PrayerRequestApi, _createClass, _classCallCheck, Admin;

	return {
		setters: [function (_apiMemberApi) {
			MemberApi = _apiMemberApi.MemberApi;
		}, function (_apiGroupApi) {
			GroupApi = _apiGroupApi.GroupApi;
		}, function (_apiPrayerRequestApi) {
			PrayerRequestApi = _apiPrayerRequestApi.PrayerRequestApi;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			Admin = _export("Admin", (function () {
				function Admin(memberApi, groupApi, prayerRequestApi) {
					_classCallCheck(this, Admin);

					this.heading = "Admin";
					this.memberApi = memberApi;
					this.groupApi = groupApi;
					this.prayerRequestApi = prayerRequestApi;
					this.testResults = [];
				}

				_createClass(Admin, {
					runTests: {
						value: function runTests() {
							this.clearTestResults();
							this.runMemberTest(this.memberApi).then((function () {
								this.addTestResult("Member API", "Passed");
							}).bind(this))["catch"]((function (err) {
								this.addTestResult("Member API", "Failed");
							}).bind(this));
							var groupTestResult = this.runGroupTest(this.groupApi).then((function () {
								this.addTestResult("Group API", "Passed");
							}).bind(this))["catch"]((function (err) {
								this.addTestResult("Group API", "Failed");
							}).bind(this));
							var prayerRequestTestResult = this.runPrayerRequestTest(this.prayerRequestApi).then((function () {
								this.addTestResult("Prayer Request API", "Passed");
							}).bind(this))["catch"]((function (err) {
								this.addTestResult("Prayer Request API", "Failed");
							}).bind(this));
						}
					},
					clearTestResults: {
						value: function clearTestResults() {
							this.testResults = [];
						}
					},
					addTestResult: {
						value: function addTestResult(testName, testResult) {
							this.testResults.push({ test: testName, result: testResult });
						}
					},
					runMemberTest: {
						value: function runMemberTest(memberApi) {
							return new Promise(function (resolve, reject) {
								memberApi.ping().then(function (res) {
									resolve();
								}, function (err) {
									reject(err);
								});
							});
						}
					},
					runGroupTest: {
						value: function runGroupTest(groupApi) {
							return new Promise(function (resolve, reject) {
								groupApi.ping().then(function (res) {
									resolve();
								}, function (err) {
									reject(err);
								});
							});
						}
					},
					runPrayerRequestTest: {
						value: function runPrayerRequestTest(prayerRequestApi) {
							return new Promise(function (resolve, reject) {
								prayerRequestApi.ping().then(function (res) {
									resolve();
								}, function (err) {
									reject(err);
								});
							});
						}
					}
				}, {
					inject: {
						value: function inject() {
							return [MemberApi, GroupApi, PrayerRequestApi];
						}
					}
				});

				return Admin;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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