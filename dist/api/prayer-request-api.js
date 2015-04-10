System.register(["aurelia-http-client"], function (_export) {
	var HttpClient, _createClass, _classCallCheck, PrayerRequestApi;

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			PrayerRequestApi = _export("PrayerRequestApi", (function () {
				function PrayerRequestApi(http) {
					var _this = this;

					_classCallCheck(this, PrayerRequestApi);

					this.baseUrl = "http://localhost:3000/api/PrayerRequests/"; //REPLACE WITH A CONFIG ENTRY!
					this.http = http.configure(function (x) {
						x.withBaseUrl(_this.baseUrl);
						x.withHeader("Content-Type", "application/json;charset=UTF-8");
					});
				}

				_createClass(PrayerRequestApi, {
					ping: {
						value: function ping() {
							return this.http.get("?filter[limit]=1");
						}
					},
					getPrayerRequests: {
						value: function getPrayerRequests() {
							return this.http.get();
						}
					}
				}, {
					inject: {
						value: function inject() {
							return [HttpClient];
						}
					}
				});

				return PrayerRequestApi;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9wcmF5ZXItcmVxdWVzdC1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtLQUFRLFVBQVUsaUNBRUwsZ0JBQWdCOzs7O0FBRnJCLGFBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBRUwsbUJBQWdCO0FBRWpCLGFBRkMsZ0JBQWdCLENBRWhCLElBQUksRUFBRTs7OzJCQUZOLGdCQUFnQjs7QUFHM0IsU0FBSSxDQUFDLE9BQU8sR0FBRywyQ0FBMkMsQ0FBQztBQUMzRCxTQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDL0IsT0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLE9BQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7TUFDL0QsQ0FBQyxDQUFDO0tBQ0g7O2lCQVJXLGdCQUFnQjtBQVU1QixTQUFJO2FBQUEsZ0JBQUc7QUFDTixjQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7T0FDekM7O0FBRUQsc0JBQWlCO2FBQUEsNkJBQUc7QUFDbkIsY0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO09BQ3ZCOzs7QUFmTSxXQUFNO2FBQUEsa0JBQUc7QUFBRSxjQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7T0FBRTs7OztXQUQ1QixnQkFBZ0IiLCJmaWxlIjoiYXBpL3ByYXllci1yZXF1ZXN0LWFwaS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9