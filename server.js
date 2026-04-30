import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Use the port provided by Google Cloud or default to 8080
const port = parseInt(process.env.PORT) || 8080;

// Serve the static files from the Vite build folder (dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any requests by sending back index.html (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// IMPORTANT: Bind to 0.0.0.0 for Cloud Run
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Listening on http://0.0.0.0:${port}`);
});
