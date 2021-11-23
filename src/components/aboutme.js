import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles ({
  root:{
    minHeight: '100vh'
  }
});

function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default AboutMe;