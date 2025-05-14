const sequelize = require("../config.js");





sequelize.sync({force:false}).then(()=>{
    console.log("Database sincronizada");
}).catch((err)=>{
    console.log("Database no sincronizada", err);

});

module.exports= {sequelize};
