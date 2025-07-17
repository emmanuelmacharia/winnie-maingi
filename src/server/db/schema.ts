// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `estateplanner_${name}`);

export const guest_feedback_table = createTable(
  "guest_feedback",
  (d) => ({
    guest_id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: d.varchar({ length: 256 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
    email: d.varchar({ length: 256 }).notNull(),
    message: d.text().notNull(),
  }),
  (t) => [index("guest_name_idx").on(t.name)],
);

export type DB_GuestFeedback = typeof guest_feedback_table.$inferSelect;
