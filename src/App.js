import React, { useEffect, useReducer, useState } from 'react';
import ProductList from './ProductList'
import ViewImage  from './ViewImage';

function  App(){

useEffect(()=>{
  
   fetch('http://52.26.193.201:3000/products/list')
   .then(data=>data.json()).then(data=>sendCommand({command:'initProduct',value:data})); 
},[]);
  
 function init(cmValue){
  
    return {productList:cmValue.value,clickedItem:{}};
 }
  const [state,sendCommand]=useReducer((prod,toggle)=>{
    let product={...prod};
   
    switch(toggle.command){
       case 'initProduct':{
       
         //todos=product.todos.filter((ele,idx)=>idx!==toggle.value);
         product.productList=[...toggle.value]
           return product;
       }
       case 'getDetails':{  
          
            
           console.log(product.include(toggle.value))
          return product;
       }
       case 'viewImage':{
        let cItem={...toggle.value};
        product.clickedItem=cItem;
       
          return product;
       }
       default:{
          throw Error('no command');
       }
     }
     
     
   },{command:'initProduct',value:[]} ,init);
 function handleGetDetails(value){
    let item=state.productList.filter(ele=>ele.id===value)[0];
    console.log(item)
      
  }
 function handleRemoveDetails(value){

 }
 function handleGetImage(value) {
    //  //dispatch() add item
    //  let value=event.target.name.value;
    //  sendCommand({command:'viewImage',value:{name:value}});
    // event.preventDefault();
    // event.target.name.value='';
  }
  
    return (
     
      <div className="App">
        <ProductList items={state.productList} getDetails={handleGetDetails}/>
      </div>
    );
  
}

export default App;
