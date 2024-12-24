# Crown-Carry_Bag_Shop

Crown Carry is a feature-rich e-commerce platform built for selling premium bags. This project showcases a clean, functional UI and core e-commerce functionalities, built using **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**.

## Features

1. **User Authentication**:
   - User registration with secure password handling.
   - User login with validation.
   - Logout functionality.

2. **User Dashboard**:
   - View and manage profile details.
   - View and manage orders.
   - View and update the cart.

3. **Product Catalog**:
   - Browse premium bags.
   - Sorting options (e.g., by popularity).
   - Filtering options (e.g., by availability, discounts).

4. **Cart Management**:
   - Add products to the cart.
   - View cart items with pricing and discounts.
   - Remove items from the cart.

5. **Responsive UI**:
   - Built with Tailwind CSS for modern and responsive design.

## Screenshots

### Landing Page
![Landing Page](/Screenshot 2024-12-23 223233.png)

### Product Catalog
![Product Catalog](./screenshots/Screenshot2.png)

### User Dashboard
![User Dashboard](./screenshots/Screenshot3.png)

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templates), Tailwind CSS
- **Database**: [Specify the database, e.g., MongoDB, MySQL, etc.]

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     DATABASE_URL=your_database_url
     SESSION_SECRET=your_secret_key
     ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

## Folder Structure

```plaintext
CrownCarry/
├── public/              # Static files (CSS, images, JS)
├── views/               # EJS templates
├── routes/              # Express routes
├── controllers/         # Request handlers
├── models/              # Database models
├── middleware/          # Custom middleware
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
└── server.js            # Application entry point
```

## Future Enhancements

- Integrate payment gateway (e.g., PayPal, Stripe).
- Add product reviews and ratings.
- Implement order history and tracking.
- Add admin panel for managing products and orders.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

---

Feel free to reach out with any questions or suggestions!

