System.register(["aurelia-router"], function (_export) {
	var Router, _createClass, _classCallCheck, App;

	return {
		setters: [function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			App = _export("App", (function () {
				function App(router) {
					_classCallCheck(this, App);

					this.router = router;
					this.router.configure(function (config) {
						config.title = "Aurelia";
						config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
					});
				}

				_createClass(App, null, {
					inject: {
						value: function inject() {
							return [Router];
						}
					}
				});

				return App;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQVEsTUFBTSxpQ0FFRCxHQUFHOzs7O0FBRlIsU0FBTSxrQkFBTixNQUFNOzs7Ozs7Ozs7QUFFRCxNQUFHO0FBRUosYUFGQyxHQUFHLENBRUgsTUFBTSxFQUFFOzJCQUZSLEdBQUc7O0FBR2QsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDL0IsWUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsWUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNWLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLEVBQzFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsRUFDaEQsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFDLENBQ25GLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztLQUNIOztpQkFaVyxHQUFHO0FBQ1IsV0FBTTthQUFBLGtCQUFHO0FBQUUsY0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQUU7Ozs7V0FEeEIsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==