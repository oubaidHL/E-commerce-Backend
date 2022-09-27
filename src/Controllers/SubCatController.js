const db = require("../Config/DatabaseConnection");

const GetSubCategories =(req, res) => {
    db.query("SELECT * from subcategory", (err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const GetSubCategoriesById =(req,res) =>{
    db.query("SELECT * from subcategory WHERE id_subcategory = ? ",[req.params.id], (err,result)=>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const AddSubCategory = (req,res)=>{
    const params = req.body;
    db.query("INSERT INTO subcategory SET ?",params, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const DeleteSubCategory = (req,res)=>{
    db.query("DELETE from subcategory WHERE id_subcategory = ?", [req.params.id],(err,result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
};

const UpdateSubCategory = (req,res) =>{
    const{name_subcategory,id_categoryFK} = req.body;
    db.query( "UPDATE subcategory SET name_subcategory=?, id_categoryFK=? WHERE id_subcategory =?", [name_subcategory,id_categoryFK,req.params.id], (err,result)=>{
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    } );
};

module.exports ={ GetSubCategories,GetSubCategoriesById,AddSubCategory,DeleteSubCategory,UpdateSubCategory }