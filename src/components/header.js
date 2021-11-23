import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const useStyles = createUseStyles ({
    root: {
        fontFamily: 'Nunito',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbarStyle: {
        fontFamily: 'Nunito'
    },
    icon: {
        fontSize: '1rem'
    },
    appbarTitle: {
        flexGrow: '1'
    },
    heroBanner: {
        textAlign: 'center',
        fontSize: '4rem'
    },
    expandIcon: {
        fontSize: '4rem',
    },
    container: {
        textAlign: 'center'
    }
});

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true)
    },[]);

    return(
        <div className={classes.root}>
            <AppBar className={classes.appbarStyle} color="transparent" elevation={0}>
                <Toolbar>
                    <h2 className={classes.appbarTitle}>Alejandro Penaloza</h2>
                    <IconButton>
                        <SortOutlinedIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse
            in={checked}
            {... (checked ? {timeout : 1000} : {})}
            collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h2 className={classes.heroBanner}>Hi!</h2>
                    <p>I finally got around to learning react..</p>
                    <IconButton>
                        <KeyboardArrowDownOutlinedIcon className={classes.expandIcon}/>
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}

export default Header;