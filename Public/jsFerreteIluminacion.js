var miaplicacion=angular.module("Iuminacion",[ ]);	

miaplicacion.controller("ctrlIluminacion",function($scope){
 	//Definir un objeto en el $scope
 	$scope.datos={};
 	//inicializo los valores
 	$scope.datos.cantidadDeLamparas="";
 	$scope.datos.marcaDeLampara=0; 	
 	$scope.datos.precioFinal=0;
 	
 	$scope.CalcularPrecio=function(dato1){
 		//var resultado=$scope.datos.cantidadDeLamparas*35;
 		//$scope.datos.precioFinal=resultado;

 		/*
 		$scope.datos.precioFinal=$scope.datos.cantidadDeLamparas*35;
 		if($scope.datos.cantidadDeLamparas > 3 )
 		{
 			$scope.datos.precioFinal=$scope.datos.precioFinal*0.9;
 		}
 		else
 		{
 			alert("si compra mas de tres, tiene descuento");
 		}



 		if($scope.datos.marcaDeLampara=="ArgentinaLuz")
 		{
 			$scope.datos.precioFinal=$scope.datos.precioFinal*0.95;
 		}
 		else
 		{
 			alert("si compras ArgentinaLuz, tiene descuento");
 		}
 		*/

/*		$scope.datos.precioFinal=$scope.datos.cantidadDeLamparas*35;
 		if($scope.datos.cantidadDeLamparas > 3 && $scope.datos.marcaDeLampara=="ArgentinaLuz")
 		{
			$scope.datos.precioFinal=$scope.datos.precioFinal*0.9;
 		}
 		else
 		{
 			alert("si compra mas de tres, tiene descuento");
 		}
*/


//ini Ejercicio A
		$scope.datos.precioFinal=$scope.datos.cantidadDeLamparas*35;
 		if($scope.datos.cantidadDeLamparas >= 6 )
 		{
			$scope.datos.precioFinal=$scope.datos.precioFinal*0.5;
			alert("cantidadDeLamparas >= 6");
 		};
 		
//fin Ejercicio A

//ini Ejercicio B
 			//&& $scope.datos.marcaDeLampara=="ArgentinaLuz"
			//$scope.datos.precioFinal=$scope.datos.precioFinal*0.5;

		//$scope.datos.precioFinal=$scope.datos.cantidadDeLamparas*35;
 		if($scope.datos.cantidadDeLamparas == 5 )
 		{
 			if( $scope.datos.marcaDeLampara=="ArgentinaLuz") 
 			{
 				$scope.datos.precioFinal=$scope.datos.precioFinal*0.6;
 				alert("ArgentinaLuz y 5");
 			}
 			else
 			{
 				$scope.datos.precioFinal=$scope.datos.precioFinal*0.7;
 			}

 		}
 		else
 		{
 			//alert("cantidad distinta de 5, cualquier marca, incluida ArgentinaLuz");


 		}

 		/* opcion con ...
 		if($scope.datos.cantidadDeLamparas == 5 && $scope.datos.marcaDeLampara =="ArgentinaLuz")
 		{
 			$scope.datos.precioFinal=$scope.datos.precioFinal*0.6;
 		}

 		if($scope.datos.cantidadDeLamparas == 5 && $scope.datos.marcaDeLampara =="ArgentinaLuz")
 		{
 			$scope.datos.precioFinal=$scope.datos.precioFinal*0.7;
 		} 		
 		*/
//fin Ejercicio B



//ini Ejercicio C
 		if(
	 		  $scope.datos.cantidadDeLamparas == 4 && $scope.datos.marcaDeLampara =="ArgentinaLuz" ||
	 		  $scope.datos.marcaDeLampara =="FelipeLamparas"
 		  )
 		{
 			alert("== 4, ArgentinaLuz o FelipeLamparas" );
 			$scope.datos.precioFinal=$scope.datos.precioFinal*0.75;
 		}

 		if(
	 		  ($scope.datos.cantidadDeLamparas == 4 && $scope.datos.marcaDeLampara !="ArgentinaLuz") ||
	 		  $scope.datos.cantidadDeLamparas == 4 && $scope.datos.marcaDeLampara !="FelipeLamparas"
 		  )
 		{
 			$scope.datos.precioFinal=$scope.datos.precioFinal*0.80;
            alert("== 4, distinto a ArgentinaLuz o distinto a FelipeLamparas" ); 			
 		} 		
//fin Ejercicio C



 	}//fin de la funcion



});






