-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2018 at 06:24 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `registereduser`
--

CREATE TABLE `registereduser` (
  `regid` int(50) NOT NULL,
  `username` varchar(500) DEFAULT NULL,
  `emailid1` varchar(500) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `mobileno` varchar(50) DEFAULT NULL,
  `imageprofile` varchar(500) DEFAULT NULL,
  `creationdate` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registereduser`
--

INSERT INTO `registereduser` (`regid`, `username`, `emailid1`, `password`, `gender`, `mobileno`, `imageprofile`, `creationdate`) VALUES
(1, 'vignesh', 'vicky@gmail.com', '123', 'male', '9865236558', NULL, '2018-07-18 16:03:11'),
(2, 'Suresh', 'suresh@gmail.com', '123', 'male', '9865323565', NULL, '2018-07-18 17:13:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registereduser`
--
ALTER TABLE `registereduser`
  ADD PRIMARY KEY (`regid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registereduser`
--
ALTER TABLE `registereduser`
  MODIFY `regid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
