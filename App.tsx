
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white dark:bg-background-dark border-b border-[#f0f2f4] dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-2">
              <img
                alt="Taipei AI Organization of Union Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                src="https://www.taiou.org/assets/images/logo.png"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary font-bold border-b-2 border-primary pb-0.5' : 'text-[#111418] dark:text-gray-300 hover:text-primary'}`}
            >
              關於我們
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary font-bold border-b-2 border-primary pb-0.5' : 'text-[#111418] dark:text-gray-300 hover:text-primary'}`}
            >
              聯絡方式與捐款
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div
              className="hidden md:block bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-gray-100 dark:ring-gray-700"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-RiIyAQxhZIqZ292CNITMFYsbYtx70B2hxihUn5UjjQr-9PQ2WEZ6DQFLSx6N0zfrZZTWLDYR0eHCOBugWfo0H0-yFxkfV8r4-CR80TqZoTAVT0IuWoICjp6ZrZb3EHBpP_rD-KNqxz39_6hitxOlGJ7nv19tWuP8v2r095Odj3b2800MA5uGD8gIsdsjIndzrh6s91RA1iaJMwAeej06EOoMyufal1-ko7gGw187QRalEcIVg2adikqYLtanw6O9H7hW5ZBUXMHr")' }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white dark:bg-background-dark border-t border-[#f0f2f4] dark:border-gray-800 mt-auto transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="block mb-6">
            <img
              alt="Taipei AI Organization of Union Logo"
              className="h-14 w-auto object-contain object-left"
              src="https://www.taiou.org/assets/images/logo.png"
            />
          </Link>
          <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
            台北人工智能產業工會致力於推動 AI 技術普及，促進產業交流，打造亞洲領先的智能生態系。
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[#111418] dark:text-white mb-4">快速連結</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#617589] dark:text-gray-400">
            <li><Link to="/" className="hover:text-primary transition-colors">關於我們</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">聯絡我們</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">捐款支持</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#111418] dark:text-white mb-4">資源</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#617589] dark:text-gray-400">
            <li><Link to="/" className="hover:text-primary transition-colors">工會章程</Link></li>
            <li><Link to="/" className="hover:text-primary transition-colors">年度計畫</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#111418] dark:text-white mb-4">聯絡資訊</h4>
          <ul className="flex flex-col gap-2 text-sm text-[#617589] dark:text-gray-400">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">location_on</span> 台北市信義區信義路五段7號</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">mail</span> contact@taiou.org.tw</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">call</span> +886 2 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400 dark:text-gray-500">© 2024 Taipei Artificial Intelligence Industry Union. All rights reserved.</p>
        <div className="flex gap-4">
          <div className="size-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="size-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="size-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
