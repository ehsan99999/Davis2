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
                // Todo replace : desc :  layer[4],
                desc :  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id purus convallis, varius metus pellentesque, bibendum ipsum. Integer bibendum leo justo, eget elementum metus viverra et. Nunc gravida scelerisque leo.",
                fileType :  layer[5],
                visible : (layer[6] == 1)? true : false,
                nlevels :  layer[8],
                precision :  layer[9],
                order :  layer[11],
                group :  layer[12],
                visType :  layer[7],
                colorScheme :  layer[10],
                binsType :  'linear',
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
