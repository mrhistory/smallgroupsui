System.register([], function (_export) {
	var _createClass, _classCallCheck, Welcome;

	return {
		setters: [],
		execute: function () {
			"use strict";

			_createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			Welcome = _export("Welcome", (function () {
				function Welcome() {
					_classCallCheck(this, Welcome);

					this.heading = "Welcome to the Aurelia Navigation App!";
					this.firstName = "John";
					this.lastName = "Doe";
				}

				_createClass(Welcome, {
					fullName: {
						get: function () {
							return "" + this.firstName + " " + this.lastName;
						}
					},
					welcome: {
						value: function welcome() {
							alert("Welcome, " + this.fullName + "!");
						}
					}
				});

				return Welcome;
			})());
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtvQ0FBYSxPQUFPOzs7Ozs7Ozs7OztBQUFQLFVBQU87QUFDUixhQURDLE9BQU8sR0FDTDsyQkFERixPQUFPOztBQUVsQixTQUFJLENBQUMsT0FBTyxHQUFHLHdDQUF3QyxDQUFDO0FBQ3hELFNBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLFNBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOztpQkFMVyxPQUFPO0FBT2YsYUFBUTtXQUFBLFlBQUc7QUFDZCxtQkFBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFRLENBQUc7T0FDNUM7O0FBRUQsWUFBTzthQUFBLG1CQUFHO0FBQ1QsWUFBSyxlQUFhLElBQUksQ0FBQyxRQUFRLE9BQUksQ0FBQztPQUNwQzs7OztXQWJXLE9BQU8iLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9