import mongoose from "mongoose";
import fastifyPlugin from "fastify-plugin";
import Shop from "../model/Shop.js";

async function database(server, options) {
  try {
    mongoose.set("strictQuery", false);

    mongoose.connection.on("connected", () => {
      server.log.info({ actor: "MongoDB" }, "connected!");
    });

    mongoose.connection.on("disconnected", () => {
      server.log.info({ actor: "MongoDB" }, "disconnected!");
    });

    await mongoose.connect(
      "mongodb+srv://dvczr:sumkav-Rucqeq-6mipmu@bookdb.ese9lsc.mongodb.net/?retryWrites=true&w=majority"
    );

    const models = { Shop };

    server.addHook("onRequest", async (request, response) => {
      request.db = { models };
    });
  } catch (e) {
    console.log.info(e);
  }
}

export default fastifyPlugin(database);
