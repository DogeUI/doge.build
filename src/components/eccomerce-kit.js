import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [view1, setView1] = useState("html");
  const [view2, setView2] = useLocalStorage("row", "row");
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(0);
  const [editor, setEditor] = useLocalStorage("selectedFramework", "tailwind");
  const [color, setColor] = useLocalStorage("colors", 1);
  const [fontSize, setFontSize] = useLocalStorage("editorFontSize", 14);
  const [editorFontColor, setEditorFontColor] = useLocalStorage("editorFontColor", "tuk");

  useEffect(() => {
    let htmlCode = `
    <!-- Naviagtion -->

    <div class="dark:bg-gray-900">
      <div>
        <div class="relative">
          <!-- For md screen size -->
          <div id="md-searchbar" class="bg-white dark:bg-gray-900 hidden lg:hidden py-5 px-6 items-center justify-between">
            <div class="flex items-center space-x-3 text-gray-800 dark:text-white">
              <div>
                <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <input type="text" placeholder="Search for products" class="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
            </div>
            <div class="space-x-6">
              <button aria-label="view favourites" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button aria-label="go to cart" class="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                <svg class="fill-stroke" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1 4.2002H17" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <!-- For md screen size -->

          <!-- For large screens -->
          <div class="dark:bg-gray-900 bg-gray-50 px-6 py-9">
            <div class="container mx-auto flex items-center justify-between">
              <h1 class="md:w-2/12 cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                <svg class="fill-stroke" width="93" height="19" viewBox="0 0 93 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.272 6V9.336H7.008V13.392C7.008 13.952 7.128 14.352 7.368 14.592C7.624 14.832 8 14.952 8.496 14.952C8.848 14.952 9.152 14.92 9.408 14.856C9.664 14.776 9.904 14.672 10.128 14.544L10.44 17.376C10.04 17.648 9.512 17.856 8.856 18C8.216 18.16 7.584 18.24 6.96 18.24C5.424 18.24 4.24 17.936 3.408 17.328C2.576 16.704 2.16 15.648 2.16 14.16V9.336H0.192V6H2.16V3.384L7.008 2.04V6H10.272ZM12.1916 18V1.056H17.0396V8.328C17.7436 6.616 18.9996 5.76 20.8076 5.76C22.0236 5.76 22.9836 6.12 23.6876 6.84C24.3916 7.544 24.7436 8.56 24.7436 9.888V18H19.8956V11.184C19.8956 10.496 19.7836 10.024 19.5596 9.768C19.3516 9.512 19.0556 9.384 18.6716 9.384C18.1916 9.384 17.7996 9.568 17.4956 9.936C17.1916 10.304 17.0396 10.888 17.0396 11.688V18H12.1916ZM33.2184 18.24C31.1384 18.24 29.5064 17.696 28.3224 16.608C27.1384 15.52 26.5464 13.984 26.5464 12C26.5464 10.672 26.8184 9.544 27.3624 8.616C27.9064 7.688 28.6664 6.984 29.6424 6.504C30.6184 6.008 31.7464 5.76 33.0264 5.76C34.3384 5.76 35.4504 6.008 36.3624 6.504C37.2904 6.984 37.9944 7.656 38.4744 8.52C38.9704 9.384 39.2184 10.392 39.2184 11.544C39.2184 12.136 39.1784 12.64 39.0984 13.056H31.2024C31.3144 13.776 31.5384 14.272 31.8744 14.544C32.2264 14.8 32.6904 14.928 33.2664 14.928C33.7624 14.928 34.1544 14.824 34.4424 14.616C34.7464 14.408 34.9624 14.12 35.0904 13.752L38.9784 14.904C38.7704 15.64 38.3784 16.256 37.8024 16.752C37.2264 17.248 36.5384 17.624 35.7384 17.88C34.9384 18.12 34.0984 18.24 33.2184 18.24ZM33.0264 9.048C32.5144 9.048 32.1064 9.192 31.8024 9.48C31.5144 9.768 31.3224 10.256 31.2264 10.944H34.6344C34.5704 10.32 34.4104 9.848 34.1544 9.528C33.9144 9.208 33.5384 9.048 33.0264 9.048Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M46.9723 5.76C48.3163 5.76 49.4203 5.952 50.2843 6.336C51.1643 6.72 51.8283 7.208 52.2763 7.8C52.7243 8.392 52.9803 9.016 53.0443 9.672L48.5563 11.04C48.5083 10.384 48.3723 9.896 48.1483 9.576C47.9403 9.256 47.6043 9.096 47.1403 9.096C46.5323 9.096 46.0763 9.32 45.7723 9.768C45.4843 10.216 45.3403 10.976 45.3403 12.048C45.3403 13.168 45.5083 13.928 45.8443 14.328C46.1803 14.712 46.6203 14.904 47.1643 14.904C48.0443 14.904 48.5483 14.32 48.6763 13.152L53.0203 14.52C52.9563 15.208 52.6763 15.832 52.1803 16.392C51.7003 16.952 51.0363 17.4 50.1883 17.736C49.3403 18.072 48.3403 18.24 47.1883 18.24C45.1083 18.24 43.4683 17.696 42.2683 16.608C41.0683 15.52 40.4683 13.984 40.4683 12C40.4683 10.672 40.7403 9.544 41.2843 8.616C41.8283 7.688 42.5883 6.984 43.5643 6.504C44.5403 6.008 45.6763 5.76 46.9723 5.76ZM54.6604 18V6H59.0044L59.1484 8.808C59.4204 7.864 59.8444 7.12 60.4204 6.576C61.0124 6.032 61.7804 5.76 62.7244 5.76C63.0604 5.76 63.3244 5.792 63.5164 5.856C63.7244 5.904 63.8844 5.968 63.9964 6.048L63.5644 9.984C63.4044 9.92 63.1964 9.864 62.9404 9.816C62.6844 9.768 62.3884 9.744 62.0524 9.744C61.3324 9.744 60.7244 9.944 60.2284 10.344C59.7484 10.728 59.5084 11.312 59.5084 12.096V18H54.6604ZM67.5609 4.944C66.6009 4.944 65.9049 4.784 65.4729 4.464C65.0569 4.128 64.8489 3.576 64.8489 2.808C64.8489 2.04 65.0569 1.488 65.4729 1.152C65.9049 0.815999 66.6009 0.647999 67.5609 0.647999C68.5369 0.647999 69.2329 0.815999 69.6489 1.152C70.0649 1.488 70.2729 2.04 70.2729 2.808C70.2729 3.576 70.0649 4.128 69.6489 4.464C69.2329 4.784 68.5369 4.944 67.5609 4.944ZM69.9849 6V18H65.1369V6H69.9849ZM80.6843 18.24C79.7083 18.24 78.8763 17.968 78.1883 17.424C77.5163 16.864 77.0283 16.136 76.7243 15.24L76.5803 18H72.3323V1.056H77.1803V8.064C77.5003 7.376 77.9643 6.824 78.5723 6.408C79.1803 5.976 79.9483 5.76 80.8763 5.76C82.2523 5.76 83.3563 6.312 84.1883 7.416C85.0203 8.52 85.4363 10.064 85.4363 12.048C85.4363 14.016 85.0123 15.544 84.1643 16.632C83.3323 17.704 82.1723 18.24 80.6843 18.24ZM78.8363 14.784C79.3803 14.784 79.8043 14.576 80.1083 14.16C80.4123 13.744 80.5643 13.024 80.5643 12C80.5643 10.976 80.4123 10.264 80.1083 9.864C79.8043 9.448 79.3803 9.24 78.8363 9.24C78.3083 9.24 77.9003 9.48 77.6123 9.96C77.3243 10.44 77.1803 11.12 77.1803 12C77.1803 12.944 77.3243 13.648 77.6123 14.112C77.9163 14.56 78.3243 14.784 78.8363 14.784ZM89.451 13.44C90.299 13.44 90.955 13.648 91.419 14.064C91.899 14.48 92.139 15.064 92.139 15.816C92.139 16.568 91.899 17.152 91.419 17.568C90.955 17.984 90.299 18.192 89.451 18.192C88.603 18.192 87.939 17.984 87.459 17.568C86.995 17.152 86.763 16.568 86.763 15.816C86.763 15.064 86.995 14.48 87.459 14.064C87.939 13.648 88.603 13.44 89.451 13.44Z"
                    fill="currentColor"
                  />
                </svg>
              </h1>
              <ul class="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <a href="javascript:void(0)" class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Furniture</a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Lookbook</a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">Support</a>
                </li>
              </ul>

              <div class="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div class="hidden lg:flex items-center">
                  <button onclick="toggleSearch()" aria-label="search items" class="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.99961 20.9999L7.34961 16.6499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <input id="searchInput" type="text" placeholder="search" class="hidden text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1" />
                </div>
                <div class="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button aria-label="view favourites" class="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button aria-label="go to cart" class="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg class="fill-stroke" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1 5.7998H25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>

                <div class="flex lg:hidden">
                  <button aria-label="show options" onclick="mdOptionsToggle()" class="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                    <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>

                  <button aria-label="open menu" onclick="openMenu()" class="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                    <svg class="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6 18H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- For small screen -->
          <div id="mobile-menu" class="hidden absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex flex-col h-screen w-full">
            <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div class="flex items-center space-x-3">
                <div>
                  <svg class="fill-stroke text-gray-800 dark:text-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <input type="text" placeholder="Search for products" class="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none" />
              </div>

              <button onclick="closeMenu()" aria-label="close menu" class="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                <svg class="fill-stroke text-gray-800 dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 4L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="mt-6 p-4">
              <ul class="flex flex-col space-y-6">
                <li>
                  <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                    Home
                    <div>
                      <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                    Furniture
                    <div>
                      <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                    Lookbook
                    <div>
                      <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                    Support
                    <div>
                      <svg class="fill-stroke text-black dark:text-white" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="h-full flex items-end">
              <ul class="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li>
                  <a href="javascript:void(0)" class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    <div>
                      <svg class="fill-stroke" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1 5H21" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <p class="text-base">Cart</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    <div>
                      <svg class="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <p class="text-base">Wishlist</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Naviagtion -->
    <!-- hero II -->

    <div class="dark:bg-gray-900 lg:px-0 px-4">
      <div class="container mx-auto py-9 md:py-12 lg:py-24">
        <div class="flex flex-col lg:flex-row justify-center items-strech">
          <div class="lg:w-4/12 flex justify-center items-center">
            <div>
              <h1 class="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">Amoire</h1>
              <p class="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            </div>
          </div>
          <div class="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
            <div class="relative w-full h-full">
              <img src="https://i.ibb.co/gmV2mLr/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" role="img" class="w-full h-full relative hidden lg:block" />
              <img src="https://i.ibb.co/Mhgkt2f/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" role="img" class="w-full h-full lg:hidden" />
              <div class="hidden lg:block absolute bottom-0 right-0 bg-red-200 w-1/2">
                <button class="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-xl xl:text-2xl font-medium text-white flex justify-between w-full items-center p-5 xl:p-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                  Discover More
                  <div>
                    <svg class="fill-stroke dark:hover:text-gray-600" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.66663 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20 21.3333L25.3333 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20 10.667L25.3333 16.0003" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div class="mt-6 md:mt-8 lg:hidden">
              <button class="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Discover More
                <div>
                  <svg class="fill-stroke" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path d="M0.453735 12H14.4537" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.4539 16L14.4539 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.4539 8L14.4539 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="21.7269" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- hero II -->
    <!-- Best Seller 1-->

    <div class="2xl:container 2xl:mx-auto">
      <div class="lg:px-0 md:px-6 px-4 md:py-12 py-8">
        <div>
          <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Top Selling</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          <div class="bg-gray-50 p-8">
            <div class="">
              <h2 class="text-xl text-gray-600">Lounge Chair</h2>
              <p class="text-xl font-semibold text-gray-800 mt-2">$1200</p>
            </div>
            <div class="flex justify-center items-center mt-8 md:mt-24">
              <img class="" src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png" alt="A chair with designed back" role="img" />
            </div>
            <div class="flex justify-end items-center space-x-2 mt-16 md:mt-32">
              <button aria-label="show in red color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
              <button aria-label="show in white color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
              <button aria-label="show in black color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="bg-gray-50 p-8">
            <div class="">
              <h2 class="text-xl text-gray-600">Lounge Chair</h2>
              <p class="text-xl font-semibold text-gray-800 mt-2">$1200</p>
            </div>
            <div class="flex justify-center items-center mt-8 md:mt-24">
              <img class="" src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png" alt="A chair with wooden legs" role="img" />
            </div>
            <div class="flex justify-end items-center space-x-2 mt-8 md:mt-24">
              <button aria-label="show in white color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
              <button aria-label="show in black color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="bg-gray-50 p-8">
            <div class="">
              <h2 class="text-xl text-gray-600">Lounge Chair</h2>
              <p class="text-xl font-semibold text-gray-800 mt-2">$1200</p>
            </div>
            <div class="flex justify-center items-center mt-8 md:mt-24">
              <img class="" src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png" alt="A sofa chair with wooden legs" role="img" />
            </div>
            <div class="flex justify-end items-center space-x-2 mt-16 md:mt-32">
              <button aria-label="show in green color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
              <button aria-label="show in brown color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
          <div class="bg-gray-50 p-8">
            <div>
              <h2 class="text-xl leading-tight text-gray-600">Sectional Sofa</h2>
              <p class="text-xl font-semibold text-gray-800 mt-2">$78900</p>
            </div>
            <div class="flex justify-center items-center mt-28 md:mt-3">
              <img src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png" alt="A large sectional sofa" role="img" />
            </div>
            <div class="flex justify-end items-center space-x-2 mt-36 md:mt-12">
              <button aria-label="show in yellow color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
              <button aria-label="show in light gray color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
            </div>
          </div>
          <div class="bg-gray-50 p-8">
            <div>
              <h2 class="text-xl leading-tight text-gray-600">Two Seater Sofa</h2>
              <p class="text-xl font-semibold text-gray-800 mt-2">$2900</p>
            </div>
            <div class="flex justify-center items-center mt-28 md:mt-1">
              <img src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png" alt="A beautiful two seater sofa" role="img" />
            </div>
            <div class="flex justify-end items-center space-x-2 mt-36 md:mt-12">
              <button aria-label="show in black color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
              <button aria-label="show in green color" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" stroke-width="0.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Best Seller 1-->
    <!-- CTA IV-->

    <div class="mx-auto container flex flex-col lg:flex-row justify-center items-center lg:space-x-8 lg:px-0 px-4">
      <div class="relative lg:w-1/2 w-full">
        <img class="hidden lg:block w-full" src="https://i.ibb.co/XXKZ7Pt/Group-1785.png" alt="table-chair" />
        <img class="hidden sm:block lg:hidden w-full" src="https://i.ibb.co/KK7Vn9n/Group-1785-1.png" alt="table-chair" />
        <img class="sm:hidden w-full" src="https://i.ibb.co/F0T98KC/Group-1785.png" alt="table-chair" />
        <div class="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
          <div>
            <p class="text-2xl font-semibold leading-6 text-gray-800">Kitchen Catalog</p>
          </div>
          <div class="mt-2">
            <p class="text-base leading-6 sm:leading-4 text-gray-600">Explore kitchen’s latest interior designs</p>
          </div>
          <div class="mt-6">
            <div class="flex justify-between items-center space-x-2">
              <a class="text-base font-medium leading-none hover:underline text-gray-800" href="javascript:void(0)">Explore</a>
              <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 10.6667L12.6667 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 5.33333L12.6667 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="relative lg:w-1/2 w-full lg:mt-0 mt-8">
        <img class="hidden lg:block w-full" src="https://i.ibb.co/0qHj658/Group-1786.png" alt="chair-wood-fire" />
        <img class="hidden sm:block lg:hidden w-full" src="https://i.ibb.co/mGM3xtB/Group-1786-1.png" alt="chair-wood-fire" />
        <img class="sm:hidden w-full" src="https://i.ibb.co/ZVX8rPm/Group-1786.png" alt="chair-wood-fire" />
        <div class="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
          <div>
            <p class="text-2xl font-semibold leading-6 text-gray-800">Patio Catalog</p>
          </div>
          <div class="mt-2">
            <p class="text-base leading-6 sm:leading-4 text-gray-600">Explore Patio’s latest interior design collection</p>
          </div>
          <div class="mt-6">
            <div class="flex justify-between items-center space-x-2">
              <a class="text-base font-medium leading-none hover:underline text-gray-800" href="javascript:void(0)">Explore</a>
              <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 10.6667L12.6667 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 5.33333L12.6667 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA IV-->
    <!-- CTA II-->

    <div class="2xl:mx-auto 2xl:container lg:px-0 md:px-6 px-4 md:py-12 py-8 flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full relative">
          <img class="w-full hidden lg:block" src="https://i.ibb.co/808PfJx/Group-1741.png" alt="sofas" />
          <img class="w-full hidden md:block lg:hidden" src="https://i.ibb.co/5BS3WRr/pexels-houzlook-com-3356416-3.png" alt="sofas" />
          <img class="w-full md:hidden" src="https://i.ibb.co/7159Lvf/pexels-houzlook-com-3356416-4.png" alt="sofas" />
          <div class="absolute lg:hidden inset-0 w-full opacity-60 bg-gray-800"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div class="px-2 sm:px-4 md:px-0">
              <p class="text-3xl lg:text-4xl font-semibold lg:leading-9 md:leading-7 leading-9 text-white">Decorate Your Home With Us</p>
            </div>
            <div class="px-2 sm:px-4 md:px-0 lg:mt-6 mt-4 md:w-3/4 lg:w-2/5">
              <p class="text-base leading-6 text-center text-white font-normal">We offer premium quality furniture at most affordable prices ever and a huge range of collection to give you most exquisite shopping experience</p>
            </div>
            <div class="px-4 sm:px-8 md:px-0 mt-16 lg:mt-20 md:px-4 lg:px-0 w-full flex justify-center items-center">
              <button class="focus:ring-2 focus:ring-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 w-full md:w-3/4 lg:w-32 py-4 bg-white flex justify-center items-center text-base font-medium leading-4 text-center text-gray-800">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA II-->
    <!-- NewsLetter II-->

    <div class="mx-auto container flex justify-center items-center 2xl:px-20 px-6 py-12">
      <div class="sm:flex flex-wrap lg:flex-nowrap items-center justify-between w-full">
        <div class="lg:w-1/3">
          <p class="text-2xl font-medium leading-normal text-black pb-5">Luxe newsletter</p>
          <p class="text-sm font-light leading-none text-gray-600">Subscrible to receive updates from luxe</p>
          <div class="flex items-center justify-between border-b border-gray-500 pt-5 w-72">
            <input type="email" class="py-3 bg-transparent text-sm text-gray-500 placeholder-gray-500 focus:outline-none w-full pr-4" placeholder="Enter you email address" />
            <div class="cursor-pointer text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                <path d="M8 11L13 6L8 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 flex md:mx-4 items-center sm:pt-0 pt-6 md:justify-center">
          <div class="flex flex-col items-left justify-start">
            <p class="text-2xl font-medium leading-normal text-black pb-5">Help center</p>
            <p class="text-sm font-light leading-none text-gray-600 pb-5">Available throughout the week</p>
            <p class="w-full font-light text-sm leading-5 text-gray-600">
              To speak with luxe care, call on
              <span class="font-semibold cursor-pointer underline">287-024-9820</span>
              or<br />
              send us an email on
              <span class="font-semibold cursor-pointer underline">care@luxe.com</span>
            </p>
          </div>
        </div>
        <div class="lg:w-1/3 flex items-center lg:mt-0 mt-6 md:justify-end">
          <div class="flex flex-col items-left justify-start">
            <p class="text-2xl font-medium leading-normal text-black pb-5">Find a store</p>
            <p class="text-sm font-light leading-none text-gray-600">Enter a location to find the nearby luxe outlets</p>
            <div class="flex items-center justify-between border-b border-gray-500 pt-5 w-72">
              <input type="text" class="w-full bg-transparent pr-4 py-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none" placeholder="Search by zipcode or vicinity" />
              <div class="cursor-pointer text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19 19L14.65 14.65" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NewsLetter II-->
    <!-- Footer III -->

    <div class="2xl:mx-auto 2xl:container lg:px-0 lg:py-16 md:py-12 md:px-6 py-9 px-4">
      <div class="py-14 border-b border-t border-gray-200 lg:flex items-center justify-between sm:space-y-10 lg:space-y-0">
        <div class="lg:w-1/2 sm:flex items-start justify-between">
          <div class="md:w-1/2">
            <h2 class="text-xl font-extrabold leading-tight text-gray-800 pb-7">Customer services</h2>
            <a>
              <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Contact</p>
            </a>
            <a>
              <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Track order</p>
            </a>
            <a>
              <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Delivery &amp; returns</p>
            </a>
            <a>
              <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Return policy</p>
            </a>
            <a>
              <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Sitemap</p>
            </a>
          </div>
          <div class="md:w-1/2 md:flex items-center justify-center mt-9 md:mt-0">
            <div class="flex flex-col items-left justify-start">
              <h2 class="text-xl font-extrabold leading-tight text-gray-800 pb-7">Online services</h2>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Payment methods</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Shipping options</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">My account</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">E-services</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Frequently asked questions</p>
              </a>
            </div>
          </div>
          <div class="lg:hidden md:w-1/2 sm:pt-0 md:flex items-center justify-center mt-9 md:mt-0">
            <div class="flex flex-col items-left justify-start">
              <h2 class="text-xl font-extrabold leading-tight text-gray-800 pb-7">Privacy &amp; legal</h2>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Cookies</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Privacy policy</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Terms &amp; conditions</p>
              </a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 sm:flex items-start justify-between">
          <div class="hidden md:w-1/2 sm:pt-0 pt-4 lg:flex items-center lg:justify-center">
            <div class="flex flex-col items-left justify-start">
              <h2 class="text-xl font-extrabold leading-tight text-gray-800 pb-7">Privacy &amp; legal</h2>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Cookies</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Privacy policy</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Terms &amp; conditions</p>
              </a>
            </div>
          </div>
          <div class="md:w-1/2 sm:pt-0 mt-10 md:mt-0 sm:flex items-center lg:justify-end lg:justify-center">
            <div class="flex flex-col items-left justify-start">
              <h2 class="text-xl font-extrabold leading-tight text-gray-800 pb-7">More from luxe</h2>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Luxe app for iOS &amp; Android</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">The company</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Media publications</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">Careers at luxe</p>
              </a>
              <a>
                <p class="pb-6 cursor-pointer text-base leading-4 text-gray-800">luxe &amp; CSR</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col py-12 items-center justify-center">
        <a href="javascript:void(0)" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="25" viewBox="0 0 55 25" fill="none">
            <path
              d="M5.64 21.21C5.64 22.03 5.81 22.6 6.15 22.92C6.49 23.22 7.08 23.37 7.92 23.37V24C6.08 23.92 4.87 23.88 4.29 23.88C3.71 23.88 2.5 23.92 0.66 24V23.37C1.5 23.37 2.09 23.22 2.43 22.92C2.77 22.6 2.94 22.03 2.94 21.21V4.08C2.94 3.16 2.77 2.49 2.43 2.07C2.09 1.65 1.5 1.44 0.66 1.44V0.809998C1.28 0.869999 1.9 0.899999 2.52 0.899999C3.78 0.899999 4.82 0.759999 5.64 0.479999V21.21ZM23.074 20.76C23.074 21.68 23.244 22.35 23.584 22.77C23.924 23.19 24.514 23.4 25.354 23.4V24.03C24.734 23.97 24.114 23.94 23.494 23.94C22.234 23.94 21.194 24.08 20.374 24.36V20.82C19.894 22.06 19.214 22.97 18.334 23.55C17.454 24.13 16.494 24.42 15.454 24.42C14.094 24.42 13.054 24.04 12.334 23.28C11.974 22.88 11.714 22.37 11.554 21.75C11.414 21.13 11.344 20.33 11.344 19.35V11.82C11.344 10.9 11.174 10.23 10.834 9.81C10.494 9.39 9.90398 9.18 9.06398 9.18V8.55C9.68398 8.61 10.304 8.64 10.924 8.64C12.184 8.64 13.224 8.5 14.044 8.22V20.01C14.044 20.77 14.084 21.39 14.164 21.87C14.264 22.33 14.474 22.71 14.794 23.01C15.134 23.31 15.644 23.46 16.324 23.46C17.084 23.46 17.774 23.22 18.394 22.74C19.014 22.26 19.494 21.61 19.834 20.79C20.194 19.95 20.374 19.03 20.374 18.03V11.82C20.374 10.9 20.204 10.23 19.864 9.81C19.524 9.39 18.934 9.18 18.094 9.18V8.55C18.714 8.61 19.334 8.64 19.954 8.64C21.214 8.64 22.254 8.5 23.074 8.22V20.76ZM39.3356 21.87C39.6956 22.37 39.9956 22.73 40.2356 22.95C40.4956 23.15 40.8156 23.29 41.1956 23.37V24C40.1556 23.92 39.4456 23.88 39.0656 23.88C38.3856 23.88 37.2056 23.92 35.5256 24V23.37C35.8456 23.37 36.1156 23.31 36.3356 23.19C36.5756 23.07 36.6956 22.91 36.6956 22.71C36.6956 22.57 36.6556 22.45 36.5756 22.35L33.1556 17.37L30.9656 20.22C30.4056 20.96 30.1256 21.56 30.1256 22.02C30.1256 22.44 30.3156 22.77 30.6956 23.01C31.0956 23.23 31.6456 23.36 32.3456 23.4V24C31.3056 23.94 30.1656 23.91 28.9256 23.91C28.0456 23.91 27.2856 23.94 26.6456 24V23.4C27.0456 23.36 27.4456 23.18 27.8456 22.86C28.2656 22.54 28.7456 22.02 29.2856 21.3L32.7356 16.77L28.5656 10.68C28.1656 10.1 27.8456 9.72 27.6056 9.54C27.3656 9.34 27.0656 9.22 26.7056 9.18V8.55C27.7456 8.63 28.4556 8.67 28.8356 8.67C29.5156 8.67 30.6956 8.63 32.3756 8.55V9.18C32.0556 9.18 31.7756 9.24 31.5356 9.36C31.3156 9.48 31.2056 9.64 31.2056 9.84C31.2056 9.98 31.2456 10.1 31.3256 10.2L34.5356 14.88L36.6056 11.97C37.2056 11.11 37.5056 10.48 37.5056 10.08C37.5056 9.8 37.3656 9.59 37.0856 9.45C36.8256 9.29 36.3956 9.19 35.7956 9.15V8.55C36.8356 8.61 37.6756 8.64 38.3156 8.64C39.1956 8.64 39.9556 8.61 40.5956 8.55V9.15C39.7756 9.25 38.8956 9.95 37.9556 11.25L34.9256 15.45L39.3356 21.87ZM54.9642 20.4C54.6042 21.5 53.9242 22.45 52.9242 23.25C51.9442 24.03 50.7542 24.42 49.3542 24.42C47.9342 24.42 46.7042 24.1 45.6642 23.46C44.6242 22.8 43.8242 21.89 43.2642 20.73C42.7242 19.55 42.4542 18.19 42.4542 16.65C42.4542 14.91 42.7342 13.4 43.2942 12.12C43.8542 10.84 44.6442 9.86 45.6642 9.18C46.6842 8.48 47.8742 8.13 49.2342 8.13C51.0342 8.13 52.4142 8.68 53.3742 9.78C54.3542 10.86 54.8442 12.51 54.8442 14.73H45.4542C45.3942 15.29 45.3642 15.93 45.3642 16.65C45.3642 17.97 45.5742 19.12 45.9942 20.1C46.4342 21.08 47.0042 21.84 47.7042 22.38C48.4242 22.9 49.1742 23.16 49.9542 23.16C50.9142 23.16 51.7642 22.93 52.5042 22.47C53.2442 22.01 53.8642 21.24 54.3642 20.16L54.9642 20.4ZM49.1142 8.7C48.1742 8.7 47.3642 9.16 46.6842 10.08C46.0042 11 45.5842 12.36 45.4242 14.16H51.9642C52.0042 12.6 51.7742 11.3 51.2742 10.26C50.7942 9.22 50.0742 8.7 49.1142 8.7Z"
              fill="#18181B"
            ></path>
          </svg>
        </a>
        <p class="text-sm text-center text-gray-500 pt-3">© 2021 Luxe Inc. All rights reserved.</p>
      </div>
    </div>

    <!-- Footer III -->
   `;
    let jsCode = `const toggleSearch = () => {
    document.getElementById("searchInput").classList.toggle('hidden')
}
const mdOptionsToggle = () => {
    document.getElementById('md-searchbar').classList.toggle('hidden') ; 
    document.getElementById('md-searchbar').classList.toggle('flex') ; 
}
const openMenu = () => {
    document.getElementById('mobile-menu').classList.remove('hidden')
}
const closeMenu = () => {
    document.getElementById('mobile-menu').classList.add('hidden')
}`;
    if (editor === "tailwind") {
      setHtml(htmlCode);
      setJs(jsCode);
    }
  }, [editor, setHtml,setJs]);

  const handleModeSwitch = () => {
    if (editor === "tailwind") {
      setHtml("");
      setJs("");
      setColor(1);
    } else if (editor === "bootstrap") {
      setHtml("");
      setJs("");
      setColor(2);
    } else if (editor === "bulma") {
      setHtml("");
      setJs("");
      setColor(3);
    } else if (editor === "material") {
      setHtml("");
      setJs("");
      setColor(4);
    }
    setPopup(!popup);
  };

  const formatCode = () => {
    let flag = true;
    let formattedCode = "";

    let formattedXml = "";
    var format = require("xml-formatter");
    if (view1 === "html") {
      try {
        setHtml(html);
        formattedXml = format(html, {
          tabWidth: 4,
          printWidth: 600,
        });
      } catch (err) {
        flag = false;
        return flag;
      }
      if (flag) {
        setHtml(formattedXml);
      } else {
        setHtml(html);
      }
    } else {
      try {
        setJs(js);
        formattedCode = prettier.format(js, {
          tabWidth: 4,
          printWidth: 600,
          parser: "babel",
          plugins: [babylon],
        });
      } catch (err) {
        flag = false;
        return flag;
      }
      if (flag) {
        setJs(formattedCode);
      } else {
        setJs(js);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (editor === "tailwind") {
        setSrcDoc(`
            <html>
              <body>
              <head><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
              </head>
              ${html}</body>
            
              <script>${js}</script>
            </html>
          `);
      } else if (editor === "bootstrap") {
        setSrcDoc(`
            <html>
              <body>
              <head>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
              </head>
              ${html}</body>
            
              <script>${js}
              </script>
              <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </html>
          `);
      } else if (editor === "bulma") {
        setSrcDoc(`
            <html>
              <body>
              <head>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
              </head>
              ${html}</body>
            
              <script>${js}</script>
            </html>
          `);
      } else if (editor === "material") {
        setSrcDoc(`
            <html>
              <body>
              <head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
              </head>
              ${html}</body>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
              <script>${js}</script>
            </html>
          `);
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, js, editor]);

  return (
    <>
      <div className="h-full relative z-0">
        <nav className="w-full bg-gray-900 px-6 xl:px-20 ">
          <div className="flex items-stretch justify-between ">
            <div className="flex items-center">
              <div className="py-3 ">
                <img src="https://cdn.tuk.dev/doge-ui/craft/craft-logo.png" alt="logo" className="w-26 h-10 select-none" />
              </div>
              <div className=" border rounded border-gray-700 ml-2 md:ml-8 flex items-center py-3 px-4">
                <div
                  className="mr-4 text-gray-500"
                  onClick={() => {
                    setEditor("tailwind");
                    setPopup(!popup);
                  }}
                >
                  {color === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={16} viewBox="0 0 27 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.38133 5.33333C7.25567 1.77792 9.44215 0 12.9399 0C18.1868 0 18.8427 4 21.4661 4.66667C23.2152 5.11125 24.7454 4.44458 26.0571 2.66667C25.1828 6.22208 22.9963 8 19.4985 8C14.2516 8 13.5958 4 10.9723 3.33333C9.22325 2.88875 7.69305 3.55542 6.38133 5.33333ZM0 13.3333C0.874344 9.77789 3.06082 7.99998 6.5586 7.99998C11.8055 7.99998 12.4613 12 15.0848 12.6666C16.8339 13.1112 18.3641 12.4446 19.6758 10.6666C18.8015 14.2221 16.615 16 13.1172 16C7.87032 16 7.21446 12 4.59102 11.3333C2.84192 10.8887 1.31172 11.5554 0 13.3333Z"
                        fill="url(#paint0_linear)"
                      />{" "}
                      <defs>
                        <linearGradient id="paint0_linear" x1="-36.1903" y1="-6.22208" x2="-25.6094" y2="41.6432" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2383AE" />
                          <stop offset={1} stopColor="#6DD7B9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width={27} height={16} viewBox="0 0 27 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.38133 5.33333C7.25567 1.77792 9.44215 0 12.9399 0C18.1868 0 18.8427 4 21.4661 4.66667C23.2152 5.11125 24.7454 4.44458 26.0571 2.66667C25.1828 6.22208 22.9963 8 19.4985 8C14.2516 8 13.5958 4 10.9723 3.33333C9.22325 2.88875 7.69305 3.55542 6.38133 5.33333ZM0 13.3333C0.874344 9.77789 3.06082 7.99998 6.5586 7.99998C11.8055 7.99998 12.4613 12 15.0848 12.6666C16.8339 13.1112 18.3641 12.4446 19.6758 10.6666C18.8015 14.2221 16.615 16 13.1172 16C7.87032 16 7.21446 12 4.59102 11.3333C2.84192 10.8887 1.31172 11.5554 0 13.3333Z"
                        fill="currentColor"
                      />{" "}
                    </svg>
                  )}
                </div>

                <div
                  className={color === 2 ? "mr-4 text-red-500" : "cursor-pointer mr-4 text-gray-500"}
                  onClick={() => {
                    setEditor("bootstrap");
                    setPopup(!popup);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <path d="M0 13.937C0 15.0765 0.923658 16 2.06305 16H13.937C15.0765 16 16 15.0763 16 13.937V2.06305C16 0.923533 15.0763 0 13.937 0H2.06305C0.923533 0 0 0.923658 0 2.06305V13.937Z" fill="currentColor" />
                    <path
                      d="M6.63486 7.07738V4.81154H8.62935C8.8193 4.81154 9.00247 4.82737 9.17885 4.85903C9.35523 4.89068 9.51126 4.94722 9.64694 5.02862C9.78262 5.11003 9.89117 5.2231 9.97257 5.36782C10.054 5.51255 10.0947 5.69797 10.0947 5.92411C10.0947 6.33115 9.97258 6.62512 9.72835 6.80602C9.48413 6.98693 9.17207 7.07738 8.79217 7.07738H6.63486ZM4.5047 3.15625V12.8438H9.1992C9.63338 12.8438 10.0562 12.7895 10.4678 12.6809C10.8794 12.5724 11.2457 12.4051 11.5668 12.1789C11.8879 11.9528 12.1434 11.6611 12.3334 11.3038C12.5233 10.9465 12.6183 10.5236 12.6183 10.0352C12.6183 9.42915 12.4713 8.91131 12.1774 8.48166C11.8834 8.05201 11.4379 7.75126 10.8409 7.57939C11.2751 7.37135 11.603 7.10452 11.8246 6.77889C12.0462 6.45325 12.157 6.04622 12.157 5.55777C12.157 5.10551 12.0824 4.72561 11.9331 4.41807C11.7839 4.11053 11.5736 3.86404 11.3022 3.67862C11.0309 3.49319 10.7052 3.35977 10.3253 3.27836C9.94544 3.19695 9.52484 3.15625 9.06352 3.15625H4.5047ZM6.63486 11.1885V8.52915H8.95498C9.41629 8.52915 9.78715 8.63543 10.0676 8.848C10.348 9.06056 10.4882 9.41558 10.4882 9.91308C10.4882 10.1663 10.4452 10.3744 10.3593 10.5372C10.2733 10.7 10.158 10.8289 10.0133 10.9239C9.86855 11.0189 9.70122 11.0867 9.51127 11.1274C9.32131 11.1681 9.12232 11.1885 8.91428 11.1885H6.63486Z"
                      fill="#111827"
                    />
                  </svg>
                </div>
                <div
                  className={color === 3 ? " mr-4 bulma_color" : "cursor-pointer mr-4 text-gray-500"}
                  onClick={() => {
                    setEditor("bulma");
                    setPopup(!popup);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={16} viewBox="0 0 12 16" fill="none">
                    <path d="M0 11L1.00313 4L5.01567 0L10.0313 5L7.02194 8L11.0345 12L5.01567 16L0 11Z" fill="currentColor" />
                  </svg>
                </div>
                <div
                  className={color === 4 ? "materialize_color" : "cursor-pointer text-gray-500"}
                  onClick={() => {
                    setEditor("material");
                    setPopup(!popup);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-m" width={20} height={20} viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 20v-16l6 14l6 -14v16" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex items-center">
              <div onClick={() => setView2("default")} className={view2 === "default" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                  <path d="M6.66667 16L25.3333 16L25.3333 6.66667L6.66667 6.66667L6.66667 16ZM4 26.6667L4 5.33333C4 4.97971 4.14047 4.64057 4.39052 4.39052C4.64057 4.14047 4.97971 4 5.33333 4L26.6667 4C27.0203 4 27.3594 4.14047 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333L28 26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28L5.33333 28C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14048 27.3594 4 27.0203 4 26.6667Z" fill="currentColor" />
                </svg>
              </div>
              <div onClick={() => setView2("col-reverse")} className={view2 === "col-reverse" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                  <path d="M25.3333 16L6.66667 16L6.66667 25.3333L25.3333 25.3333L25.3333 16ZM28 5.33333L28 26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28L5.33333 28C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14047 27.3594 4 27.0203 4 26.6667L4 5.33333C4 4.97971 4.14047 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4L26.6667 4C27.0203 4 27.3594 4.14048 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333Z" fill="currentColor" />
                </svg>
              </div>
              <div onClick={() => setView2("row")} className={view2 === "row" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.3333L12 2.66667L2.66666 2.66667L2.66667 21.3333L12 21.3333ZM22.6667 24L1.33333 24C0.979712 24 0.640572 23.8595 0.390522 23.6095C0.140474 23.3594 -8.56491e-08 23.0203 -1.16564e-07 22.6667L-1.98158e-06 1.33333C-2.0125e-06 0.979714 0.140472 0.640574 0.39052 0.390524C0.64057 0.140476 0.979709 2.0125e-06 1.33333 1.98158e-06L22.6667 1.16564e-07C23.0203 8.56491e-08 23.3594 0.140474 23.6095 0.390522C23.8595 0.640572 24 0.979712 24 1.33333L24 22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24Z" fill="currentColor" />
                </svg>
              </div>
              <div onClick={() => setView2("row-reverse")} className={view2 === "row-reverse" ? "mr-10 cursor-pointer text-white" : "mr-10 cursor-pointer text-gray-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.66667L12 21.3333L21.3333 21.3333L21.3333 2.66667L12 2.66667ZM1.33333 0L22.6667 0C23.0203 0 23.3594 0.140476 23.6095 0.390524C23.8595 0.640573 24 0.979711 24 1.33333L24 22.6667C24 23.0203 23.8595 23.3594 23.6095 23.6095C23.3594 23.8595 23.0203 24 22.6667 24L1.33333 24C0.979711 24 0.640573 23.8595 0.390524 23.6095C0.140476 23.3594 0 23.0203 0 22.6667L0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z" fill="currentColor" />
                </svg>
              </div>
              <div onClick={() => setView2("hidden")} className={view2 === "hidden" ? " mr-10 cursor-pointer text-white" : " mr-10 cursor-pointer text-gray-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" width={27} height={24} viewBox="0 0 27 24" fill="none">
                  <rect width="26.67" height={24} rx={1} fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="hidden sm:flex items-center border-l border-r px-4 border-gray-700">
                <div className="flex items-center">
                  <svg onClick={() => fontSize !== 14 && setFontSize(fontSize - 2)} className={fontSize === 14 ? "opacity-50" : "cursor-pointer"} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16666 9.1665H15.8333V10.8332H4.16666V9.1665Z" fill="white" />
                  </svg>
                  <svg className="mx-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6V21H8V6H2V4H16V6H10ZM18 14V21H16V14H13V12H21V14H18Z" fill="white" />
                  </svg>
                  <svg onClick={() => fontSize !== 22 && setFontSize(fontSize + 2)} className={fontSize === 22 ? "opacity-50" : "cursor-pointer"} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16666 9.1665V4.1665H10.8333V9.1665H15.8333V10.8332H10.8333V15.8332H9.16666V10.8332H4.16666V9.1665H9.16666Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="hidden sm:flex items-center border-r px-4 border-gray-700">
                {editorFontColor === "bespin" && <div onClick={() => setEditorFontColor("tuk")} className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-pink-500 cursor-pointer" />}
                {editorFontColor === "tuk" && <div onClick={() => setEditorFontColor("ayu-dark")} className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-green-300 cursor-pointer" />}
                {editorFontColor === "ayu-dark" && <div onClick={() => setEditorFontColor("amy")} className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-800 cursor-pointer" />}
                {editorFontColor === "amy" && <div onClick={() => setEditorFontColor("bespin")} className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-green-500 cursor-pointer" />}
              </div>
              <div onMouseEnter={() => setTooltipStatus(5)} onMouseLeave={() => setTooltipStatus(0)} className="flex items-center sm:px-4 sm:border-r border-gray-700">
                {tooltipStatus === 5 && (
                  <div role="tooltip" className="hidden sm:block z-20 absolute transition duration-150 ease-in-out shadow-lg p-3 bg-gray-600 text-gray-600 rounded top-0 mt-14 -ml-2">
                    <svg className="absolute top-0 -mt-2" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="Tooltips-" transform="translate(-93.000000, -355.000000)" fill="currentColor">
                          <g id="Group-3-Copy-3" transform="translate(76.000000, 331.000000)">
                            <polygon id="Triangle" transform="translate(25.000000, 28.000000) rotate(-360.000000) translate(-25.000000, -28.000000) " points="25 24 33 32 17 32" />
                          </g>
                        </g>
                      </g>
                    </svg>

                    <p className="text-xs font-bold text-gray-200 ">Clear</p>
                  </div>
                )}
                <svg
                  onClick={() => {
                    setHtml("");
                    setJs("");
                  }}
                  className="cursor-pointer"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.66663 8.1665H23.3333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.6666 12.8335V19.8335" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.3334 12.8335V19.8335" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.83337 8.1665L7.00004 22.1665C7.00004 22.7853 7.24587 23.3788 7.68346 23.8164C8.12104 24.254 8.71454 24.4998 9.33337 24.4998H18.6667C19.2855 24.4998 19.879 24.254 20.3166 23.8164C20.7542 23.3788 21 22.7853 21 22.1665L22.1667 8.1665" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.5 8.16667V4.66667C10.5 4.35725 10.6229 4.0605 10.8417 3.84171C11.0605 3.62292 11.3572 3.5 11.6667 3.5H16.3333C16.6428 3.5 16.9395 3.62292 17.1583 3.84171C17.3771 4.0605 17.5 4.35725 17.5 4.66667V8.16667" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div className={view2 === "default" ? "flex-col  flex relative z-0 h-full w-full" : view2 === "col-reverse" ? "flex-col-reverse  flex relative z-0 h-full w-full" : view2 === "row" ? "flex-row  flex relative z-0 h-full w-full" : view2 === "row-reverse" ? "flex-row-reverse  flex relative z-0 h-full w-full" : ""}>
          <div className={view2 === "default" ? "height2 " : view2 === "col-reverse" ? "height2 " : view2 === "row" ? "view4_height xl:w-1/2  w-full " : view2 === "row-reverse" ? "view4_height  xl:w-1/2  w-full " : view2 === "hidden" ? "hidden" : ""}>
            <div className="w-full   h-full px-2 xl:px-20 bg-gray-800  ">
              <div className="bg-gray-800  ">
                <div className="flex items-center justify-between border-b border-gray-700 pt-7">
                  <div className="flex items-center">
                    <button onClick={() => setView1("html")} className={view1 === "html" ? "text-white mr-6 focus:outline-none" : "text-gray-400 cursor-pointer mr-6 focus:outline-none hover:text-gray-500"}>
                      HTML
                      <div className={view1 === "html" ? "w-10 h-1 mt-3 bg-blue-500" : "w-10 h-1 mt-3"} />
                    </button>
                    <button onClick={() => setView1("js")} className={view1 === "js" ? "text-white mr-6 focus:outline-none" : " text-gray-400 mr-6 cursor-pointer focus:outline-none hover:text-gray-500"}>
                      Javascript
                      <div className={view1 === "js" ? " w-16 h-1 mt-3 bg-blue-500" : "w-16 h-1 mt-3"} />
                    </button>
                    <button
                      onClick={() => {
                        setView1("preview");
                      }}
                      className={view1 === "preview" ? "xl:hidden text-white mr-6 focus:outline-none" : "xl:hidden text-gray-400 cursor-pointer focus:outline-none hover:text-gray-500"}
                    >
                      Preview
                      <div className={view1 === "preview" ? " w-16 h-1 mt-3 bg-blue-500 " : "w-16 h-1 mt-3"} />
                    </button>
                  </div>
                  {/* format code */}
                  <div className="flex items-center ">
                    <button onClick={() => formatCode()} className=" py-1 px-1 rounded-lg text-blue-500 bg-transparent text-sm focus:outline-none hover:bg-gray-600 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code mr-3" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                      Format Code
                    </button>
                  </div>
                  {/* format code */}
                </div>
              </div>
              {view1 === "html" ? (
                <div className={view2 === "default" ? "w-full  pt-4  relative normal-h h-69" : view2 === "col-reverse" ? "w-full pt-4  relative normal-h h-69" : view2 === "row" ? " relative w-full pt-4 pb-12  h-94" : view2 === "row-reverse" ? "w-full relative pt-4 pb-12 view4_height  h-94" : view2 === "hidden" ? "w-full pt-4 pb-12 relative normal-h" : ""}>
                  <Editor formatCode={formatCode} editorFontColor={editorFontColor} fontSize={"customFontSize" + JSON.stringify(fontSize)} customHeight={"height_viewer"} language="xml" value={html} onSaveData={setHtml} />
                  <img src="https://i.ibb.co/C73Hn6L/image-1.png" alt="doge" className="pointer-events-none absolute m-auto  inset-0 z-10 h-80 w-60 " />
                </div>
              ) : view1 === "js" ? (
                <div className={view2 === "default" ? "w-full  pt-4  relative normal-h h-69" : view2 === "col-reverse" ? "w-full pt-4  relative normal-h h-69" : view2 === "row" ? " relative w-full pt-4 pb-12  h-94" : view2 === "row-reverse" ? "w-full relative pt-4 pb-12  h-94" : view2 === "hidden" ? "w-full pt-4 pb-12 relative normal-h" : ""}>
                  <Editor formatCode={formatCode} editorFontColor={editorFontColor} fontSize={"customFontSize" + JSON.stringify(fontSize)} customHeight={"height_viewer"} language="javascript" value={js} onSaveData={setJs} />
                  <img src="https://i.ibb.co/C73Hn6L/image-1.png" alt="doge" className="pointer-events-none absolute m-auto  inset-0 z-10 h-80 w-60 " />
                </div>
              ) : (
                <div className="xl:hidden bg-white">
                  <div className={view2 === "default" ? "height1 w-full" : view2 === "col-reverse" ? "height1 w-full" : view2 === "row" ? "view4_height xl:w-1/2 w-full" : view2 === "row-reverse" ? "view4_height xl:w-1/2 w-full" : view2 === "hidden" ? "view4_height" : ""}>
                    <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={"hidden xl:block " + view2 === "default" ? "w-full hidden xl:block" : view2 === "col-reverse" ? " w-full hidden xl:block" : view2 === "row" ? "xl:w-1/2 w-full hidden xl:block" : view2 === "row-reverse" ? "xl:w-1/2 w-full hidden xl:block" : view2 === "hidden" ? "w-full hidden xl:block" : "hidden xl:block"}>
            <div className={view2 === "default" ? "height1 w-full" : view2 === "col-reverse" ? "height1 w-full" : view2 === "row" ? "view4_height  w-full" : view2 === "row-reverse" ? "view4_height  w-full" : view2 === "hidden" ? "view4_height" : ""}>
              <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <>
          <div className=" w-full h-full  flex items-center justify-center transition duration-150 ease-in-out z-10 fixed inset-0">
            <div onClick={() => setModal(false)} className="fixed inset-0 overlay" />
            <div className="container mx-auto w-80 bg-gray-800 rounded flex justify-center">
              <div className="relative md:w-80 rounded shadow-lg p-6 bg-gray-800">
                <p className="text-xl font-bold leading-tight text-gray-100">Settings</p>
                <div className="flex items-center justify-between pt-7">
                  <p className="text-sm leading-tight text-gray-100">Integrations</p>
                  <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z" fill="#0EA5E9" />
                  </svg>
                </div>
                <div className="pt-5">
                  <div className="flex item-center justify-between px-4 py-3 bg-gray-700 rounded-lg">
                    <p className="text-base font-medium leading-tight text-gray-100">HTML</p>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path d="M10 18.3333C5.3975 18.3333 1.66666 14.6025 1.66666 9.99999C1.66666 5.39749 5.3975 1.66666 10 1.66666C14.6025 1.66666 18.3333 5.39749 18.3333 9.99999C18.3333 14.6025 14.6025 18.3333 10 18.3333ZM10 8.82166L7.64333 6.46416L6.46416 7.64332L8.82166 9.99999L6.46416 12.3567L7.64333 13.5358L10 11.1783L12.3567 13.5358L13.5358 12.3567L11.1783 9.99999L13.5358 7.64332L12.3567 6.46416L10 8.82166Z" fill="white" />
                    </svg>
                  </div>
                  <div className="flex item-center justify-between mt-4 px-4 py-3 bg-gray-700 rounded-lg">
                    <p className="text-base font-medium leading-tight text-gray-100">Javascript</p>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path d="M10 18.3333C5.3975 18.3333 1.66666 14.6025 1.66666 9.99999C1.66666 5.39749 5.3975 1.66666 10 1.66666C14.6025 1.66666 18.3333 5.39749 18.3333 9.99999C18.3333 14.6025 14.6025 18.3333 10 18.3333ZM10 8.82166L7.64333 6.46416L6.46416 7.64332L8.82166 9.99999L6.46416 12.3567L7.64333 13.5358L10 11.1783L12.3567 13.5358L13.5358 12.3567L11.1783 9.99999L13.5358 7.64332L12.3567 6.46416L10 8.82166Z" fill="white" />
                    </svg>
                  </div>
                  <button className="w-full py-2.5 text-sm font-semibold leading-normal text-center text-white bg-blue-500 rounded mt-6 focus:outline-none hover:bg-blue-600" onClick={() => setModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {popup && (
        <div className="absolute top-0 left-0 right-0 mt-48">
          <div className="flex items-center justify-center py-8 px-4">
            <div className="md:w-80 rounded shadow-lg p-6  dark:bg-gray-800 bg-white">
              <h1 className="  dark:text-gray-100 text-gray-800 font-bold text-xl">Notice</h1>
              <p className=" text-sm leading-5 pt-2 dark:text-gray-100 text-gray-400">All the updated code would be deleted would you like to continue?</p>
              <div className="sm:flex items-center justify-end pt-6">
                <button className=" py-2 px-5  dark:text-gray-100 text-gray-600 focus:outline-none hover:opacity-90 text-sm font-semibold border border-gray-600 rounded" onClick={() => setPopup(!popup)}>
                  Cancel
                </button>
                <button className="ml-4 py-2 px-5 sm:mt-0 mt-4 text-white focus:outline-none hover:opacity-90 rounded border text-sm font-semibold border-indigo-700 bg-indigo-700" onClick={handleModeSwitch}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
