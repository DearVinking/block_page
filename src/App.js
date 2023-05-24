import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state = {
    tran: {
      lang: 'en',
      title: 'This request has been blocked',
      contents_1: 'Some of your characteristics exist in the blacklist and this request has been blocked.',
      contents_2: 'If you think this is a false alarm, please contact me promptly.',
      footer: '@Vinking Security Center',
      save: 'Details have been saved to continuously optimize the Security Center'
    }
  }
  handleTranslation = () => {
    const { lang } = this.state.tran
    const newState = (lang === 'en') ? {
      lang: 'zh',
      title: '请求已被拦截',
      contents_1: '您的一些特征存在于黑名单中，此次请求已被拦截。',
      contents_2: '如果您觉得这是误报，请及时联系我。',
      footer: '@ Vinking安全中心',
      save: '详细信息已保存以持续优化安全中心'
    } : {
      lang: 'en',
      title: 'This request has been blocked',
      contents_1: 'Some of your characteristics exist in the blacklist and this request has been blocked.',
      contents_2: 'If you think this is a false alarm, please contact me promptly.',
      footer: '@Vinking Security Center',
      save: 'Details have been saved to continuously optimize the Security Center'
    }
    document.title = newState.title
    this.setState({ tran: newState })
  }
  render() {
    const { title, contents_1, contents_2, footer, save } = this.state.tran
    return (
      <div>

        <div className="card">
          <div className="cardHead">
            <div>{title}</div>
            <div className='translation' onClick={this.handleTranslation}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="#f8f9fa" d="M608 416h288c35.36 0 64 28.48 64 64v416c0 35.36-28.48 64-64 64H480c-35.36 0-64-28.48-64-64V608H128c-35.36 0-64-28.48-64-64V128c0-35.36 28.48-64 64-64h416c35.36 0 64 28.48 64 64v288zm0 64v64c0 35.36-28.48 64-64 64h-64v256.032C480 881.696 494.304 896 511.968 896H864a31.968 31.968 0 0 0 31.968-31.968V512A31.968 31.968 0 0 0 864 480.032H608zM128 159.968V512c0 17.664 14.304 31.968 31.968 31.968H512A31.968 31.968 0 0 0 543.968 512V160a31.968 31.968 0 0 0-31.936-32H160a31.968 31.968 0 0 0-32 31.968zm64 244.288V243.36h112.736V176h46.752c6.4.928 9.632 1.824 9.632 2.752a10.56 10.56 0 0 1-1.376 4.128c-2.752 7.328-4.128 16.032-4.128 26.112v34.368h119.648v156.768h-50.88v-20.64h-68.768V497.76h-49.504V379.488h-67.36v24.768H192zm46.72-122.368v60.48h67.392V281.92h-67.36zm185.664 60.48V281.92h-68.768v60.48h68.768zm203.84 488H576L668.128 576h64.64l89.344 254.4h-54.976l-19.264-53.664H647.488l-19.232 53.632zm33.024-96.256h72.864l-34.368-108.608h-1.376l-37.12 108.608zM896 320h-64a128 128 0 0 0-128-128v-64a192 192 0 0 1 192 192zM128 704h64a128 128 0 0 0 128 128v64a192 192 0 0 1-192-192z" /></svg>
            </div>
          </div>
          <div className="cardDesc">
            <span className="red">{contents_1}</span>
            <br />
            {contents_2}
          </div>
          <div className="cardFoot">
            <div>{footer}</div>
          </div>
        </div>
        <div className="foot">{save}</div>
      </div>
    )
  }
}