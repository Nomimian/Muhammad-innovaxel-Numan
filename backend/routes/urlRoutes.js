const express = require('express');
const router = express.Router();
const {
  createUrl,
  getOriginalUrl,
  updateUrl,
  deleteUrl,
  getStats,
} = require('../controllers/urlController');

router.post('/', createUrl);
router.get('/:code', getOriginalUrl);
router.put('/:code', updateUrl);
router.delete('/:code', deleteUrl);
router.get('/stats/:code', getStats);

module.exports = router;
