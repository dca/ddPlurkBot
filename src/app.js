var PlurkClient = require('plurk').PlurkClient;

var client = require('plurk').fromFileSync(__dirname + '/config.json');

// client.rq('Profile/getPublicProfile', {'user_id': "dcahsu"}, function(err, data) {
//     console.log('try api ', err, data);
// });

client.rq('Polling/getPlurks', {
  offset: '2010-01-01T00:00:00',
  limit: 300
}, function(err, data) {
    console.log('try api ', err, data);
    console.log('count', data.plurks.length);

    var plurk = data.plurks[1];

    // client.rq('Responses/responseAdd', {
    //   plurk_id: plurk.plurk_id,
    //   content: 'HelloWorld',
    //   qualifier: 'says'
    // }, function(err, data) {
    //     console.log('try api ', err, data);
    // });


});
