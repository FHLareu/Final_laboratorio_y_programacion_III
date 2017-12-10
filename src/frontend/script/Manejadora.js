"use strict";
/// <reference path="../../../node_modules/@types/jquery/index.d.ts"/>
$(document).ready(function () {
    $("#barra").html("<nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\">\n                                        <div class=\"navbar-header\">\n                                            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex6-collapse\">\n                                                <span class=\"sr-only\">Desplegar navegaci\u00F3n</span>\n                                                <span class=\"icon-bar\"></span>\n                                                <span class=\"icon-bar\"></span>\n                                                <span class=\"icon-bar\"></span>\n                                            </button>\n                                            <img src=\"\" class=\"navbar-brand\" title=\"Este eres tu!\" id=\"imgUser\" />\n                                        </div>\n                            \n                                        <div class=\"collapse navbar-collapse navbar-ex6-collapse\">\n                                            <ul class=\"nav navbar-nav\">\n                            \n                                                <li class=\"dropdown dropdown\">\n                                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"navUser\"></a>\n                                                    <ul class=\"dropdown-menu\">\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"MostrarDatos()\">\n                                                                <i class=\"glyphicon glyphicon-info-sign\"></i>&ensp;Datos</a>\n                                                        </li>\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Deslogear()\">\n                                                                <i class=\"glyphicon glyphicon-cog\"></i>&ensp;Modificar</a>\n                                                        </li>\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Deslogear()\" title=\"Cerrar la sesion actual.\">\n                                                                <i class=\"glyphicon glyphicon-off\"></i>&ensp;Salir</a>\n                                                        </li>\n                                                    </ul>\n                                                </li>\n\n                                                <li class=\"dropdown dropdown\">\n                                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                                        Empleados\n                                                        <b class=\"caret\"></b>\n                                                    </a>\n                                                    <ul class=\"dropdown-menu\">\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Clases.Manejadora.Registro()\" title=\"Dar de alta un nuevo empleado.\">\n                                                                <i class=\"glyphicon glyphicon-plus\"></i>&ensp;Alta</a>\n                                                        </li>\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Clases.Manejadora.Listar()\" title=\"Motrar todos los empleados, suspenderlos, borrarlos y mostrar sus estadisticas.\">\n                                                                <i class=\"glyphicon glyphicon-list\"></i>&ensp;Listar</a>\n                                                        </li>\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Clases.Manejadora.Modificar()\" title=\"Modificar un empleado existente.\">\n                                                                <i class=\"glyphicon glyphicon-sort\"></i>&ensp;Modificar</a>\n                                                        </li>\n                                                    </ul>\n                                                </li>\n\n                                                <li class=\"dropdown dropdown\">\n                                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                                        <img src=\"./src/frontend/img/favicon.ico\" width=\"20px\" height=\"20px\">\n                                                    </a>\n                                                </li>\n\n                                                <li class=\"dropdown dropdown\">\n                                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                                        Autos\n                                                        <b class=\"caret\"></b>\n                                                    </a>\n                                                    <ul class=\"dropdown-menu\">\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Clases.Manejadora.Ingresar()\" title=\"Ingresar un nuevo auto.\">\n                                                                <i class=\"glyphicon glyphicon-arrow-up\"></i>&ensp;Ingresar</a>\n                                                        </li>\n                                                        <li>\n                                                            <a href=\"#\" onclick=\"Clases.Manejadora.MostrarHistorial()\" title=\"Mostrar el historial de los autos aparcados asi como sus estadisticas.\">\n                                                                <i class=\"glyphicon glyphicon-time\"></i>&ensp;Historial</a>\n                                                        </li>\n                                                    </ul>\n                                                </li>\n\n                                                <li class=\"dropdown dropdown\">\n                                                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                                        Visualizacion\n                                                        <b class=\"caret\"></b>\n                                                    </a>\n                                                    <ul class=\"dropdown-menu\">\n                                                        <li>\n                                                            <a href=\"#\" title=\"Cambiar el color de las letras.\">\n                                                                <i class=\"glyphicon glyphicon-text-color\"></i>&ensp;Color de fuente</a>\n                                                        </li>\n                                                        <li>\n                                                            <a href=\"#\" title=\"Cambiar el tipo de fuente.\">\n                                                                <i class=\"glyphicon glyphicon-font\"></i>&ensp;Fuente</a>\n                                                        </li>\n                                                    </ul>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </nav>");
});
var Clases;
(function (Clases) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.Ingresar = function () { location.href = "./ingresar.html"; };
        Manejadora.MostrarHistorial = function () { location.href = "./historial.html"; };
        Manejadora.Registro = function () { location.href = "./alta.html"; };
        Manejadora.Volver = function () { location.href = "./principal.html"; };
        Manejadora.Listar = function () { location.href = "./listar.html"; };
        Manejadora.Modificar = function () { location.href = "./modificacion.html"; };
        return Manejadora;
    }());
    Clases.Manejadora = Manejadora;
})(Clases || (Clases = {}));
//# sourceMappingURL=Manejadora.js.map