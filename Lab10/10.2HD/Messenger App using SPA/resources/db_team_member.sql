

CREATE TABLE `idd_team_member` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `idd_team_member` (`id`, `username`, `password`) VALUES
(1, 'Bob', 'bob123'),
(2, 'Evan', 'evan123'),
(3, 'Jim', 'jim123'),
(4, 'Ken', 'ken123'),
(5, 'Luke', 'luke123'),
(6, 'Liam', 'liam123')


