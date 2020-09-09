
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
    save(events, this.constructor.name+"listeners");
    console.log("listernes created & Saved to local storagea at ", new Date().toLocaleString().replace(',', ''), this.constructor.name);
}
let event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],
    "eventState": {
        "currentState": "mouseMove",
        "previousState": "mouseDown",
        "predictNextState": ""
    }


}

//this function acts like a event conductor, read it's event command mapp from a json file, which mapps 
//Ignore Events from Json to be implemented
//https://github.com/philipwalton/router/blob/master/index.js

function onEvent(e) {
    //console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
    if (e.type === "click") {
        console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
        click(e);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } else if (e.type === "mousedown") {
       // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
        // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
    } else if (e.type === "contextmenu") {
       // console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
        //createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        e.preventDefault();
        rightClick(e);
        
    } else {
        if (e.type === "mouseover") {
         //   console.log(e.constructor.name, e.type, "captured", e.target.constructor.name);
            // createElement(e); // onmousedown(e); // onmousedown(e); // console.log("body");
        } 


    }

}

function create(entity) {
    window[entity] = onEvent;
}

function find(entity, keyTofind) {
   // console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
        return !key.indexOf(keyTofind);
    });
    return result;
}

function save(entity, keyTitle) {
     console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
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
