CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE task(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    dataCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dataUpdate TIMESTAMP,
    statusOrg ENUM('pendente', 'concluida') DEFAULT 'pendente',
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE LOGS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    dataCreate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);