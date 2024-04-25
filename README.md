# Node.js Backend Project  ![Node.js Backend](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7VBy1c2yMm4_DMrU9NsTY-r6T1SzofLT-ig&s)

This is a Node.js backend project developed with Express.js and MongoDB.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a Node.js backend application built to provide RESTful APIs for various purposes. It includes user authentication using JWT tokens, email sending functionality with SendGrid, and database operations using MongoDB with Mongoose.

## Installation

1. **Clone the repository**:

    ```bash
    git clone <repository_url>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```
    PORT=3000
    DATABASE_URL=<your_mongodb_uri>
    SENDGRID_API_KEY=<your_sendgrid_api_key>
    JWT_SECRET_KEY=<your_jwt_secret_key>
    EMAIL_HOST=<your_email_host>
    EMAIL_USER=<your_email_user>
    EMAIL_PASS=<your_email_pass>
    EMAIL_PORT=<your_email_port>
    ```

    Replace `<your_mongodb_uri>`, `<your_sendgrid_api_key>`, and `<your_jwt_secret_key>` with your MongoDB URI, SendGrid API key, and JWT secret key respectively.

## Usage

To start the server, run:

```bash
npm run dev
   
   ```
    ## Tech Stack

    - Node.js
    - Express.js
    - MongoDB
    - Mongoose
    - Bcrypt
    - SendGrid Mail
    - JSON Web Token (JWT)
    - CORS
    - NODEMON
