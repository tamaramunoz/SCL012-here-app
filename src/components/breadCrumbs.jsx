import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Breadcrumbs } from '@material-ui/core'
import Link from '@material-ui/core/Link';


import  PubIcon  from '../icons/pubIcon';
import  CoffeIcon  from '../icons/cooffeIcon';
import  RestoIcon  from '../icons/restoIcon'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(7.5),
      width: 50,
      height: 50,
    },
  }));

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <>
    <Breadcrumbs>
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        <RestoIcon className={classes.icon} />

      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        <CoffeIcon className={classes.icon} />
      
      </Link>
      <Link color="inherit" href="" onClick={handleClick} className={classes.link}>
      <PubIcon className={classes.icon} />
      </Link>

    </Breadcrumbs>
    </>
  );
}
