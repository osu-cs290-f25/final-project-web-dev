import { integer, pgTable, primaryKey, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "wins",
  {
    winningPlayer: text().notNull(),
    losingPlayer: text().notNull(),
		time: integer()
  },
  (table) => [
    primaryKey({ columns: [table.winningPlayer, table.losingPlayer] }),
  ],
);
