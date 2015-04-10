System.register(["aurelia-http-client"], function (_export) {
    var HttpClient, _createClass, _classCallCheck, GroupApi;

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            "use strict";

            _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

            _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

            GroupApi = _export("GroupApi", (function () {
                function GroupApi(http) {
                    var _this = this;

                    _classCallCheck(this, GroupApi);

                    this.baseUrl = "http://localhost:3000/api/Groups"; // REPLACE WITH A CONFIG ENTRY!
                    this.http = http.configure(function (x) {
                        x.withBaseUrl(_this.baseUrl);
                        x.withHeader("Content-Type", "application/json;charset=UTF-8");
                    });
                }

                _createClass(GroupApi, {
                    ping: {
                        value: function ping() {
                            return this.http.get("?filter[limit]=1");
                        }
                    },
                    getGroups: {
                        value: function getGroups() {
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

                return GroupApi;
            })());
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9ncm91cC1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFRLFVBQVUsaUNBRUwsUUFBUTs7OztBQUZiLHNCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVMLG9CQUFRO0FBRU4seUJBRkYsUUFBUSxDQUVMLElBQUksRUFBRTs7OzBDQUZULFFBQVE7O0FBR2Isd0JBQUksQ0FBQyxPQUFPLEdBQUcsa0NBQWtDLENBQUM7QUFDbEQsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM1Qix5QkFBQyxDQUFDLFdBQVcsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLHlCQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO3FCQUNsRSxDQUFDLENBQUM7aUJBQ047OzZCQVJRLFFBQVE7QUFVakIsd0JBQUk7K0JBQUEsZ0JBQUc7QUFDVCxtQ0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3lCQUN6Qzs7QUFFRSw2QkFBUzsrQkFBQSxxQkFBRztBQUNSLG1DQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7eUJBQzFCOzs7QUFmTSwwQkFBTTsrQkFBQSxrQkFBRztBQUFFLG1DQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQUU7Ozs7dUJBRC9CLFFBQVEiLCJmaWxlIjoiYXBpL2dyb3VwLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9