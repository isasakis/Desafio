import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingButton() {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="add" href='/create' className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}
