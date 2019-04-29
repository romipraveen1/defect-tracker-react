
export function Postproject(items) {

    var project = JSON.stringify(items);
    console.log(project);

    return fetch('http://localhost:8080/library/saveProject', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}
