import { pgTable, primaryKey, text, uuid } from "drizzle-orm/pg-core";

export const winsTable = pgTable(
  "wins",
  {
    battleId: uuid().defaultRandom().primaryKey(),
    winningPlayer: text().notNull(),
    losingPlayer: text().notNull(),
		time: text().notNull()
  },
);
