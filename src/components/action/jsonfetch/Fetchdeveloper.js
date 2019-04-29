
export function Postdeveloper(items) {

    var developer = JSON.stringify(items);
    console.log(developer);


    return fetch('http://localhost:8080/library/saveDeveloper', {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}