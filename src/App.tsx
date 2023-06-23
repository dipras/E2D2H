import type { Component, } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';
import Home from './Home';
import NotFound from './NotFound';
import MenuIconWhite from './assets/menu-white.svg';
import MenuIconDark from './assets/menu-dark.svg';
import { isDark, setIsDark } from './states';

const html = document.querySelector('html');

const changeTheme = (isChecked: boolean) => {
  if(isChecked) {
    html?.classList.add('dark');
  } else {
    html?.classList.remove('dark');
  }
}

const App: Component = () => {
  return (
    <div>
      <nav class="bg-white dark:bg-dark lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
        <div class="mx-auto container px-2 sm:px-6">
          <div class="relative flex h-16 items-center justify-between">
            <button type="button" class="p-1 text-gray-400 hover:text-white focus:outline-none">
              <span class="sr-only">View notifications</span>
              <img src={MenuIconDark} class='block dark:hidden' width={30} height={30} />
              <img src={MenuIconWhite} class='hidden dark:block' width={30} height={30} />
            </button>

            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" onchange={e => changeTheme(e.target.checked)} />
              <div class="w-11 h-6 bg-gray-200 outline-none rounded-full peer dark:bg-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-dark peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div class="hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-dark hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-dark hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-dark hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
      <div>
        <Router>
          <Routes>
            <Route path={"/"} component={Home} />
            <Route path={"/*"} component={NotFound} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
