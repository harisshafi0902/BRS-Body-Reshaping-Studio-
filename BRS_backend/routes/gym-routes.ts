const exp = require('express');

const router = exp.Router()
const gymModel = require('./../modal/gym-modal');
//Get all Method
router.get('/list', async (req: any, res: any) => {
    try {
        const data = await gymModel.find();
        res.json(data)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
//Get by ID Method
router.get('/details/:id', async (req: any, res: any) => {
    try {
        const data = await gymModel.findById(req.params.id);
        res.json(data)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;