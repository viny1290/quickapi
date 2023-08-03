const {Router} = require('express');
const ConfigsController = require('../controlles/ConfigsController');
const verifyToken = require('../middleware/verifyToken');

const router = Router();

router.get('/config/:id', ConfigsController.pegaConfig);
router.post('/config', verifyToken, ConfigsController.criaConfig);
router.put('/config/:id', verifyToken, ConfigsController.atualizaConfig);

module.exports = router;