import React from 'react';


class AddFishForm extends React.Component{
        nameRef=React.createRef();
        priceRef=React.createRef();
        statusRef=React.createRef();
        descRef=React.createRef();
        imageRef=React.createRef();
      
       handleSubmit=(e)=>{
              e.preventDefault();
              const form={
                     name:this.nameRef.current.value,
                     price:this.priceRef.current.value,
                     status:this.statusRef.current.value,
                     desc:this.descRef.current.value,
                     image:this.imageRef.current.value
              }
         this.props.addFish(form)
         e.currentTarget.reset();
             
       }


       render(){
             return(
                    <form className='fish-edit' onSubmit={this.handleSubmit}>
                         <input type='text' name='name'  ref={this.nameRef} placeholder='Enter name'/>
                         <input type='text' name='price' ref={this.priceRef} placeholder='Enter price'/>
                         <select ref={this.statusRef} name='status'>
                            <option value='available'>Fresh</option>  
                            <option value='notavailable'>Sold Out</option>
                          </select>
                          <textarea placeholder='Enter desc' ref={this.descRef}></textarea>
                          <input type='text' placeholder='Enter Image' ref={this.imageRef}/>
                     
                   <button type='submit'>Submit</button>
                    </form> 
             )
       }
}


export default AddFishForm;