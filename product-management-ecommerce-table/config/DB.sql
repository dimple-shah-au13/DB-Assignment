3. Create schema in any Database script or any ORM (Object Relational Mapping).


-- Create the Product table
CREATE TABLE Product (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `SKU` VARCHAR(50),
    `category_id` INT(20) DEFAULT NULL,
    `inventory_id` INT(20) DEFAULT NULL,
    `price` DECIMAL(10, 2),
    `discount_id` INT(20) DEFAULT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`),
    KEY `PRODUCT_CATEGORY_FK_idx` (`category_id`),
    KEY `PRODUCT_INVENTORY_FK_idx` (`inventory_id`),
    KEY `PRODUCT_DISCOUNT_FK_idx` (`discount_id`),
    CONSTRAINT `PRODUCT_CATEGORY_FK` FOREIGN KEY (`category_id`) REFERENCES `Product_Category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `PRODUCT_INVENTORY_FK` FOREIGN KEY (`inventory_id`) REFERENCES `Product_Inventory` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `PRODUCT_DISCOUNT_FK` FOREIGN KEY (`discount_id`) REFERENCES `Discount` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,

);


-- Create the Product_Category table
CREATE TABLE Product_Category (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),

);

-- Create the Product_Inventory table
CREATE TABLE Product_Inventory (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `quantity` INT,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),

);

-- Create the Discount table
CREATE TABLE Discount (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `discount_percent` DECIMAL(5, 2),
    `active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
);
