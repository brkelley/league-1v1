var request = require('request');

const programAPIKey = '?api_key=';
const userByNameAPI = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';

var riotService = {
    getUserByName: function(name) {
        request.get(userByNameAPI+name+programAPIKey)
        .on('response', function(response) {
            if(response.statusCode === 200){
                return response.body;
            }
            return console.log(response);
        });
    },

    stubName: function(name) {
        return {
            "profileIconId": 8888,
            "name": name,
            "summonerLevel": 88,
            "accountId": 888888888,
            "id": 888888888888888,
            "revisionDate": 8888888888888
        }
    }
}

module.exports = riotService;