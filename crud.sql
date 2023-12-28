-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2023 at 08:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `post_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `content` text DEFAULT NULL,
  `author` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`post_id`, `title`, `content`, `author`, `created_at`) VALUES
(2, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 12:25:20'),
(4, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 12:25:27'),
(5, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 12:25:29'),
(7, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 12:25:31'),
(9, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 12:25:48'),
(10, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Faiz Ahmad', '2023-12-28 12:26:26'),
(11, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:17'),
(12, 'Last Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:19'),
(13, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:20'),
(14, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:21'),
(15, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:22'),
(16, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:23'),
(17, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:24'),
(18, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:25'),
(19, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:26'),
(20, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:27'),
(21, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 15:27:28'),
(22, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Ku', '2023-12-28 15:27:29'),
(23, 'Second Sql PROJECT', 'This table structure allows you to store blog posts with information such as the title, content, author, and creation timestamp. You can modify the data types and constraints according to your specific requirements.', 'Ateesh Kumar', '2023-12-28 18:47:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`post_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
