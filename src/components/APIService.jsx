
export default class APIService {
    static updateTrip(id, body){
        return fetch(`https://travel-buddies-backend.onrender.com/update/${id}/`, {
            'method': 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static insertTrip(body){
        return fetch(`https://travel-buddies-backend.onrender.com/add`, {
            'method': 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static deleteTrip(id){
        return fetch(`https://travel-buddies-backend.onrender.com/delete/${id}/`, {
            'method': 'DELETE',
            headers: {
                'content-Type': 'application/json'
            },
        })
    }

    static clearmqtt(){
        return fetch(`https://travel-buddies-backend.onrender.com/mqttclear`, {
            'method': 'GET',
            headers: {
                'content-Type': 'application/json'
            },
        })
    }
}
