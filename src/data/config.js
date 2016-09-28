import Immutable from 'immutable';

const titles = [
    "福利",
    "ANDROID",
    "IOS",
    "ALL",
    "前端",
    "视频",
    "资源"];

//初始化数据
const initState = Immutable.fromJS({
    nav: {
        index: 0,
    }
});
export {titles, initState} ;
