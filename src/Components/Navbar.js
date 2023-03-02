import React, {Component} from 'react'
import './nav-style.css'
import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

class Navbar extends Component {
  render() {
    return (
        <nav>
            <ul className='terimummy'>
          <li>
            <NavLink  to="/NayaPage" >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink  to="/Faq">
              Products
            </NavLink>
          </li>
        </ul>
            <div className='Logo'>
            <svg className='Logo-name' width="115" height="36" viewBox="0 0 115 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.35825 15.2154C7.33525 14.9975 7.32379 14.7785 7.32391 14.5594C7.32326 13.1521 7.77697 11.7813 8.61907 10.6462C9.46116 9.51116 10.6478 8.67108 12.0063 8.24812C13.3649 7.82515 14.8245 7.84135 16.1731 8.29436C17.5217 8.74737 18.6889 9.61357 19.505 10.767L24.9059 5.12933C23.0819 2.90554 20.6052 1.29481 17.8167 0.518735C15.0281 -0.257341 12.0647 -0.160628 9.33402 0.79557C6.60337 1.75177 4.23971 3.52046 2.56821 5.85833C0.896703 8.1962 -0.000510558 10.9884 2.17964e-07 13.8507C2.17964e-07 15.8317 0.875664 18.1991 2.17294 20.625L7.35825 15.2154Z" fill="#073A4D"/>
<path d="M20.6038 13.3399C20.8946 14.8658 20.6329 16.4441 19.8646 17.7986C19.0963 19.1531 17.8703 20.1975 16.4012 20.7488C14.932 21.3002 13.3134 21.3235 11.8287 20.8147C10.3439 20.3058 9.08762 19.2972 8.27967 17.9654L3.51025 22.9378C7.0587 28.6019 12.1162 34.0002 12.9728 34.8955L14.0201 36L15.0751 34.8879C16.4106 33.4969 28.0479 21.0661 28.0479 13.8432C28.0506 11.5629 27.4789 9.31776 26.3844 7.31018L20.6038 13.3399Z" fill="#073A4D"/>
<path d="M18.0216 15.4434C18.5151 13.2601 17.1238 11.0948 14.914 10.6072C12.7042 10.1196 10.5127 11.4942 10.0192 13.6775C9.52565 15.8608 10.917 18.026 13.1268 18.5137C15.3366 19.0013 17.5281 17.6267 18.0216 15.4434Z" fill="#FF2D5C"/>
<path d="M35.2097 15.5716V24.9036H39.7979V15.5037C39.7979 12.9195 41.057 11.3871 43.5714 11.3871H45.0977V6.7522H44.4509C38.4396 6.7522 35.3452 9.82833 35.2097 15.5716Z" fill="#FF2D5C"/>
<path d="M77.8101 1.82703H75.5685V9.49474C74.4028 7.64755 72.6858 6.73715 70.4404 6.73715C65.6481 6.90491 63.2691 9.88303 63.2691 15.9279C63.2691 21.8407 66.0563 24.8245 71.6251 24.9263C77.2339 24.9602 80.0555 22.3082 80.0555 16.9683V4.07758C80.0526 3.48709 79.8162 2.92113 79.3966 2.5006C78.977 2.08008 78.4076 1.83834 77.8101 1.82703V1.82703ZM71.6919 21.1358C69.1107 21.1358 67.8764 19.3225 67.9202 15.7299C68.0557 12.3051 69.3129 10.6257 71.7587 10.6257C74.2044 10.6257 75.4616 12.2995 75.5646 15.7299C75.5685 19.3225 74.2807 21.1358 71.6919 21.1358Z" fill="#FF2D5C"/>
<path d="M89.9893 6.73718C84.5178 6.76923 81.7649 9.753 81.7649 15.7187C81.7649 21.6843 84.4835 24.7661 89.9206 24.9339C94.339 24.9339 96.8992 22.8793 97.8855 19.1661H94.5546C94.269 19.158 93.985 19.2105 93.7217 19.3201C93.4584 19.4297 93.222 19.5938 93.0283 19.8013C92.216 20.5879 91.1303 21.0383 89.9931 21.0604C87.7839 21.0604 86.5954 19.7014 86.4237 17.0174H97.9351C98.3529 10.1941 95.6992 6.73718 89.9893 6.73718ZM86.4885 13.8639C86.8281 11.5418 87.9861 10.3505 89.9225 10.3505C91.8589 10.3505 92.9749 11.5474 93.2515 13.8677L86.4885 13.8639Z" fill="#FF2D5C"/>
<path d="M112.68 6.74841C111.184 6.74841 110.471 7.4854 110.505 8.96315V18.3706C110.505 20.3535 109.488 21.3261 107.453 21.3261C105.417 21.3261 104.4 20.3535 104.4 18.3706V6.74841H99.8695V17.4659C99.8695 20.4534 100.652 22.4005 102.216 23.3788C103.725 24.3734 105.5 24.8987 107.314 24.8867C109.175 24.902 111.007 24.4264 112.621 23.5088C114.218 22.5362 115 20.5213 115 17.4659V6.74841H112.68Z" fill="#FF2D5C"/>
<path d="M57.0288 8.96692V16.7176C57.0288 17.743 56.9392 18.3555 56.4164 19.0605C55.8937 19.7654 55.0524 19.8634 54.1271 19.8634C53.2018 19.8634 52.2556 19.6015 51.8378 19.0831C51.42 18.5648 51.2235 17.7637 51.2235 16.7232V6.78423H46.5609V17.0889C46.5609 22.8001 48.8655 25.3698 53.4747 24.7981C54.2244 24.7189 56.1722 24.4645 57.0574 24.0441V26.387H57.0422V26.5586C57.0334 26.5861 57.0283 26.6146 57.0269 26.6434C57.0229 26.7776 56.9985 26.9104 56.9544 27.0373L56.9258 27.1561L56.8953 27.2767L56.8667 27.3615L56.8514 27.4124C56.664 27.9872 56.3146 28.4972 55.8441 28.8826C55.4041 29.2569 54.8432 29.4635 54.2626 29.4651C53.8976 29.464 53.5374 29.3834 53.2077 29.2289C52.8779 29.0745 52.5867 28.85 52.3548 28.5716C51.8136 27.967 51.5073 27.1921 51.4906 26.3852L47.2706 29.2709C47.4652 30.045 47.9739 30.9246 48.7968 31.9098C50.0547 33.3674 51.7252 34.1214 53.8085 34.1716H54.5831C55.5436 34.1668 56.4931 33.9693 57.3741 33.5911C58.2996 33.2266 59.126 32.6534 59.7875 31.9173C61.0733 30.3905 61.7156 28.5685 61.7143 26.4511V6.74841H59.2037C57.7099 6.74841 56.9964 7.4854 57.0288 8.96692Z" fill="#FF2D5C"/>
            </svg>
            </div>

            <div className='Requests'>
                <a href='#openRequest' className='Request-url'>Open Requests</a>
            </div>

            <div className='Icons'>
                <div className='Inner-Icons'>
                    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00240067 11.9063C0.0336094 11.6735 0.0576162 11.4382 0.0984276 11.2077C0.412916 9.51526 1.29636 8.19249 2.69836 7.19621C3.66823 8.11567 4.81095 8.6006 6.14572 8.5982C7.4757 8.5982 8.61602 8.11807 9.59549 7.19141C9.78995 7.34505 9.994 7.49149 10.1813 7.65714C11.3624 8.70623 12.0586 10.0146 12.2482 11.587C12.2602 11.6927 12.277 11.8007 12.2914 11.9063C12.2914 12.0336 12.2914 12.1632 12.2914 12.2904C10.3709 16.1315 2.69836 16.1315 0 12.2904C0.00240067 12.1632 0.00240067 12.0336 0.00240067 11.9063Z" fill="#484848"/>
            <path d="M6.43599 0C6.67846 0.0480135 6.92573 0.0792222 7.161 0.146441C8.6014 0.547354 9.6673 1.82211 9.81614 3.31293C10.0226 5.37991 8.50538 7.19482 6.42879 7.36527C4.55867 7.52131 2.83739 6.18894 2.5205 4.33802C2.1796 2.35986 3.41595 0.516145 5.3773 0.0816229C5.53574 0.0456128 5.69899 0.0264074 5.85983 0C6.05189 0 6.24394 0 6.43599 0Z" fill="#484848"/>
                    </svg>

                    <svg className='Menu'>
                <path xmlns="http://www.w3.org/2000/svg" d="M2.63672 8.76172H18.4687" stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path xmlns="http://www.w3.org/2000/svg" d="M7 14L18 14" stroke="#484848" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar