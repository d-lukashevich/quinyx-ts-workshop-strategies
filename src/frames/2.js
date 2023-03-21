import { Button } from '../components/Button';
import { Frame } from '../components/Frame';
import { hexToRGBA } from '../utils/colors';

<Frame
  heading="Add declaration files"
  description={
    <>
      Apart of tuning the usage we can try to fix dependencies themselves. Some boyscouting is always welcome.
      <br /> One of the ways to do it is to add declaration files (`*.d.ts`) for JS modules.
      <br /> d.ts file intercepts TS queries to JS module and provides "mocked" types.
      <br />
      Important! It's not affecting runtime code. It's just a way to tell TS how to deal with JS modules.
    </>
  }>
  <Button fontSize="1rem" className="proletariat" color="red" backgroundColor={hexToRGBA('#1976d2', 0.7)}>
    Declarations example
  </Button>
</Frame>;
