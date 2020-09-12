
function getEntityType(entity) {
    return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
// atemporary workinProgress variable, used to build output until mutated/created
let wip;

function ehhProcessEntity(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess){ 
  currentProcess = "ehhProcessEntity";

  if (!reqEntity || !processingEntity) { return; };

  if (processingEntity ==='CSSRuleList') {
    console.log(currentProcess, getEntityType(processingEntity), entity2Find);
    var processingEntity = document.styleSheets[0].cssRules;
    if (processingEntity.length) {
    //  console.log("handling get");
      iterateEntity(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess);
    }
  
  }
  
  if (getEntityType(processingEntity) === entity2Find || getEntityType(processingEntity) === 'CSSMediaRule' && request==='get') { 

    if (reqEntity.matches(processingEntity.selectorText) === true) { 
     console.log("found Entity", processingEntity.style);
      iterateObject(reqEntity, processingEntity.style, entity2Find, values, output, outputType, "mutate", currentProcess);
    }
 
  }
  if (request === "mutate") { 

    console.log("mutating", processingEntity);
  }




}


function iterateEntity(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess){ 
 // currentProcess = "iterateEntity";
  // console.log(request,typeof processingEntity, processingEntity);
 if (isArray(processingEntity)) {
   iterateArray(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess); 
  } else if ((typeof processingEntity === 'object') && (processingEntity !== null)) {
  // console.log("foundObject", processingEntity);
  iterateObject(reqEntity, processingEntity, entity2Find, values, output, outputType, request,currentProcess);
    } else {
   // console.log(processingEntity);
  }



}

function iterateArray(reqEntity, arr, entity2Find, values, output, outputType, request, currentProcess) {
  //currentProcess = "iterateArray";
  for (i = 0; i <= arr.length; i++) {
    if (arr[i]) {
   // console.log("foundEntity in Array", arr[i], typeof arr[i]);
      ehhProcessEntity(reqEntity, arr[i], entity2Find, values, output, outputType, request,"array");
    }
  }
}



function iterateObject(reqEntity, obj, entity2Find, values, output, outputType, request) {
  currentProcess = "iterateObject";
 // if (!obj) { return; } 
  for (var key in obj) {
    if (obj[key] && obj[key]!= 'function') {
   // console.log(key, obj[key]);    
   ehhProcessEntity(reqEntity, key, entity2Find, values, output, outputType, request);
    }
  }
}

  function isArray(o) {
    return o.length;
  }


  function save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
  }

  function find(entity, keyTofind) {
    //console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
      return !key.indexOf(keyTofind);
    });
    return result;
  }

