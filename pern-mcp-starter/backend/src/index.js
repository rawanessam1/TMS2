const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes");
const mcpRoutes = require("./mcp");

const app = express();
const PORT = process.env.PORT || 5000;

// The Middleware
app.use(cors());
app.use(express.json());

// The Routes
app.use("/api/tasks", taskRoutes);

// Mock MCP Endpoint
app.use("/mcp", mcpRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
