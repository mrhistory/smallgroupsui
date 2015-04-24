System.register(["./api/member-api", "aurelia-router"], function (_export) {
	var MemberApi, Router, _createClass, _classCallCheck, Login;

	return {
		setters: [function (_apiMemberApi) {
			MemberApi = _apiMemberApi.MemberApi;
		}, function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			Login = _export("Login", (function () {
				function Login(memberApi, router) {
					_classCallCheck(this, Login);

					this.heading = "Login";
					this.memberApi = memberApi;
					this.theRouter = router;
					this.email = "";
					this.password = "";
					this.errors = [];
					this.successMessage = "";
				}

				_createClass(Login, {
					login: {
						value: function login() {
							this.clearErrors();
							this.memberApi.login(this.email, this.password).then((function (response) {
								this.successMessage = "Logged In!";
								window.loggedIn = true;
								this.theRouter.navigate("admin"); // This should set the active user to the returned user, and set logged in to true. Should redirect to whatever page was requested.
							}).bind(this))["catch"]((function (err) {
								if (err.content) {
									if (err.content.error.details != null) {
										for (var key in err.content.error.details.messages) {
											this.errors.push(err.content.error.details.messages[key]);
										}
									} else {
										this.errors.push(err.content.error.message);
									}
								} else {
									console.log(err);
								}
							}).bind(this));
						}
					},
					clearAll: {
						value: function clearAll() {
							this.email = "";
							this.password = "";
							this.clearErrors();
						}
					},
					clearErrors: {
						value: function clearErrors() {
							this.errors = [];
							this.successMessage = "";
						}
					}
				}, {
					inject: {
						value: function inject() {
							return [MemberApi, Router];
						}
					}
				});

				return Login;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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