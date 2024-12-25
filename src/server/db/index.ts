// src/db.ts
import { drizzle } from "drizzle-orm/vercel-postgres";

// import { neon } from "@neondatabase/serverless";
import { sql } from "@vercel/postgres";
import { config } from "dotenv";
import { z } from "zod";

config({ path: ".env" }); // Load .env variables

import * as schema from "./schema";

// Validate and type environment variables
// const envSchema = z.object({
//   DATABASE_URL: z.string().url(),
// });

// const env = envSchema.parse(process.env); // Throws error if DATABASE_URL is invalid

// Create the connection
// const sql = neon(process.env.DATABASE_URL!);

// Pass `sql` to drizzle
// const db = drizzle(sql,{logger:true});
const db = drizzle(sql, { schema });

export { db };
