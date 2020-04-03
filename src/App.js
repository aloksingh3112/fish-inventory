import React from 'react';
import './App.css';
import Header from './components/header';
import Inventory from './components/inventory';
import Order from './components/order';
import SampleFish from './sample-fishes';
import Fish from './components/fish';

class App extends React.Component{
  state={
    fishes:{},
    orders:{}
  }


  addFish=(fish)=>{
    console.log(fish);
    const fishes={...this.state.fishes};
    fishes[`fish${Date.now()}`]=fish;
    this.setState({
      fishes
    })
  }

  loadSampleFish=()=>{
    this.setState({
        fishes:SampleFish
    })
  }


  addToCart=(key)=>{
    console.log(key)
    const orders={...this.state.orders};
    orders[key]=orders[key]+1||1
    this.setState({
      orders
    })
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className='menu'>
           <Header tagline='Sea Food Market'/>
           <ul className='fishes'>
               {Object.keys(this.state.fishes).map((key)=>{
                  return <Fish key={key} details={this.state.fishes[key]} index={key} addToCart={this.addToCart}/>
               })}
           </ul>
        </div>
        <Order orders={this.state.orders} fishes={this.state.fishes} />
        <Inventory loadSampleFish={this.loadSampleFish} addFish={this.addFish}/>
        
      </div>
    );
  }
  

}

export default App;
