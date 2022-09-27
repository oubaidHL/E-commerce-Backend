const db=require('../Config/DatabaseConnection');

const GetProduct = (req,res) =>{
    db.query("SELECT * from product",(err,result) =>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const GetProductById = (req,res) =>{
    db.query("SELECT * from product WHERE id_product = ?", [req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const AddProduct = (req,res) =>{
    const params = req.body;
    db.query("INSERT INTO product SET ?", params, (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const DeleteProduct= (req,res)=>{
    db.query("DELETE from product WHERE id_product = ?", [req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const UpdateProduct = (req,res) =>{
    const {name_product,description_product,quantity_product,size_product,color_product,photo_product,discount_product,id_subcategoryFK} = req.body;
    db.query("UPDATE product SET name_product = ?,description_product = ?,quantity_product = ?,size_product = ?,color_product = ?,photo_product = ?,discount_product = ?,id_subcategoryFK = ? WHERE id_product = ?", [name_product,description_product,quantity_product,size_product,color_product,photo_product,discount_product,id_subcategoryFK,req.params.id], (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

module.exports = {GetProduct, GetProductById, AddProduct, DeleteProduct, UpdateProduct};