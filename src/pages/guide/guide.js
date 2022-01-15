import React from 'react';
import { Urls } from '../../common/enum';
import style from './index.less';

export default function guide() {
  return (
    <div className={style.Guide}>
      <div className='group top'>
        <img src={Urls.knee} className='pic' />
        <div>
          <p>两姓联姻，一堂缔约，</p>
          <p>良缘永结，匹配同称。</p>
          <p>看此日桃花灼灼，宜室宜家；</p>
          <p>卜他年瓜瓞绵绵，尔昌尔炽。</p>
          <p>谨以白头之约，书向鸿笺，</p>
          <p>好将红叶之盟，载明鸳谱。</p>
        </div>
      </div>
      <div className='group bottom'>
        <img src={Urls.hug} className='pic' />
      </div>{' '}
    </div>
  );
}
