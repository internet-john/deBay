import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

import tileData from '../tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '70%',
    height: '100%'
  },
  button: {
    right: "20%"
  },
});

// Move GridListTile to Listing component
const mapData = (tileData, classes) => {
  return (
    tileData.map((tile, i) => (
      <GridListTile key={i}>
        <img src={tile.img} alt={tile.title} />
        <GridListTileBar
          title={tile.title}
          subtitle={<span>Cost: {tile.price}</span>}
          actionIcon={
            <Button variant="contained" color="primary" className={classes.button}>Bid</Button>
          }
        />
      </GridListTile>
    ))
  );
}

// TODO: Decompose into individual components
//       - container
//       - listing
//       - action bar
//       etc
function ListingPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={320} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"><h3>deBay - the decentralized auction house.</h3></ListSubheader>
        </GridListTile>
        {mapData(tileData, classes)}
      </GridList>
    </div>
  );
}

ListingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingPage);
