import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb://ecommerce:${process.env
        .MONGOPASS}
        ac-cwvy6rr-shard-00-00.5xfqddc.mongodb.net:27017,
        ac-cwvy6rr-shard-00-01.5xfqddc.mongodb.net:27017,
        ac-cwvy6rr-shard-00-02.5xfqddc.mongodb.net:27017 
  `,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
