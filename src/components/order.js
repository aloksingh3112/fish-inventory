import React from 'react';
import { formatPrice } from './helper';

class Order extends React.Component{
       renderOrders=(key)=>{
              const fish=this.props.fishes[key];
              const count=this.props.orders[key];
              const isAvailable=fish && fish.status==='available';

              if(!isAvailable){
                     return <li>
                       Sorry {fish?fish.name:'fish'} is not available
                      </li>
              }

              return(
                     <li>
                          {count} lbs {fish.name} 
                          {formatPrice(fish.price*count)}
                     </li>
              )



       }
       render(){
           const orderIds=Object.keys(this.props.orders);
           const total=orderIds.reduce((prevTotal,key)=>{
                  const fish=this.props.fishes[key];
                  const count=this.props.orders[key];
                  const isAvailable=fish && fish.status==='available';
                  if(isAvailable){
                         return prevTotal+count*fish.price;
                  }
                  return prevTotal;
           },0)

              return(
                 <div className='order-wrap'>
                   <ul className='order'>{orderIds.map((key)=>this.renderOrders(key))}</ul>    
                     <div class='total'>
              Total:<strong>{formatPrice(total)}</strong>
                     </div>
                 </div>  
              )
       }
}

export default Order;