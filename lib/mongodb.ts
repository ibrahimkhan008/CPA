import { MongoClient, Db, Collection } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = "cpahustler";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function getDb(): Promise<Db> {
  if (cachedDb) return cachedDb;
  if (!cachedClient) {
    // SECURITY: Explicit TLS + bounded timeouts.
    // socketTimeoutMS must be LOW (< webhook timeout) so Razorpay gets fast 500s
    // and retries cleanly instead of waiting 60s+ for MongoDB to time out.
    // With socketTimeoutMS:10s, Vercel Edge (30s limit) stays well ahead of MongoDB.
    cachedClient = new MongoClient(MONGODB_URI, {
      tls: true,
      tlsAllowInvalidCertificates: false,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 10000, // fail fast — Razorpay retries, idempotency saves us
    });
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

export async function getCancelledConsultations(): Promise<Collection> {
  const db = await getDb();
  return db.collection("cancelled_consultations");
}