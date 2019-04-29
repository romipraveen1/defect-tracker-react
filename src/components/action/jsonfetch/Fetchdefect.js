
const cors = require('cors');
export function createBlogPost(items) {

    var module = JSON.stringify(items);
    console.log(module);

    return fetch('http://localhost:8080/library/saveDefect', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}