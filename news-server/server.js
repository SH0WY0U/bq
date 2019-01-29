const express = require('express')

const {buildSchema} = require('graphql');
const grapqlHTTP = require('express-graphql');
const mysql = require('mysql')

const {mock,Random}= require('mockjs');


var pool= mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
})
    

const app = express();


app.get('/api/news/test1', (req,res)=>{
    let result = mock({
        state:0,
        message:'ok',
        data:{
            "list|5-15":[
                {
                    'id|+1':123113,
                    url:"@url('http')",
                    name:"@cname",
                    bigpicurl: "@image('376x224','@color')" ,
                    "smallimg|2-9": ["@image('750x652','@color')"],
                    age:"@integer( 15, 99 )",
                    "type|1":[1,2,3],
                    title:"@ctitle(5,15)"
                }
            ]
        }
    })
    res.json(result)
})

const schema = buildSchema(`
    type Account {
        name: String
        age: Int
        bgpicurl: String
        header: String
        firend: String
    }
    type Query {
        account: [Account]
    }
`)

const root = {
    account({ name}){
        return new Promise((resolve,reject)=>{
            pool.query('select name, age, bgpicurl, header, firend from user_info', (err, results)=> {
                console.log(results)
                if(err) {
                    console.log('出错了' + err.message);
                    return;
                }
                const arr = [];
                for(let i=0;i<results.length;i++) {
                    arr.push({
                        name: results[i].name,
                        age: results[i].age,
                        bgpicurl: results[i].bgpicurl,
                        header: results[i].header,
                        firend: results[i].firend
                    })
                }
                resolve(arr);
            })
        })
    }
}


app.use('/api/news/test',grapqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen('9090','localhost',(error)=>{
    if(error){
        console.log('启动失败')
    }
    else{
        console.log('启动成功')
    }
})