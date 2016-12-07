var app= angular.module("PiedraPapel",[]);

app.controller("ctrlPiedraPapel",function($scope){
$scope.datos={}; //creo el objeto datos
$scope.datos.eleccion="";
$scope.datos.resultado="";
$scope.datos.fecha="";

$scope.datos.PPT=Math.floor((Math.random() * 3) + 1);

switch ($scope.datos.PPT) 
{
	case 1: 
    	$scope.datos.eleccion="piedra"
		break;
	case 2: 
	    $scope.datos.eleccion="papel"
		break;
 	case 3: 

		$scope.datos.eleccion="tijera"
		break;	
}
console.info($scope.datos);


	$scope.piedra=function(){
		//console.info("Piedra")
		$scope.datos.fecha= new Date().toString();
		if($scope.datos.eleccion == "piedra")
		{
			alert("eligio Piedra, Empate");
			$scope.datos.resultado="eligio Piedra, Empate";
		}
		else
		{
			if($scope.datos.eleccion == "papel")
			{
				alert("eligio Piedra, perdio");
				$scope.datos.resultado="eligio Piedra, perdio";
			}
			else
			{
				alert("eligio Piedra, gano");
				$scope.datos.resultado="eligio Piedra, gano!";
			}
		}
		firebase.database().ref("PiedraPapel/").push($scope.datos);
		window.location = "menu.html";


	};//piedra=function()


	$scope.papel=function(){
		//console.info("papel");
		$scope.datos.fecha= new Date().toString();
		switch ($scope.datos.eleccion)
		{
			case  "piedra":
		    alert("eligio papel, gano");
			$scope.datos.resultado="eligio papel, gano!";
			break;	

			case  "papel":
		    alert("eligio papel, empate");
			$scope.datos.resultado="eligio papel, empate";
			break;				

			case  "tijera":
		    alert("eligio papel,perdio");
			$scope.datos.resultado="eligio papel, perdio";
			break;							
		};
		firebase.database().ref("PiedraPapel/").push($scope.datos);
		window.location = "menu.html";


	};	//papel=function()

	$scope.tijera=function(){
		//console.info("tijera");
		$scope.datos.fecha= new Date().toString();
		switch ($scope.datos.eleccion)
		{
			case  "piedra":
		    alert("eligio tijera, perdio");
			$scope.datos.resultado="eligio tijera, perdio";
			break;	

			case  "papel":
		    alert("eligio tijera, gano");
			$scope.datos.resultado="eligio tijera, gano!";
			break;				

			case  "tijera":
		    alert("eligio tijera, empate");
			$scope.datos.resultado="eligio tijera, empate";
			break;							
		};
		firebase.database().ref("PiedraPapel/").push($scope.datos);
		window.location = "menu.html";

	};	//	tijera=function()
});