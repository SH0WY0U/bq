const express = require('express')

const { buildSchema } = require('graphql');
const grapqlHTTP = require('express-graphql');
const mysql = require('mysql')


var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
})

const app = express();

const schema = buildSchema(`
    type Account {
        id:Int
        name: String
        age: Int
        bgpicurl: String
        header: String
        firend: String
    }
    type Account2 {
        userid: Int
        type: String
        url: String
        bigimg: String
        smallimg: String
        title: String
        name: String
        header: String
    }
    type Query {
        account(id:Int): [Account]
        account2(userid:Int):[Account2]
    }
`)

const root = {
    account({ id }) {
        return new Promise((resolve, reject) => {
            pool.query(`select id, name, age, bgpicurl, header, firend from user_info where id=123114`, (err, results) => {
                if (err) {
                    console.log('出错了' + err.message);
                    return;
                }
                const arr = [];
                for (let i = 0; i < results.length; i++) {
                    arr.push({
                        name: results[i].name,
                        id: results[i].id,
                        age: results[i].age,
                        bgpicurl: results[i].bgpicurl,
                        header: results[i].header,
                        firend: results[i].firend
                    })
                }
                resolve(arr);
            })
        })
    },
    account2({ userid }) {
        return new Promise((resolve, reject) => {
            pool.query(`select userid, type, url, bigimg, smallimg, title, name, header from news_zong where userid=${userid}`, (err, results) => {
                if (err) {
                    console.log('出错了' + err.message);
                    return;
                }
                const arr = [];
                for (let i = 0; i < results.length; i++) {
                    arr.push({
                        userid: results[i].userid,
                        type: results[i].type,
                        url: results[i].url,
                        bigimg: results[i].bigimg,
                        smallimg: results[i].smallimg,
                        title: results[i].title,
                        name: results[i].name,
                        header: results[i].header
                    })
                }
                resolve(arr)
            })
        })
    }
}


app.use('/api/news/test', grapqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.use('/api/news/qq', grapqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.get('/api/home/catelist', (req, res) => {
    let data = require('./data/homeNavData.json');
    res.json({
        status: 0,
        message: 'ok',
        data
    });
})
app.listen('9090', 'localhost', (error) => {
    if (error) {
        console.log('启动失败')
    }
    else {
        console.log('启动成功')
    }
})