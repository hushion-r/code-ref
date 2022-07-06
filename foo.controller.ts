### Must replace 'Foo', 'foo', 'fid'

import express = require('express');
import { Body, Controller, Delete, Get, Path, Put, Route } from 'tsoa';
import { container } from 'tsyringe';
import fooService from '../../service/.service';
import { Foo } from '../../model/foo.entity';
import logger from '../../logger/logger';
import { CreateFoo } from './foo.interface';

@Route('/foo')
export class fooController extends Controller {
  public router = express.Router();

  private readonly _service: FooService;

  constructor() {
    super();
    this._service = container.resolve(FooService);
  }

  @Get('/{fid}')
  public async getFoo(@Path() fid: string): Promise<Foo> {
    const foo = await this._service.get(fid);

    return foo.toJSON();
  }

  @Put('/{fid}')
  public async updateFoo(
    @Path() fid: string,
    @Body() fooToUpdate: CreateFoo
  ): Promise<Foo> {
    const foo = await this._service.update(fooToUpdate, fid);

    return foo.toJSON();
  }

  @Delete('/{fid}')
  public async deleteFoo(@Path() fid: string): Promise<string> {
    logger.debug(`Received request to delete foo ${fid}.`);
    return await this._service.deleteFoo(fid);
  }
}
