System.register(["aurelia-http-client"], function (_export) {
	var HttpClient, _createClass, _classCallCheck, MemberApi;

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			MemberApi = _export("MemberApi", (function () {
				function MemberApi(http) {
					var _this = this;

					_classCallCheck(this, MemberApi);

					this.baseUrl = "http://localhost:3000/api/Members/"; //REPLACE WITH A CONFIG ENTRY!
					this.http = http.configure(function (x) {
						x.withBaseUrl(_this.baseUrl);
						x.withHeader("Content-Type", "application/json;charset=UTF-8");
					});
				}

				_createClass(MemberApi, {
					getMembers: {
						value: function getMembers() {
							return this.http.get();
						}
					},
					getMember: {
						value: function getMember(memberId) {
							return this.http.get("" + memberId);
						}
					},
					login: {
						value: function login(email, password) {
							var params = { email: email, password: password };
							return this.http.post("login", params);
						}
					},
					logout: {
						value: function logout(accessToken) {
							return this.http.post("logout?access_token=" + accessToken);
						}
					},
					getGroups: {
						value: function getGroups(memberId) {
							return this.http.get("" + memberId + "/groups");
						}
					}
				}, {
					inject: {
						value: function inject() {
							return [HttpClient];
						}
					}
				});

				return MemberApi;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tZW1iZXItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7S0FBUSxVQUFVLGlDQUVMLFNBQVM7Ozs7QUFGZCxhQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVMLFlBQVM7QUFFVixhQUZDLFNBQVMsQ0FFVCxJQUFJLEVBQUU7OzsyQkFGTixTQUFTOztBQUdwQixTQUFJLENBQUMsT0FBTyxHQUFHLG9DQUFvQyxDQUFDO0FBQ3BELFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUMvQixPQUFDLENBQUMsV0FBVyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7QUFDNUIsT0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztNQUMvRCxDQUFDLENBQUM7S0FDSDs7aUJBUlcsU0FBUztBQVVyQixlQUFVO2FBQUEsc0JBQUc7QUFDWixjQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7T0FDdkI7O0FBRUQsY0FBUzthQUFBLG1CQUFDLFFBQVEsRUFBRTtBQUNuQixjQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFJLFFBQVEsQ0FBRyxDQUFDO09BQ3BDOztBQUVELFVBQUs7YUFBQSxlQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDdEIsV0FBSSxNQUFNLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQztBQUNoRCxjQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztPQUN2Qzs7QUFFRCxXQUFNO2FBQUEsZ0JBQUMsV0FBVyxFQUFFO0FBQ25CLGNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUF3QixXQUFXLENBQUcsQ0FBQztPQUM1RDs7QUFFRCxjQUFTO2FBQUEsbUJBQUMsUUFBUSxFQUFFO0FBQ25CLGNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQUksUUFBUSxhQUFVLENBQUM7T0FDM0M7OztBQTVCTSxXQUFNO2FBQUEsa0JBQUc7QUFBRSxjQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7T0FBRTs7OztXQUQ1QixTQUFTIiwiZmlsZSI6ImFwaS9tZW1iZXItYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=