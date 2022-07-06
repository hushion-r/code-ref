### Must replace 'foo', 'Foo', 'fid', 'bar', 'Bar', 'bid'

import { FooEntity } from '../model/foo.entity';
import { injectable } from 'tsyringe';
import { getRepository } from 'typeorm';
import logger from '../logger/logger';
import { NotFoundError } from '../errors/not.found';
import { CreateFoo } from '../controllers/foo/foo.interface';

injectable();
export default class FooService {
  public async get(fid: string): Promise<FooEntity> {
    const repository = getRepository(FooEntity);

    const foo: FooEntity | undefined = await repository.findOne({
      where: { id: fid, bar.isDeleted: false },
    });

    if (!foo) {
      logger.error(`Foo not found for id: ${fid}.`);
      throw new NotFoundError('Foo not found.');
    }
    return foo;
  }

  public static async getFoosForBar(bid: string): Promise<FooEntity[]> {
    const repository = getRepository(FooEntity);

    const foos: FooEntity[] | undefined = await repository.find({
      relations: ['bar'],
      where: { bar: bid, bar.isDeleted: false },
    });
    return foos;
  }

  public async update(
    fooToUpdate: CreateFoo,
    fid: string
  ): Promise<FooEntity> {
    const repository = getRepository(FooEntity);
    const foo: FooEntity | undefined = await repository.findOne(fid);

    if (!foo) {
      logger.info(`Foo not found for id ${fid}.`);
      throw new NotFoundError('Foo not found.');
    }
    foo.update(fooToUpdate);

    return await repository.save(foo);
  }

  public async deleteFoo(fid: string): Promise<string> {
    const repository = getRepository(FooEntity);
    const foo = await repository.findOne(fid);

    if (foo === undefined) {
      throw new NotFoundError('Foo not found.');
    }
    foo.delete();

    await repository.save(foo);

    return foo.id;
  }
}
