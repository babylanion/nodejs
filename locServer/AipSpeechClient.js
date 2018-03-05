var AipSpeechClient = require("baidu-aip-sdk").speech;

// 设置APPID/AK/SK
var APP_ID = "10843008";
var API_KEY = "xZoHpdqZInGqlrtsshQSoRlV";
var SECRET_KEY = "m8ohlrn3NUd6FSyte26g237T5CD9tWsO";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
