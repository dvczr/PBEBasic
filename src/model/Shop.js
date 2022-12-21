import { Schema, model } from "mongoose";

const ShopSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  openingHours: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
});

const Shop = model("Shop", ShopSchema);

export default Shop;
