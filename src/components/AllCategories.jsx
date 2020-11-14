import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AllCategories.css';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));


function AllCategories(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <div
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={handleClickListItem}
        >
          <div className = "all-categories">
              <b>ALL CATEGORIES</b>
              <ExpandMore fontSize = "large" />
          </div>
        </div>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="allcatw"
      >
        {props.categories.map((option, index) => (
          <Link 
            className = "items"
            to = {`/${option}`}
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.name}

            </Link>
        ))}
      </Menu>
    </div>
  );
}


const mapStateToProps = (state) => ({
    categories: state.Categories.values
})
   
export default connect(mapStateToProps,null) (AllCategories);

