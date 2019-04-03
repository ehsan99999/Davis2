import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/TimerOutlined';
import LayersIcon from '@material-ui/icons/LayersOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';




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
            layer : {
                visible : false
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        //update state when the props are updated
        console.log(this.state)
        if (nextProps.layers.visible !== this.state.layer.visible) {
            let templayer = this.state.layer;
            templayer.visible = nextProps.layers.visible
          this.setState({ layer: templayer });
        }
        console.log(nextProps)
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
        let templayer = this.state.layer;
        templayer.visible = value
        this.setState({ layer: templayer });

        console.log(value)
    };
    



    render() {
        console.log(this.props.layers);
        console.log(this.state);
        let layer = this.props.layers
        let value= this.state.tabValue
        let visible = this.state.layer.visible
        console.log(this.state)
        console.log("visible" , visible)
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
                <FormControlLabel 
                    style = {{marginLeft : 0}}
                    control={
                        <Switch
                        checked={visible}
                        onChange={this.handleVisibility}
                        value="checkedB"
                        color="primary"
                        
                        />
                    }
                    label="Visible"
                    />
            </CardActions>
            </Card>

        )


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
                    onKeyDown={this.toggleDrawer('right', false)} >
                    {/* Drawer content goes here!  */}
                        <Tabs
                            value={this.state.tabValue}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={this.handleChange}
                            variant="fullWidth"
                        >
                        <Tab icon={<TimerIcon />}  />
                        <Tab icon={<LayersIcon />}   />
                        <Tab icon={<SettingsIcon />}  />
                        <Tab icon={<InfoIcon />}  />
                        </Tabs>
                        {value === 0 && <div>Tab One</div>}
                        {value === 1 && <div>{layerCard}</div>}
                        {value === 2 && <div>Tab Three</div>}
                        {value === 3 && <div>Tab Four</div>}
                </div>
            </Drawer>

        </div>
        )
    }
}

export default RightDrawer
