import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import DrawerTabs  from './DrawerTabs';



const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    }
});


export class RightDrawer extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };
    
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };



    render() {
        console.log(this.props.layers)
        return (
        <div  >
            <Fab 
                onClick={this.toggleDrawer('right', true)}
                color="primary" aria-label="Add"
                className={withStyles.FloatingActionButtons}>
                <AddIcon />
            </Fab>
            <Drawer  anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                <div 
                    className="rightDrawer"
                    tabIndex={0}
                    role="button"
                    onKeyDown={this.toggleDrawer('right', false)}
                >
                    <DrawerTabs layers={this.props.layers} />
                    
                </div>
            </Drawer>

        </div>
        )
    }
}

export default RightDrawer
