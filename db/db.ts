import { Pool } from "https://deno.land/x/postgres@v0.4.5/mod.ts";
import { parse, PgConfig } from "./connectionstring.ts";
import { green } from "https://deno.land/std@0.53.0/fmt/colors.ts";

const CONNECTION_STRING: string = Deno.env.get("DATABASE_URL") ?? "";

// console.log(`${green('Connection string: ')}${CONNECTION_STRING}`);

const CONFIG: PgConfig | undefined = parse(CONNECTION_STRING);

console.log(green('pgConfig: '), CONFIG);

const POOL_CONNECTIONS = 20;

let dbPool: Pool | undefined;

if (CONFIG) {
  dbPool = new Pool(CONFIG, POOL_CONNECTIONS);
}

export default dbPool;
