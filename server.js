import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Use the port provided by Google Cloud or default to 8080
const port = parseInt(process.env.PORT) || 8080;

// Serve the static files from the Vite build folder (dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any requests by sending back index.html (for SPA routing)
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'dist', 'index.html');
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    // Safety check: Prevent crash if dist is missing
    res.status(200).send('Election Guide AI: Server is UP, but the "dist" folder is missing. Please ensure "npm run build" is executed.');
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Listening on http://0.0.0.0:${port}`);
});
