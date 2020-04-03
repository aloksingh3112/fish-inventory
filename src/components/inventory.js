import React from 'react';
import AddFishForm from './addfishform';


class Inventory extends React.Component{
       render(){
              return(
                     <div>
                     <h1 className='inventory'>Inventory</h1>
                     <AddFishForm addFish={this.props.addFish}/>
                     <button onClick={this.props.loadSampleFish}>Load Sample Fishes</button>
                     </div>
              )
       }
}

export default Inventory;