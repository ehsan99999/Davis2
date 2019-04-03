import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TimerIcon from '@material-ui/icons/TimerOutlined';
import LayersIcon from '@material-ui/icons/LayersOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import InfoIcon from '@material-ui/icons/InfoOutlined';


export class DrawerTabs extends Component {
    state = {
        value: 1,
    };
    
    handleChange = (event, value) => {
    this.setState({ value });
    };

    componentDidUpdate(){
        console.log(this.props.layers)
    }
  render() {
    console.log(this.props.layers)
    console.log(this.props.layers)
      const { value } = this.state;
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
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
        {value === 1 && <div>Tab Two</div>}
        {value === 2 && <div>Tab Three</div>}
        {value === 3 && <div>Tab Four</div>}
      </Paper>
    )
  }
}

export default DrawerTabs
