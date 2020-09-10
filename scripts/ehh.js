
window.onload = windOnLoad();

function windOnLoad() {
    //window storage == session storage
    console.log("ehh is running! on >>>", window.document.title, window.document.location.origin);
    var listeners = createListeners(this);
}

function createListeners(entity) {
 //   console.log(entity);
    var events = find(entity, 'on');
  // console.log("events Found",events);
    var a = events.forEach(create);
    console.log(a);
    save(events, this.constructor.name + "listeners");
    
    console.log("listernes created & Saved to local storagea at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);
}
let event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],
}

function initState(e) {
    var nodes = [];
    //currentState = e.type;
    document.documentElement.querySelectorAll('*').forEach(function (node) {
        node.setAttribute("currentstate", "inDom"); node.setAttribute("prevstate", "");
       //  console.log(node);
    });
    
}

function changeState(e) {
    console.log("changing state");
    var targetElement = e.target;
   // console.log(targetElement);
    
    let currentState = targetElement.getAttribute('currentstate');
    let prevState = targetElement.getAttribute('prevstate'); 
    
    //console.log("current state", currentState);
    //console.log("prev state",prevState);

    if (prevState === currentState) {
        //console.log("samestate",targetElement);
    }else{
        targetElement.setAttribute('prevstate', currentState); //console.log(prevState);
        targetElement.setAttribute('currentstate', e.type); //console.log(prevState);
        console.log("New State",targetElement);
    }

    //console.log(targetElement.getAttributes(prevstate));

}
//this function acts like a event conductor, read it's event command mapp from a json file, which mapps 
//Ignore Events from Json to be implemented
//https://github.com/philipwalton/router/blob/master/index.js

function onEvent(e) {
   // console.log(e.constructor.name, e.type, "captured", e.target.tagName);
    if (e.type === "pageshow") {
        //console.log(e.constructor.name, e.type, "captured", e.target.tagName);
       initState(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } if (e.constructor.name === "MouseEvent") {
        console.log(e.constructor.name, e.type, "captured", e.target.tagName);
        changeState(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    }


    if (e.type === "mouseover") {
       //  console.log(e.constructor.name, e.type, "captured", e.target.tagName);
       // changeState(e);
          // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
      }  if (e.type === "click") {
       // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
     // click(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } if (e.type === "mousedown") {
        changeState(e);
      // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    }  if (e.type === "contextmenu") {
       // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
        //createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        e.preventDefault();
       // rightClick(e);
        
    }  {
        if (e.type === "mouseover") {
         //   console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
            // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        } 


    }

}

function create(entity) {
    window[entity] = onEvent;
}


function rightClick(event) { 
    console.log("contextClick", event);
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.clientY + "px";
    contextElement.style.left = event.clientX + "px";
    contextElement.classList.add("active");
    contextElement.style.display = 'block';
}

function click(e) { 
    document.getElementById("context-menu").classList.remove("active");
    var contextElement = document.getElementById("context-menu");
    console.log("clickedOn",contextElement);
    contextElement.style.display = 'none';
}




function updateAttr(e){
var targetElement = e.target;
//targetElement.setAttribute('class', e.type);
console.log(targetElement);
//targetElement.classList.add(e.type);
}



