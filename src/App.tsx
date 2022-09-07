import React from 'react';
import { ThemeProvider, Typography } from '@material-ui/core'
import newTheme from './newTheme';
import useStyles from './AppJSS';

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={newTheme}>
      <Typography className={classes.useNewTheme}>hello</Typography> 
    </ThemeProvider>
  );
}

export default App;
