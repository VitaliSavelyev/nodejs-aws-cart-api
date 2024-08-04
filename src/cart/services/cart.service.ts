import { Injectable } from '@nestjs/common';

import { v4 } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../../entity/Cart';

@Injectable()
export class CartService {
  private userCarts: Record<string, Cart> = {};

  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
  ) {}

  async findByUserId(userId: string): Promise<Cart> {
    return await this.cartsRepository.findOne({ where: { user_id: userId }, relations: ['items'] });
  }

  // createByUserId(userId: string) {
  //   const id = v4();
  //   const userCart = {
  //     id,
  //     items: [],
  //   };
  //
  //   this.userCarts[ userId ] = userCart;
  //
  //   return userCart;
  // }
  //
  // findOrCreateByUserId(userId: string): Cart {
  //   const userCart = this.findByUserId(userId);
  //
  //   if (userCart) {
  //     return userCart;
  //   }
  //
  //   return this.createByUserId(userId);
  // }
  //
  // updateByUserId(userId: string, { items }: Cart): Cart {
  //   const { id, ...rest } = this.findOrCreateByUserId(userId);
  //
  //   const updatedCart = {
  //     id,
  //     ...rest,
  //     items: [ ...items ],
  //   }
  //
  //   this.userCarts[ userId ] = { ...updatedCart };
  //
  //   return { ...updatedCart };
  // }
  //
  // removeByUserId(userId): void {
  //   this.userCarts[ userId ] = null;
  // }

}
