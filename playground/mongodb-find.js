const {MongoClient, ObjectID} = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to Mongodb server")
    }
    console.log("connect to mongodb server")

    // db.collection("Todos").find({
    //     _id: new ObjectID("5aeef0f61973c4b09b2b3d44")
    // }).toArray().then((docs) => {
    //     console.log("Todos")
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log("Unable to fetch todos", err)
    // })

    db.collection("Todos").find().toArray().then((docs) => {
        console.log("Todos")
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log("Unable to fetch todos", err)
    })

    db.close()
})