/*

Example 1 :  How to create an element in Root div  using React

<div id = "root">

    <h1>Hello world from React !!</h1>

</div>


*/

/* To Execute above example uncomment the below code


const headingFromReact = React.createElement(
  "h1", // This is the type of element
  { id: "heading", xyz: "abc" }, // These are the attributes you wanted to pass it to the element
  "Hello World from React !" // These are the children you wanted to pass
);

console.log(headingFromReact); // Normally we think it'll log an HTML element but It'll log a Javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingFromReact); // This render method will convert the passing object to HTML element and Insert it inside the Actual DOM

----------------->>>>>>>>>> Done <<<<<<<<<<<<<------------------ */

/*

Example 2 : How to create an nested element in ROOt div using React

<div id = "parent">
    <div id = "child">
        <h1>Hello world from React !!</h1>
    </div>
</div>

*/

/* To Execute above example uncomment the below code

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello world from parent child div")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

----------------->>>>>>>>>> Done <<<<<<<<<<<<<------------------ */

/*

Example 3 : How to create an nested element with siblings in ROOt div using React

<div id = "parent">
    <div id = "child">
        <h1>Hello world from React !!</h1>
        <h2>Hello world from parent child div</h2>
    </div>
</div>

*/

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello world from parent child div"),
    React.createElement("h2", {}, "H2 sibling "),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

----------------->>>>>>>>>> Done <<<<<<<<<<<<<------------------ */

/*

Example 4 : How to create an complex nested element with siblings in ROOt div using React

<div id = "parent">
    <div id = "child1">
        <h1>Hello world from React !!</h1>
        <h2>Hello world from parent child div</h2>
    </div>
    <div id = "child2">
        <h1>Hello world from React !!</h1>
        <h2>Hello world from parent child div</h2>
    </div>
</div>

*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello world from parent child div"),
    React.createElement("h2", {}, "H2 sibling "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello world from parent child div"),
    React.createElement("h2", {}, "H2 sibling "),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// See to build these two divs code has become more complex and difficult to read.
//  So, we've an solution to this problem which react provide which is JSX
//  Jsx will take care of all the headache of creating these nested elements internally
