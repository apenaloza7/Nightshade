import { createUseStyles } from 'react-jss';
import { CssBaseline } from "@mui/material";
import Header from './components/header';
import AboutMe from './components/aboutme';

const useStyles = createUseStyles ({
  root:{
    minHeight: '100vh',
    background: `url(${process.env.PUBLIC_URL + '/bg.svg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
