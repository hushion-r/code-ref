### INCOMPLETE. Needs OneToOne qux testing
### Must replace 'Foo', 'foo', 'Bar', 'bar'

import { FooEntity } from './foo.entity';
import { BarEntity } from './bar.entity';

test('Given a bar, create an foo and add it to a bar', () => {
  const bar = BarEntity.create({
    name: 'Bar Name',
  });

  const foo = FooEntity.create({
    name: 'Foo Name',
  });

  bar.addFoo(foo);
  expect(bar.foos[0]).toEqual(foo);
});
