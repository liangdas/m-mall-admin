'use strict';
/**
 * Created by liangdas on 2017/7/25.
 * Email 1587790525@qq.com
 */
var token;
var request = require('request');
var fs=require('fs');
request({
    url: "https://bm.tiyfr.com/api/user/sign/in",
    method: "POST",
    json: true,
    headers: {
        "content-type": "application/json",
    },
    form: {"username":"admin","password":"123456"}
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        token=body.data.token;
        updateFile(token);
    }else{
        console.log(response.statusCode);
    }
});


function updateFile(token) {
    var formData = {
        // Pass a simple key-value pair
        file: 'my_value',
        // Pass data via Buffers
        my_buffer: new Buffer([1, 2, 3]),
        // Pass data via Streams
        my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
    };
    request.post({
        url:'https://bm.tiyfr.com/api/common/file',
        headers: {
            "Authorization": "bearer "+token,
        },
        formData: formData
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }else{
            console.log(response.statusCode);
        }
    });
}
