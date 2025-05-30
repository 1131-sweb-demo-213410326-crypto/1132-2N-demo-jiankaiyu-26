CREATE TABLE product_26 (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(225),
    price REAL,
    category VARCHAR(255),
    img TEXT,
    remote_img TEXT
);

INSERT INTO product_26 (id, title, price, category, img, remote_img)
VALUES
    (1, 'Emperor Bed',       21.99, 'Liddy', './images/product-1.jpg', ''),
    (2, 'Accent Chair',      25.99, 'Caressa','./images/product-2.jpg', ''),
    (3, 'High-Back Bench',    9.99, 'Ikea',   './images/product-3.jpg', '');

