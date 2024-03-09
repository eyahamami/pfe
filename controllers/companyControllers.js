var company = require('../class/company');
var async = require('async');





module.exports = {
	add_company:async function(req,res){
    
        try{
             var name =req.body.name;
             var phone = req.body.phone;
             var email = req.body.email;
             var adresse = req.body.adresse;

             
             
             var newcompany = await company.add_company(name,phone,email,adresse);
            
             if(newcompany.rows.length == 0){
                res.status(200).json({newcompany:false});
                return;
            }
            res.status(200).json({companys:newcompany.rows});
                
             }
            catch (error){
                console.log(error);
        
            }
            
},

select_company:async function (req,res){
    try{  
   
    var companys = await company.select_company();
    
    if(companys.rows.length == 0){
        res.status(200).json({companys:false});
        return;
    }
    res.status(200).json({companys:companys.rows});
        
     }
    catch (error){
        console.log(error);

    }
    
},



deletecompany:async (req,res)=>{
    try{   
           var id_company =req.body.id_company;
        
           var result = await company.deletecompany(id_company);

if (deleteResult) {
            res.status(200).json({ updateArchi: true });
        } else {
            res.status(404).json({ updateArchi: false, message: 'La société spécifiée n\'a pas été trouvée ou n\'a pas pu être supprimée.' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de la société :', error);
        res.status(500).json({ message: 'Une erreur s\'est produite lors de la suppression de la société.' });
    }
       
},
Getcomapny:async function(req,res){
    var id_company = req.body.id_company;
    var company_list = await car.selectOnecompany(id_company);
    res.status(200).json({compnay:company_list.rows});
},
update_car:async function(req,res){

    try{
        
             var name =req.body.name;
             var adresse = req.body.adresse;
             var phone = req.body.phone;
             var email = req.body.email;
        
        var updateC = await company.update_company(name,adresse,phone,email);
        if(updateC.rows.length == 0){
            res.status(200).json({updateCompany:false});
            return;
        }
        res.status(200).json({updateCompany:updateC.rows});
            
         }
    catch (error){
        console.log(error);

    }
    
},

};