# Node.js Backend Project  ![Node.js Backend](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItkCu8m02f6dL7IJNfkMZzFxzTK_uRgf0JjHMWtb60w&s)

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
    MONGO_URI=<your_mongodb_uri>
    SENDGRID_API_KEY=<your_sendgrid_api_key>
    JWT_SECRET=<your_jwt_secret_key>
    ```

    Replace `<your_mongodb_uri>`, `<your_sendgrid_api_key>`, and `<your_jwt_secret_key>` with your MongoDB URI, SendGrid API key, and JWT secret key respectively.
