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

module.exports ={ GetCategories }