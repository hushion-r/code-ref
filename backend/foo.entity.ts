//  Must replace 'Foo', 'foo', ManyToOne 'Bar', 'bar', OneToOne 'Qux', 'qux', OneToMany 'Corge', 'corge'

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Model } from './base.model';
import { CreateFoo } from '../controllers/foo/foo.interface';
import { BarEntity } from './bar.entity';
import { Qux, QuxEntity } from './qux.entity';
import { Corge, CorgeEntity } from './corge.entity';

export interface Foo {
  id: string;
  name: string;
  qux?: Qux;
  corges: Corge[];
  isDeleted: boolean;
}

@Entity()
export class FooEntity extends Model {
  @Column({
    type: 'varchar',
    name: 'name',
    length: 50,
  })
  name!: string;

  @Column({
    type: 'tinyint',
    name: 'isDeleted',
    nullable: true,
  })
  isDeleted!: boolean;

  @OneToOne(() => QuxEntity, (qux) => qux.foo, {
    cascade: true,
    eager: true,
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'foo_qux_id' })
  public qux?: QuxEntity;

  @OneToMany(() => CorgeEntity, (corge) => corge.facility, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'facility_entity_id' })
  public corges: CorgeEntity[];

  @ManyToOne(() => BarEntity, (bar) => bar.foos)
  public bar: BarEntity;

  static create(foo: CreateFoo): FooEntity {
    const entity = new FooEntity();

    entity.isDeleted = false;
    entity.name = foo.name;

    return entity;
  }

  public update(fooToUpdate: CreateFoo) {
    this.name = fooToUpdate.name;
  }

  public delete() {
    this.isDeleted = true;
  }

  public addCorge(corge: CorgeEntity) {
    if (!this.corges) {
      this.corges = [];
    }
    this.corges.push(corge);
  }

  public toJSON(): Foo {
    return {
      id: this.id,
      name: this.name,
      qux: this.qux && this.qux.toJSON(),
      corges:
        this.corges &&
        this.corges.length > 0 &&
        this.corges
          .filter((corge) => !corge.isDeleted)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((corge) => {
            return corge.toJSON();
          }),
      isDeleted: this.isDeleted,
    };
  }
}
