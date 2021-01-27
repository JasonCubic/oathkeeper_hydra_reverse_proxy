const express = require('express');
const { Funnies } = require('funnies');
const packageJson = require('../../package.json');

// http://localhost:8087/api
function handleItWorks(req, res) {
  res.status(200).send('It Works!');
}

// http://localhost:8087/api/version
function handleVersion(req, res) {
  res.status(200).send(`backend v${packageJson.version} - node ${process.version} - NODE_ENV: ${process.env.NODE_ENV}`);
}

// http://localhost:8087/api/funny
function handleFunny(req, res) {
  const funnies = new Funnies();
  res.status(200).json({ funnyMessage: funnies.message() });
}

function handleGetHeaders(req, res) {
  res.status(200).json(req.headers);
}

// https://expressjs.com/en/guide/routing.html
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', handleItWorks);
router.get('/version', handleVersion);
router.get('/funny', handleFunny);
router.get('/get-backend-headers', handleGetHeaders);

module.exports = router;
