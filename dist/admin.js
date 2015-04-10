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
							var memberTestResult = this.runMemberTest(this.memberApi).then(function () {
								return true;
							})["catch"](function (err) {
								return false;
							});
							var groupTestResult = this.runGroupTest(this.groupApi).then(function () {
								return true;
							})["catch"](function (err) {
								return false;
							});
							var prayerRequestTestResult = this.runPrayerRequestTest(this.prayerRequestApi).then(function () {
								return true;
							})["catch"](function (err) {
								return false;
							});
							this.testResults.push({ test: "Member API", result: memberTestResult ? "Passed" : "Failed" });
							this.testResults.push({ test: "Group API", result: groupTestResult ? "Passed" : "Failed" });
							this.testResults.push({ test: "Prayer Request API", result: prayerRequestTestResult ? "Passed" : "Failed" });
						}
					},
					clearTestResults: {
						value: function clearTestResults() {
							this.testResults = [];
						}
					},
					runMemberTest: {
						value: function runMemberTest(memberApi) {
							return new Promise(function (resolve, reject) {
								memberApi.getMembers().then(function (res) {
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
								groupApi.getGroups().then(function (res) {
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
								prayerRequestApi.getPrayerRequests().then(function (res) {
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