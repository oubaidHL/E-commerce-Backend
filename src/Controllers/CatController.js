const db = require("../Config/DatabaseConnection");

const GetCategories =(req, res) => {
    db.query("Select * from category", (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const GetCategoriesById = (req,res) => {
    db.query("Select * from category WHERE idCategory = ?" ,[req.params.idCategory] ,(err, row) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }  
    });
};

const AddCategory = (req,res) => {

    const params = req.body;
    db.query("Insert into category set ?" ,params, (err, row) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const DeleteCategory =(req,res) => {

    db.query("Delete from category where idCategory = ?" ,[req.params.idCategory],(err,row) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const UpdateCategory =(req,res) => {

    db.query("Delete from category where idCategory = ?" ,[req.params.idCategory],(err,row) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

module.exports ={ GetCategories }
module.exports ={ GetCategoriesById }
module.exports ={ AddCategory }
module.exports ={ DeleteCategory }
module.exports ={ UpdateCategory }