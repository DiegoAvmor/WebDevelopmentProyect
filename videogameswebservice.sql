-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2019 a las 18:33:33
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `videogameswebservice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `passwd` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `email`, `passwd`) VALUES
('Carlos', 'correo@mail.com', '123123123'),
('DiegoAvmor', 'correo@gmail.com', '123123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videogame`
--

CREATE TABLE `videogame` (
  `ClvJuego` int(11) NOT NULL,
  `NombreJuego` varchar(80) NOT NULL,
  `FLanzamiento` date NOT NULL,
  `Rating` float NOT NULL,
  `RatingTop` int(11) NOT NULL,
  `TotalRating` int(11) NOT NULL,
  `PlayTime` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `videogame`
--

INSERT INTO `videogame` (`ClvJuego`, `NombreJuego`, `FLanzamiento`, `Rating`, `RatingTop`, `TotalRating`, `PlayTime`) VALUES
(28, 'Red Dead Redemption 2', '2018-10-26', 4.51, 5, 1576, 0),
(32, 'Destiny 2', '2017-09-06', 3.67, 4, 919, 2),
(278, 'Horizon Zero Dawn', '2017-02-28', 4.33, 5, 1528, 0),
(422, 'Terraria', '2011-05-15', 3.96, 4, 817, 12),
(766, 'Warframe', '2013-03-25', 3.46, 4, 850, 7),
(802, 'Borderlands 2', '2012-09-18', 4.09, 4, 1381, 9),
(1030, 'Limbo', '2010-07-21', 4.16, 4, 1412, 2),
(2454, 'DOOM (2016)', '2016-05-13', 4.38, 5, 1495, 11),
(3070, 'Fallout 4', '2015-11-09', 3.7, 4, 1328, 48),
(3144, 'Super Meat Boy', '2010-10-20', 3.95, 4, 819, 3),
(3192, 'METAL GEAR SOLID V: THE PHANTOM PAIN', '2015-09-01', 4.17, 5, 1135, 31),
(3272, 'Rocket League', '2015-07-07', 4.04, 4, 1101, 17),
(3328, 'The Witcher 3: Wild Hunt', '2015-05-18', 4.68, 5, 2358, 55),
(3439, 'Life is Strange', '2015-01-29', 4.12, 5, 1568, 6),
(3498, 'Grand Theft Auto V', '2013-09-17', 4.47, 5, 2575, 70),
(3612, 'Hotline Miami', '2012-10-22', 4.31, 5, 1117, 5),
(3939, 'PAYDAY 2', '2013-08-13', 3.48, 4, 882, 8),
(4062, 'BioShock Infinite', '2013-03-26', 4.36, 5, 1762, 12),
(4200, 'Portal 2', '2011-04-19', 4.6, 5, 2279, 11),
(4286, 'BioShock', '2007-08-21', 4.38, 5, 1467, 3),
(4291, 'Counter-Strike: Global Offensive', '2012-08-21', 3.56, 4, 1274, 61),
(4332, 'Spec Ops: The Line', '2012-06-26', 4.08, 4, 835, 5),
(4459, 'Grand Theft Auto IV', '2008-04-29', 4.23, 4, 1103, 9),
(5286, 'Tomb Raider (2013)', '2013-03-05', 4.08, 4, 1493, 11),
(5679, 'The Elder Scrolls V: Skyrim', '2011-11-10', 4.39, 5, 1871, 42),
(10213, 'Dota 2', '2013-07-09', 3.08, 3, 1142, 14),
(11859, 'Team Fortress 2', '2007-10-10', 3.65, 4, 1242, 9),
(11936, 'Half-Life 2: Deathmatch', '2004-11-01', 3.35, 4, 432, 1),
(11973, 'Middle-earth: Shadow of Mordor', '2014-09-30', 3.88, 4, 1083, 13),
(12020, 'Left 4 Dead 2', '2009-11-17', 4.08, 4, 1339, 9),
(13536, 'Portal', '2007-10-09', 4.49, 5, 1874, 4),
(13537, 'Half-Life 2', '2004-11-16', 4.47, 5, 1567, 7),
(13668, 'Amnesia: The Dark Descent', '2010-09-07', 3.6, 4, 495, 1),
(16944, 'The Witcher 2: Assassins of Kings Enhanced Edition', '2012-04-16', 4.21, 4, 911, 7),
(19103, 'Half-Life 2: Lost Coast', '2005-10-27', 3.42, 4, 522, 1),
(19709, 'Half-Life 2: Episode Two', '2007-10-09', 4.42, 5, 825, 5),
(19710, 'Half-Life 2: Episode One', '2006-06-01', 4.37, 5, 815, 4),
(29028, 'Metro 2033', '2010-03-16', 3.89, 4, 869, 3),
(58175, 'God of War', '2018-04-20', 4.56, 5, 1711, 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `videogame`
--
ALTER TABLE `videogame`
  ADD PRIMARY KEY (`ClvJuego`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
