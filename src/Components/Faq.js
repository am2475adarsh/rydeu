import React, { Component }  from 'react'
import './Faq-style.css'
import facebook from './facebook.jpg'
import instagram from './instagram.jpg'
import twitter from './twitter.jpg'
import linkedin from './linkedin.jpg'
import freshchart from './freshchart.jpg'
import Navbar from '../Components/Navbar'

const lorem = {
    position : 'absolute',
    top:'60px',
    left:'100px',
    color : '#A8A8A8',
    width:'400px'
}

const queryArrowIcon = {
    position: 'relative',
    left:'-720px',
    top:'15px'
}

const Specifics ={
    position:'absolute',
    zIndex:'50'
}

export class Faq extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         rotate1 : 0,
         rotate2 :0,
         rotate3:0
      }
    }

    Open1(){
        this.setState({
            rotate1: this.state.rotate1 + 1
        })

        if(this.state.rotate1%2===0){
            document.getElementById('Arrow1').style.transform = "rotate(180deg)";
            document.getElementsByClassName('FaqBoxThree')[0].style.height = "20vw"
            document.getElementById('Content1').style.display='block'
        }else{
            document.getElementById('Arrow1').style.transform = "rotate(0deg)";
            document.getElementsByClassName('FaqBoxThree')[0].style.height = "13vw"
            document.getElementById('Content1').style.display='none'
        }
        
    }

    Open2(){
        this.setState({
            rotate2: this.state.rotate2 + 1
        })

        if(this.state.rotate2%2===0){
            document.getElementById('Arrow2').style.transform = "rotate(180deg)";
            document.getElementsByClassName('FaqBoxFour')[0].style.height = "20vw"
            document.getElementById('Content2').style.display='block'
        }else{
            document.getElementById('Arrow2').style.transform = "rotate(0deg)";
            document.getElementsByClassName('FaqBoxFour')[0].style.height = "13vw"
            document.getElementById('Content2').style.display='none'
        }
        
    }

    Open3(){
        this.setState({
            rotate3: this.state.rotate3 + 1
        })

        if(this.state.rotate3%2===0){
            document.getElementById('Arrow3').style.transform = "rotate(180deg)";
            document.getElementsByClassName('FaqBoxFive')[0].style.height = "50vw"
            document.getElementById('Content3').style.display='flex'
        }else{
            document.getElementById('Arrow3').style.transform = "rotate(0deg)";
            document.getElementsByClassName('FaqBoxFive')[0].style.height = "13vw"
            document.getElementById('Content3').style.display='none'
        }
        
    }
  render() {
    return (
        <div className='Faq-Content'>
          <Navbar style={Specifics}></Navbar>
        <svg width="375" className='Rectangle' height="230" viewBox="0 0 375 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M376 7.16677e-09C376 7.16677e-09 285.274 0.00347648 175.928 0.000668098C66.5817 -0.00214029 97.748 0.00495635 0.0230408 0.00270578L0.000152588 209.853C53.178 262.972 164.315 190.837 224 190.837C296.393 190.837 313.5 228.274 376 209.853L376 7.16677e-09Z" fill="url(#paint0_linear_1_322)"/>
                <defs>
<linearGradient id="paint0_linear_1_322" x1="207.406" y1="-107.241" x2="189.575" y2="-619.01" gradientUnits="userSpaceOnUse">
<stop stopColor="#DCF5F5"/>
<stop offset="1" stopColor="#DCF5F5" stopOpacity="0.46"/>
</linearGradient>
                </defs>
        </svg>

        <svg width="375" className='Rectangle' height="235" viewBox="0 0 375 235" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.00317383C0 0.00317383 90.7257 0.00664779 200.072 0.00384144C309.418 0.00103509 278.252 0.00812659 375.977 0.00587764L376 227.508C311 253.712 283.685 198.048 224 198.048C151.607 198.048 110 263.564 0.000110626 191.07L0 0.00317383Z" fill="url(#paint0_linear_1_321)" fillOpacity="0.52"/>
                <defs>
                    <linearGradient id="paint0_linear_1_321" x1="168.594" y1="-87.9555" x2="186.399" y2="-599.355" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#DCF5F5"/>
                        <stop offset="1" stopColor="#DCF5F5" stopOpacity="0.46"/>
                    </linearGradient>
                </defs>
        </svg>
        <h1 className='Text'>Hello, how can we help you?</h1>
        <p className='FindText'>Find Travel guide, FAQ, chat,</p>

     <div className='FaqBox'>
        <svg className='Ques' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#FFA9BC" strokeMiterlimit="10"/>
        <path d="M9.735 7.17948C10.5666 6.29429 11.7081 5.85156 13.1596 5.85156C14.5023 5.85156 15.5775 6.2302 16.3848 6.98748C17.1924 7.74501 17.5963 8.71267 17.5963 9.89071C17.5963 10.6043 17.45 11.1831 17.1569 11.6276C16.8643 12.0719 16.264 12.725 15.3566 13.5867C14.6966 14.2128 14.2669 14.7428 14.0678 15.1771C13.8686 15.6111 13.769 16.2525 13.769 17.1007H11.9716C11.9716 16.1379 12.086 15.3622 12.3153 14.7732C12.544 14.1839 13.0534 13.5093 13.8428 12.7485L14.667 11.9506C14.9142 11.7219 15.1146 11.4829 15.2683 11.2334C15.5481 10.7961 15.6878 10.3416 15.6878 9.87029C15.6878 9.21054 15.4868 8.63837 15.0847 8.15352C14.6828 7.66892 14.0177 7.42637 13.0899 7.42637C11.942 7.42637 11.1485 7.84382 10.7083 8.67846C10.4609 9.14288 10.3199 9.81284 10.2857 10.6881H8.48828C8.48777 9.23454 8.90343 8.06467 9.735 7.17948ZM11.9313 18.7771H13.9409V20.8776H11.9313V18.7771Z" fill="#FF2D5C"/>
        </svg>
        <p>FAQ</p>
        <p style={lorem}>Lorem ipsum dolor sit amet</p>
     </div>

     <div className='FaqBoxTwo'>
        <svg className='Ques' width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5777 0H4.97777C2.23999 0 0 2.23999 0 4.97777V51.0221C0 53.7599 2.23999 55.9999 4.97777 55.9999H38.5777C41.3155 55.9999 43.5555 53.7599 43.5555 51.0221V4.97777C43.5555 2.23999 41.3155 0 38.5777 0ZM6.22221 53.511H4.97777C3.60888 53.511 2.48888 52.391 2.48888 51.0221V4.97777C2.48888 3.60888 3.60888 2.48888 4.97777 2.48888H6.22221V53.511ZM41.0666 51.0221C41.0666 52.391 39.9466 53.511 38.5777 53.511H8.71109V2.48888H38.5777C39.9466 2.48888 41.0666 3.60888 41.0666 4.97777V51.0221Z" fill="#FFA9BC"/>
            <path d="M25.4487 12.9421C25.0753 12.9421 24.702 12.9421 24.3287 12.9421C20.2842 13.1288 16.7376 15.431 14.9331 19.1021C13.0665 22.8977 13.3154 27.191 15.742 30.6754L23.8931 42.5598C24.142 42.871 24.5153 43.1198 24.9509 43.1198C25.3864 43.1198 25.7598 42.9332 26.0087 42.5598L34.1597 30.6754C36.5242 27.191 36.8353 22.8977 34.9686 19.1021C33.0397 15.431 29.4931 13.0666 25.4487 12.9421ZM32.0442 29.2443L24.8887 39.6354L17.7331 29.2443C15.8665 26.5065 15.6176 23.1466 17.1109 20.1599C18.542 17.2977 21.2798 15.4932 24.3909 15.3688C24.702 15.3688 25.0131 15.3688 25.3242 15.3688C28.4353 15.4932 31.1731 17.2977 32.6042 20.1599C34.0975 23.1466 33.9109 26.5065 32.0442 29.2443Z" fill="#FF2D5C"/>
            <path d="M24.8889 19.2891C22.1511 19.2891 19.9111 21.5291 19.9111 24.2668C19.9111 27.0046 22.1511 29.2446 24.8889 29.2446C27.6267 29.2446 29.8667 27.0046 29.8667 24.2668C29.8667 21.5291 27.6267 19.2891 24.8889 19.2891ZM24.8889 26.7557C23.52 26.7557 22.4 25.6357 22.4 24.2668C22.4 22.8979 23.52 21.7779 24.8889 21.7779C26.2578 21.7779 27.3778 22.8979 27.3778 24.2668C27.3778 25.6357 26.2578 26.7557 24.8889 26.7557Z" fill="#FF2D5C"/>
        </svg>
        <p>Travel Guide</p>
        <p style={lorem}>Lorem ipsum dolor sit amet</p>
     </div>

     <div className='FaqBoxThree'>
            <svg className='Icons_new' width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.9 0.533203H4.1C3.01261 0.533203 1.96976 0.965166 1.20086 1.73407C0.431963 2.50296 0 3.54582 0 4.6332L0 26.4999C0 27.5873 0.431963 28.6301 1.20086 29.399C1.96976 30.1679 3.01261 30.5999 4.1 30.5999H32.3217L38.7805 35.7686C38.9817 35.9292 39.2241 36.0298 39.4798 36.0587C39.7356 36.0876 39.9944 36.0437 40.2263 35.932C40.4582 35.8203 40.6538 35.6454 40.7907 35.4275C40.9276 35.2095 41.0001 34.9573 41 34.6999V4.6332C41 3.54582 40.568 2.50296 39.7991 1.73407C39.0302 0.965166 37.9874 0.533203 36.9 0.533203V0.533203ZM38.2667 31.8545L33.6555 28.1645C33.4118 27.9721 33.1105 27.8672 32.8 27.8665H4.1C3.73754 27.8665 3.38992 27.7225 3.13362 27.4662C2.87732 27.2099 2.73333 26.8623 2.73333 26.4999V4.6332C2.73333 4.27074 2.87732 3.92312 3.13362 3.66682C3.38992 3.41052 3.73754 3.26654 4.1 3.26654H36.9C37.2625 3.26654 37.6101 3.41052 37.8664 3.66682C38.1227 3.92312 38.2667 4.27074 38.2667 4.6332V31.8545Z" fill="#FF7190"/>
                <path d="M12.3004 16.9333C13.0552 16.9333 13.667 16.3214 13.667 15.5666C13.667 14.8118 13.0552 14.2 12.3004 14.2C11.5456 14.2 10.9337 14.8118 10.9337 15.5666C10.9337 16.3214 11.5456 16.9333 12.3004 16.9333Z" fill="#FF7190"/>
                <path d="M20.4999 16.9333C21.2547 16.9333 21.8665 16.3214 21.8665 15.5666C21.8665 14.8118 21.2547 14.2 20.4999 14.2C19.7451 14.2 19.1332 14.8118 19.1332 15.5666C19.1332 16.3214 19.7451 16.9333 20.4999 16.9333Z" fill="#FF7190"/>
                <path d="M28.7 16.9333C29.4548 16.9333 30.0667 16.3214 30.0667 15.5666C30.0667 14.8118 29.4548 14.2 28.7 14.2C27.9452 14.2 27.3333 14.8118 27.3333 15.5666C27.3333 16.3214 27.9452 16.9333 28.7 16.9333Z" fill="#FF7190"/>
            </svg>
            <p>Chat</p>
            <p style={lorem}>Lorem ipsum dolor sit amet</p>
            <svg className='Arrow' id='Arrow1' onClick={()=>this.Open1()} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z" fill="#777777"/>
            </svg>
                <div id='Content1' className='Content'>
                    <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1_253)">
                            <circle cx="25.1653" cy="23.3408" r="20.3408" fill="url(#paint0_linear_1_253)"/>
                        </g>
                        <path d="M21.7549 32.7287C21.0605 32.7287 21.1852 32.4454 20.9359 31.7467L18.9064 24.6463L31.5109 16.2996L32.9885 16.715L31.7601 20.2652L21.7549 32.7287Z" fill="#C8DAEA"/>
                        <path d="M21.2536 32.7292C21.8124 32.7292 22.0545 32.4744 22.3712 32.1833C22.8555 31.7285 29.077 25.8155 29.077 25.8155L25.2584 24.9058L21.7192 27.089L21.2536 32.5472V32.7292Z" fill="#A9C9DD"/>
                        <path d="M21.8326 26.865L30.5361 33.2468C31.5251 33.7831 32.2444 33.515 32.4962 32.3351L36.0387 15.7461C36.3984 14.2981 35.4813 13.6545 34.5282 14.0836L13.7406 22.0563C12.32 22.6284 12.338 23.4149 13.4888 23.7546L18.8296 25.4171L31.1835 17.6767C31.7589 17.3192 32.2984 17.5158 31.8668 17.9091L21.8326 26.865Z" fill="url(#paint1_linear_1_253)"/>
                        <defs>
                            <filter id="filter0_d_1_253" x="0.824493" y="0" width="52.6816" height="52.6816" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="2" dy="3"/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_253"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_253" result="shape"/>
                            </filter>
                                <linearGradient id="paint0_linear_1_253" x1="31.1269" y1="9.4294" x2="20.9565" y2="33.16" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#37AEE2"/>
                                <stop offset="1" stopColor="#1E96C8"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_253" x1="27.0459" y1="23.1745" x2="31.5033" y2="30.3487" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EFF7FC"/>
                                <stop offset="1" stopColor="white"/>
                                </linearGradient>
                            </defs>
                    </svg>

                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_258)">
        <circle cx="25.1663" cy="24.0156" r="20.3408" fill="#3CBA28"/>
        </g>
        <g clipPath="url(#clip0_1_258)">
        <path d="M14.2673 34.9685L15.8071 29.3433C14.857 27.6968 14.3577 25.8302 14.3586 23.9163C14.3614 17.9324 19.2308 13.063 25.2137 13.063C28.1171 13.0639 30.8425 14.1948 32.8925 16.2466C34.9416 18.2984 36.0697 21.0256 36.0688 23.9263C36.0661 29.9111 31.1967 34.7805 25.2137 34.7805C23.3974 34.7796 21.6075 34.3241 20.0221 33.4588L14.2673 34.9685ZM20.2886 31.4937C21.8184 32.4019 23.2787 32.9459 25.2101 32.9468C30.1826 32.9468 34.2333 28.8998 34.236 23.9245C34.2379 18.9391 30.2063 14.8976 25.2174 14.8957C20.2412 14.8957 16.1932 18.9428 16.1914 23.9172C16.1905 25.948 16.7856 27.4686 17.785 29.0595L16.8732 32.3891L20.2886 31.4937ZM30.6819 26.5066C30.6143 26.3934 30.4336 26.3259 30.1616 26.1899C29.8905 26.0539 28.557 25.3976 28.3079 25.3073C28.0596 25.2169 27.8789 25.1713 27.6972 25.4433C27.5165 25.7143 26.9963 26.3259 26.8384 26.5066C26.6805 26.6873 26.5217 26.7101 26.2506 26.5741C25.9795 26.4381 25.1051 26.1524 24.0691 25.2278C23.2632 24.5086 22.7183 23.6205 22.5604 23.3485C22.4025 23.0775 22.544 22.9305 22.6791 22.7954C22.8014 22.674 22.9501 22.4787 23.0861 22.3199C23.224 22.1629 23.2687 22.0497 23.36 21.8681C23.4503 21.6874 23.4056 21.5286 23.3371 21.3926C23.2687 21.2575 22.7265 19.9222 22.5011 19.3791C22.2802 18.8506 22.0566 18.9218 21.8905 18.9136L21.3702 18.9045C21.1895 18.9045 20.8956 18.972 20.6473 19.244C20.3991 19.516 19.6981 20.1713 19.6981 21.5066C19.6981 22.842 20.6701 24.1317 20.8052 24.3124C20.9412 24.4931 22.7174 27.2331 25.4382 28.4078C26.0854 28.6871 26.591 28.8541 26.9844 28.9792C27.6343 29.1854 28.2257 29.1562 28.693 29.0869C29.2142 29.0093 30.2976 28.4306 30.524 27.7972C30.7503 27.1628 30.7503 26.6198 30.6819 26.5066Z" fill="white"/>
        </g>
        <defs>
        <filter id="filter0_d_1_258" x="0.825439" y="0.674805" width="52.6816" height="52.6816" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2" dy="3"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_258"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_258" result="shape"/>
        </filter>
        <clipPath id="clip0_1_258">
        <rect width="21.9055" height="21.9055" fill="white" transform="translate(14.2141 13.063)"/>
        </clipPath>
        </defs>
                    </svg>
            
                    <img src={freshchart} alt="X" ></img>
                </div>
     </div>

     <div className='FaqBoxFour'>
        <svg className='Icons_new' width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5777 0H4.97777C2.23999 0 0 2.23999 0 4.97777V51.0221C0 53.7599 2.23999 55.9999 4.97777 55.9999H38.5777C41.3155 55.9999 43.5555 53.7599 43.5555 51.0221V4.97777C43.5555 2.23999 41.3155 0 38.5777 0ZM6.22221 53.511H4.97777C3.60888 53.511 2.48888 52.391 2.48888 51.0221V4.97777C2.48888 3.60888 3.60888 2.48888 4.97777 2.48888H6.22221V53.511ZM41.0666 51.0221C41.0666 52.391 39.9466 53.511 38.5777 53.511H8.71109V2.48888H38.5777C39.9466 2.48888 41.0666 3.60888 41.0666 4.97777V51.0221Z" fill="#FFA9BC"/>
            <path d="M25.4487 12.9421C25.0753 12.9421 24.702 12.9421 24.3287 12.9421C20.2842 13.1288 16.7376 15.431 14.9331 19.1021C13.0665 22.8977 13.3154 27.191 15.742 30.6754L23.8931 42.5598C24.142 42.871 24.5153 43.1198 24.9509 43.1198C25.3864 43.1198 25.7598 42.9332 26.0087 42.5598L34.1597 30.6754C36.5242 27.191 36.8353 22.8977 34.9686 19.1021C33.0397 15.431 29.4931 13.0666 25.4487 12.9421ZM32.0442 29.2443L24.8887 39.6354L17.7331 29.2443C15.8665 26.5065 15.6176 23.1466 17.1109 20.1599C18.542 17.2977 21.2798 15.4932 24.3909 15.3688C24.702 15.3688 25.0131 15.3688 25.3242 15.3688C28.4353 15.4932 31.1731 17.2977 32.6042 20.1599C34.0975 23.1466 33.9109 26.5065 32.0442 29.2443Z" fill="#FF2D5C"/>
            <path d="M24.8889 19.2891C22.1511 19.2891 19.9111 21.5291 19.9111 24.2668C19.9111 27.0046 22.1511 29.2446 24.8889 29.2446C27.6267 29.2446 29.8667 27.0046 29.8667 24.2668C29.8667 21.5291 27.6267 19.2891 24.8889 19.2891ZM24.8889 26.7557C23.52 26.7557 22.4 25.6357 22.4 24.2668C22.4 22.8979 23.52 21.7779 24.8889 21.7779C26.2578 21.7779 27.3778 22.8979 27.3778 24.2668C27.3778 25.6357 26.2578 26.7557 24.8889 26.7557Z" fill="#FF2D5C"/>
        </svg>
        <p>Social</p>
        <p style={lorem}>Lorem ipsum dolor sit amet</p>
        <svg className='Arrow' id='Arrow2' onClick={()=>this.Open2()} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z" fill="#777777"/>
        </svg>

        <div id='Content2' className='Content'>
            <img src={facebook} alt="X"></img>
            <img src={instagram} alt="X"></img>
            <img src={twitter} alt="X"></img>
            <img src={linkedin} alt="X"></img>
        </div>
     </div>

     <div className='FaqBoxFive'>
     <svg style={queryArrowIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <path d="M6.40021 15.4543V5.27454L2.73129 8.81876C2.1062 9.42261 1.0939 9.42261 0.468816 8.81876C-0.156272 8.21492 -0.156272 7.23703 0.468816 6.63319L6.86743 0.451534C7.49305 -0.154369 8.51495 -0.146641 9.13257 0.451534L15.5312 6.63267C16.1563 7.23651 16.1563 8.21441 15.5312 8.81825C14.9061 9.42209 13.8938 9.42209 13.2687 8.81825L9.60032 5.27454V15.4543C9.60032 16.3081 8.88456 17 8.00027 17C7.11597 17 6.40021 16.3081 6.40021 15.4543Z" fill="#FF7190"/>
    </svg>
    <svg className='Icons_new' xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none">
        <path d="M34.8333 0H3.16667C1.42078 0 0 1.4352 0 3.2V20.8C0 22.5648 1.42078 24 3.16667 24H34.8333C36.5792 24 38 22.5648 38 20.8V3.2C38 1.4352 36.5792 0 34.8333 0ZM31.7559 3.2L19 10.9344L6.24414 3.2H31.7559ZM3.16667 20.8V5.06613L18.1851 14.1723C18.6818 14.4741 19.3119 14.4779 19.8149 14.1723L34.8333 5.0656L34.8349 20.8H3.16667Z" fill="#FF7190"/>
    </svg>

        <p>Send Query</p>
        <p style={lorem}>Lorem ipsum dolor sit amet</p>
        <svg className='Arrow' id='Arrow3' onClick={()=>this.Open3()} width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.30418 8.71165C7.69723 9.09963 8.33038 9.09551 8.71836 8.70245L15.0408 2.29721C15.4287 1.90415 15.4246 1.271 15.0316 0.883027C14.6385 0.495052 14.0054 0.499172 13.6174 0.892229L7.99746 6.58577L2.30392 0.96585C1.91086 0.577875 1.27771 0.581995 0.889736 0.975052C0.501761 1.36811 0.505881 2.00126 0.898938 2.38924L7.30418 8.71165ZM6.99367 6.00651L7.00669 8.00646L9.00665 7.99345L8.99363 5.99349L6.99367 6.00651Z" fill="#777777"/>
        </svg>

        <div id='Content3' className='Content'>
            <div className='Content3_container'>
                <div className='inputBox'>
                    <div className='inputBoxRow'>
                        <label >Name</label>
                        <input type="text"></input>
                    </div>
                    <div className='inputBoxRow'>
                        <label >Email</label>
                        <input type="text"></input>
                    </div>
                </div>

                <div className='inputBox'>
                    <div className='inputBoxRow'>
                        <label >Subject</label>
                        <input type="text"></input>
                    </div>
                    <div className='inputBoxRow'>
                        <label>Order no.</label>
                        <input type="text"></input>
                    </div>
                </div>

                <div className='inputBox'>
                    <div className='inputBoxRow'>
                        <label >Your Query</label>
                        <textarea cols="75" rows="7"></textarea>
                    </div>
                </div>

            </div>
        </div>

     </div>


      </div>
    )
  }
}

export default Faq