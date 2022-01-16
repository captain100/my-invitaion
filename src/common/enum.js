import { EventEmitter } from "events";

//eventBus 利用这个对象可以发送或者监听事件
export const eventBus = new EventEmitter();

export const baseIndfo = {
  man: '邱实',
  woman: '项晓赛',
  time: '2022-02-22',
  hotel: '喜宴贵宾楼',
  detailHotel: '辽宁省朝阳市建平县喜宴贵宾楼',
  address: '辽宁省朝阳市'
};

// 相册地址
const imagesDir ='http://wyy.photowww.com/183new/XTApp/11501/1150120220106005/XT/';
export const Urls = {
  top: `${imagesDir}/008.jpg`,
  btm: `${imagesDir}/012.jpg`,
  icon: './src/assets/welcome-icon.png',
  bridgeRoom: `${imagesDir}/039.jpg`,
  bridge: `${imagesDir}/034.jpg`,
  longer: `${imagesDir}/035.jpg`,
  couple: `${imagesDir}/036.jpg`,
  knee: `${imagesDir}/023.jpg`,
  hug: `${imagesDir}/021.jpg`,
  welcome: `${imagesDir}/044.jpg`,
}