const db = require("../Config/DatabaseConnection");

const GetCategories =(req, res) => {
    db.query("SELECT * from category", (err, result) =>{
        console.log("ahla bik ")
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};
/*
const GetCategoriesById = (req,res) => {
    db.query("SELECT * from category WHERE idCategory = ?" ,[req.params.idCategory] ,(err, row) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }  
    });
};

const AddCategory = (req,res) => {

    const params = req.body;
    db.query("INSERT INTO category SET ?" ,params, (err, row) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const DeleteCategory =(req,res) => {

    db.query("DELETE from category WHERE idCategory = ?" ,[req.params.idCategory],(err,row) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const UpdateCategory =(req,res) => {

    db.query("UPDATE category SET ? WHERE idCategory = ?" ,[req.params.idCategory],(err,row) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};*/

module.exports ={ GetCategories/*,GetCategoriesById,DeleteCategory, AddCategory,UpdateCategory*/};
