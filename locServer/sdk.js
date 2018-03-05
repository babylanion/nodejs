// 语音合成
var fs = require('fs');
var AipSpeechClient = require("baidu-aip-sdk").speech;

// 设置APPID/AK/SK
var APP_ID = "10843008";
var API_KEY = "xZoHpdqZInGqlrtsshQSoRlV";
var SECRET_KEY = "m8ohlrn3NUd6FSyte26g237T5CD9tWsO";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
var options = {spd: 5, per: 3,vol:15};
// var tex = '葛贝贝你好';
function readTex(tex){
    client.text2audio(tex,options).then(function(result) {
        if (result.data) {
            fs.writeFileSync('./music.mp3', result.data);
        } else {
            // 服务发生错误
            console.log(result)
        }
    }, function(e) {
        // 发生网络错误
        console.log(e)
    });
}

exports.readTex = readTex;

// // 语音合成, 附带可选参数
// client.text2audio('百度语音合成测试', {spd: 0, per: 4}).then(function(result) {
//     if (result.data) {
//         fs.writeFileSync('tts.mpVoice.mp3', result.data);
//     } else {
//         // 服务发生错误
//         console.log(result)
//     }
// }, function(e) {
//     // 发生网络错误
//     console.log(e)
// });