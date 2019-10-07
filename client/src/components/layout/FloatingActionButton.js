import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

export default function FloatingActionButton() {
    const classes = useStyles();

    return (
        <Tooltip title="Adicionar pessoa" aria-label="add">
            <Fab color="primary" href="/create" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
    );
}
