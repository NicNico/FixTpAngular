var app= angular.module("FerreteFacturacion",[]);

app.controller("controlFacturacion",function($scope){

		$scope.datos={};
        $scope.mensajeRespuesta="sin rta";
        $scope.auxIva=0;
		//$scope.datos.precioUno="111";

		$scope.sumar=function(dato1, dato2, dato3){
			$scope.mensajeRespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3));
        	alert($scope.mensajeRespuesta);
		};


		$scope.promedio=function(dato1, dato2, dato3){
			$scope.mensajeRespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3)/3);
        	alert($scope.mensajeRespuesta);
		};


		$scope.precioFinal=function(dato1, dato2, dato3){
			$scope.auxIva=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3));
			$scope.mensajeRespuesta=$scope.auxIva * 1.21;
        	alert($scope.mensajeRespuesta);
		};
			
});