import fastify from "fastify";
import ShopRoutes from "./routes.js";
import database from "./utils/db.js";

const server = fastify({ logger: true });

const start = async () => {
  try {
    await server.register(database);

    await server.register(ShopRoutes);

    await server.listen({ port: 3000 });

    console.log("SERVER IS RUNING");
  } catch (e) {
    server.log.error(e);

    process.exit(1);
  }
};

start();
