CREATE DATABASE IF NOT EXISTS e_learning_platform_db;
USE e_learning_platform_db;

-- 1. compte (Account)
CREATE TABLE compte (
    id_compte INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    verificationCode VARCHAR(100),
    CONSTRAINT CK_compte_status CHECK (status IN ('active', 'inactive', 'verify','verifyAdmin')),
    CONSTRAINT CK_compte_type CHECK (type IN ('user', 'admin', 'professeur')),
    CONSTRAINT CK_compte_email CHECK (email REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- 2. admin
CREATE TABLE admin (
    idAdmin INT PRIMARY KEY,
    CONSTRAINT fk_idAdmin_compte FOREIGN KEY (idAdmin) REFERENCES compte(id_compte)
);

-- 3. user
CREATE TABLE user (
    idUser INT PRIMARY KEY,
    CONSTRAINT fk_idUser_compte FOREIGN KEY (idUser) REFERENCES compte(id_compte)
);

-- 4. professeur
CREATE TABLE professeur (
    id_Professeur INT PRIMARY KEY,
    description VARCHAR(255),
    CONSTRAINT fk_id_professeur_compte FOREIGN KEY (id_Professeur) REFERENCES compte(id_compte)
);

-- 5. category_formation
CREATE TABLE category_formation (
    id_category_formation INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    CONSTRAINT CK_category_formation_name CHECK (LENGTH(TRIM(name)) > 0)
);

-- 6. professeur_categoryFormation
CREATE TABLE professeur_categoryFormation (
    fk_id_category_formation INT,
    fk_id_Professeur INT,
    experience VARCHAR(100) NOT NULL,
    PRIMARY KEY (fk_id_category_formation, fk_id_Professeur),
    CONSTRAINT fk_category_formation FOREIGN KEY (fk_id_category_formation) REFERENCES category_formation(id_category_formation),
    CONSTRAINT fk_professeur_category FOREIGN KEY (fk_id_Professeur) REFERENCES professeur(id_Professeur)
);

-- 7. formation
CREATE TABLE formation (
    idFormation INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_category_formation INT,
    fk_id_professeur INT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    status VARCHAR(20),
    review FLOAT,
    CONSTRAINT CK_formation_status CHECK (status IN ('enabled', 'disabled', 'verifyAdmin')),
    CONSTRAINT CK_formation_review CHECK (review >= 0 AND review <= 5 AND review % 0.5 = 0),
    CONSTRAINT CK_formation_name CHECK (LENGTH(TRIM(name)) > 0),
    CONSTRAINT fk_formation_category FOREIGN KEY (fk_id_category_formation) REFERENCES category_formation(id_category_formation),
    CONSTRAINT fk_formation_professeur FOREIGN KEY (fk_id_professeur) REFERENCES professeur(id_Professeur)
);

-- 8. formation_contenu
CREATE TABLE formation_contenu (
    id_formation_contenu INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_formation INT,
    description TEXT,
    video_duration INT,
    CONSTRAINT CK_video_duration CHECK (video_duration >= 0),
    CONSTRAINT fk_formation_contenu_formation FOREIGN KEY (fk_id_formation) REFERENCES formation(idFormation)
);

-- 9. compte_formation_enrolled
CREATE TABLE compte_formation_enrolled (
    id_compte_formation_enrolled INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_compte INT,
    fk_id_formation INT,
    current_formation_contenu INT,
    current_formation_contenu_duration FLOAT,
    max_formation_contenu INT,
    CONSTRAINT CK_current_formation_contenu_duration CHECK (current_formation_contenu_duration >= 0),
    CONSTRAINT fk_enrolled_compte FOREIGN KEY (fk_id_compte) REFERENCES compte(id_compte),
    CONSTRAINT fk_enrolled_formation FOREIGN KEY (fk_id_formation) REFERENCES formation(idFormation),
    CONSTRAINT fk_enrolled_current_contenu FOREIGN KEY (current_formation_contenu) REFERENCES formation_contenu(id_formation_contenu),
    CONSTRAINT fk_enrolled_max_contenu FOREIGN KEY (max_formation_contenu) REFERENCES formation_contenu(id_formation_contenu)
);

-- 10. resource
CREATE TABLE resource (
    id_resource INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_formation_contenu INT,
    title VARCHAR(100) NOT NULL,
    url TEXT NOT NULL,
    CONSTRAINT CK_resource_title CHECK (LENGTH(TRIM(title)) > 0),
    CONSTRAINT CK_resource_url CHECK (url REGEXP '^https?://.+'),
    CONSTRAINT fk_resource_contenu FOREIGN KEY (fk_id_formation_contenu) REFERENCES formation_contenu(id_formation_contenu)
);

-- 11. comment
CREATE TABLE comment (
    id_comment INT AUTO_INCREMENT PRIMARY KEY,
    comment TEXT NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_id_formation_contenu INT,
    fk_id_compte INT,
    CONSTRAINT CK_comment_text CHECK (LENGTH(TRIM(comment)) > 0),
    CONSTRAINT fk_comment_contenu FOREIGN KEY (fk_id_formation_contenu) REFERENCES formation_contenu(id_formation_contenu),
    CONSTRAINT fk_comment_compte FOREIGN KEY (fk_id_compte) REFERENCES compte(id_compte)
);

-- 12. review
CREATE TABLE review (
    id_review INT AUTO_INCREMENT PRIMARY KEY,
    comment TEXT,
    review FLOAT,
    fk_id_compte INT,
    fk_id_formation INT,
    CONSTRAINT CK_review_value CHECK (review >= 0 AND review <= 5 AND review % 0.5 = 0),
    CONSTRAINT fk_review_compte FOREIGN KEY (fk_id_compte) REFERENCES compte(id_compte),
    CONSTRAINT fk_review_formation FOREIGN KEY (fk_id_formation) REFERENCES formation(idFormation)
);

-- 13. transaction_log
CREATE TABLE transaction_log (
    id_transaction_log INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_compte INT,
    log_message TEXT NOT NULL,
    type VARCHAR(50) NOT NULL,
    -- CRUD : create , read , update, delete
    CONSTRAINT CK_transaction_type CHECK (type IN ('read', 'create', 'delete', 'update')),
    CONSTRAINT fk_transaction_compte FOREIGN KEY (fk_id_compte) REFERENCES compte(id_compte)
);

-- 14. quiz
CREATE TABLE quiz (
    id_quiz INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_formation_contenu INT,
    title VARCHAR(100) NOT NULL,
    CONSTRAINT CK_quiz_title CHECK (LENGTH(TRIM(title)) > 0),
    CONSTRAINT fk_quiz_contenu FOREIGN KEY (fk_id_formation_contenu) REFERENCES formation_contenu(id_formation_contenu)
);

-- 15. question
CREATE TABLE question (
    id_question INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_quiz INT,
    description TEXT NOT NULL,
    CONSTRAINT CK_question_description CHECK (LENGTH(TRIM(description)) > 0),
    CONSTRAINT fk_question_quiz FOREIGN KEY (fk_id_quiz) REFERENCES quiz(id_quiz)
);

-- 16. question_option
CREATE TABLE question_option (
    id_question_option INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_question INT,
    isRight BOOLEAN NOT NULL,
    title VARCHAR(255) NOT NULL,
    CONSTRAINT CK_question_option_title CHECK (LENGTH(TRIM(title)) > 0),
    CONSTRAINT fk_question_option_question FOREIGN KEY (fk_id_question) REFERENCES question(id_question)
);

-- 17. quiz_response
CREATE TABLE quiz_response (
    id_quiz_response INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_quiz INT,
    fk_id_compte INT,
    isPassed BOOLEAN NOT NULL,
    percentage INT NOT NULL,
    CONSTRAINT CK_quiz_response_percentage CHECK (percentage >= 0 AND percentage <= 100),
    CONSTRAINT fk_quiz_response_quiz FOREIGN KEY (fk_id_quiz) REFERENCES quiz(id_quiz),
    CONSTRAINT fk_quiz_response_compte FOREIGN KEY (fk_id_compte) REFERENCES compte(id_compte)
);

-- 18. question_response
CREATE TABLE question_response (
    id_question_response INT AUTO_INCREMENT PRIMARY KEY,
    fk_id_question INT,
    fk_id_question_option INT,
    CONSTRAINT fk_question_response_question FOREIGN KEY (fk_id_question) REFERENCES question(id_question),
    CONSTRAINT fk_question_response_option FOREIGN KEY (fk_id_question_option) REFERENCES question_option(id_question_option)
);

-- Insert Test Data
-- 1. Insert Comptes (Accounts)
INSERT INTO compte (email, firstname, lastname, password, status, type) VALUES
-- Admins password : admin
('admin1@elearning.com', 'John', 'Doe', '$2b$12$rxgAgP4pKyMjUE.6F9UK5OJ8DJ4oS/yOJMa6VDXFIHdQpc4Bh4D1u', 'active', 'admin'), 
('admin2@elearning.com', 'Jane', 'Smith', '$2b$12$rxgAgP4pKyMjUE.6F9UK5OJ8DJ4oS/yOJMa6VDXFIHdQpc4Bh4D1u', 'active', 'admin'),
-- Professeurs password : professeur
('prof1@elearning.com', 'Michael', 'Johnson', '$2b$12$iTYM/RhrV0VfJACysmoTHOhOHN81BGAcA/dVu/xnUWMDxi8qNL1Si', 'active', 'professeur'),
('prof2@elearning.com', 'Sarah', 'Williams', '$2b$12$iTYM/RhrV0VfJACysmoTHOhOHN81BGAcA/dVu/xnUWMDxi8qNL1Si', 'active', 'professeur'),
-- Users password : user
('user1@elearning.com', 'David', 'Brown', '$2b$12$SKMcRrjLnNRlSHc7KjUhvu50xRMPIVWP2NkS5TD658hF8mi2soE4i', 'active', 'user'),
('user2@elearning.com', 'Emma', 'Davis', '$2b$12$SKMcRrjLnNRlSHc7KjUhvu50xRMPIVWP2NkS5TD658hF8mi2soE4i', 'active', 'user');

-- 2. Insert Admins
INSERT INTO admin (idAdmin) VALUES
(1), -- John Doe
(2); -- Jane Smith

-- 3. Insert Professeurs
INSERT INTO professeur (id_Professeur, description) VALUES
(3, 'Expert in Web Development and Database Management'),
(4, 'Specialist in Mobile App Development and UI/UX Design');

-- 4. Insert Users
INSERT INTO user (idUser) VALUES
(5), -- David Brown
(6); -- Emma Davis

-- 5. Insert Categories
INSERT INTO category_formation (name, description) VALUES
('Web Development', 'Learn modern web development technologies and frameworks'),
('Mobile Development', 'Master mobile app development for iOS and Android'),
('Database Management', 'Comprehensive database design and management'),
('UI/UX Design', 'Create beautiful and user-friendly interfaces');

-- 6. Insert Professeur-Category Relationships
INSERT INTO professeur_categoryFormation (fk_id_category_formation, fk_id_Professeur, experience) VALUES
(1, 3, '10 years'), -- Michael Johnson - Web Development
(2, 3, '8 years'),  -- Michael Johnson - Mobile Development
(3, 4, '7 years'),  -- Sarah Williams - Database Management
(4, 4, '5 years');  -- Sarah Williams - UI/UX Design


--  stop point : ---------------

-- 7. Insert Formations
INSERT INTO formation (fk_id_category_formation, fk_id_professeur, name, description, status, review) VALUES
(1, 3, 'Full Stack Web Development', 'Complete course on modern web development', 'enabled', 4.5),
(2, 3, 'Mobile App Development', 'Learn to build native mobile applications', 'enabled', 4.0),
(3, 4, 'Database Design Masterclass', 'Master database design and optimization', 'enabled', 4.5),
(4, 4, 'UI/UX Design Fundamentals', 'Learn the principles of good design', 'enabled', 4.0);

-- 8. Insert Formation Content
INSERT INTO formation_contenu (fk_id_formation, description, video_duration) VALUES
(1, 'Introduction to Web Development', 45),
(1, 'HTML and CSS Basics', 60),
(2, 'Introduction to Mobile Development', 45),
(2, 'Android Development Basics', 90),
(3, 'Database Design Principles', 60),
(3, 'SQL Optimization', 75),
(4, 'UI Design Principles', 45),
(4, 'UX Research Methods', 60);

-- 9. Insert Resources
INSERT INTO resource (fk_id_formation_contenu, title, url) VALUES
(1, 'Web Development Guide', 'https://example.com/web-dev-guide'),
(2, 'HTML/CSS Cheatsheet', 'https://example.com/html-css-cheatsheet'),
(3, 'Mobile Dev Handbook', 'https://example.com/mobile-dev-handbook'),
(4, 'Android Development Guide', 'https://example.com/android-guide');

-- 10. Insert Comments
INSERT INTO comment (comment, fk_id_formation_contenu, fk_id_compte) VALUES
('Great introduction!', 1, 5),
('Very helpful content', 2, 6),
('Clear explanations', 3, 5),
('Well structured course', 4, 6);

-- 11. Insert Reviews
INSERT INTO review (comment, review, fk_id_compte, fk_id_formation) VALUES
('Excellent course!', 4.5, 5, 1),
('Very informative', 4.0, 6, 2),
('Great learning experience', 4.5, 5, 3),
('Well organized content', 4.0, 6, 4);

-- 12. Insert Transaction Logs
INSERT INTO transaction_log (fk_id_compte, log_message, type) VALUES
(5, 'User enrolled in Web Development course', 'create'),
(6, 'User enrolled in Mobile Development course', 'create'),
(5, 'User completed first module', 'update'),
(6, 'User submitted assignment', 'create');

-- 13. Insert Quizzes
INSERT INTO quiz (fk_id_formation_contenu, title) VALUES
(1, 'Web Development Basics Quiz'),
(2, 'HTML/CSS Fundamentals Quiz'),
(3, 'Mobile Development Overview Quiz'),
(4, 'Android Basics Quiz');

-- 14. Insert Questions
INSERT INTO question (fk_id_quiz, description) VALUES
(1, 'What is the main purpose of HTML?'),
(1, 'Which CSS property is used for text color?'),
(2, 'What does CSS stand for?'),
(2, 'Which HTML tag is used for links?');

-- 15. Insert Question Options
INSERT INTO question_option (fk_id_question, isRight, title) VALUES
(1, true, 'To structure web content'),
(1, false, 'To style web content'),
(1, false, 'To add interactivity'),
(2, false, 'font-color'),
(2, true, 'color'),
(2, false, 'text-color');

-- 16. Insert Quiz Responses
INSERT INTO quiz_response (fk_id_quiz, fk_id_compte, isPassed, percentage) VALUES
(1, 5, true, 85),
(2, 6, true, 90),
(3, 5, true, 75),
(4, 6, true, 80);

-- 17. Insert Question Responses
INSERT INTO question_response (fk_id_question, fk_id_question_option) VALUES
(1, 1), -- Correct answer for first question
(2, 5), -- Correct answer for second question
(3, 3), -- Incorrect answer for third question
(4, 6); -- Correct answer for fourth question
