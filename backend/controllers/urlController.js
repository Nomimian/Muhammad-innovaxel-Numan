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
// PUT: Update URL
exports.updateUrl = async (req, res) => {
  const { code } = req.params;
  const { url } = req.body;
  const entry = await Url.findOne({ shortCode: code });

  if (!entry) return res.status(404).json({ message: 'Not found' });

  entry.url = url;
  entry.updatedAt = Date.now();
  await entry.save();

  res.status(200).json(entry);
};
// DELETE: Delete URL
exports.deleteUrl = async (req, res) => {
  const { code } = req.params;
  const result = await Url.findOneAndDelete({ shortCode: code });

  if (!result) return res.status(404).json({ message: 'Not found' });

  res.sendStatus(204);
};
// GET: Statistics
exports.getStats = async (req, res) => {
  const { code } = req.params;
  const entry = await Url.findOne({ shortCode: code });

  if (!entry) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(entry);
};



