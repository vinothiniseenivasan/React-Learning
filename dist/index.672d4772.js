//     <div id="parent">
//        <div id="child">
//         <h1>I am a h1 tag</h1>
//        </div>
//   </div>
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")
]), React.createElement("div", {
    id: "child"
}, [
    React.createElement("h3", {}, "I am a h3 tag"),
    React.createElement("h4", {}, "I am a h4 tag")
]));
root.render(parent);
console.log("parent", parent);

//# sourceMappingURL=index.672d4772.js.map