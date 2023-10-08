import React, { useState, useEffect } from 'react';
import './App.css';

const LanguageContext = React.createContext();

const defaultTranslations = {
  en: {
    title: 'This request has been blocked',
    reason: 'Some of your characteristics exist in the blacklist and this request has been blocked.',
    action: 'If you think this is a false alarm, please contact me promptly.',
    symbols: '@Vinking Security Center',
    tips: 'Details have been saved to continuously optimize the Security Center',
  },
  zh: {
    title: '请求已被拦截',
    reason: '您的一些特征存在于黑名单中，此次请求已被拦截。',
    action: '如果您觉得这是误报，请及时联系我。',
    symbols: '@Vinking 安全中心',
    tips: '详细信息已保存以持续优化安全中心',
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
      <div className="app-container">
        <div className="card">
          <div className="card-header">
            <div>{translations.title}</div>
            <div className='translation' onClick={handleLanguageChange}>
              svg
            </div>
          </div>
          <div className="card-description">
            <span className="red">{translations.reason}</span>
            <br />
            {translations.action}
          </div>
          <div className="card-symbols">
            <div>{translations.symbols}</div>
          </div>
        </div>
        <div className="tips">{translations.tips}</div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;