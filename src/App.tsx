import React, { useState } from 'react';
import Button from '@mui/material/Button';

const App = (): JSX.Element => {
  const [btnText, setBtnText] = useState('Say hello!');
  return (
    <>
      <h1 id="gretting">Welcome Neil!</h1>
      <Button
        onClick={() => {
          setBtnText('Said hello!');
        }}
        variant="outlined"
      >
        {btnText}
      </Button>
    </>
  );
};

export default App;
