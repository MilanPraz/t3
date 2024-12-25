import { timeStamp } from "console";
import {
  pgTable,
  serial,
  varchar,
  boolean,
  integer,
  timestamp,
  text,
  pgTableCreator,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `t3gallery_${name}`);

export const customers = createTable("customer", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  imgUrl: varchar("img_url", { length: 2000 }).notNull(), //optional
  createdAt: timestamp("created_at").defaultNow().notNull(), //created_at is your collumn name and createdAt is js/ts object ->these both are mapped and we use the createdAt variable we made to access or use
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
