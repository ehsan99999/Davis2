import React, { Component } from 'react'
import LayerCard from './LayerCard'
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TimerIcon from '@material-ui/icons/TimerOutlined';
import LayersIcon from '@material-ui/icons/LayersOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import {Tabs ,Tab,ExpansionPanel,ExpansionPanelSummary,Typography,ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export class RightDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: true,
            tabValue : 1,
        };
    }


    componentWillReceiveProps(nextProps) {
        //update state when the props are updated
        this.setState({ layers: nextProps.layers });
        
    }
    
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    ChangeTab = (event, value) => {
        this.setState({ tabValue : value });
    };



    render() {
        console.log("rightdrwr render")

        let groupStr = "";
        if( this.state.layers !== undefined){
            //console.log(this.state.layers)
            let groupsArray = [];
            this.state.layers.map((layer)=>{
                const { group }  = layer ;
                if(groupsArray[group]){
                    groupsArray[group].push(layer)
                }else{
                    groupsArray[group] = []
                    groupsArray[group].push(layer)
                }    
                return "layer";
            }) 
    
            //console.log(groupsArray)

            groupStr = Object.keys(groupsArray).map(function(group, index) {
                //console.log(groupsArray[group])
                let layersStr = groupsArray[group].map(layer =>{
                    return <LayerCard  key={layer.id} layer={layer} />
                })
                //console.log(layersStr)
                return(
                    <ExpansionPanel key={group} >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{group}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{padding:5}} >
                            {layersStr}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
                // layersStr = groupsArray[group].map(layer =>{

                // });
            });
            console.log(groupStr)

            // layersStr = groupsArray.map((group,m,n) =>{
            //     console.log(group)
            //     console.log(m)
            //     console.log(n)
            //     return( 
            //         <ExpansionPanel key={group}>
            //             <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            //             <Typography>{group}</Typography>
            //             </ExpansionPanelSummary>
            //             <ExpansionPanelDetails style={{padding:5}}>
            //                 {/* <LayerCard  layer={layer} />   */}
            //             </ExpansionPanelDetails>
            //         </ExpansionPanel>
                
            //     )
            // })
        }


        let value = this.state.tabValue
 



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
                            onChange={this.ChangeTab}
                        >
                        <Tab style={{ width: 20 }} icon={<TimerIcon />}  />
                        <Tab style={{ width: 20 }} icon={<LayersIcon />}   />
                        <Tab style={{ width: 20 }} icon={<SettingsIcon />}  />
                        <Tab style={{ width: 20 }} icon={<InfoIcon />}  />
                        </Tabs>
                        {value === 0 && <div className="RightDrawerTabs" >Tab One</div>}
                        {value === 1 && <div className="RightDrawerTabs" >{groupStr}</div>}
                        {value === 2 && <div className="RightDrawerTabs" >Tab Three</div>}
                        {value === 3 && <div className="RightDrawerTabs" >Tab Four</div>}
                </div>
            </Drawer>

        </div>
        )
    }
}

export default RightDrawer
