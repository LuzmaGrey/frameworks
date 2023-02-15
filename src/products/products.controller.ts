import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { Product } from './interface/products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {
    this.productService = productService;
  }
  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }
  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return await this.productService.createProduct(product);
  }
}
