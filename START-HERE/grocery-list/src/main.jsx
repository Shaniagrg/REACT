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

/*
Why use self closing tag to render?
    - Right now it's self contained header element we refer to using a self closing tag
Is it acceptable to write Header component with opening and closing tage like this: 
root.render(<Header> </Header>)?
    - Yes if you want to provide more JSX tags as children and is  useful when displayiing nested components
*/
root.render(<Header/>)
