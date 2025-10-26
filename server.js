const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: "CI/CD pipeline is working 🚀" });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Export the app for testing
module.exports = app;

// Only start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
