import { MongoClient } from 'mongodb'

const url = process.env.MONGODB_URI
const options = {
    useNewUrlParser: true,
}

let client
let clientPromise

if(!process.env.MONGODB_URI){
    throw new Error('Add Mongo URI to .env.local')
}

if(process.env.NODE_ENV === 'development'){
    if(!global._mongoClientPromise) {
        client = new MongoClient(url, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
}else{
    client = new MongoClient(url, options)
    clientPromise = client.connect()
}

export default clientPromise