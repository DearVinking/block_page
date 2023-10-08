import React, { useState, useEffect } from 'react';
import './App.css';

const LanguageContext = React.createContext();

const defaultTranslations = {
  en: {
    title: 'This request has been blocked',
    reason: 'Some of your characteristics exist in the blacklist and this request has been blocked.',
    action: 'If you think this is a false alarm, please contact me promptly.',
    symbols: '@Vinking Security Center'
  },
  zh: {
    title: '请求已被拦截',
    reason: '您的一些特征存在于黑名单中，此次请求已被拦截。',
    action: '如果您觉得这是误报，请及时联系我。',
    symbols: '@Vinking 安全中心'
  },
};

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const translations = defaultTranslations[currentLang];

  useEffect(() => {
    document.title = translations.title;
  }, [translations.title]);

  const handleLanguageChange = () => {
    setCurrentLang(currentLang === 'en' ? 'zh' : 'en');
  };

  return (
    <LanguageContext.Provider value={currentLang}>

      <div className="card">
        <div className="card-header">
          <div>{translations.title}</div>
          <div className='translation' onClick={handleLanguageChange}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="#f8f9fa" d="M608 416h288c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64V608H128c-35.36 0-64-28.48-64-64V128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v288zm0 64v64c0 35.36-28.48 64-64 64h-64v256.032C480 881.696 494.304 896 511.968 896H864a31.968 31.968 0 0 0 31.968-31.968V512A31.968 31.968 0 0 0 864 480.032H608zM128 159.968V512c0 17.664 14.304 31.968 31.968 31.968H512A31.968 31.968 0 0 0 543.968 512V160a31.968 31.968 0 0 0-31.936-32H160a31.968 31.968 0 0 0-32 31.968zm64 244.288V243.36h112.736V176h46.752c6.4.928 9.632 1.824 9.632 2.752a10.56 10.56 0 0 1-1.376 4.128c-2.752 7.328-4.128 16.032-4.128 26.112v34.368h119.648v156.768h-50.88v-20.64h-68.768V497.76h-49.504V379.488h-67.36v24.768H192zm46.72-122.368v60.48h67.392V281.92h-67.36zm185.664 60.48V281.92h-68.768v60.48h68.768zm203.84 488H576L668.128 576h64.64l89.344 254.4h-54.976l-19.264-53.664H647.488l-19.232 53.632zm33.024-96.256h72.864l-34.368-108.608h-1.376l-37.12 108.608zM896 320h-64a128 128 0 0 0-128-128v-64a192 192 0 0 1 192 192zM128 704h-64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z" /></svg>
          </div>
        </div>
        <div className="card-container">
          <div className="card-description">
            <span className="red">{translations.reason}</span>
            <br />
            {translations.action}
          </div>
          <div className="card-footer">
            <div>{translations.symbols}</div>
          </div>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;