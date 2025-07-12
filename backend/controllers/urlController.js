const Url = require('../models/urlModel');
const generateShortCode = require('../utils/generateShortCode');

// POST: Create short URL
exports.createUrl = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ message: 'URL is required' });

  const shortCode = generateShortCode();
  const newUrl = new Url({ url, shortCode });
  await newUrl.save();

  res.status(201).json(newUrl);
};

