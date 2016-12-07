var app= angular.module("Edad",[]);

app.controller("controlEdad",function($scope){
$scope.datos={}; //creo el objeto datos
$scope.datos.Edad=0;

$scope.MostrarFranjaEdad=function()
{
    //alert("llegue");
    console.info($scope.datos);
    if ($scope.datos.Edad < 13)
    {
        alert("< 13 - Niño");
    }
    else
    { 
        if ($scope.datos.Edad >= 18)
        {
            alert("18 ó > 18, Mayor");
        }
        else
        {
            alert("13 - 17, Adolescente");
        };
    };

}//fin MostrarFranjaEdad=function

});