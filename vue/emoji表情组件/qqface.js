export const face_code = {
    "0": "/::)", "11": "/::@", "22": "/::d", "33": "/:,@x", "44": "/:B-)", "55": "/:pd", "66": "/:heart", "77": "/:gift", "88": "/:no", "99": "/:oY",
    "1": "/::~", "12": "/::P", "23": "/:,@o", "34": "/:,@@", "45": "/:<@", "56": "/:<W>", "67": "/:break", "78": "/:hug", "89": "/:ok", "100": "/:#-0",
    "2": "/::B", "13": "/::D", "24": "/::g", "35": "/::8", "46": "/:@>", "57": "/:beer", "68": "/:cake", "79": "/:strong", "90": "/:love",
    "3": "/::|", "14": "/::O", "25": "/:|-)", "36": "/:,@!", "47": "/::-O", "58": "/:basketb", "69": "/:li", "80": "/:weak", "91": "/:<L>", "102": "/:kiss",
    "4": "/:8-)", "15": "/::(", "26": "/::!", "37": "/:!!!", "48": "/:>-|", "59": "/:oo", "70": "/:bome", "81": "/:share", "92": "/:jump", "103": "/:<&",
    "5": "/::<", "16": "/::+", "27": "/::L", "38": "/:xx", "49": "/:P-(", "60": "/:coffee", "71": "/:kn", "82": "/:v", "93": "/:shake", "104": "/:&>",
    "6": "/::$", "17": "/:--b", "28": "/::>", "39": "/:bye", "50": "/::'|", "61": "/:eat", "72": "/:footb", "83": "/:@)", "94": "/:<O>",
    "7": "/::X", "18": "/::Q", "29": "/::,@", "40": "/:wipe", "51": "/:X-)", "62": "/:pig", "73": "/:ladybug", "84": "/:jj", "95": "/:circle",
    "8": "/::Z", "19": "/::T", "30": "/:,@f", "41": "/:dig", "52": "/::*", "63": "/:rose", "74": "/:shit", "85": "/:@@", "96": "/:kotow",
    "9": "/::\'(", "20": "/:,@P", "31": "/::-S", "42": "/:handclap", "53": "/:@x", "64": "/:fade", "75": "/:moon", "86": "/:bad", "97": "/:turn",
    "10": "/::-|", "21": "/:,@-D", "32": "/:?", "43": "/:&-(", "54": "/:8*", "65": "/:showlove", "76": "/:sun", "87": "/:lvu", "98": "/:skip"
}

const qqface_conf = {
    path: "*******",//动图路径
    pictype: ".gif",
    path2: "*******",//静态图路径
    pictype2: ".png",
    face_num: getJsonObjLength(face_code),
    current_host: '//' + window.location.host,
}

/* 转换器 */
export function transface(type, text) {
    if (text == "") {
        return text;
    }
        /* 表情图 转 表情码 */
    if (type == 'pic') {
        var reg1 = /(<(img).*?>)/g;
        if (text.indexOf("<img") >= 0) {
            var imgarr = text.match(reg1);
            var flag, pointnum, num, code;
            for (var i in imgarr) {
                var item = imgarr[i];
                flag = item.lastIndexOf("/");
                picname = item.substring(flag + 1, text.length - 2);
                pointnum = picname.indexOf(".");
                num = picname.substring(0, pointnum);
                code = face_code[num];
                text = text.replace(item, code);
            }
        }
        return text;
    }
        /* 表情码 转 表情图 */
    else if (type == 'msg') {
        var msg = text;
        for (var i = 0; i <= qqface_conf.face_num; i++) {
            var code = face_code[i];
            if (!code) {
                continue;
            }
            var res = msg.indexOf(code);
            if (res < 0) {
                code = code.toUpperCase();
                res = msg.indexOf(code);
            }
            if (res >= 0) {
                var sbm = [")", "(", "|", "$", "*", "'", "+", "?", "[", "]"];
                for (var n in sbm) {
                    var ind = code.indexOf(sbm[n]);
                    var rep = '\\' + sbm[n];
                    if (ind >= 0) code = code.replace(new RegExp("\\" + sbm[n], "g"), "\\" + sbm[n]);
                }
                var img = '<img src="' + qqface_conf.path + i + qqface_conf.pictype + '" code="' + i + '" style="width:26px;height:26px;vertical-align:text-bottom;transform: translateZ(0);cursor: pointer;"></img>';
                msg = msg.replace(new RegExp(code, "g"), img);
            }
        }
        return msg;
    }
    return false;
}

function getJsonObjLength(jsonObj) {
    var Length = 0;
    for (var item in jsonObj) {
        Length++;
    }
    return Length;
}
