if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./Routes');
