import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as Schema from "./schema"

export const db = drizzle<typeof Schema>(process.env.DATABASE_URL!);