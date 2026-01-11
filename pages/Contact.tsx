
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div class="mb-12 text-center md:text-left">
        <h1 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 font-display">聯絡方式與捐款</h1>
        <p class="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl font-body leading-relaxed">
          感謝您對臺北市人工智慧產業工會的支持，您的參與是推動台灣 AI 生態系發展的關鍵力量。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        {/* Donation Section */}
        <div class="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
          <div class="p-8 md:p-10 flex-grow">
            <div class="flex items-center mb-6">
              <div class="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-primary mr-5">
                <span class="material-symbols-outlined text-3xl">volunteer_activism</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white font-display">捐款支持</h2>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mb-8 text-base leading-relaxed">
              您的每一份捐款都將支持我們推動 AI 技術研發、產業合作、人才培育以及相關政策的倡議，共同打造台灣 AI 的未來。
            </p>
            <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 shadow-inner">
              <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                匯款帳戶資訊
              </h3>
              <div class="space-y-6">
                <div>
                  <span class="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 font-bold">銀行名稱</span>
                  <span class="text-base font-medium text-gray-900 dark:text-gray-100">XX 商業銀行 (銀行代碼 000)</span>
                </div>
                <div>
                  <span class="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 font-bold">分行名稱</span>
                  <span class="text-base font-medium text-gray-900 dark:text-gray-100">台北分行</span>
                </div>
                <div>
                  <span class="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 font-bold">戶名</span>
                  <span class="text-lg font-bold text-primary">臺北市人工智慧產業工會</span>
                </div>
                <div class="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                  <span class="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-bold">帳號</span>
                  <span class="font-mono text-2xl font-black text-gray-900 dark:text-white tracking-widest break-all">
                    123 - 45 - 67899123
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="px-8 py-4 bg-gray-50 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 flex items-center">
            <span class="material-symbols-outlined text-base mr-3 text-primary">info</span>
            <span>匯款後請來信告知您的姓名與匯款五碼，以便我們開立收據。</span>
          </div>
        </div>

        {/* Office Info Section */}
        <div class="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
          <div class="p-8 md:p-10 flex-grow">
            <div class="flex items-center mb-8">
              <div class="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl text-primary mr-5">
                <span class="material-symbols-outlined text-3xl">business</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white font-display">辦公室資訊</h2>
            </div>
            
            <div class="space-y-10">
              <div class="flex items-start">
                <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-full mr-5 mt-1 flex-shrink-0 text-primary">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 class="font-bold text-xl text-gray-900 dark:text-white mb-2">地址</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    台北市大安區 (詳細地址內容)
                  </p>
                  <span class="text-sm font-medium text-gray-400 dark:text-gray-500 mt-2 block flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm">schedule</span> 週一至週五 09:00 - 18:00
                  </span>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-full mr-5 mt-1 flex-shrink-0 text-primary">
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 class="font-bold text-xl text-gray-900 dark:text-white mb-2">電話</h4>
                  <p class="text-gray-600 dark:text-gray-400 text-xl font-mono tracking-tight">+886 2 2345 6789</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-full mr-5 mt-1 flex-shrink-0 text-primary">
                  <span class="material-symbols-outlined">email</span>
                </div>
                <div>
                  <h4 class="font-bold text-xl text-gray-900 dark:text-white mb-2">電子郵件</h4>
                  <a href="mailto:contact@taiou.org" class="text-primary hover:underline text-lg font-medium transition-all">
                    contact@taiou.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#f0f2f4] dark:bg-gray-900 h-64 w-full rounded-b-2xl relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
             {/* Map Placeholder */}
             <div class="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                <div class="text-center p-8">
                  <span class="material-symbols-outlined text-4xl text-gray-400 mb-2">map</span>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">台北市中心地圖區域</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
