import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';
import { Cart } from '../entity/Cart';
import { CartItem } from '../entity/CartItem';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ TypeOrmModule.forFeature([Cart, CartItem]) ],
  exports: [ CartService ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
