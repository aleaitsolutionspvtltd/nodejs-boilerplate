# Node.js Backend Project  ![Node.js Backend](data:image/png;base64,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)

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
