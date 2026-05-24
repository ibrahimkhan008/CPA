import { MongoClient, Db, Collection } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = "cpahustler";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb(): Promise<Db> {
  if (cachedDb) return cachedDb;
  if (!cachedClient) {
    cachedClient = new MongoClient(MONGODB_URI);
    await cachedClient.connect();
  }
  cachedDb = cachedClient.db(DB_NAME);
  return cachedDb;
}

export async function getWebinarRegistrations(): Promise<Collection> {
  const db = await getDb();
  return db.collection("webinar_registrations");
}

export async function getConsultationBookings(): Promise<Collection> {
  const db = await getDb();
  return db.collection("consultation_bookings");
}