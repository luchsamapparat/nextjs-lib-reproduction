import React from 'react';

import './foo.module.scss';

/* eslint-disable-next-line */
export interface FooProps {}

export function Foo(props: FooProps) {
  return (
    <div>
      <h1>Welcome to foo!</h1>
    </div>
  );
}

export default Foo;
