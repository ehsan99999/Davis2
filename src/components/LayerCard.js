import React, { Component } from 'react'
import {RadioGroup,Radio,Card,
    CardActions,CardContent,Typography
    ,Divider,FormControlLabel,FormControl,Switch,ListItem,List } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';


const colorPalette = ["Accent","Blues","Blues_r","BrBG","brg","brg_r","BuGn","cool","cubehelix"
                    ,"gist_earth","gist_rainbow","gist_rainbow_r","GnBu","GnBu_r","jet","OrRd"
                    ,"OrRd_r","PiYG","plasma","PRGn","PuBuGn_r","PuOr","RdYlBu","RdYlGn","RdYlGn_r"
                    ,"terrain","viridis_r"]

export class LayerCard extends Component {

    state = {
        hoverPalette:-1,
        layer:this.props.layer
    }


    handleVisibility = (event, value) => {
        //this.setState({ tabValue : value });
        let templayer = this.state.layer;
        templayer.visible = value
        this.setState({ layer: templayer });

    };
    
    handleBinsTypeChange = (event, value) => {
        let templayer = this.state.layer;
        templayer.binsType = value
        this.setState({ layer: templayer });

        console.log(value)
    };

    handleNumLevelsChange = (event, value) => {
        let templayer = this.state.layer;
        templayer.nlevels = value
        this.setState({ layer: templayer });

        console.log(value)
    };
    imgMouseEnter = (event, value) => {
        // On mouse enter the set the hovered palette to id of colorbar(palette) 
        // in colorPalette array. this causes hovered color bar to stand out
        // from the rest
        let val = parseInt(event.target.getAttribute("value"))
        this.setState({ hoverPalette: val });


    };
    imgMouseLeave = (event, value) => {
        // On mouse leave the set the hovered colorbar(palette) to -1 
        // to make its style back to its normal 
        this.setState({ hoverPalette: -1 });


    };
    changeColorPalette = (event, value) => {
        //Change color palette for the layer
        let temLayer = this.state.layer
        temLayer.colorScheme = parseInt(event.target.getAttribute("value"))
        this.setState({ layer: temLayer });
    };



  render() {
    let layer = this.state.layer
      
    let palettesList = colorPalette.map((palette , index) => {
        // make the colorbars that are hovered or selected to stand out
        let style = (index === this.state.layer.colorScheme || index === this.state.hoverPalette)
                    ? { width: 30 , height: 120, margin: 4, cursor: "pointer"}
                    : { width: 12, height: 100, margin: 2, cursor: "pointer"}

        return (<img 
                    src={require('../img/palette_v/'+palette+'.png')} 
                    style={style}
                    value={index}
                    key={index}
                    alt={"palette name "+palette}
                    onClick={this.changeColorPalette}
                    onMouseEnter={this.imgMouseEnter}
                    onMouseLeave={this.imgMouseLeave}
                     />)

    })

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
                <ListItem style={{width:280}}>
                    {palettesList}
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
                <ListItem>
                    <div style={{width: 250}}>
                        <Typography  variant="subtitle2" id="label">Number of Levels : <b>{layer.nlevels}</b>  </Typography>
                        <Slider 
                        style={{padding: '22px 0px'}}
                        max={300}
                        min={5}
                        step={10}
                        value={layer.nlevels}
                        aria-labelledby="label"
                        onChange={this.handleNumLevelsChange}
                        />
                    </div>
                </ListItem>
            </List>
        </CardActions>
        </Card>

    )



    return (
      <div>
        {layerCard}
      </div>
    )
  }
}

export default LayerCard
