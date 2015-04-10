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
                    this.member = {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    };
                    this.confirmPassword = "";
                }

                _createClass(SignUp, {
                    checkPasswordsMatch: {
                        value: function checkPasswordsMatch() {
                            this.passwordsMatch = this.member.password == this.confirmPassword;
                        }
                    },
                    signUp: {
                        value: function signUp() {
                            this.errors = [];
                            this.successMessage = "";
                            this.memberApi.addMember(this.member).then((function (response) {
                                this.successMessage = "New member saved."; // This should redirect to login screen, or a message to check email for activation link.
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
                            this.member.firstName = "";
                            this.member.lastName = "";
                            this.member.email = "";
                            this.member.password = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFRLFNBQVMsaUNBRUosTUFBTTs7OztBQUZYLHFCQUFTLGlCQUFULFNBQVM7Ozs7Ozs7OztBQUVKLGtCQUFNO0FBRUoseUJBRkYsTUFBTSxDQUVILFNBQVMsRUFBRTswQ0FGZCxNQUFNOztBQUdYLHdCQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUN6Qix3QkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0Isd0JBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzNCLHdCQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQix3QkFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7OztBQUd6Qix3QkFBSSxDQUFDLE1BQU0sR0FBRztBQUNWLGlDQUFTLEVBQUUsRUFBRTtBQUNiLGdDQUFRLEVBQUUsRUFBRTtBQUNaLDZCQUFLLEVBQUUsRUFBRTtBQUNULGdDQUFRLEVBQUUsRUFBRTtxQkFDZixDQUFDO0FBQ0Ysd0JBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2lCQUM3Qjs7NkJBakJRLE1BQU07QUFtQmYsdUNBQW1COytCQUFBLCtCQUFHO0FBQ2xCLGdDQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7eUJBQ3RFOztBQUVELDBCQUFNOytCQUFBLGtCQUFHO0FBQ0wsZ0NBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGdDQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN6QixnQ0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLFVBQVMsUUFBUSxFQUFFO0FBQzFELG9DQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDO0FBQzFDLG9DQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7NkJBQ3ZCLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBTSxDQUFDLENBQUEsVUFBUyxHQUFHLEVBQUU7QUFDOUIsb0NBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtBQUNuQyx5Q0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQ2hELDRDQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUNBQzdEO2lDQUNKLE1BQU07QUFDSCx3Q0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUNBQy9DO0FBQ0QsdUNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUM1QixDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7eUJBQ2pCOztBQUVELGdDQUFZOytCQUFBLHdCQUFHO0FBQ1gsZ0NBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUMzQixnQ0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzFCLGdDQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDdkIsZ0NBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUMxQixnQ0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDMUIsZ0NBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3lCQUM5Qjs7QUFFRCwrQkFBVzsrQkFBQSx1QkFBRztBQUNWLGdDQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixnQ0FBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7eUJBQzVCOztBQUVELDRCQUFROytCQUFBLG9CQUFHO0FBQ1AsZ0NBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixnQ0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUN0Qjs7O0FBekRNLDBCQUFNOytCQUFBLGtCQUFHO0FBQUUsbUNBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFBRTs7Ozt1QkFEOUIsTUFBTSIsImZpbGUiOiJzaWduLXVwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=