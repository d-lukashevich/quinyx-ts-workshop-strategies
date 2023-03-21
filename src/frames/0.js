import React from 'react';
import { Button } from '../components/Button';
import { Frame } from '../components/Frame';

<Frame
  heading="Passing fillers"
  description={
    <>
      To deal with incorrect types TS inferred for JS variables we can provide parameters of such types.
      <br />
      Most of the time it will be just an `undefined`.
    </>
  }>
  <Button fontSize={16}>Filler example</Button>
</Frame>;
