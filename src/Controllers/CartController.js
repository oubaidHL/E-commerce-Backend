const db = require('../Config/DatabaseConnection');

const GetCart = (req,res) => {
    db.query("SELECT * from panier", (err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const GetCartById = (req,res) => {
    db.query("SELECT * from panier WHERE id_panier = ?" ,[req.params.id] ,(err, result ) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }  
    });
};

const AddCart = (req,res) => {

    const params = req.body;
    db.query("INSERT INTO panier SET ?" ,params, (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const DeleteCart =(req,res) => {

    db.query("DELETE from panier WHERE id_panier = ?" ,[req.params.id],(err,result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};

const UpdateCart =(req,res) => {

    const{ date_panier,quantity_product } = req.body
    db.query("UPDATE panier SET date_panier = ? ,quantity_product = ? WHERE id_panier = ?" ,[date_panier,quantity_product,req.params.id],(err,result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
};


module.exports ={ GetCart,GetCartById,DeleteCart, AddCart,UpdateCart};
