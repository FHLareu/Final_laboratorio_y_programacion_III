SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
--
-- Database: `frankies`
--
CREATE DATABASE IF NOT EXISTS `frankies` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
            USE `frankies`;



CREATE TABLE `administracion` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `patente` varchar(10) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `id_empleado_entrada` int(10) unsigned NOT NULL,
  `fecha_ingreso` datetime DEFAULT NULL,
  `id_cochera` int(10) unsigned NOT NULL,
  `id_empleado_salida` int(10) unsigned NOT NULL,
  `fecha_salida` datetime DEFAULT NULL,
  `importe` float unsigned NOT NULL,
  `tiempo` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;






CREATE TABLE `cocheras` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `piso` int(11) NOT NULL,
  `numero` int(10) unsigned NOT NULL,
  `ocupada` tinyint(3) unsigned NOT NULL,
  `especial` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;


INSERT INTO cocheras VALUES
("1","1","43","0","1"),
("2","2","74","0","0"),
("3","3","89","0","0"),
("4","2","35","0","1"),
("5","3","97","0","1");




CREATE TABLE `empleados` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `apellido` varchar(30) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `clave` varchar(12) DEFAULT NULL,
  `mail` varchar(25) DEFAULT NULL,
  `turno` char(1) DEFAULT NULL,
  `sexo` char(1) DEFAULT NULL,
  `foto` varchar(50) DEFAULT NULL,
  `estado` int(10) unsigned NOT NULL,
  `perfil` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;


INSERT INTO empleados VALUES
("4","Lareu","Fernando","12345","fernando@hotmail.com","M","M","122646.jpg","1","administrador"),
("69","Sanchez","Miguel","12345","miguel@hotmail.com","T","M","","1","empleado"),
("70","Lopez","Leonardo","12345","leonardo@hotmail.com","N","M","64310.jpg","1","empleado");




/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;