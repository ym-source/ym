// 本次更新的版本
const appVersion = 266;

// 本次更新说明
const appVersionTxt = "链接检测功能和节点部署功能";

const APPCONFSUM=10;

const APPACCESSKETLIST= ['lxf','mxh','suzijie','yangzhongjie','liuyisen','gongpenglong','huangshuiping','yangjiaming','chengyihao','jiajunhao','yangjing','yangzhicheng','hw'];

const COUNTRIESCN = [
    "香港","澳门","台湾","中国","美国","日本","韩国","朝鲜","俄罗斯",
    "英国","法国","德国","意大利","西班牙","葡萄牙",
    "荷兰","比利时","瑞士","奥地利","瑞典","挪威","丹麦","芬兰",
    "加拿大","澳大利亚","新西兰",
    "印度","巴基斯坦","孟加拉国","斯里兰卡","尼泊尔","不丹",
    "泰国","越南","老挝","柬埔寨","缅甸","马来西亚","新加坡","印度尼西亚","菲律宾",
    "沙特阿拉伯","阿联酋","卡塔尔","科威特","伊朗","伊拉克","以色列","土耳其",
    "埃及","利比亚","阿尔及利亚","摩洛哥","突尼斯","南非","尼日利亚","肯尼亚","埃塞俄比亚",
    "巴西","阿根廷","智利","秘鲁","哥伦比亚","墨西哥","委内瑞拉",
    "乌克兰","白俄罗斯","波兰","捷克","匈牙利","希腊","罗马尼亚","保加利亚","塞尔维亚","克罗地亚",
    "阿尔巴尼亚","斯洛伐克","斯洛文尼亚","立陶宛","拉脱维亚","爱沙尼亚",
    "哈萨克斯坦","乌兹别克斯坦","吉尔吉斯斯坦","塔吉克斯坦","土库曼斯坦",
    "蒙古","阿富汗","叙利亚","黎巴嫩","约旦","也门","阿曼"
];

const HOSTOSS = "https://raw.githubusercontent.com/ym-source/ym/main/"

const APPKFTYPE=[
    {
        name: "广州",
        val: "hb_kefu.txt"
    },
    {
        name: "湖北",
        val: "hb_kefu.txt"
    },
    {
        name: "海外",
        val: "hw_kefu.txt"
    }
]

const APPTYPENAME = [
    {
        name: "影猫",
        val: "ym",
        host: "host_ym.txt"
    }, {
        name: "太子",
        val: "tz",
        host: "hosttaizi.txt"
    }, {
        name: "八爪鱼",
        val: "bzy",
        host: "hostdef.txt"
    }, {
        name: "云梯",
        val: "yt",
        host: "host_yunti.txt"
    }, {
        name: "马上连",
        val: "msl",
        host: "host_wf.txt"
    }, {
        name: "一键连",
        val: "yjl",
        host: "host_yjl.txt"
    }, {
        name: "橘猫",
        val: "jm",
        host: "host_jm.txt"
    }, {
        name: "好易联",
        val: "hyl",
        host: "host_hyl.txt"
    }, {
        name: "橘猫2",
        val: "jm2",
        host: "host_jm2.txt"
    }, {
        name: "超飞",
        val: "cf",
        host: "host_chaofei.txt"
    }, {
        name: "三键连",
        val: "sjl",
        host: "host_yjl3.txt"
    }, {
        name: "网飞",
        val: "wf",
        host: "host_wf.txt"
    }, {
        name: "行云",
        val: "xy",
        host: "host_xy.txt"
    }, {
        name: "影喵",
        val: "ymm",
        host: "host_xy.txt"
    }, {
        name: "快飞",
        val: "bsm",
        host: "host_kuaifei.txt"
    }, {
        name: "极捷",
        val: "jj",
        host: "host_jijie.txt"
    }, {
        name: "蓝鹰",
        val: "ly",
        host: "host_lanying.txt"
    }, {
        name: "星域",
        val: "xinyu",
        host: "host_xy.txt"
    }, {
        name: "即刻连",
        val: "jkl",
        host: "host_jkl.txt"
    }
]