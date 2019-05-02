

export function Deletedefect(id) {

    
    console.log(id);
  var url=`http://localhost:8080/library/delete/${id}`;

    return fetch(url, {
        method: 'DELETE',
       // body: JSON.stringify(items),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}