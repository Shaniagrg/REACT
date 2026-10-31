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
const root = createRoot(document.getElementById('root'));

//we need to render it so we use
root.render(element)
