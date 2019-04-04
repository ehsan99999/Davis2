import React, { Component } from 'react'
import LayerCard from './LayerCard'
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TimerIcon from '@material-ui/icons/TimerOutlined';
import LayersIcon from '@material-ui/icons/LayersOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import {Tabs ,Tab,RadioGroup,Radio,Card,
    CardActions,CardContent,Typography
    ,Divider,FormControlLabel,FormControl,Switch,ListItem,List } from '@material-ui/core';

import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};


export class RightDrawer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: true,
            tabValue : 1,
            layers : {
                visible : false
            }
        };
    }


    componentWillReceiveProps(nextProps) {
        //update state when the props are updated
        this.setState({ layers: nextProps.layers });
        
        console.log(this.state.layers)
      }
    
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    handleChange = (event, value) => {
        this.setState({ tabValue : value });
    };



    render() {
        console.log(this.state.layers.id);
        let layer = this.state.layers
        let value = this.state.tabValue
        console.log(layer.binsType);
 



        return (
        <div  >
            <Fab 
                onClick={this.toggleDrawer('right', true)}
                color="primary" aria-label="Add"
                >
                <AddIcon />
            </Fab>
            <Drawer  anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                <div 
                    className="rightDrawer"
                    tabIndex={0}
                    role="button"
                    onKeyDown={this.toggleDrawer('right', false)} >
                    {/* Drawer content goes here!  */}
                        <Tabs
                            value={this.state.tabValue}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                        >
                        <Tab style={{ width: 20 }} icon={<TimerIcon />}  />
                        <Tab style={{ width: 20 }} icon={<LayersIcon />}   />
                        <Tab style={{ width: 20 }} icon={<SettingsIcon />}  />
                        <Tab style={{ width: 20 }} icon={<InfoIcon />}  />
                        </Tabs>
                        {value === 0 && <div className="RightDrawerTabs" >Tab One</div>}
                        {value === 1 && <div className="RightDrawerTabs" ><LayerCard layer={layer} /></div>}
                        {value === 2 && <div className="RightDrawerTabs" >Tab Three</div>}
                        {value === 3 && <div className="RightDrawerTabs" >Tab Four</div>}
                </div>
            </Drawer>

        </div>
        )
    }
}

export default RightDrawer
