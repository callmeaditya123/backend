const express = require("express")
const Contact = require("../models/contact")
const router = express.Router();

//CREATE: Tambah data buku

router.post('/contact',async(req, res)=>{
    const {name, email, message} = req.body
    try {
        const contact = await Contact.create({name, email, message});

        res.status(201).json(contact);

    }catch (error){

        res.status(500).json({ message: error.message });

    }

});

router.get('/contact',async(req, res)=>{
    try {
        const contact = await Contact.findAll();

        res.status(201).json(contact);

    }catch (error){

        res.status(500).json({ message: error.message });

    }

});

//READ: Ambil detail contact berdasarkan ID

router.get('/contact/:id',async(req, res)=>{
    try{
        const contact = await Contact.findByPk(req.params.id);

        if(!contact) return res.status(404).json({ message:'Contact not found'});

        res.json(contact);

    }catch (error){
        res.status(500).json({ message: error.message });
    }
});

// UPDATE: Edit data Contact

router.put('/contact/:id', async(req, res)=>{
    try{
        const contact = await Contact.findByPk(req.params.id);

        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        
        await contact.update(req.body);

        res.json(contact);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
});

//DELETE: Hapus data Contact

router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);

        if (!contact) return res.status(404).json({ message: 'Contact not found' });

        await contact.destroy();

        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router