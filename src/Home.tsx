import { Component, createSignal } from 'solid-js';


const Home: Component = () => {
  const [output, setOutput] = createSignal("");
  const inputData = (value: string) => {
    setOutput(btoa(value));
  }
  return (
    <div class="p-2 container dark:text-white mx-auto">
      <h1 class='text-4xl text-center'>BASE64</h1>

      <div class='flex flex-col md:flex-row mt-10'>
        <div class='flex-1 mb-5'>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full md:w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input" oninput={e => inputData(e.target.value)}></textarea>
        </div>
        <div class='flex-1 mb-5'>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Output</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full md:w-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Output" value={output()} disabled></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;
