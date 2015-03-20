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
					login: {
						value: function login(email, password) {
							var params = { email: email, password: password };
							return this.http.post("login", params);
						}
					},
					logout: {
						value: function logout(access_token) {
							return this.http.post("logout?access_token=" + access_token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tZW1iZXItYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7S0FBUSxVQUFVLGlDQUVMLFNBQVM7Ozs7QUFGZCxhQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVMLFlBQVM7QUFFVixhQUZDLFNBQVMsQ0FFVCxJQUFJLEVBQUU7OzsyQkFGTixTQUFTOztBQUdwQixTQUFJLENBQUMsT0FBTyxHQUFHLG9DQUFvQyxDQUFDO0FBQ3BELFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUMvQixPQUFDLENBQUMsV0FBVyxDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7QUFDNUIsT0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztNQUMvRCxDQUFDLENBQUM7S0FDSDs7aUJBUlcsU0FBUztBQVVyQixVQUFLO2FBQUEsZUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3RCLFdBQUksTUFBTSxHQUFHLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFDaEQsY0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7T0FDdkM7O0FBRUQsV0FBTTthQUFBLGdCQUFDLFlBQVksRUFBRTtBQUNwQixjQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBd0IsWUFBWSxDQUFHLENBQUM7T0FDN0Q7OztBQWhCTSxXQUFNO2FBQUEsa0JBQUc7QUFBRSxjQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7T0FBRTs7OztXQUQ1QixTQUFTIiwiZmlsZSI6ImFwaS9tZW1iZXItYXBpLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=