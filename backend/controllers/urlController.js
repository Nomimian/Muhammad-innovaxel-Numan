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
// GET: Retrieve original URL
exports.getOriginalUrl = async (req, res) => {
  const { code } = req.params;
  const entry = await Url.findOne({ shortCode: code });

  if (!entry) return res.status(404).json({ message: 'Not found' });

  entry.accessCount += 1;
  await entry.save();

  res.status(200).json(entry);
};

