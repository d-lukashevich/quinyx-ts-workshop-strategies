import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Frame } from './components/Frame';
import { hexToRGBA, lighten } from './utils/colors';
import { fromCamelCase, toCamelCase } from './utils/other';

function App() {
  return (
    <div className="App">
      <h1>Strategies of using/converting JS modules for your TS solution</h1>
      <div className="Scroller">
        <Frame
          heading="Passing fillers"
          pros={['Clear understanding what props are', 'start using quickly']}
          cons={[
            'In there are a lot of props it becomes verbose and less readable',
            'it is limited to interpolation 0 potential bugs',
            'hard to use with many occurences of the same component - poorly scalable'
          ]}
          description={
            <>
              To deal with incorrect types TS inferred for JS variables we can provide parameters of such types.
              <br />
              Most of the time it will be just an `undefined`.
            </>
          }>
          <Button color={undefined} backgroundColor={undefined} className="" fontSize="16px">
            Filler example
          </Button>
        </Frame>
        <Frame
          heading="Suppressing errors"
          description={
            <>
              We also can just tell TS to ignore errors for some lines of code. In the end these insecurity was already
              here. 🙂
              <br />
              Usually it's done by using `@ts-ignore` or `@ts-expect-error` (preferably) comments.
              <br />
              It's a good idea to add a comment why we are ignoring errors.
            </>
          }
          pros={['Fast', 'Ok when you are sure about exact error', '!!! Good when you are going to refactor it soon']}
          cons={['Real errors ignored too']}>
          {/* @ts-expect-error */}
          <Button fontSize={16}>Suppression example</Button>
        </Frame>
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
          }
          pros={['Allows you to encaps functionality', 'fast']}
          cons={[
            'Go to declaration goes to d ts instead of runtime code',
            'Introduce uncertainty',
            'More files',
            'need to provide types for all exported entities'
          ]}>
          <Button fontSize="1rem" className="proletariat" color="red" backgroundColor={hexToRGBA('#1976d2', 0.7)}>
            Declarations example
          </Button>
        </Frame>
        <Frame
          heading="Splitting module"
          description="Another way to fix dependencies is to split them into JS and TS parts."
          pros={[
            'Provide types for only things you need',
            'type safety is guaranteed',
            'Good when you want to convert only some stuff from a huge pile'
          ]}
          cons={[
            'Not that neat - things scattered across several files, hard to get what is happening here',
            'not that beginners friendly'
          ]}>
          <Button fontSize="1rem" className="" color={undefined} backgroundColor={undefined}>
            {fromCamelCase('splittingModuleExample', 2)}
          </Button>
        </Frame>
      </div>
    </div>
  );
}

export default App;
