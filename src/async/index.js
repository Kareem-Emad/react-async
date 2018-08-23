export default class ServerRequest {
    static BASE_URL= process.env.REACT_APP_API_URL  || ''

    static post(route,headers,body){

        return fetch(this.BASE_URL + route, {
          method: 'POST',
          body: body,
          headers: headers
        })
    }
    static put(route,headers,body){

        let put_promise = fetch(this.BASE_URL +route, {
            method: 'PUT',
            body: body,
            headers: headers
        })
        console.log(put_promise)
        return put_promise
    }
    static delete(route,headers,body){


        return  fetch(this.BASE_URL + route, {
            method: 'DELETE',
            body: body,
            headers: headers
        })
    }
    static get(route,headers){

        return fetch(this.BASE_URL+ route, {
            method: 'GET',
            headers: headers
        })
    }

    static fetchWorldCupRounds(){
        let wc_url = 'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json'
        let promise = this.get(wc_url,{})
        let extract = (data)=>{
            return data.rounds
        }
        //on every request you return:
        //promise to subscribe for
        //extract function to be used for getting the data out of the payload
        //this way you keep the payload representation separated from your application logic
        //NOTE: extract could be a tree of function like:
        //extract : {extract_date: func ,extract_player_list: func}
        return {promise, extract}

    }



}