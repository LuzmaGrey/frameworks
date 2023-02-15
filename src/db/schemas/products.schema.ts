import { Schema } from 'mongoose';

export const productSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
});
