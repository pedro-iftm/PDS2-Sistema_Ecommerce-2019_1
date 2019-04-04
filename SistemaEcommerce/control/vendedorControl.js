var app = angular.module('vendedorModule',[]);
app.controller('vendedorControl',function($scope,$http) {

    var url = 'http://localhost:8080/vendedores';

    $scope.pesquisar = function() {
        $http.get(url).then(function (response) {
            $scope.vendedores = response.data;
        }, function (error) {
            alert(error);
            console.log(error);
        });
    }

    $scope.salvar = function() {
        if (typeof $scope.vendedor.codigo == 'undefined') {            
            $http.post(url,$scope.vendedor).then(function (response) {
                $scope.vendedores.push(response.data);
                $scope.novo();
            }, function (error) {
                alert(error);
                console.log(error);
            });
        } else {
            $http.put(url,$scope.vendedor).then(function () {
                $scope.pesquisar();
                $scope.novo();
            }, function (error) {
                alert(error);
                console.log(error);
            });
        } 
    }

    $scope.excluir = function() {
        if (typeof $scope.vendedor.codigo == 'undefined') {
            alert('Escolha um vendedor');
        } else {
            urlExcluir = url+"/"+$scope.vendedor.codigo;
            $http.delete(urlExcluir).then(function () {
                $scope.pesquisar();
                $scope.novo();
            }, function (error) {
                alert(error);
                console.log(error);
            }); 
        }
    }
    
    $scope.novo = function() {
        $scope.vendedor = {};
    }        

    $scope.seleciona = function(vendedor) {
        $scope.vendedor = vendedor;
    }

    $scope.pesquisar();
    $scope.novo();

});