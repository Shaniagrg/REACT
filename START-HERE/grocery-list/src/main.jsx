//Use createRoot API to render our element on screen 
import { createRoot } from 'react-dom/client';

const element = <h1>My First React App</h1>

//console.log(element);

/*
createRoot() 
    - creates the React root for displaying content within a browser DOM element
    - let's store in variable root
    - Then we need to provide createRoot() the HTML element we want to update or render to

We will pass HTML DOM element " document.getElementById('root') " 
    - its getting the id from the indext.html
*/

//Now this will create React root for div element with ID root in index.html and React will take over managing the DOM inside
const root = createRoot(document.getElementById('root'));

//we need to render it so we use
root.render(element)

//the JSX we pass to root.render will be rendered into the root div