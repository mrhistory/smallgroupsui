System.register(["./api/member-api"], function (_export) {
    var MemberApi, _createClass, _classCallCheck, SignUp;

    return {
        setters: [function (_apiMemberApi) {
            MemberApi = _apiMemberApi.MemberApi;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            SignUp = _export("SignUp", (function () {
                function SignUp(memberApi) {
                    _classCallCheck(this, SignUp);

                    this.heading = "Sign Up";
                    this.memberApi = memberApi;
                    this.passwordsMatch = true;
                    this.errors = [];
                    this.successMessage = "";

                    // Member fields
                    this.firstName = "";
                    this.lastName = "";
                    this.emailAddress = "";
                    this.password = "";
                    this.confirmPassword = "";
                }

                _createClass(SignUp, {
                    checkPasswordsMatch: {
                        value: function checkPasswordsMatch() {
                            this.passwordsMatch = this.password == this.confirmPassword;
                        }
                    },
                    signUp: {
                        value: function signUp() {
                            this.errors = [];
                            this.successMessage = "";
                            var member = {
                                firstName: this.firstName,
                                lastName: this.lastName,
                                email: this.emailAddress,
                                password: this.password
                            };
                            this.memberApi.addMember(member).then((function (response) {
                                this.successMessage = "New member saved."; // Could be some kind of config later.
                                this.clearEntries();
                            }).bind(this))["catch"]((function (err) {
                                if (err.content.error.details != null) {
                                    for (var key in err.content.error.details.messages) {
                                        this.errors.push(err.content.error.details.messages[key]);
                                    }
                                } else {
                                    this.errors.push(err.content.error.message);
                                }
                                console.log(this.errors);
                            }).bind(this));
                        }
                    },
                    clearEntries: {
                        value: function clearEntries() {
                            this.firstName = "";
                            this.lastName = "";
                            this.emailAddress = "";
                            this.password = "";
                            this.confirmPassword = "";
                            this.checkPasswordsMatch();
                        }
                    },
                    clearErrors: {
                        value: function clearErrors() {
                            this.errors = [];
                            this.successMessage = "";
                        }
                    },
                    clearAll: {
                        value: function clearAll() {
                            this.clearEntries();
                            this.clearErrors();
                        }
                    }
                }, {
                    inject: {
                        value: function inject() {
                            return [MemberApi];
                        }
                    }
                });

                return SignUp;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFRLFNBQVMsaUNBRUosTUFBTTs7OztBQUZYLHFCQUFTLGlCQUFULFNBQVM7Ozs7Ozs7OztBQUVKLGtCQUFNO0FBRUoseUJBRkYsTUFBTSxDQUVILFNBQVMsRUFBRTswQ0FGZCxNQUFNOztBQUdYLHdCQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUN6Qix3QkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0Isd0JBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzNCLHdCQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQix3QkFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7OztBQUd6Qix3QkFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsd0JBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLHdCQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN2Qix3QkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsd0JBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2lCQUM3Qjs7NkJBZlEsTUFBTTtBQWlCZix1Q0FBbUI7K0JBQUEsK0JBQUc7QUFDbEIsZ0NBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO3lCQUMvRDs7QUFFRCwwQkFBTTsrQkFBQSxrQkFBRztBQUNMLGdDQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixnQ0FBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDekIsZ0NBQUksTUFBTSxHQUFHO0FBQ1QseUNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztBQUN6Qix3Q0FBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLHFDQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7QUFDeEIsd0NBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTs2QkFDMUIsQ0FBQztBQUNGLGdDQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxVQUFTLFFBQVEsRUFBRTtBQUNyRCxvQ0FBSSxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FBQztBQUMxQyxvQ0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDOzZCQUN2QixDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQU0sQ0FBQyxDQUFBLFVBQVMsR0FBRyxFQUFFO0FBQzlCLG9DQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFDbkMseUNBQUssSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUNoRCw0Q0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FDQUM3RDtpQ0FDSixNQUFNO0FBQ0gsd0NBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lDQUMvQztBQUNELHVDQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDNUIsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNqQjs7QUFFRCxnQ0FBWTsrQkFBQSx3QkFBRztBQUNYLGdDQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixnQ0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0NBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLGdDQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixnQ0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDMUIsZ0NBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3lCQUM5Qjs7QUFFRCwrQkFBVzsrQkFBQSx1QkFBRztBQUNWLGdDQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixnQ0FBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7eUJBQzVCOztBQUVELDRCQUFROytCQUFBLG9CQUFHO0FBQ1AsZ0NBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixnQ0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUN0Qjs7O0FBN0RNLDBCQUFNOytCQUFBLGtCQUFHO0FBQUUsbUNBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFBRTs7Ozt1QkFEOUIsTUFBTSIsImZpbGUiOiJzaWduLXVwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=