This project is a RESTful API for managing contacts, built with Node.js and Express.js. It includes user authentication with JWT, contact management features, file handling for CSV/Excel uploads, and advanced filtering options. The API uses PostgreSQL or MySQL for data storage and includes security features like data validation, email verification, and password reset functionality.

Features
JWT-Based Authentication: Secure login, signup, and authentication of users.
User Management: Includes email verification and password reset via a one-time code.
Contact Management: Create, update, delete, and retrieve contacts.
Batch Processing: Handle batch contact operations and CSV/Excel uploads.
Filtering: Advanced filtering of contacts by fields like name, email, or phone number.
Timezone Support: Manage time zones for users and contacts.
CSV/Excel File Handling: Upload and download contacts in CSV/Excel format.
Data Validation: Secure and validate inputs to prevent SQL injection and XSS attacks.
Error Handling: Graceful error handling with descriptive error messages.
Tech Stack
Node.js: JavaScript runtime.
Express.js: Backend framework.
PostgreSQL/MySQL: Relational database for data storage.
JWT: For secure authentication.
Multer: For handling file uploads.
dotenv: For managing environment variables.
bcrypt: For hashing passwords securely.
