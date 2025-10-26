# DevOps Experiment 7 - CI/CD Pipeline

This repository demonstrates a complete CI/CD pipeline using Node.js, Docker, and GitHub Actions for DevOps Experiment 7.

## 🚀 Project Overview

This project includes:
- **Node.js + Express** REST API
- **Jest + Supertest** for testing
- **Docker** containerization
- **GitHub Actions** CI/CD pipeline
- **Docker Hub** integration for image publishing

## 📋 API Endpoints

- `GET /` - Returns `{ "message": "CI/CD pipeline is working 🚀" }`
- `GET /health` - Returns health status with timestamp

## 🔄 CI/CD Flow

When you push to the `main` branch on DevOps-EXP7, the following happens:

1. **GitHub Actions** automatically triggers the CI/CD pipeline
2. **Build & Test Job**:
   - Checks out the repository
   - Sets up Node.js 18 environment
   - Installs dependencies with `npm install`
   - Runs tests with Jest using `npm test`
   - Builds a Docker image tagged with the commit SHA
   - Logs into Docker Hub using `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets
   - Pushes the Docker image with both commit SHA and `latest` tags to Docker Hub

3. **Deploy Job**:
   - Depends on successful completion of the build-test job
   - Shows manual deployment instructions for pulling and running the container
   - Optionally supports remote deployment via SSH (if secrets are configured)

## 🔐 Required GitHub Secrets

Configure these secrets in your repository settings (`Settings → Secrets and variables → Actions`):

- `DOCKER_USERNAME` - Your Docker Hub username
- `DOCKER_PASSWORD` - Your Docker Hub password/token

**Optional for remote deployment:**
- `DEPLOY_USER` - SSH username for deployment server
- `DEPLOY_HOST` - IP address or hostname of deployment server
- `DEPLOY_KEY` - Private SSH key for deployment server

## 🧪 How to Test Locally

### Prerequisites
- Node.js 18+
- Docker
- npm

### Running the Application

1. **Install dependencies and run tests:**
   ```bash
   npm install
   npm test
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Test the API:**
   ```bash
   curl http://localhost:3000/
   ```

### Docker Testing

1. **Build the Docker image:**
   ```bash
   docker build -t your-dockerhub-username/cicd-demo:local .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:3000 your-dockerhub-username/cicd-demo:local
   ```

3. **Test the containerized API:**
   ```bash
   curl http://localhost:3000/
   ```

## 🐳 Docker Details

- **Base Image:** `node:18-alpine` (lightweight Alpine Linux)
- **Port:** 3000 (exposed)
- **Production Dependencies:** Only production packages are installed
- **Command:** `npm start`

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow
├── .dockerignore              # Docker ignore file
├── Dockerfile                 # Docker configuration
├── jest.config.js            # Jest test configuration
├── package.json              # Node.js dependencies and scripts
├── README.md                 # This file
├── server.js                 # Express application
└── server.test.js            # Test suite
```

## 🧪 Test Coverage

The test suite includes:
- ✅ GET `/` endpoint returns correct message
- ✅ GET `/health` endpoint returns healthy status
- ✅ 404 handling for non-existent routes

## 🚀 Deployment

After the CI/CD pipeline runs successfully, you can deploy the application using:

```bash
# Login to Docker Hub
docker login -u your-dockerhub-username

# Pull the latest image
docker pull your-dockerhub-username/cicd-demo:latest

# Run the container
docker run -d --name cicd-demo -p 80:3000 your-dockerhub-username/cicd-demo:latest
```

## 📊 Pipeline Status

The pipeline status can be viewed in the GitHub Actions tab of this repository. Each push to `main` will trigger a new pipeline run.

## 🎯 Learning Objectives

This experiment demonstrates:
- **Continuous Integration** with automated testing
- **Containerization** with Docker
- **Continuous Deployment** with GitHub Actions
- **Infrastructure as Code** principles
- **DevOps** best practices

---

**Author:** Anish Patil  
**Course:** DevOps - Experiment 7  
**Repository:** https://github.com/anish00700/DevOps-EXP7.git
# Trigger CI/CD pipeline
# Added Docker Hub secrets
