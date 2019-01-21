import { MongoClient, Db, Collection } from "mongodb";
const { MONGODB_URL } = process.env;
export const run = async <T>(f: (db: Db) => Promise<T>): Promise<T> => {
  console.log("MONGODB_URL", MONGODB_URL);
  console.log("ENV", process.env);
  if (!MONGODB_URL) throw new Error("Missing env var MONGODB_URL");
  let client = await MongoClient.connect(
    MONGODB_URL,
    { useNewUrlParser: true }
  );
  let db = client.db("reports");
  let result = await f(db);
  client.close();
  return result;
};

export const collection = (collection: string) => <T>(
  f: (collection: Collection) => Promise<T>
): Promise<T> => run((db) => f(db.collection(collection)));
