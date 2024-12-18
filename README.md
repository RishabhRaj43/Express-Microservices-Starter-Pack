# Express-Microservices-Starter-Pack

This project serves as a starter pack for building **microservices** using **Express.js**. It provides a basic structure for creating modular microservices, handling JSON, managing file uploads, and efficiently processing FormData.

The primary goal of this project is to implement a scalable and modular microservices architecture where services can interact with each other, and handle requests, including form data and file uploads, efficiently.

## Libraries Used

The following libraries are used in this project to handle different functionalities:

1. **Express** - Web framework for Node.js.
   - Used for building the microservices, handling routing, and managing middleware.

2. **Multer** - Middleware for handling `multipart/form-data` (used for file uploads).
   - Handles form data including file uploads and text data in a clean and efficient way.

3. **CORS** - Middleware to enable Cross-Origin Resource Sharing (CORS).
   - Allows for secure cross-origin requests and data sharing between different origins.

4. **express-http-proxy** - Proxy middleware for Express.js.
   - Used for forwarding requests from one service to another in the microservices architecture. It enables efficient communication between services, especially in distributed systems.

5. **body-parser** (optional) - Middleware to parse incoming request bodies.
   - Helps parse JSON and URL-encoded data (though in this project, `multer` is preferred for handling form data).

## Important Notes

### 1. **Do Not Use `express.json()` Globally**

Avoid using `express.json()` at the root level (e.g., in the main Express app). This is because `express.json()` will consume the request body, preventing other middlewares, such as **multer** for handling file uploads, from accessing the request body. 

Instead, use **multer** for handling all types of form data (even if the form only contains text data). This allows you to manage file uploads and form data correctly without issues.

### 2. **Use `multer` for File Handling**

For handling any form data (including text and file uploads), **always use `multer`**. The following example demonstrates how to handle form data, including files:

```javascript
const multer = require('multer');

const upload = multer();

app.post('/upload', upload.any(), (req, res) => {
  console.log("Request: ", req.body);
  res.json({ message: "FormData Received", data: req.body });
});
