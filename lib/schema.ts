import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";

export const winsTable = pgTable(
  "wins",
  {
    winningPlayer: text().notNull(),
    losingPlayer: text().notNull(),
		time: text().notNull()
  },
  (table) => [
    primaryKey({ columns: [table.winningPlayer, table.losingPlayer] }),
  ],
);
