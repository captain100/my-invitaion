import React from 'react';
import { baseIndfo, Urls } from '../../common/enum';
import style from './index.less';


export default function Bridge(porps) {
  return (
  <div className={style.Bridge}>
    <div>
      <div className="bravo top">

        <p className="ml-20">我们都在旅途中寻找自己</p>
      </div>
      <div className="mid-block">
        <img className="photo" src={Urls.bridgeRoom} />
        <p className="bridges">{`新郎：${baseIndfo.man}`}</p>
      </div>
      <div className="bravo bottom">
        <p>你，让所有的风景都有了新意</p>
      </div>
    </div>
  </div>);
}