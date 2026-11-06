# Library Management System

## Project Overview
The Library Management System is a web-based application developed using the Frappe Framework. It helps manage library books, members, memberships, and book issue and return transactions.

## Features

- **Article Management:** Add and manage books with details such as title, author, ISBN, publisher, and availability status.
- **Library Member Management:** Store and manage member information.
- **Membership Management:** Create and manage library memberships with validity dates and payment status.
- **Book Transactions:** Handle book issuing and returning.
- **Library Settings:** Configure loan periods and maximum number of books a member can borrow.
- **Validation:** Apply rules for membership validity, book availability, and borrowing limits.
- **Website Portal:** Display published books and their details.

## Technologies Used

- Python
- Frappe Framework
- JavaScript
- MariaDB
- HTML
- CSS
- Git and GitHub

## Main Modules

1. Article
2. Library Member
3. Library Membership
4. Library Settings
5. Library Transaction

## Installation and Setup

1. Set up Frappe Bench in your system.
2. Open the terminal and navigate to your bench directory.
3. Get the application:

```bash
bench get-app --branch version-16 https://github.com/rithumary/Frappe-Library-Management.git
```

4. Install the application on your site:

```bash
bench --site your-site-name install-app library_management
```

5. Start the bench:

```bash
bench start
```

## Repository

GitHub: https://github.com/rithumary/Frappe-Library-Management

## Author

Rithu Mary Varghese
