import dbPool from "../db/db.ts";

export default {
  query: async ({ request, response }: { request: any, response: any}) => {
    const body = await request.body();
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        message: "No data provided",
      };
      return;
    }
    if (dbPool) {
      const value = await body.value;
      const client = await dbPool.connect();
      const result = await client.query(value.query);
      response.status = 200;
      response.body = {
        success: true,
        result,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        message: "db connection not established",
      };
    }
  },
};
