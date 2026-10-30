//Use createRoot API to render our element on screen 
import { createRoot } from 'react-dom/client';

/*
In JSX we follow 3 rules 
    - Return one element
        - if you want to store multiple element then store inside <div>  </div> or fragments < > </>
    - close all tags
        - img tag doesn't have closing tag in JS or HTML but here <img src="image.jpg"/>
    - camelCase most of the things
        - uslally <p class="menu"> Golden Yak </p>
        - BUT in JSX <p className="menu"> Golden Yak </p>
*/
const element = <div>
        <h1>My First React App</h1>
        <p className="main-desc">I just learned how to create a REACT node and render it into the DOM</p>
    </div>
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