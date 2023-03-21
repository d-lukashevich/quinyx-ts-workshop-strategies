import React from 'react';
import { Button } from '../components/Button';
import { Frame } from '../components/Frame';

<Frame
  heading="Suppressing errors"
  description={
    <>
      We also can just tell TS to ignore errors for some lines of code. In the end these insecurity was already here. 🙂
      <br />
      Usually it's done by using `@ts-ignore` or `@ts-expect-error` (preferably) comments.
      <br />
      It's a good idea to add a comment why we are ignoring errors.
    </>
  }>
  <Button fontSize={16}>Suppression example</Button>
</Frame>;
