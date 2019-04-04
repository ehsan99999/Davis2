import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TimerIcon from '@material-ui/icons/TimerOutlined';
import LayersIcon from '@material-ui/icons/LayersOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import {Tabs ,Tab,RadioGroup,Radio,Card,
    CardActions,CardContent,Button,Typography
    ,Divider,FormControlLabel,FormControl,FormLabel,Switch,Grid,ListItem,List } from '@material-ui/core';


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    });


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
    handleVisibility = (event, value) => {
        //this.setState({ tabValue : value });
        let templayer = this.state.layers;
        templayer.visible = value
        this.setState({ layers: templayer });

    };
    
    handleBinsTypeChange = (event, value) => {
        let templayer = this.state.layers;
        templayer.binsType = value
        this.setState({ layers: templayer });

        console.log(value)
    };


    render() {
        console.log(this.state);
        let layer = this.state.layers
        let value = this.state.tabValue
        console.log(layer.binsType);
        
        let layerCard = (
            <Card className="layerCard">
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {layer.visibleName}
                </Typography>
                <Typography variant="caption" gutterBottom>
                    {layer.desc}
                </Typography>
            </CardContent>
            <Divider light />

            <CardActions>
                <List style = {{marginLeft : 0}} dense={true}>
                    <ListItem>
                        <FormControlLabel 
                            control={
                                <Switch
                                checked={layer.visible}
                                onChange={this.handleVisibility}
                                color="primary"
                                />
                            }
                            label="Active / Deactive"
                            />
                    </ListItem>
                    <ListItem>
                        <FormControl component="fieldset" 
                        // className={classes.formControl}
                        >
                            <RadioGroup
                                name="binsType"
                                row={true}
                                //className={classes.group}
                                value={layer.binsType}
                                defaultValue="linear"
                                checked={layer.binsType}
                                onChange={this.handleBinsTypeChange}
                            >
                                <FormControlLabel value="linear" control={<Radio />} label="Linear" />
                                <FormControlLabel  value="percentile" control={<Radio />} label="Percentile" />
                            </RadioGroup>
                        </FormControl>
                    </ListItem>
                </List>
            </CardActions>
            </Card>

        )


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
                        {value === 1 && <div className="RightDrawerTabs" >{layerCard}</div>}
                        {value === 2 && <div className="RightDrawerTabs" >Tab Three</div>}
                        {value === 3 && <div className="RightDrawerTabs" >Tab Four</div>}
                </div>
            </Drawer>

        </div>
        )
    }
}

export default RightDrawer
