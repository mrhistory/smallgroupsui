System.register(["./api/member-api"], function (_export) {
	var MemberApi, _createClass, _classCallCheck, Admin;

	return {
		setters: [function (_apiMemberApi) {
			MemberApi = _apiMemberApi.MemberApi;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			Admin = _export("Admin", (function () {
				function Admin(memberApi) {
					_classCallCheck(this, Admin);

					this.heading = "Admin";
					this.memberApi = memberApi;
					this.testResults = [];
					this.accessToken = "";
				}

				_createClass(Admin, {
					runTests: {
						value: function runTests() {
							this.clearTestResults();
							this.runLoginTest(this).then(function (_this) {
								_this.runLogoutTest(_this);
							});
						}
					},
					clearTestResults: {
						value: function clearTestResults() {
							this.testResults = [];
						}
					},
					runLoginTest: {
						value: function runLoginTest(_this) {
							return new Promise(function (resolve, reject) {
								_this.memberApi.login("mrhistory@gmail.com", "pw123").then(function (res) {
									_this.accessToken = res.content.id;
									_this.testResults.push({ test: "Login", result: "Passed" });
									resolve(_this);
								}, function (err) {
									_this.testResults.push({ test: "Login", result: "Failed" });
									reject(err);
								});
							});
						}
					},
					runLogoutTest: {
						value: function runLogoutTest(_this) {
							return new Promise(function (resolve, reject) {
								_this.memberApi.logout(_this.accessToken).then(function (res) {
									_this.testResults.push({ test: "Logout", result: "Passed" });
									resolve(_this);
								}, function (err) {
									_this.testResults.push({ test: "Logout", result: "Failed" });
									reject(err);
								});
							});
						}
					}
				}, {
					inject: {
						value: function inject() {
							return [MemberApi];
						}
					}
				});

				return Admin;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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