//Use createRoot API to render our element on screen 
import { createRoot } from 'react-dom/client';
import { StrictMode, useState } from 'react';

//create variable with 4 objects and pass on to the componet App
const items = [
    {
      name: "Apples",
      quantity: 5,
      id:1
    },
    {
      name: "Bananas",
      quantity: 7,
      id:2
    },
    {
      name: "Box of Pasta",
      quantity: 1,
      id:3
    },
    {
      name: "Cookies",
      quantity: 12,
      id:4
    }
  ]

/*
 Arrow function
    - store inside variable 
    - use return 
*/
const Header = (props) => {
    {/* // NOT allowed yo modify value indise component "prop.title = "My Grocery List" */}
    console.log(props)
    return (
        <header>
            {/*Use dot notation to access the value and make it dynamic */}
            <h1> {props.title}</h1>
            <span className='total-items'> Items: {props.itemTotal} </span>
        </header>
    )
}

/*
Nesting
    - Create another component Counter and nest inside const Item
    - Parent component will have one or multiple child components
*/
const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item'/>
            <span className='item-name'>{props.name}</span>

            {/*Nesting Counter*/}
            <Counter/>

        </div>
    )
}

/*
useState
    - first import the useState
    - create variable and call useState()
    - make sure its in the top level inside the componet

How it works?
    - useState(0) returns array with 2 values which is [0, function]
        - 0: Current state value whcich is 0 cuz we mentioned it 
        - function: function to update the state
    - After you receive the values it get assigned to each variable whcih is
        - quantity = 0
        - setQuantity = function to update the state
*/
const Counter = () => {
    const [quantity, setQuantity] = useState(0)

    const incrementQuantity = () => {
        // CAN'T modify directly like quantity += 1 cuz we can only change a component state using state setter function
        setQuantity(quantity + 1) 
    }

    const decrementQuantity = () => {
        if (quantity > 0){
            setQuantity(quantity - 1) 
        }

    }

    return(
        <div className='quantity'>
            <span className='qty-label'>QTY</span>
            {/* We are only sending a refrence cuz we want it to increment onlu when onClick is fired */}
            <button className='increment' onClick={incrementQuantity}> + </button>
            <button className='decrement' onClick={incrementQuantity}> - </button>
            <span className='quantity-amount'> {quantity} </span>
        </div>
    )
}

// create component that will wrap the entire application and combines all the main components together
//pass the prop 
const App = (props) => {
    return (
        <div className='grocery-list'>
            <Header 
            title="Grocery List" 
            itemTotal={props.initialList.length}
            />

            {/*Grocery List*/}
            {props.initialList.map(item =>
                <Item
                name={item.name}
                key={item.id}
                />
            )}
            
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
//render App and pass variable items 
root.render(
    <StrictMode>
        <App initialList={items}/>
    </StrictMode>)
