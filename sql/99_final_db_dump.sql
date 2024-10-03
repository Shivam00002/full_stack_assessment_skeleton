Create user table
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);


CREATE TABLE home (
    id INT AUTO_INCREMENT PRIMARY KEY,
    street_address VARCHAR(255) UNIQUE NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE user_home (
    user_id INT,
    home_id INT,
    PRIMARY KEY (user_id, home_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (home_id) REFERENCES home(id)
);


INSERT INTO user (username, email)
SELECT DISTINCT username, email
FROM user_home;


INSERT INTO home (street_address, city, state, zip_code, price)
SELECT DISTINCT street_address, city, state, zip_code, price
FROM user_home;


INSERT INTO user_home (user_id, home_id)
SELECT u.id, h.id
FROM user_home uh
JOIN user u ON uh.username = u.username
JOIN home h ON uh.street_address = h.street_address;


DROP TABLE user_home;