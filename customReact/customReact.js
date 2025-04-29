// CUSTOME REACT: THIS IS HOW ACTUALLY REACT WORK UNDER THE HOOD

// naive approach 1:
// function customRender(reactElement,container){
//     // create a element:
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props['href']);
//     domElement.setAttribute('target',reactElement.props['target']);

//     container.append(domElement);
// }

// basic approach 2:

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){
        if(prop === "children") continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.append(domElement);
};



// how react see the element after complie
const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children : "click me to visit !"
}



const mainContainer = document.querySelector('#root');


customRender(reactElement,mainContainer);









