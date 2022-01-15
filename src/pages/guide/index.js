import React from 'react';
import { Urls } from '../../common/enum';
import style from './index.less';



export default function guide() {
  return (
  <div className={style.Guide}>
    <div className="block top">
      <img src={Urls.longer} className="pic" />
      <div>
        <p>爱很简单</p>
        <p>想起你的如花笑靥，</p>
        <p>就会感到稳稳的幸福</p>
      </div>
    </div>
    <div className="block bottom">
      <div className='text'>
        <p>爱很长久</p>
        <p>想到和你共度余生，</p>
        <p>就会对余生充满期待</p>
      </div>
      <img src={Urls.couple} className="pic"/>
    </div>  </div>)
}