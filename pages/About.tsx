
import React from 'react';

const About: React.FC = () => {
  const structure = [
    { title: '理事會', desc: '統籌工會策略與長遠規劃，負責制定工會政策與方向。', icon: 'groups', sub: '策劃發展藍圖' },
    { title: '秘書處', desc: '落實日常營運，各組協調，活動策畫與會員服務。', icon: 'assignment_ind', sub: '執行與協調' },
    { title: '監事會', desc: '致力於監督，確保財務透明與工會事務合法運作。', icon: 'gavel', sub: '監督與審核' },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors">
      {/* Hero Section */}
      <section className="relative bg-primary dark:bg-[#0c1219] overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
            引領 AI 創新
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight font-display">
            強化台灣 AI 生態系
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-blue-50/80 mb-12 leading-relaxed font-body">
            工會使命：引領 AI 創新並邁向全球領導地位。願景：營造科技與產業無縫接軌的協作環境，為台灣 AI 產業鏈搭建堅實的發展基石。
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
              <span className="material-symbols-outlined">public</span>
              社會影響力
            </button>
            <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">school</span>
              宣導專區
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
        {/* History */}
        <section id="history">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined text-3xl">history</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">發展沿革</h2>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="relative border-l-2 border-blue-100 dark:border-gray-800 ml-4 space-y-16">
              {[
                { year: '2019', title: '工會創立', desc: '由台北市領先的科技公司聯手發起，旨在聯合並培育 AI 基礎建設與演算法技術人才，建立產業溝通橋樑。' },
                { year: '2021', title: '首屆理監事運作', desc: '制定 86 項中小企業數位轉型計畫，為 AI 在台灣傳統產業的落地生根建立了標準與示範。' },
                { year: '2023', title: '擴大國際交流', desc: '與日本、新加坡 AI 協會簽署合作備忘錄，推動跨國人才流動與技術共享平台。' }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-surface-dark shadow-sm transition-transform group-hover:scale-125"></div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
                    <span className="text-3xl font-black text-primary font-display">{item.year}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structure */}
        <section id="structure">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined text-3xl">account_tree</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">組織架構</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {structure.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">{item.sub}</p>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#f8fbff] to-white dark:from-surface-dark dark:to-[#0c1219] p-10 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-display">專案委員會</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">我們的工作小組定時舉辦會員交流，並找出 AI 技術的創新突破。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {['演算法開發', '技術顧問', '國際關係', '人才培訓'].map((tag, i) => (
                <div key={i} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-700 hover:border-primary transition-colors cursor-default">
                  <div className="bg-primary/5 p-2 rounded-lg text-primary">
                    <span className="material-symbols-outlined">{['code', 'settings_suggest', 'language', 'school'][i]}</span>
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal */}
        <section id="legal">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined text-3xl">balance</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">法律依據</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark p-10 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">成立依據</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                我們為人工智慧產業之業者及從業人員依法設立登記，並依照經濟部 (MOEA) 簽署發展方向運作。
              </p>
              <ul className="space-y-4">
                {[
                  '工會管理程序：依據產業 AI 發展條例',
                  '全國性組織字號：No. 107-001852.X',
                  '台北市政府核發登記證書成立'
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    <span className="text-base font-medium">{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-10 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-6">cloud_download</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">法律文件下載專區</h3>
              <p className="text-gray-500 dark:text-gray-500 text-base mb-8 max-w-sm">下載我們的章程，了解我們如何運作與服務。</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold hover:text-primary hover:border-primary transition-all shadow-sm">
                  <span className="material-symbols-outlined text-lg">description</span>
                  工會章程
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold hover:text-primary hover:border-primary transition-all shadow-sm">
                  <span className="material-symbols-outlined text-lg">description</span>
                  2024 年度計畫
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Feed */}
        <section id="social">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <span className="material-symbols-outlined text-3xl">rss_feed</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">最新社群動態</h2>
            </div>
            <a href="#" className="text-primary hover:underline text-sm font-bold flex items-center gap-2">
              追蹤我們的 Facebook <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
          <article className="bg-white dark:bg-surface-dark rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-12">
            <div className="flex flex-col gap-10">
              <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-inner bg-gray-100 dark:bg-gray-800">
                <img 
                  alt="Post content" 
                  className="object-cover w-full h-full opacity-90" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYMw4I0S37KWZe4d0og_-0ExQgqdZEk75Zcfh_7iWE8ZQwAvvKmYntkYntREFG0TsIIcouofDmX_GKjX_CPIHfZLoEFCYetO5SXVRWYAiyKaY1pSUihqnDOFwnju4G_DSgRnFHhMm4y8VSoqoIArkvkLpjv9PL2mPsWTjcu_Mwb7sHIK8GEZtRliHymOfkjd-NqqCdZVaR3t5oxw53Brgb-1urP6W4PLuoq6j8VNcB-58ZknwFFKZxAwoqNY-HN7hA2JoF3xEML_KU"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-white text-xs font-black px-4 py-2 rounded-full shadow-2xl backdrop-blur-md bg-opacity-90 uppercase tracking-widest">
                    最新動態
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex items-start gap-5 shrink-0">
                  <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-white dark:border-gray-700 flex items-center justify-center p-2">
                    <img 
                      alt="Union Logo Avatar" 
                      className="w-full h-full object-contain" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYMw4I0S37KWZe4d0og_-0ExQgqdZEk75Zcfh_7iWE8ZQwAvvKmYntkYntREFG0TsIIcouofDmX_GKjX_CPIHfZLoEFCYetO5SXVRWYAiyKaY1pSUihqnDOFwnju4G_DSgRnFHhMm4y8VSoqoIArkvkLpjv9PL2mPsWTjcu_Mwb7sHIK8GEZtRliHymOfkjd-NqqCdZVaR3t5oxw53Brgb-1urP6W4PLuoq6j8VNcB-58ZknwFFKZxAwoqNY-HN7hA2JoF3xEML_KU"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white text-xl">臺北市人工智慧產業工會</h4>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-500 mt-1 flex items-center gap-1">
                       <span className="material-symbols-outlined text-sm">event</span> 2024年 5月 10日
                    </p>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed font-body">
                    【AI 技術分享】今日我們在台北國際會議中心舉辦了「生成式 AI 的企業應用藍圖」講座。現場聚集了超過百位產業先進，深入探討如何將大型語言模型整合至現有工作流程中，提升企業數位生產力並克服資料隱私挑戰。感謝所有參與者的熱情回饋！
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 dark:border-gray-800 mt-10 pt-8 gap-6">
                    <div className="flex gap-8">
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold group cursor-pointer hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl">thumb_up</span> 128
                      </span>
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold group cursor-pointer hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl">chat_bubble</span> 24
                      </span>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-95 flex items-center gap-3">
                      View on Facebook
                      <span className="material-symbols-outlined text-lg">arrow_outward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default About;
