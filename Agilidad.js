var app= angular.module("Agilidad",[]);

app.controller("controlAgilidad",function($scope){
$scope.datos={}; //creo el objeto datos


$scope.datos.Numero1=Math.floor((Math.random() * 10) + 1);
$scope.datos.Signo='+';
$scope.datos.Numero2=Math.floor((Math.random() * 10) + 1);

$scope.datos.NumSigno=Math.floor((Math.random() * 3) + 1);

$scope.datos.resultado="";



$scope.Aceptar=function()
    {

        var Tiempo2=new Date();
        Tiempo2 = Tiempo2.getTime();
        $scope.datos.TiempoTranscurrido= (Tiempo2 - Tiempo1) / 1000;    

        if  ($scope.datos.resultado==$scope.datos.Respuesta)
            {
                $scope.datos.gano="Si";
                firebase.database().ref("Agilidad/").push($scope.datos);                
                alert ("Ganaste: "+ $scope.datos.TiempoTranscurrido +" segundos");
                
            }   
        else 
            {
                $scope.datos.gano="No";
                firebase.database().ref("Agilidad/").push($scope.datos);                
                alert ("Perdiste: "+$scope.datos.TiempoTranscurrido +" segundos");
            }
            
        setTimeout(function() {
            window.location = "menu.html";
        }, 3000);

        console.info($scope.datos);
}



switch ($scope.datos.NumSigno) {
    case 1:
            $scope.datos.Signo='+';
            $scope.datos.resultado=$scope.datos.Numero1 + $scope.datos.Numero2
            break;
    case 2:
            $scope.datos.Signo='-';            
            $scope.datos.resultado=$scope.datos.Numero1 - $scope.datos.Numero2
            break;            
    case 3:
            $scope.datos.Signo='*';            
            $scope.datos.resultado=$scope.datos.Numero1 * $scope.datos.Numero2
            break;    

}
console.info($scope.datos);            

var Tiempo1=new Date();
Tiempo1 = Tiempo1.getTime();

}); //Fin control.-