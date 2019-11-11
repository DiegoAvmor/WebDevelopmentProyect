-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2019 a las 20:12:02
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
-- Estructura de tabla para la tabla `games_genres`
--

CREATE TABLE `games_genres` (
  `gameid` int(11) NOT NULL,
  `genreid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `games_genres`
--

INSERT INTO `games_genres` (`gameid`, `genreid`) VALUES
(802, 2),
(802, 4),
(802, 5),
(1030, 3),
(1030, 4),
(1030, 7),
(1030, 51),
(1030, 83),
(2454, 2),
(2454, 4),
(3070, 4),
(3070, 5),
(3328, 5),
(3439, 3),
(3439, 5),
(3498, 2),
(3498, 4),
(3939, 2),
(3939, 4),
(4062, 2),
(4062, 4),
(4200, 2),
(4200, 7),
(4286, 2),
(4286, 4),
(4291, 2),
(4291, 4),
(4459, 3),
(4459, 4),
(5286, 3),
(5286, 4),
(5679, 4),
(5679, 5),
(10213, 4),
(11859, 2),
(11859, 4),
(12020, 2),
(12020, 4),
(13536, 3),
(13536, 4),
(13536, 7),
(13537, 2),
(13537, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `genreid` int(11) NOT NULL,
  `genrename` varchar(80) NOT NULL,
  `slug` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`genreid`, `genrename`, `slug`) VALUES
(1, 'Racing', 'racing'),
(2, 'Shooter', 'shooter'),
(3, 'Adventure', 'adventure'),
(4, 'Action', 'action'),
(5, 'RPG', 'role-playing-games-rpg'),
(6, 'Fighting', 'fighting'),
(7, 'Puzzle', 'puzzle'),
(10, 'Strategy', 'strategy'),
(11, 'Arcade', 'arcade'),
(14, 'Simulation', 'simulation'),
(15, 'Sports', 'sports'),
(17, 'Card', 'card'),
(19, 'Family', 'family'),
(28, 'Board Games', 'board-games'),
(34, 'Educational', 'educational'),
(40, 'Casual', 'casual'),
(51, 'Indie', 'indie'),
(59, 'Massively Multiplayer', 'massively-multiplayer'),
(83, 'Platformer', 'platformer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `username` varchar(30) NOT NULL,
  `fecha` date NOT NULL,
  `descripcion` text NOT NULL,
  `calificacion` float NOT NULL,
  `calificacionTop` int(11) NOT NULL,
  `gameid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usergames`
--

CREATE TABLE `usergames` (
  `userid` int(11) NOT NULL,
  `gameid` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
('DiegoAvmor', 'correo@gmail.com', '123123'),
('Johan', 'correoalgobonito@hotmail.com', '123456789');

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
  `PlayTime` float NOT NULL,
  `imagen` text NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `videogame`
--

INSERT INTO `videogame` (`ClvJuego`, `NombreJuego`, `FLanzamiento`, `Rating`, `RatingTop`, `PlayTime`, `imagen`, `descripcion`) VALUES
(802, 'Borderlands 2', '2012-09-18', 4.09, 4, 9, 'https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg', '<p>Sequel to the 4-player cooperative FPS RPG Borderlands, where the new team of Vault Hunters arrives on the infamous planet Pandora in order to get the riches, hidden inside the Vault, and help to free the planet from the Handsome Jack, President of Hyperion. Clear out the endless waves and groups and marauders with various weapon types and character abilities.<br />\nUnlike the first game, Borderlands 2 provided DLC not only expanding the world of Pandora with stand-alone story campaigns but adding 2 more characters. Now the main cast consists of Gunzerker Salvador(dual-wields guns at command), Siren Maya (holds and paralyzes the enemy), Commando Axton (summons turrets) and Zer0 the Assasin (invisible sniper ninja). But with the DLC players can try out summoning giant flying robots with Gaige the Mechromancer and Krieg the Psycho. <br />\nMost of the game charm and popularity of Borderlands 2 comes from the supporting cast and the personalities of the NPC, making this fast-paced shooter with optional cover stand out.</p>'),
(1030, 'Limbo', '2010-07-21', 4.16, 4, 2, 'https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg', '<p>This popular 2D puzzle-platformer creates the atmosphere of isolation, where the player alone can guide the nameless protagonist to his destination. Hostile environments and one-hit deaths may seem difficult, but the game implements a fair amount of checkpoints. The monochrome color palette showcases cartoony proportions of every living thing while making lack of details threatening. Limbo shows you exactly what you encounter, but never how it looks.</p>\n<p>Limbo uses the atmosphere and sound design of the horror genre while avoiding tropes of the modern horror games. The overarching theme and unique style compensated for the rather short game with an abrupt ending, making Limbo one of the most impactful games for the genre.</p>\n<p>The simple controls and easy-to-pick-up mechanics help to make a clear distinction, which part of the stage players can interact with, and which part can lead to the quick death. Even though the game is in black and white, this separation is intuitive and natural, so the player would know exactly where to go or what to do.</p>'),
(2454, 'DOOM (2016)', '2016-05-13', 4.38, 5, 11, 'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg', '<p>Return of the classic FPS, Doom (2016) acts as a reboot of the series and brings back the Doomslayer, protagonist of the original Doom games. In order to solve the energy crisis, humanity learned to harvest the energy from Hell, and when something went wrong and demon invasion has started, itâ€™s up to the player to control the Doomslayer and destroy the evil.<br />\nDoom is a fast-paced game that restores the concept of instant health packs and leaving the player against armies of Hell with no cover, no health regeneration or help from anyone. After damaging monsters enough, they will start glowing, which will allow players to perform glory kills to restore some health. While exploring the levels, players will come across secrets, collectible items or upgrade points for the weapons and armor. The single-player campaign silent protagonist has noticeable personality. He gets visibly annoyed and angry in his actions during expository cutscenes and forces his way through the game. Multiplayer maps gather players in Deathmatch/â€king-of-the-hillâ€ type game modes, with all the weapons from the single-player campaign.</p>'),
(3070, 'Fallout 4', '2015-11-09', 3.7, 4, 48, 'https://media.rawg.io/media/games/c88/c885ae6a24bbce21df93b6c4e1c78899.jpg', '<p>The fourth game in the post-apocalyptic action RPG series from Bethesda studious brings players back to the retro-future. After customizing the facial features of the character, players will be admitted to the Vault 111 with their family, and tricked into entering the cryogenic capsule. After the rude awakening after the unknown amount of time has passed, the child is separated from the parents and the loving partner is killed in front of them â€“ the main quest is settled. Now thereâ€™s only the giant open world to explore. Fallout 4 introduces the mechanics of settlement building, where players can build their own little town. Gathering material for crafting and building brings more â€œsurvivalâ€ elements into the old formula. Within their own settlements, players will be able to build all needed utilities, from storage spaces to power armor stations. Visual upgrade from the previous game brings life to what used to be brown wastelands, now filled with details and color.</p>'),
(3328, 'The Witcher 3: Wild Hunt', '2015-05-18', 4.68, 5, 56, 'https://media.rawg.io/media/games/088/088b41ca3f9d22163e43be07acf42304.jpg', '<p>The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.</p>\n<p>CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.</p>\n<p>Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.</p>'),
(3439, 'Life is Strange', '2015-01-29', 4.12, 5, 6, 'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg', '<p>Interactive storytelling and plot-heavy games gained popularity, and â€œLife is Strangeâ€ arrived as teen mystery adventure. The plot will go through the life of Maxine, a teenager in possession of curious power, allowing her to stop and rewind time, in order to manipulate her surroundings. Max, after the reunion with her friend Chloe, is on the path to uncovering the secrets of Arcadia Bay. Players will have to deal with puzzle solving through the fetch quests, in order to change the world around them. <br />\nThe game puts players in situations, where theyâ€™re forced to make a moral choice, going through the decision which may have short-term or long-term consequences. Every choice made by the player will trigger the butterfly effect, surrounding the first playthrough of the game with a lot of emotional struggle, thoughtfully crafted by the developers at Dontnod Entertainment. Life is Strange is third person adventure game, where players might seem just as an observer of the stories, unfolding in front of them.</p>'),
(3498, 'Grand Theft Auto V', '2013-09-17', 4.47, 5, 69, 'https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg', '<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>'),
(3939, 'PAYDAY 2', '2013-08-13', 3.49, 4, 8, 'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg', '<p>The gang is back, and they have bigger and better plans. Objective based cooperative FPS became more complicated. The classic group of Hoxton, Dallas, Chains and Wolf got reinforcement, and now Payday Gang consists of 21 heisters, some of which are based on movie characters or even Youtubers. Players will be able to customize their own private arsenal, their masks, and skills, to complete the missions in their own way, be it stealthy sneak-in or full frontal assault. After completing missions, players will receive EXP points, money and a chance to get a special item that can be a gun modification, mask or a safe containing weapon skins.<br />\nPayday 2 is a multiplayer game, meaning, that even during offline missions players will be followed by AI characters, whose loadouts, masks and perks can be customized as well. This game has been supported by the developers for many years, and amount of DLC speaks plenty of their dedication to the player base.</p>'),
(4062, 'BioShock Infinite', '2013-03-26', 4.37, 5, 12, 'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg', '<p>The third game in the series, Bioshock takes the story of the underwater confinement within the lost city of Rapture and takes it in the sky-city of Columbia. Players will follow Booker DeWitt, a private eye with a military past; as he will attempt to wipe his debts with the only skill heâ€™s good at â€“ finding people. Aside from obvious story and style differences, this time Bioshock protagonist has a personality, character, and voice, no longer the protagonist is a silent man, trying to survive.<br />\nOpen and bright level design of Columbia shows industrial colonial America in a seemingly endless carnival. But Bioshock is not famous for its visuals, but for its story.  Mystery and creative vision of Irrational Games invite players to uncover the secrets of Columbiaâ€™s leader - Zachary Comstock and save Elizabeth, the girl, thatâ€™s been locked up in the flying city since her birth.<br />\nUnique weapons and mechanics of Vigor will make encounters different, helping players to adjust to the new found mobility and hook shot, making fights fast-paced and imaginative.</p>'),
(4200, 'Portal 2', '2011-04-19', 4.61, 5, 11, 'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg', '<p>Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. </p>\n<p>Its plot directly follows the first game'),
(4286, 'BioShock', '2007-08-21', 4.38, 5, 3, 'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg', '<p>FPS with RPG elements, Bioshock invites players to experience horrors of underwater isolation in the city of Rapture, the failed project of the better future. After surviving the plane crash, the protagonist has only one way to go â€“ to the giant lighthouse that opens a way to the underwater utopia. Players will have to unravel the complicated history of Rapture, relying only on themselves, their guns and Plasmids, a mystical substance, that allows itâ€™s user to obtain near magical abilities.<br />\nThe atmosphere of isolation and threat is conveyed through the environmental sounds, subtle electrical buzzing and audio logs, telling the story of societal decay and despair. Players will shape the story, making moral choices along their way, saving Little Sisters or extracting ADAM, the mystical fuel for your abilities. While exploring the underwater city, players will complete missions for the last sane inhabitants of Rapture, while fending off the less fortunate ones.</p>'),
(4291, 'Counter-Strike: Global Offensive', '2012-08-21', 3.56, 4, 61, 'https://media.rawg.io/media/games/ded/dedd631793c5666ffab9ef03975eb226.jpg', '<p>Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists. Arena shooter at its core, CS:GO provides you with various methods of disposing enemies and reliant on cooperation within the team. During the round of the classical clash mode, you will gradually receive currency to purchase different equipment. Each player can carry a primary weapon, secondary pistol, knife and a set of grenades, which all can change the battle if wielded by the skilled player. <br />\nObjectives are clear and vary from map to map, from game mode to game mode. Stop the terrorists from planting explosives, stop the counter-terrorist from retrieving the hostages, kill everyone who isnâ€™t you and just perform the best with.<br />\nCS:GO is one of the major cybersport discipline, which makes playing it more exciting to some players. Aside from purchasing the game, CS:GO is infamous for its loot case system, that requires players to purchase keys, in order to open said cases. Customization items consist of weapon skins, weapon stickers, and sprays that do not affect gameplay and have purely visual value to the player.</p>'),
(4459, 'Grand Theft Auto IV', '2008-04-29', 4.23, 4, 9, 'https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg', '<p>Every crime story is a story of a search for success. The player will become Niko Bellic, immigrant arriving at the Liberty City to reunite with his cousin Roman and find the man that betrayed him and his army unit fifteen years prior to the events of the game. While protecting his cousin, Niko has to deal with loan sharks, Russian mobsters, and other gangs. After the third game, GTA brought more realism to the player, in order to make the city and its people look more believable. Street vendors on every corner will sell food that replenishes health, bars with playable dart boards, bowling alleys and even comedy clubs and movie theatres. Open world will allow players not only hang out with important NPC in order to receive bonuses and unlocks but taking girls on the dates as well, to help Niko settle. Multiplayer mode allows up to 32 players to explore the copy of the single-player city and initiate multiplayer activities, like races or Deathmatches.</p>'),
(5286, 'Tomb Raider (2013)', '2013-03-05', 4.08, 4, 11, 'https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg', '<p>A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life â€“ her youth. Heavily influenced by Naughty Dogâ€™s â€œUnchartedâ€, the game is a mix of everything, from stealth and survival to combat and QTE action scenes.<br />\nYoung Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood.<br />\nThe game will be graphic at times, especially after failed QTEâ€™s during some of the survival scenes, but overall players will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or continuation of existing sub-series within the franchise, but a reboot, setting up Tomb Raider to represent modern gaming experience.<br />\nThe game has RPG elements and has a world, which you can explore during the story campaign and after the completion. As well as multiplayer mode, where 2 teams (4 scavengers and 4 survivors) are clashing in 3 game modes while using weapons and environments from the single-player campaign.</p>'),
(5679, 'The Elder Scrolls V: Skyrim', '2011-11-10', 4.39, 5, 42, 'https://media.rawg.io/media/games/148/1485f72434101885b098d4290bf0ba67.jpg', '<p>The fifth game in the series, Skyrim takes us on a journey through the coldest region of Cyrodiil. Once again player can traverse the open world RPG armed with various medieval weapons and magic, to become a hero of Nordic legends â€“Dovahkiin, the Dragonborn. After mandatory character creation players will have to escape not only imprisonment but a fire-breathing dragon. Something Skyrim hasnâ€™t seen in centuries.<br />\nAfter Oblivion, the magic system was reworked, in order to show players more aggressive and direct combat. As a Dragonborn, your character will be able to use the powerful magic of dragon shouts, powered, upgraded and researched with the souls of the dragons that will be randomly encountered by players, while traveling. Hundreds of sidequests will invite players to discover every part of the newly introduced land. Aside from already filled with guilds, Daedra and steampunk Dwemer ruins, Skyrim has additional DLC content that not only brings Solstheim island and vampire conclave but gives players the ability to build their own homes, instead of buying pre-made ones.</p>'),
(10213, 'Dota 2', '2013-07-09', 3.08, 3, 14, 'https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg', '<p>What used to be an unofficial modded map for the Warcraft 3, ended up being the most budgeted cybersport discipline, gathering millions of people to watch annual international championships.<br />\nMOBA genre started with the DOTA, Defense of the Ancients, which can be efficiently described as 5 vs 5 top-down action strategy game, during which players are tasked to destroy the enemy core while protecting their own.<br />\nPlayers can pick out of the roster of 112 heroes and battle on the single map while taking advantage of field vision, resources and item build that can either make heroes stronger or disable the enemy. DOTA 2 is still active, and receives updates weekly, reshaping metas and refreshing game balance, if by any chance some heroes became unreasonably strong. Each hero has not only a unique set of abilities but is fully customizable, through getting items for heroes after matches of through the trade. Not only heroes but terrain, couriers, that deliver items for you and even match announcers, that can be voiced by heroes, professional casters of just memorable characters from other forms of media.</p>'),
(11859, 'Team Fortress 2', '2007-10-10', 3.66, 4, 9, 'https://media.rawg.io/media/games/8e0/8e032ac4faf1136e7d708bb3ac61af23.jpg', '<p>TF2 is an objective based arena shooter with unique characters, representing different classes, acting as a staple of casual and competitive gaming for Steam. Dozens of different maps and game modes are trying to keep this game alive, after all the years it was available. Each character has a vast arsenal that can be accessed through completing in-game achievements, randomly receiving them from loot-boxes within the game, crafting them or just buying and trading items on the Steam Market. <br />\nFor players, that'),
(12020, 'Left 4 Dead 2', '2009-11-17', 4.08, 4, 9, 'https://media.rawg.io/media/games/c25/c25ebb8eb08790277ae2e2dce0d62174.jpg', '<p>Cooperative survival continues with a different set of characters. New survivors are making their way through 5 campaigns with an added ability to play through the story of the first game as well, using not only expanded arsenal of 20 ranged and 10 melee weapons but improved AI Director. Your surroundings and weather will change; enemy and item placement will differ from map to map, from difficulty to difficulty. New unique special zombies, placed in the unlucky for the player spot, can end your run.<br />\nHigh compatibility with community mods will allow you not only to add user-created maps but player models, enemy models, and even in-game music, which will help any player to create the unique experience on top of solid game mechanics.<br />\nCompetitive multiplayer mods from arena survival to a head-on competition with another team of survivors are addictive and, in addition to the campaign, will provide you with hundreds of hours of game content.</p>'),
(13536, 'Portal', '2007-10-09', 4.49, 5, 4, 'https://media.rawg.io/media/screenshots/19d/19d3effb85e8f40d0b5b004fb5ab5c76.jpg', '<p>Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. <br />\nSilent template for your adventures, Chell, wakes up in a testing facility. Sheâ€™s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS.<br />\nPlayers will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gunâ„¢), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see.<br />\nWhite environments will guide the playerâ€™s portal placement, forcing them to pay attention to the surroundings.  Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.</p>'),
(13537, 'Half-Life 2', '2004-11-16', 4.47, 5, 7, 'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg', '<p>Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends. <br />\nWhat is different, aside from the overall design quality, is the use of Valveâ€™s Source engine that not only expands on the fluidity of character model animations and movement but allows players to interact with a myriad of objects with the advanced and realistic (to an extent) physics. Classic Headcrab Zombies are revamped and have new variants that provide players with different threats. For a story-driven FPS, Half-Life 2 is unique in its plot delivery, and making in-game mechanics feel natural, be it platforming or driving.</p>');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `games_genres`
--
ALTER TABLE `games_genres`
  ADD PRIMARY KEY (`gameid`,`genreid`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`genreid`);

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`username`,`fecha`);

--
-- Indices de la tabla `usergames`
--
ALTER TABLE `usergames`
  ADD PRIMARY KEY (`userid`,`gameid`);

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
