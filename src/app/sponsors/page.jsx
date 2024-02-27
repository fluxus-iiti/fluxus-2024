'use client'
import Image from 'next/image'
import SnapScroll from '../../components/sponsors/SnapScroll'
import main from '../../../public/images/sponsor/main.webp'
export default function page() {
    return (
        <div className=''>
            <div className="home  !bg-no-repeat !bg-cover" >
              
                <div className="home-content !py-64 bg-black  bg-opacity-40">
                    <h1 className='!my-0 font-bold text-6xl'>Sponsors</h1>
                   <SnapScroll />
                
                </div>
            </div>
            <style jsx>
                {`
                    *, ::before, ::after {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    
                    body {
                        font-family: roboto, sans-serif;
                    }
                    
                    .home {
                        height: 100vh;
                        position: relative;
                        background:url('./images/sponsor/main.jpg')
                    }
                    
                    .home-content {
                        position: relative;
                        
                        color: #fff;
                        text-align: center;
                    }
                   
                    
                    .home p {
                        font-size: clamp(20px, 4vw, 30px);  
                        margin-top: 10px;
                    }
                    
                    .home-content button {
                        display: block;
                        font-size: clamp(14px, 1.5vw, 18px);
                        border: 1px solid #f1f1f1;
                        border-radius: 5px;
                        background: transparent;
                        color: #fff;
                        margin: 50px auto 0;
                        padding: 12px 20px;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}
