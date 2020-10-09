import { Pool } from "https://deno.land/x/postgres@v0.4.5/mod.ts";
import { parse, PgConfig } from "./connectionstring.ts";

const CONNECTION_STRING: string = Deno.env.get("DATABASE_URL") ?? "";

const CONFIG: PgConfig | undefined = parse(CONNECTION_STRING);

const POOL_CONNECTIONS = 20;

let dbPool: Pool | undefined;

if (CONFIG) {
  dbPool = new Pool(CONFIG, POOL_CONNECTIONS);
}

export default dbPool;
