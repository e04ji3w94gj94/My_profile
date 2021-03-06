import React from 'react';

const Experience = () => {
  return (
    <div>
      <h2>Experience</h2>
      <div className='histroy'>
        <div className='history-info'>
          <h3 className='date'>2020 - Now	</h3>
          <p>數據規劃師</p>
          <p>台新金控 客群經營處</p>
        </div>
        <div className='history-content'>
          <p>工作內容簡介如下：</p>
          <ol>
            <li> 使用 python 做客戶資料分析，與 ETL 資料清理</li>
            <li> 協助埋設 Google Analytics 追蹤碼(pageview、event)，並查看 GA 報表、分析 BigQuery 原始資料</li>
            <li> Orcale(SQL)、Mongodb(No SQL) 分析資料庫</li>
            <li> 使用 Uipath 工具開發 RPA 自動化流程</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experience;
