const db = require('../Config/DatabaseConnection');

const GetRating =(req,res) => {
    db.query("SELECT * from rating", (err,result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const GetRatingById = (req,res) =>{
    db.query("SELECT * from rating WHERE id_rating = ?", [req.params.id], (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const AddRating = (req,res) => {
    const params = req.body;
    db.query("INSERT INTO rating SET ?", params, (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        } 
    });
};

const DeleteRating = (req,res) => {
    db.query("DELETE from rating WHERE id_rating = ?", [req.params.id], (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        } 
    });
};

const UpdateRating = (req,res) =>{
    const{ score_rating,id_productFK } = req.body;
    db.query("UPDATE rating SET score_rating = ?, id_productFK = ? WHERE id_rating = ? ", [score_rating,id_productFK,req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        } 
    });
};

module.exports = { GetRating, GetRatingById, AddRating, DeleteRating, UpdateRating}