import { Button } from '../components/Button';
import { fromCamelCase } from '../utils/other';
import { Frame } from '../components/Frame';

<Frame heading="Splitting module" description="Another way to fix dependencies is to split them into JS and TS parts.">
  <Button fontSize="1rem" className="" color={undefined} backgroundColor={undefined}>
    {fromCamelCase('splittingModuleExample', 2)}
  </Button>
</Frame>;
