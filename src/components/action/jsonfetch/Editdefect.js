const cors = require('cors');
export function editdefect(items,id) {

    var module = JSON.stringify(items);
    console.log(module);

        let url=`http://localhost:8080/library/defect/${id}`
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}