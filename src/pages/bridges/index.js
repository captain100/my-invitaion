import React from 'react';
import { baseIndfo, Urls } from '../../common/enum';
import style from './index.less';

export default function Bridge(porps) {
  return (
  <div className={style.Bridge}>
    <div>
      <div className="bravo top">
        <p>生命是一场奇妙的旅途</p>
      </div>
      <div className="mid-block">
        <img className="photo" src={Urls.bridge} />
        <p className="bridges">{`新娘：${baseIndfo.woman}`}</p>
      </div>
      <div className="bravo bottom">
        <p>你，是途中最美的遇见 </p>
      </div>
    </div>
  </div>);
}