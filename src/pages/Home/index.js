import React from 'react';
import style from './index.less';
import { baseIndfo, Urls } from '../../common/enum';

export default function Home() {
  return (
  <div className={style.homePage}>
    <img className="background top" src={Urls.top} />
    <img className="background bottom" src={Urls.btm} />
    <div className="invite-block">
      <img className="welcome-icon" src={Urls.icon} />
      <div className="sub-title"> 喜邀 </div>
      <div className="mini-title">{baseIndfo.time}</div>
      <div className="mini-title">{baseIndfo.detailHotel || baseIndfo.hotel}</div>
    </div>
  </div>);
}