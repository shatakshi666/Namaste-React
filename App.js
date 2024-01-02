const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I'm H1 tag!!"),
    React.createElement("h2", { id: "h2" }, "I'm H2 tag!!"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "h1" },
  "hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// Adding the code to GitHub
// Learning git diff command