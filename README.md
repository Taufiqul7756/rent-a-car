# Nyntax MERN Developer Assessment

This project is an invoice generator for a car rental service built using the MERN stack. It allows users to input customer details, rental duration, discounts, additional charges, and generates/print an invoice based on this information.

## API Integration

- Used the provided API to fetch details of available cars.
- Parsed the API response to extract relevant information such as car details, hourly rates, daily rates, and weekly rates.

## Frontend Development

- Designed a user-friendly interface where users can input customer details (name, email, address, etc.), pickup date, drop-off date, discounts, and additional charges.
- Displayed the fetched car details with options for the user to select a car.
- Used Next.js for building the user interface and managed state using React hooks and context API.

## Backend Development

- Built using Node.js, Express, and MongoDB.
- Created API endpoints to handle invoice creation and fetching.
- Calculated the total rental charges considering the rental duration, selected car rates, discounts, and additional charges. Ensured the smallest amount is taken into consideration if the total amount using the hourly rate exceeds the amount using the daily rate. The daily rate to weekly rate is the same.

## Invoice Generator

- Created an invoice based on the inputs provided. Every modification is visible to the user instantly.
- Formatted the invoice with all necessary details including customer information, car details, rental duration, charges, discounts, additional charges, and total amount payable.
- Used Mongoose for data modeling and MongoDB for database management.

## Printing Functionality

- Implemented a feature to print/download the generated invoice.
- Used integrated a third-party library for printing `react-to-print` to provide a seamless printing experience.

## Testing

- Thoroughly tested the application to ensure all functionalities work as expected.
- Tested different scenarios such as different rental durations, discounts, and additional charges.

## Installation

### Client Project

```bash
# Clone the repository
git clone https://github.com/Taufiqul7756/rent-a-car

# Navigate to the project directory
cd rent-a-car

# Install dependencies
npm install

# Run the client
npx next dev
```

### Server

```bash
# Navigate to server directory
cd ..
cd server

# Install dependencies
npm install

# Run the server
npm start
```

## Environment Variables

```bash
# Create a .env file in the server directory and add your MongoDB connection string

DATABASE_URI=your_mongodb_connection_string
PORT=your port

# Run the server
npm start
```

### API DOCUMENTATION

API documentation can be found [here](https://documenter.getpostman.com/view/12853812/2sA3XLDNoA).
