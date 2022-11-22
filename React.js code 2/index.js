// Benefits of React

// 1. React is Composable. That is, you can put different elements together and make them work as one

function MyFunction() {
    return (
        <p>It's just a paragragh</p>
    )
}
function AnotherFunction() {
    return (
        <p>Just another paragragh</p>
    )
}


ReactDOM.render(
<div>
    <MyFunction />
    <AnotherFunction />
</div>,
document.getElementById("root"))

// 2. React is declartive. That is you can tell the computer what to do without spelling out the details
// This is a benefit over vanila JavaScript