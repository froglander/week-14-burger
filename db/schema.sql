CREATE SCHEMA `burgers_db` ;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` TINYINT(1) NULL,
  `date` TIMESTAMP NULL,
  PRIMARY KEY (`id`));



