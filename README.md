# Annoncement-Annoncer Application Backend

Welcome to the backend repository for the Annoncement-Annoncer Application! This backend is built with Node.js and Express.js, and it utilizes MongoDB for data storage. Additionally, Nodemailer integration is included to send information emails to specified email addresses.

## Key Features

- **Node.js and Express.js:** Powerful backend framework for building scalable and efficient applications.
- **MongoDB:** NoSQL database for storing announcement data in a flexible and scalable manner.
- **Nodemailer Integration:** Seamlessly send information emails to designated email addresses.
- **RESTful API:** Well-structured API endpoints for smooth communication between the frontend and backend.
- **Security:** Implementation of security best practices to safeguard user data and prevent unauthorized access.
- **Scalability:** Designed with scalability in mind to accommodate future growth and increasing user demands.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your_username/annoncement-annoncer-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd annoncement-annoncer-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up MongoDB:
   
   - Ensure MongoDB is installed and running on your system.
   - Update the MongoDB connection details in the configuration files as needed.

5. Set up Nodemailer:

   - Enable "Two step verification" for your Google account.
   - Generate a 16-digit "App password" for Nodemailer and store it in your `.env` file.

6. Start the server:

    ```bash
    node index.js
    ```

7. The backend server will be running at `http://localhost:5001`.
   
## Usage

1. Set up the backend server as described in the installation steps.
2. Integrate the backend with your frontend application using the provided API endpoints.
3. Utilize the Nodemailer integration to send information emails as required.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit pull requests or open issues for any improvements or features you'd like to see added.

**Note:** You want use my backend project to create MongoDB Atlas database connection and Google mail address with "Two step verification 16 digit password" filled in the `.env` file add env keys to more reference to view the `controller/mail.js` File. I've hidden the database URL. If you need anything, please feel free to contact me.

