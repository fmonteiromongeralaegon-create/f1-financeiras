import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";

export const propostasTable = pgTable("propostas", {
  id: serial("id").primaryKey(),
  banco: text("banco").notNull(),
  nome: text("nome").notNull(),
  cpf: text("cpf").notNull(),
  email: text("email").notNull(),
  celular: text("celular").notNull(),
  dados: jsonb("dados").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type InsertProposta = typeof propostasTable.$inferInsert;
export type Proposta = typeof propostasTable.$inferSelect;
