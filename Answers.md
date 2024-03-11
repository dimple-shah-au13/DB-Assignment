Question One: Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
 
Answer:
Entities =

1. Product Entity:
The Product Table represents individual items available for sale or purchase in product-management-ecommerce.
It has columns such as:

id : **Primary Key** for each product with type int.
name : The name or title of product with type varchar(character varying).
desc : A description of the product with type Text.
SKUc: Stock Keeping Unit, a unique code for inventory management.
category_id : A **foreign key** referencing the primary key of the **product_category** Table.
inventory_id : A **foreign key** referencing the primary key of the product_inventory Table.
price : The price of the product with type decimal/numeric.
discount_id :  A **foreign key** referencing the primary key of the discount Table.
created_at : Timestamp for record purpose at time of creation.
modified_at : Timestamp for record purpose at time of modify.
deleted_at : Timestamp for record purpose at time of delete.

2. Product_Category Entity:
The product_category Table represents different categories or types of products.
It has columns such as:

id : **Primary Key** for each product with type int
name : The name or title of product with type varchar(character varying).
desc : A description of the product with type Text.
created_at : Timestamp for record purpose at time of creation.
modified_at : Timestamp for record purpose at time of modify.
deleted_at : Timestamp for record purpose at time of delete.

3. Relationship: 

 The relationship between these tables is established through a **foreign key** Specifically.
    - In the **Product** Table, there is an column called `category_id`. This column serves as a foreign key that references the primary key (`id`) of the **Product_Category** Table.
    - This means that each product is associated with a specific product category. The `category_id` in the **Product** Table points to the corresponding category in the **Product_Category** Table.
    Multiple products can belong to the same category, and a single product can be part of multiple categories.
    In summary,  the relationship allows us to link products to their respective categories. For example, if we have a product with `category_id = 3`, we can look up the corresponding category in the **Product_Category** entity to determine which category it belongs to (e.g., "Electronics," "Clothing," etc.).


******************************************************************************************************************************** 

Question Two:  How could you ensure that each product in the "Product" table has a valid category assigned to it?

To ensure that each product in the "Product" table has a valid category assigned to it, we can use the following strategies:

1. **Database Table Constraints**:
   - Define a foreign key constraint between the "Product" table's `category_id` column and the "Product_Category" table's `id` column.
   - This constraint ensures that any value entered in the `category_id` column of the "Product" table must exist as a valid `id` in the "Product_Category" table.
   - If an attempt is made to insert or update a product with an invalid category ID, the database will raise an error, preventing the operation.

2. **Validation Logic in Application Code**:
   - Implement validation logic in your application code before inserting or updating product records.
   - When adding a new product, verify that the specified category ID exists in the "Product_Category" table.
   - If the category ID is invalid, display an error message to the user or handle it appropriately.

3. **Business Logic Checks**:
   - In addition to database constraints, enforce business logic checks.
   - For example, when creating a new product, ensure that the selected category is active (if you have an "active" column in the "Product_Category" table).
   - If the category is inactive, prevent the product from being associated with it.

4. **User Interface Validation**:
   - If your application has a user interface for managing products, provide dropdowns or autocomplete fields for selecting categories.
   - Validate user input before submitting the form to ensure that the chosen category is valid.

5. **Data Integrity Maintenance**:
   - Regularly audit the data to identify any inconsistencies.
   - Run periodic checks to verify that all products have valid category assignments.
   - Correct any discrepancies found during these checks.

Also note that a combination of database constraints, application logic, and user interface validation will help maintain data integrity and ensure that each product is correctly associated with a valid category.
