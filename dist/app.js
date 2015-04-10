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
					var _this = this;

					_classCallCheck(this, App);

					this.router = router;
					this.router.configure(function (config) {
						config.title = "SmallGroups";
						config.map([{ route: ["admin"], moduleId: "admin", nav: _this.loggedIn, title: "Admin" }, { route: ["", "signup"], moduleId: "sign-up", nav: !_this.loggedIn, title: "Sign Up" }]);
					});
					this.activeUser = undefined; // Global as the rest of the app needs to access this.
					this.loggedIn = false; // Global as the rest of the app needs to access this.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQVEsTUFBTSxpQ0FFRCxHQUFHOzs7O0FBRlIsU0FBTSxrQkFBTixNQUFNOzs7Ozs7Ozs7QUFFRCxNQUFHO0FBRUosYUFGQyxHQUFHLENBRUgsTUFBTSxFQUFFOzs7MkJBRlIsR0FBRzs7QUFHZCxTQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixTQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUMvQixZQUFNLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztBQUM3QixZQUFNLENBQUMsR0FBRyxDQUFDLENBQ1YsRUFBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFLLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLEVBQ3pFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBSyxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxDQUNuRixDQUFDLENBQUM7TUFDSCxDQUFDLENBQUM7QUFDSCxTQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUM1QixTQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7aUJBYlcsR0FBRztBQUNSLFdBQU07YUFBQSxrQkFBRztBQUFFLGNBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUFFOzs7O1dBRHhCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=