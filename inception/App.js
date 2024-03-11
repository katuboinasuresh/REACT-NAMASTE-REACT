/* when we want to write the html code in react like these
<div id="parent">
<div id="child">
<h1>i'm h1 tag</h1>  #here we add another sibiling like h2
<h2>i'm h2 tag</h2>  # for that i passed the child tags in content of parent as 
array values in parent object you can see in parent object
</div>
</div> for similar nested html code i will write in react by the help of createelement method its create object and it
takes the {},content in the element as props*/

const parent=React.createElement("div",{id:"parent"},
/*here i pass the second div element as first element's content*/
React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'm h1" ),React.createElement("h2",{},"i'm h2" )]))

/* for we pass two div elements in parent we uses array method */
const parent2=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'm h1" ),
React.createElement("h2",{},"i'm h2" )])
,React.createElement("div",{id:"child"},[React.createElement("h1",{},"i'm h1" ),React.createElement("h2",{},"i'm h2" )])
])

/* see above code it's so complecated to understand the biggners so there is alternative for it 
JSX it alows us to write  the html in react application */

console.log(parent)
const heading=React.createElement("h1",/*pros*/{id:'heading'},"Hello World React Is on");/* with these line we create object
it's converted into html to understsnd by browser*/
/*here we create root element here to render our html code in browser 
{} these one in react is also us to give attributes to our html tags*/
const root=ReactDOM.createRoot(document.getElementById("root"));
/*when we render the root element we uses render method*/
root.render(parent2)