import { Hono } from "hono";
import { drizzle } from "drizzle-orm/d1";
import { users } from "./db/schema";

type Bindings = {
  MY_VAR: string;
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  return c.json({ hello: c.env.MY_VAR });
});

app.get("/users", async (c) => {
  const db = drizzle(c.env.DB);

  const results = await db.select().from(users).all();

  return c.json({ users: results });
});

export default app;
