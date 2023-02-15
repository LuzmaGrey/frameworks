import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interface/products.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('products') private productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }
}
