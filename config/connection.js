const{Client} =require('pg')

const client =new Client({
        user: 'postgres',
		host: 'localhost',
		port: 5432,
		password: 'nada',
		database: 'Pfe'
})
client.connect((err) =>{
    if(err){
        console.error('connection error',err.stack)
    }

    else{
        console.log('connected')
    }
})
module.exports = client;