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

const GetCategoriesById = (req,res) => {
    db.query("SELECT * from category WHERE id_category = ?" ,[req.params.id] ,(err, result ) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }  
    });
};

const AddCategory = (req,res) => {

    const params = req.body;
    db.query("INSERT INTO category SET ?" ,params, (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const DeleteCategory =(req,res) => {

    db.query("DELETE from category WHERE id_category = ?" ,[req.params.id],(err,result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const UpdateCategory =(req,res) => {

    const{ name_category,description_category,photo_category} = req.body
    db.query("UPDATE category SET name_category = ? ,description_category = ?, photo_category = ? WHERE id_category= ?" ,[name_category,description_category,photo_category,req.params.id],(err,result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};


module.exports ={ GetCategories,GetCategoriesById,DeleteCategory, AddCategory,UpdateCategory};
