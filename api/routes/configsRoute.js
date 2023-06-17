const {Router} = require('express');
const ConfigsController = require('../controlles/ConfigsController');

const router = Router();

router.get('/config/:id', ConfigsController.pegaConfig);
router.post('/config', ConfigsController.criaConfig);
router.put('/config/:id', ConfigsController.atualizaConfig);

module.exports = router;