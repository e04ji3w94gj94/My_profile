import React from 'react';

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div className='histroy'>
        <div className='history-info'>
          <h3 className='date'>2018 - 2020</h3>
          <p>台北科技大學</p>
          <p>資訊與財金管理系 碩士</p>
        </div>
        <div className='history-content'>
          <p>學經歷簡介如下：</p>
          <ol>
            <li> 論文題目：基於深度學習YOLOv3即時偵測服裝類型：用以協助相關影像</li>
            <li> 使用 pytorch 建置深度模型 </li>
            <li> 使用 React 提供網頁平台服務 </li>
          </ol>
        </div>
      </div>
      <div className='histroy'>
        <div className='history-info'>
          <h3 className='date'>2014 - 2018</h3>
          <p>銘傳大學</p>
          <p>資訊與管理系 學士</p>
        </div>
        <div className='history-content'>
          <p>學經歷簡介如下：</p>
          <ol>
            <li> 2016 - 第21屆全國大專校院資訊應用服務創新競賽校園4G行動應用服務組-校園行動助理，佳作</li>
            <li> 2017 - 第22屆全國大專校院資訊應用服務創新競賽桃園開放資料創新應用組- Simplet ，第一名</li>
            <li> 2017 - 第23屆資訊管理暨實務研討會一般論文－結合WIFI微定位與擴增實境技術之暢貨中心導引系統設計之研究</li>
            <li> 2016 - 擔任 APP 應用系統設計教學助理</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;
