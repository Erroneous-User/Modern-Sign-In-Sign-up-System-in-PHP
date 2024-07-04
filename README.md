# Modern Sign-In/Sign-Up System in PHP

## Overview
- Minor College Project
- Used XAMPP v3.3.0 with PHP 8.2.12 (cli) (built: Oct 24 2023)
 This project is a modern, secure sign-in/sign-up system built using PHP and MySQL. It includes features such as user registration, login, password hashing, and session management. The system is designed to be simple, efficient, and secure, making it suitable for integration into various web applications.

## Features
- **User Registration**: Allows new users to create an account by providing a username, email, and password.
- **User Login**: Enables existing users to log in using their credentials.
- **Password Hashing**: Uses `password_hash()` and `password_verify()` functions to securely store and verify passwords.
- **Session Management**: Maintains user sessions to keep users logged in securely.
- **Error Handling**: Provides feedback for common errors such as invalid credentials or existing usernames/emails.

## Technologies Used
- **PHP**: Server-side scripting language used to handle form submissions and interact with the database.
- **MySQL**: Database management system used to store user information.
- **HTML/CSS**: Front-end technologies used to create the registration and login forms.

## Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Erroneous-User/Modern-Sign-In-Sign-up-System-in-PHP.git
    cd Modern-Sign-In-Sign-up-System-in-PHP
    ```

2. **Set Up the Database**:
    - Create a new MySQL database.
    - Import the `database.sql` file to create the necessary tables.

3. **Configure the Database Connection in login_signup.php**:
    <?php
// MySQL connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "regform";

$conn = new mysqli($servername, $username, $password, $dbname);
    
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    ?>
    ```

## Usage
1. **Register a New User**:
    - Navigate to `http://localhost/modern-signin-signup-php/index.php`.
    - Create User by clicking on Signup Button.
    - Fill in the credentials, submit.

2. **Log In**:
    - Navigate to `http://localhost/modern-signin-signup-php/index.php`.
    - Fill in the credentials submit.

## Security Considerations
- **SQL Injection**: Use prepared statements to prevent SQL injection.
- **Password Hashing**: Store passwords securely using `password_hash()` and verify them using `password_verify()`.
- **Session Management**: Implement secure session management practices to protect user sessions.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
- Inspired by various PHP and MySQL tutorials and best practices.

---

Feel free to customize this template to better fit your project's specifics. If you have any questions or need further assistance, let me know!