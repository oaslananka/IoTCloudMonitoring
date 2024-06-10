
# IoT Cloud Monitoring System

## Overview
The IoT Cloud Monitoring System is an advanced web application designed to monitor and manage IoT devices through a cloud-based platform. Built with Node.js, Express.js, MongoDB, DynamoDB, and AWS services, this project includes features such as device registration, real-time data monitoring, alerts, and data analysis. The application also supports DevOps tools like Terraform and GitHub Actions for CI/CD pipelines.

## Features
- **Device Management**: Register, update, delete, and view IoT devices.
- **Real-Time Monitoring**: Monitor data from devices in real-time.
- **Alerts and Notifications**: Set thresholds and receive alerts.
- **Data Analysis and Reporting**: Analyze and report on collected data.
- **Scalability**: Utilize load balancing solutions for scaling.
- **Security**: Ensure secure data transmission and authentication.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, DynamoDB
- **Cloud Platform**: AWS (Lambda, API Gateway, CloudFormation)
- **DevOps**: Terraform, GitHub Actions, Ansible
- **IoT Protocols**: MQTT, HTTPS
- **Web Services**: RESTful API
- **Languages**: Python, Bash

## Project Structure
```
IoTCloudMonitoring/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── deviceController.js
│   │   ├── dataController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Device.js
│   │   ├── Data.js
│   │   └── User.js
│   ├── node_modules/
│   ├── routes/
│   │   ├── deviceRoutes.js
│   │   ├── dataRoutes.js
│   │   └── userRoutes.js
│   ├── tests/
│   │   ├── device.test.js
│   │   ├── data.test.js
│   │   └── user.test.js
│   ├── utils/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── data/
├── docs/
├── terraform/
├── ansible/
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/oaslananka/IoTCloudMonitoring.git
   ```

2. Navigate to the `backend` directory and install the dependencies:
   ```bash
   cd IoTCloudMonitoring/backend
   npm install
   ```

3. Ensure MongoDB is installed and running on your system.

4. Start the server:
   ```bash
   npm start
   ```

## Usage
### Device Management
- Register a new device:
  ```http
  POST /api/devices
  {
    "name": "Device Name",
    "type": "Device Type",
    "location": "Device Location"
  }
  ```

- Get all devices:
  ```http
  GET /api/devices
  ```

- Update a device:
  ```http
  PUT /api/devices
  {
    "id": "device_id",
    "status": "online"
  }
  ```

- Delete a device:
  ```http
  DELETE /api/devices/:id
  ```

### Data Management
- Add data for a device:
  ```http
  POST /api/data
  {
    "deviceId": "device_id",
    "data": {
      "temperature": "22",
      "humidity": "45"
    }
  }
  ```

- Get data for a device:
  ```http
  GET /api/data/:deviceId
  ```

## Testing
Run the tests using the following command:
```bash
npm test
```

## License
This project is licensed under the MIT License.

## Author
[@oaslananka](https://github.com/oaslananka)
