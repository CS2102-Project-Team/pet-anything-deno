export interface PgConfig {
  user: string;
  password: string;
  database: string;
  hostname: string;
  port: number;
}

export function parse(connectionstring: string): PgConfig | undefined {
  if (connectionstring.substr(0, 13) !== "postgresql://") {
    return;
  }
  try {
    connectionstring = connectionstring.substr(13);
    const user: string = connectionstring.split(":")[0];
    connectionstring = connectionstring.substr(user.length + 1);
    const password: string = connectionstring.split("@")[0];
    connectionstring = connectionstring.substr(password.length + 1);
    const database: string = connectionstring.split("/")[1];
    connectionstring = connectionstring.substr(
      0,
      connectionstring.length - database.length - 1,
    );
    const portstr: string = connectionstring.split(":")[1];
    connectionstring = connectionstring.substr(
      0,
      connectionstring.length - portstr.length - 1,
    );
    const port: number = +portstr;
    const hostname: string = connectionstring;
    return {
      user,
      password,
      database,
      hostname,
      port,
    };
  } catch (e) {
    console.log(`Error parsing connection string :< ${e}`);
    return;
  }
}
