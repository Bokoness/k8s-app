const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "2.0"

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to NodeCity",
		version: process.env.VERSION || "1.0",
		env: process.env.ENV_NAME || "unknown",
	})
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`NodeCity v${VERSION} running on port ${PORT}`);
});
