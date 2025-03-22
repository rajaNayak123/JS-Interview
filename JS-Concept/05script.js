/* Promisefy  :

when a function performs asynchronous task and recieving callback 
function and then we want to convert it into a promise then we use promisfy  */

const util = require('util');
function getdata(callback) {
    setTimeout(() => {
        let a = 6;
        if (a == 5) {
            callback(null, "successful");
        } else {
            callback(new Error("failed"));
        }
    }, 2000)
}
let test = util.promisify(getdata);
test()
    .then((msg) => { console.log(msg) })
    .catch((err) => { console.log(err) })