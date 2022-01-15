import React, { useState } from 'react'
import { ImageViewer } from 'antd-mobile';
export default () => {
  const imagesDir = 'http://wyy.photowww.com/183new/XTApp/11501/1150120220106005/XT/';
  const demoImages = Array(52).fill('').map((item, index) => {
    if (index <= 9) {
      return `${imagesDir}00${index}.jpg`
    } else if (index < 100) {
      return `${imagesDir}0${index}.jpg`
    }
    return `${imagesDir}${index}.jpg`
  })
  const [visible, setVisible] = useState(true)
  return <>
    <ImageViewer.Multi
      images={demoImages}
      visible={visible}
      defaultIndex={0}
      onClose={() => {
        setVisible(false);
      }}
    /></>
}