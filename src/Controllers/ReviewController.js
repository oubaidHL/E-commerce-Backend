const db = require('../Config/DatabaseConnection');

const GetReview = (req,res) =>{
    db.query("SELECT * from review", (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const GetReviewById = (req,res) =>{
    db.query("SELECT * from review WHERE id_review = ?", [req.params.id], (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const AddReview = (req,res) =>{
    const params = req.body;
    db.query("INSERT INTO review SET ?",params, (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const DeleteReview = (req,res) =>{
    db.query("DELETE from review WHERE id_review = ?",[req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const UpdateReview = (req,res) =>{
    const {description_review, id_productFK} = req.body
    db.query("UPDATE review SET description_review = ? ,id_productFK = ? WHERE id_review = ?",[description_review, id_productFK, req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

module.exports = { GetReview, GetReviewById, AddReview, DeleteReview, UpdateReview};