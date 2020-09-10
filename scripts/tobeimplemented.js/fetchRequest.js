//this function gets the current Tab URL and pushes to console. Optional Paramater of all, returns the array of the URl of the Tab.
function getCurrentTabURL(){
}




//https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801#advanced-uploading-multiple-files
//https://www.javascripttutorial.net/javascript-fetch-api/#:~:text=The%20Fetch%20API%20allows%20you,resolve%20into%20the%20actual%20data.
//https://danlevy.net/you-may-not-need-axios/
//https://plnkr.co/edit/svNVUxadu39knD75?p=preview&preview

//fetch using a Request and a Headers objects
//using jsonplaceholder for the data

const uri = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// //new Request(uri)
// //new Request(uri, options)
// //options - method, headers, body, mode
// //methods:  GET, POST, PUT, DELETE, OPTIONS

// //new Headers()
// // headers.append(name, value)
// // Content-Type, Content-Length, Accept, Accept-Language,
// // X-Requested-With, User-Agent
// let h = new Headers();
// h.append('Accept', 'application/json');

// let req = new Request(uri, {
//     method: 'POST',
//     headers: h,
//     mode: 'cors'
// });

// fetch(req)
//     .then( (response)=>{
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error('BAD HTTP stuff');
//         }
//     })
//     .then( (jsonData) =>{
//         console.log(jsonData);
//     })
//     .catch( (err) =>{
//         console.log('ERROR:', err.message);
//     });


