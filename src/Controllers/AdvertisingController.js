const db = require('../Config/DatabaseConnection');

const GetAdvertising =(req,res) => {
    db.query("SELECT * from advertising", (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const GetAdvertisingById = (req,res) =>{
    db.query("SELECT * from advertising WHERE id_ads = ?", [req.params.id], (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const AddAdvertising = (req,res) => {
    const params = req.body;
    db.query("INSERT INTO advertising SET ?", params, (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        } 
    });
};

const DeleteAdvertising = (req,res) => {
    db.query("DELETE from advertising WHERE id_ads = ?", [req.params.id], (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        } 
    });
};

const UpdateAdvertising = (req,res) =>{
    const{ photo_ads,id_productFK } = req.body;
    db.query("UPDATE advertising SET photo_ads = ?, id_productFK = ? WHERE id_ads = ? ", [photo_ads,id_productFK,req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        } 
    });
};

module.exports = { GetAdvertising, GetAdvertisingById, AddAdvertising, DeleteAdvertising, UpdateAdvertising}