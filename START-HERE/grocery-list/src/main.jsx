//Use createRoot API to render our element on screen 
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

/*
 Arrow function
    - store inside variable 
    - use return 
*/
const Header = (props) => {
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
const Item = () => {
    return (
        <div className='item'>
            <button className='remove-item'/>
            <span className='item-name'>Apples</span>

            {/*Nesting Counter*/}
            <Counter/>

        </div>
    )
}

const Counter = () => {
    return(
        <div className='quantity'>
            <span className='qty-label'>QTY</span>
            <button className='increment'> + </button>
            <button className='decrement'> - </button>
            <span className='quantity-amount'> 15 </span>
        </div>
    )
}

// create component that will wrap the entire application and combines all the main components together
const App = () => {
    return (
        <div className='grocery-list'>
            <Header 
            title="Grocery List" 
            itemTotal={1}
            />

            {/*Grocery List*/}
            <Item/>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
//render App
root.render(
    <StrictMode>
        <App/>
    </StrictMode>)
