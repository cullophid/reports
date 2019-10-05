import { MongoClient, ObjectId } from "mongodb";
import { User } from "./server/Models";

const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true });


const run = async () => {
  const connection = await client.connect();

  const usersCollection = connection.db("reports").collection<User>("users")
  await usersCollection.insert({
    _id: new ObjectId(),
    email: "andreas.moller@gmail.com",
    firstName: "",
    lastName: "",
    createdAt: new Date()

  })
  const users = await usersCollection.find({}).toArray()

  console.log({ users })

}

run()
  .catch(console.error)