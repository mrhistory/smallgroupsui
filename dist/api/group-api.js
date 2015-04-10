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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9ncm91cC1hcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFRLFVBQVUsaUNBRUwsUUFBUTs7OztBQUZiLHNCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVMLG9CQUFRO0FBRU4seUJBRkYsUUFBUSxDQUVMLElBQUksRUFBRTs7OzBDQUZULFFBQVE7O0FBR2Isd0JBQUksQ0FBQyxPQUFPLEdBQUcsa0NBQWtDLENBQUM7QUFDbEQsd0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM1Qix5QkFBQyxDQUFDLFdBQVcsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQzVCLHlCQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO3FCQUNsRSxDQUFDLENBQUM7aUJBQ047OzZCQVJRLFFBQVE7QUFVakIsNkJBQVM7K0JBQUEscUJBQUc7QUFDUixtQ0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUMxQjs7O0FBWE0sMEJBQU07K0JBQUEsa0JBQUc7QUFBRSxtQ0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUFFOzs7O3VCQUQvQixRQUFRIiwiZmlsZSI6ImFwaS9ncm91cC1hcGkuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==