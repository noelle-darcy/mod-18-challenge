const router = require('express').Router();
const apiRoutes = requre('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Wrong Route.');
}); 

module.exports = router; 