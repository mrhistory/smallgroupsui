System.register(["aurelia-router"], function (_export) {
	var Router, _createClass, _classCallCheck, ChildRouter;

	return {
		setters: [function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			ChildRouter = _export("ChildRouter", (function () {
				function ChildRouter(router) {
					_classCallCheck(this, ChildRouter);

					this.heading = "Child Router";
					this.router = router;
					this.router.configure(function (config) {
						config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
					});
				}

				_createClass(ChildRouter, null, {
					inject: {
						value: function inject() {
							return [Router];
						}
					}
				});

				return ChildRouter;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0tBQVEsTUFBTSxpQ0FFRCxXQUFXOzs7O0FBRmhCLFNBQU0sa0JBQU4sTUFBTTs7Ozs7Ozs7O0FBRUQsY0FBVztBQUVaLGFBRkMsV0FBVyxDQUVYLE1BQU0sRUFBRTsyQkFGUixXQUFXOztBQUd0QixTQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztBQUM5QixTQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixTQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUMvQixZQUFNLENBQUMsR0FBRyxDQUFDLENBQ1YsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDMUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxFQUNoRCxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsQ0FDbkYsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUFDO0tBQ0g7O2lCQVpXLFdBQVc7QUFDaEIsV0FBTTthQUFBLGtCQUFHO0FBQUUsY0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQUU7Ozs7V0FEeEIsV0FBVyIsImZpbGUiOiJjaGlsZC1yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==