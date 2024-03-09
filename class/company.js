const Client = require('../config/connection');
var config = require('../config/connection');
var async = require('async');

module.exports = {
	select_company:async function(){
		
		const selcompany = await Client.query("SELECT * from company");
		return selcompany;
        
	},

    
	add_company:async function(name,phone,email,adresse){
        const company = await Client.query("INSERT INTO company (name,phone,email,adresse) VALUES ($1,$2,$3,$4) RETURNING* ", [name,phone,email,adresse]);
		return company;
	},

	deletecompany:async(id_company)=>
	{
	       var deletecompany =Client.query("DELETE FROM societe WHERE id = $1"[id_company]);
		   return deletecar;
	
	},
	
	

	update_company:async function(id_company,name,adresse,phone,email){
		const updatecompany =await Client.query("UPDATE compnay SET name =$1 , adresse =$2 ,phone =$3,email =$4 WHERE id_compny =$7 ",[name,adresse,phone,email,id_company]);
        return updatecompany;
	},

	selectOneCompany:async function(id_company){
		return await Client.query("SELECT * from Company where id_company = $1",[id_company]);
        
	},

	
};