var app = angular.module('aplicacion',[]);

app.controller('principal',function($scope, $http) {
    
    $http.get("data/mundial.json")
    .then(function(response) {
           
        
            $scope.ejemplo = [];
           
            $scope.pais2 = [];

            $scope.pais2.push("KR");
            $scope.pais2.push("DE");
            $scope.pais2.push("MX");
            $scope.pais2.push("SE");
            $scope.pais2.push("RS");
            $scope.pais2.push("BR");
            $scope.pais2.push("CH");
            $scope.pais2.push("CR");
            
            for( var i=0; i < response.data.length; i++ ){
                
                
                    $scope.ejemplo.push(response.data[i].home_team_country);
                    $scope.ejemplo.push(response.data[i].away_team_country);

   
                    
            }

          
         
          
    });
    
})



