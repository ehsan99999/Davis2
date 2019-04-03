import React, { Component } from 'react';
import './App.css';
import RightDrawer  from './components/RightDrawer';
import axios from 'axios'


class App extends Component {
  state = {
    layers:[]
  }
  componentDidMount(){
    let url = './listOfLayers.json'
    axios.get(url)
    .then(res => {
        let loadedLayers = res.data.message.map(layer => {
            return ({
                id :  layer[0],
                fileName :  layer[1],
                varName :  layer[2],
                visibleName :  layer[3],
                desc :  layer[4],
                fileType :  layer[5],
                visible : (layer[6] == 1)? true : false,
                nlevels :  layer[8],
                precision :  layer[9],
                order :  layer[11],
                group :  layer[12],
                visType :  layer[7],
                colorScheme :  layer[10],
            });
        })

        this.setState({layers : loadedLayers[0] });
            
    })
}



  render() {
    return (
      <div className="App">
        <RightDrawer layers={this.state.layers} />
      </div>
    );
  }
}

export default App;
