import Immutable from 'immutable';

const titles = [
    "福利",
    "Android",
    "iOS",
    "all",
    "前端",
    "休息视频",
    "拓展资源"];

//初始化数据
const initState = Immutable.fromJS({
    nav: {
        index: 0,
        showProgress: 'flex',

    },
    modal: {
        modalSrc: ''
    }
});
export {titles, initState} ;
