angular.module('app.controllers', [])

    .controller('actionCtrl', ['$scope', '$stateParams', '$state', 'BlankFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, $state, BlankFactory) {

            $scope.onLogOut = function () {
                BlankFactory.IsLoggedIn = false;
                $state.go("login");
            }
        }])

    .controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
    .controller('MainController', ['$scope','$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
       
        function ($scope, $stateParams,$state) {
            var vm =this;
              vm.IsLoggedIn = false;
            vm.onLogOut = function () {
                vm.IsLoggedIn = false;
                $state.go("login");
            }
             vm.onLogIn = function () {
                vm.IsLoggedIn = true;
                $state.go("cartTabDefaultPage");
            }

        }])

    .controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', 'BlankFactory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, BlankFactory) {
            BlankFactory.IsLoggedIn = true;
            $scope.showMe = {

            };
            $scope.userList = [
                {
                    Image: "img/07FPs5L6SWShYfW6OG7r_Koala.jpg",
                    UserId: "1",
                    UserName: "Balabaskaran P",
                    FromDate: "02 Mar 2017",
                    ToDate: "07 Mar 2017"
                },
                {
                    Image: "img/07FPs5L6SWShYfW6OG7r_Koala.jpg",
                    UserId: "2",
                    UserName: "Vishnu K",
                    FromDate: "01 Mar 2017",
                    ToDate: "01 Mar 2017"
                }
            ];
            $scope.toggleShowMe = function (id) {
                $scope.userList.forEach(function (element) {
                    if (element.UserId == id)
                        $scope.showMe[id] = !$scope.showMe[id];
                    else
                        $scope.showMe[element.UserId] = false;
                }, this);
                // if ($scope.showMe[id] != undefined)
                //     $scope.showMe[id] = !$scope.showMe[id];
                // else
                //     $scope.showMe[id] = true;
            }

        }])

    .controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
