const express = require("express")
const router = express.Router()
const CardSchema = require('./db');

router.post('/card',async (req,res)=>{
    try{
        const data = req.body

        let newCardItem = new CardSchema({...data})

        newCardItem =await newCardItem.save();

        return res.status(200).json({
            data:newCardItem,
            success:true,
            message:' card created',
            err:[]
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:[],
            success:false,
            message:'failed to create card',
            err:error
        })
    }
   
})


// READ - GET All
router.get('/card', async (req, res) => {
    try {
        const cards = await CardSchema.find();
        return res.status(200).json({
            data: cards,
            success: true,
            message: 'Cards retrieved successfully',
            error: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: [],
            success: false,
            message: 'Failed to retrieve cards',
            error: error.message
        });
    }
});

// READ - GET One
router.get('/card/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const card = await CardSchema.findById(id);
        if (!card) {
            return res.status(404).json({
                data: null,
                success: false,
                message: 'Card not found',
                error: null
            });
        }
        return res.status(200).json({
            data: card,
            success: true,
            message: 'Card retrieved successfully',
            error: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to retrieve card',
            error: error.message
        });
    }
});

// UPDATE - PUT
router.put('/card/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedCard = await CardSchema.findByIdAndUpdate(id, data, { new: true });
        if (!updatedCard) {
            return res.status(404).json({
                data: null,
                success: false,
                message: 'Card not found',
                error: null
            });
        }
        return res.status(200).json({
            data: updatedCard,
            success: true,
            message: 'Card updated successfully',
            error: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to update card',
            error: error.message
        });
    }
});

// DELETE
router.delete('/card/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCard = await CardSchema.findByIdAndDelete(id);
        if (!deletedCard) {
            return res.status(404).json({
                data: null,
                success: false,
                message: 'Card not found',
                error: null
            });
        }
        return res.status(200).json({
            data: deletedCard,
            success: true,
            message: 'Card deleted successfully',
            error: null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: 'Failed to delete card',
            error: error.message
        });
    }
});

module.exports =router