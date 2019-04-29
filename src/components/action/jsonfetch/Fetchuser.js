const cors = require('cors');
export function Postuser(items) {

    var module = JSON.stringify(items);
    console.log(module);


    return fetch('http://localhost:8080/library/saveUser', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}