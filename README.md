# Notification-Service

A lightweight, event-driven notification microservice built with Node.js and Express. This service listens to a message queue and dispatches notifications via email, SMS, or other channels based on the event payload.

## 🚀 Features
- Asynchronous Event Handling: Utilizes message queues for efficient, non-blocking processing.
- Modular Architecture: Clean separation of concerns with controllers, services, and models.
- Environment-Based Configuration: Easily configurable via environment variables.
- Scalable Design: Ready to integrate into larger microservices architectures.

## 🧱 Project Structure
notification-service/
├── config/             # Configuration files
├── controllers/        # Request handlers
├── models/             # Data models
├── queue/              # Message queue consumers
├── routes/             # API route definitions
├── services/           # Business logic and utilities
├── .env.example        # Sample environment variables
├── app.js              # Application entry point
├── consumer.js         # Queue consumer script
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation

## ⚙️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm
- Message Queue (e.g., RabbitMQ, Kafka)

### Installation
Clone the repository:
git clone https://github.com/AbhinandanSengar/Notification-Service.git
cd Notification-Service

### Install dependencies:
npm install

### Configure environment variables:

- Copy the example environment file:
    cp .env.example .env
- Update the .env file with your configuration settings.

### Start the application:
npm run dev
node consumer.js

## 🛠️ Usage
- API Endpoints: Define and access API routes via the routes/ directory.
- Queue Consumer: The consumer.js script listens to the message queue and processes incoming events.
