const ignoreEvent = ['PointerEvent'];
const autoSaveTimer = "10 Sec";
const ehhNavigation = ["#hashChange", "elementChildOpen"]
const elementStates = ["pinned", "saved", "mouseOver/hover", "editable", "draggable", "resizeable", "contenteditable", "inDocument", "hidden"];
const ehhType = ["client", "server", "clientSideServer"];
const ehhClientType = ["addon", "browserSnippet", "extension", "browserApp", "webApp/webSite", "destopApp"];
const ehhDevices = ["mac", "pc", "ios", "andriod"]
const ehhModes = ["editorMode", "designMode", "developmentMode"]
const elementAttributes = ["form", "function", "beauty"];
const entityState = [prevState, currentState, nextState];
const stateService = {



}




var state = {
    currentState: "",
    previousState:""

}

var event = {
    "origin": ["mouse", "window", "ehh", "HTTP", "keyBoard"],


}

function changeState(e) {
    var targetElement = e.target;
    console.log(targetElement);
    targetElement.setAttribute('currentState', e.type);
    if (targetElement.state) {
        var currentState = targetElement.getAttributes(state);
        console.log(currentState);
    }
}


changeState(entity,newState) {
    //validate that newState actually exists
    entity.getAttributes(currentState);
    entity.setAtt
    console.log(targetElement);
//targetElement.classList.add(e.type);
}