const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/26b3fed246fc530e74dd0aaf1a61c154/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si&lang=es';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'Hay ' + body.currently.temperature + ' grados. Y ' + body.currently.precipProbability + '% de probabilidad de lluvia.')
        }
    })
}

module.exports = forecast