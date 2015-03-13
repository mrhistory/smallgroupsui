System.register(["aurelia-http-client"], function (_export) {
	var HttpClient, _createClass, _classCallCheck, url, Flickr;

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json";
			Flickr = _export("Flickr", (function () {
				function Flickr(http) {
					_classCallCheck(this, Flickr);

					this.heading = "Flickr";
					this.images = [];
					this.http = http;
				}

				_createClass(Flickr, {
					activate: {
						value: function activate() {
							var _this = this;

							return this.http.jsonp(url).then(function (response) {
								_this.images = response.content.items;
							});
						}
					},
					canDeactivate: {
						value: function canDeactivate() {
							return confirm("Are you sure you want to leave?");
						}
					}
				}, {
					inject: {
						value: function inject() {
							return [HttpClient];
						}
					}
				});

				return Flickr;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQVEsVUFBVSxpQ0FFZCxHQUFHLEVBRU0sTUFBTTs7OztBQUpYLGFBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBRWQsTUFBRyxHQUFHLDZGQUE2RjtBQUUxRixTQUFNO0FBRVAsYUFGQyxNQUFNLENBRU4sSUFBSSxFQUFFOzJCQUZOLE1BQU07O0FBR2pCLFNBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLFNBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOztpQkFOVyxNQUFNO0FBUWxCLGFBQVE7YUFBQSxvQkFBRzs7O0FBQ1YsY0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDNUMsY0FBSyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDckMsQ0FBQyxDQUFDO09BQ0g7O0FBRUQsa0JBQWE7YUFBQSx5QkFBRztBQUNmLGNBQU8sT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7T0FDbEQ7OztBQWZNLFdBQU07YUFBQSxrQkFBRztBQUFFLGNBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUFFOzs7O1dBRDVCLE1BQU0iLCJmaWxlIjoiZmxpY2tyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=