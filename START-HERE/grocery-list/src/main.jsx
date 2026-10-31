//Use createRoot API to render our element on screen 
import { createRoot } from 'react-dom/client';

/*
 Arrow function
    - store inside variable 
    - use return 
*/
const Header = () => {
    return (
        <header>
            <h1> Grocery List</h1>
            <span className='total-items'> Items: 1</span>
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


const root = createRoot(document.getElementById('root'));
//render Item
root.render(<Item/>)
