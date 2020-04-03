import React from "react";
import {getFunName} from './helper';

class StorePicker extends React.Component {
   inputRef=React.createRef();
   goToStore=(event)=>{
          event.preventDefault();
          const d=this.inputRef.current.value;
          this.props.history.push(`/store/${d}`)
   }
       
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={this.inputRef}/>
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
