System.register(["aurelia-router"], function (_export) {
	var Router, _createClass, _classCallCheck, App, AuthorizeStep;

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
						config.title = "SmallGroups";
						config.addPipelineStep("authorize", AuthorizeStep);
						config.map([{ route: ["admin"], moduleId: "admin", nav: true, title: "Admin", auth: true }, { route: ["signup"], moduleId: "sign-up", nav: true, title: "Sign Up" }, { route: ["", "login"], moduleId: "login", nav: true, title: "Login" }]);
					});
					window.activeUser = undefined; // Global as the rest of the app needs to access this.
					window.loggedIn = false; // Global as the rest of the app needs to access this.
					window.access_token = ""; // Global as the rest of the app needs to access this.
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

			AuthorizeStep = (function () {
				function AuthorizeStep() {
					_classCallCheck(this, AuthorizeStep);
				}

				_createClass(AuthorizeStep, {
					run: {
						value: function run(routingContext, next) {
							if (routingContext.nextInstructions.some(function (i) {
								return i.config.auth;
							})) {
								if (!window.loggedIn) {
									return next.cancel(new Redirect("login"));
								}
							}
							return next();
						}
					}
				});

				return AuthorizeStep;
			})();
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQVEsTUFBTSxpQ0FFRCxHQUFHLEVBbUJWLGFBQWE7Ozs7QUFyQlgsU0FBTSxrQkFBTixNQUFNOzs7Ozs7Ozs7QUFFRCxNQUFHO0FBRUosYUFGQyxHQUFHLENBRUgsTUFBTSxFQUFFOzJCQUZSLEdBQUc7O0FBR2QsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDL0IsWUFBTSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7QUFDN0IsWUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkQsWUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNWLEVBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxFQUM1RSxFQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLEVBQ3JFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQ3BFLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztBQUNILFdBQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzlCLFdBQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFdBQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0tBQ3pCOztpQkFoQlcsR0FBRztBQUNSLFdBQU07YUFBQSxrQkFBRztBQUFFLGNBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUFFOzs7O1dBRHhCLEdBQUc7OztBQW1CVixnQkFBYTthQUFiLGFBQWE7MkJBQWIsYUFBYTs7O2lCQUFiLGFBQWE7QUFDbEIsUUFBRzthQUFBLGFBQUMsY0FBYyxFQUFFLElBQUksRUFBRTtBQUN6QixXQUFJLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2VBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQUEsQ0FBQyxFQUFFO0FBQzdELFlBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ3JCLGdCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMxQztRQUNEO0FBQ0QsY0FBTyxJQUFJLEVBQUUsQ0FBQztPQUNkOzs7O1dBUkksYUFBYSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==