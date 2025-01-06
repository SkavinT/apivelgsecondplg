const Velg = require("../model/velg");

const createVelg= (req, res) => {
    const velg = new Velg({
        nama: req.body.nama,
        tipe : req.body.tipe,
        brand : req.body.brand
    });

    //console.log(velg);
    velg.save()
    .then((createdVelg)=>{
        res.status(201).json({
                message : "Data berhasil disimpan",
                velgId : createdVelg._id
        });
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });
   
};

const readVelg = (req, res)=>{
    Velg.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Get Data Velg",
            velgs : documents
        });
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });
};

const deleteVelg= (req, res) => {
    Velg.deleteOne({_id : req.params.id})
    .then((result)=>{
        res.status(200).json({
            message : "Velg berhasil dihapus ",
            result : result 
        });
    })
    .catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });
};

const updateVelg = (req, res) => {
   
     const velg = new Velg({
        _id : req.params.id,
        nama : req.body.judul,
        tipe : req.body.penulis,
        brand : req.body.genre
    });

    Velg.updateOne({_id : req.params.id}, velg)
    .then((hasil)=>{
        res.status(200).json({
            message : "Update Berhasil",
            result : hasil    
        });
    }).catch((err)=>{
        //console.log(err);
        res.status(500).json({
                message : "internal server error !"
                //error : err
        });
    });;

};


module.exports ={createVelg, readVelg, deleteVelg, updateVelg}