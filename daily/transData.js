let result = {
    "2018/12/15": {
        "aa": "1215aa", 
        "bb": "1215bb", 
        "cc": "1215cc", 
        "dd": "1215dd", 
        "ee": "1215ee"
    }, 
    "2018/11/16": {
        "aa": "1116aa", 
        "bb": "1116bb", 
        "cc": "1116cc", 
        "dd": "1116dd", 
        "ee": "1116ee"
    }, 
    "2018/11/12": {
        "aa": "1112aa", 
        "bb": "1112bb", 
        "cc": "1112cc", 
        "dd": "1112dd", 
        "ee": "1112ee"
    }, 
    "2018/10/19": {
        "aa": "1019aa", 
        "bb": "1019bb", 
        "cc": "1019cc", 
        "dd": "1019dd", 
        "ee": "1019ee"
    }, 
    "2018/12/20": {
        "aa": "1220aa", 
        "bb": "1220bb", 
        "cc": "1220cc", 
        "dd": "1220dd", 
        "ee": "1220ee"
    }, 
    "2018/11/21": {
        "aa": "1121aa", 
        "bb": "1121bb", 
        "cc": "1121cc", 
        "dd": "1121dd", 
        "ee": "1121ee"
    }
}

// 需求 按日期排序
function transData(result) {
    let ret = {
        dateArr: [],
        aaArr: [],
        bbArr: [],
        ccArr: [],
        ddArr: [],
        eeArr: [],
    }
    
    let dateArr = Object.keys(result);
    dateArr.sort((a,b) => {
           return new Date(a) - new Date(b)
    })

    for(let index in dateArr){
        for(let i in result){   
            if(dateArr[index] == i){
                ret.dateArr.push(dateArr[index]);
                ret.aaArr.push(result[i].aa)
                ret.bbArr.push(result[i].bb)
                ret.ccArr.push(result[i].cc)
                ret.ddArr.push(result[i].dd)
                ret.eeArr.push(result[i].ee)
                break;
            }
        }
    }

    return ret;
}


// transData(result);

// 结果：
/**
result = {
    aaArr: ["1019aa", "1112aa", "1116aa", "1121aa", "1215aa", "1220aa"],
    bbArr: ["1019bb", "1112bb", "1116bb", "1121bb", "1215bb", "1220bb"],
    ccArr: ["1019cc", "1112cc", "1116cc", "1121cc", "1215cc", "1220cc"],
    dateArr: ["2018/10/19", "2018/11/12", "2018/11/16", "2018/11/21", "2018/12/15", "2018/12/20"],
    ddArr: ["1019dd", "1112dd", "1116dd", "1121dd", "1215dd", "1220dd"],
    eeArr: ["1019ee", "1112ee", "1116ee", "1121ee", "1215ee", "1220ee"],
}
 */

