import { Hono } from "hono";

type Bindings = {
  MY_VAR: string;
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
  return c.json({ hello: c.env.MY_VAR });
});

app.get("/users", async (c) => {
  const users = await c.env.DB.prepare("SELECT * FROM users").all();

  return c.json({ users: users.results });
});

export default app;

