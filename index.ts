import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
import todoRouter from "./routes/todo.ts";
import queryRouter from "./routes/db.ts";

const app = new Application();
const port: number = +(Deno.env.get("PORT") ?? "8080");

const notFoundMiddleware = ({ response }: { response: any }) => {
  response.status = 404;
  response.body = {
    success: false,
    message: "404 - Not found.",
  };
};

const rootRouter = new Router();
rootRouter.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "hello~",
  };
});

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

app.use(queryRouter.routes());
app.use(queryRouter.allowedMethods());

app.use(notFoundMiddleware);

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `${yellow("Listening on:")} ${secure ? "https://" : "http://"}${
      green(
        hostname ??
          "localhost",
      )
    }:${port}`,
  );
});

await app.listen({ port });
