const mongooes=require('mongoose');


const productTypeSchema=new mongooes.Schema({
    productType:{
        type:String,
    },
    image:{
        type:String,
        
    }
})
module.exports=mongooes.model('ProductType',productTypeSchema)