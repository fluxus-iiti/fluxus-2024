'use client'

import { useEffect } from "react"
import  { useRouter } from "next/navigation";
export default function BurgerToCross() {
    const router = useRouter()
    console.log(router)
    useEffect(() => {
        if(window.location.href.includes('technicals')){
            document.getElementById('container').style.display = "hidden"
        }
    }, [])
    return (
        <>
            <div id="container" className="container  !z-[10000000000000]">
                <a id="menu-toggle" className="menu-toggle hidden md:block" onClick={() => {
                    if(document.getElementById('container').classList.contains('nav-open')){
                        document.getElementById('container').classList.toggle('nav-open');
                        document.getElementById('offcanvas').style.top = "-1000px"
                        document.getElementById('burger_to_cross').style.transform = "translateY(0px)"
                        
                    }
                    else{
                        document.getElementById('container').classList.toggle('nav-open');
                        document.getElementById('offcanvas').style.top = "0px"
                        document.getElementById('burger_to_cross').style.transform = "translateY(100px)"
                    }
                    
                }}>
                    <span className="menu-toggle-bar menu-toggle-bar--top"></span>
                    <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
                    <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
                </a>
                
            </div>
            <style jsx>
                {`
                .container {
                    position: relative;
                    padding: 1.5rem;
               }
                .menu-toggle {
                    position: absolute;
                    left: 1.5rem;
                    top: %;
                    transform: translate(0, -50%);
                    height: 26px;
                    width: 29px;
                    z-index:1000000000000;
               }
                .menu-toggle, .menu-toggle:hover {
                    color: #000;
               }
                .menu-toggle-bar {
                    display: block;
                    position: absolute;
                    top: 50%;
                    margin-top: -1px;
                    right: 0;
                    width: 100%;
                    height: 4px;
                    border-radius: 4px;
                    background-color: white;
                    transition: all 0.3s ease;
               }
                .menu-toggle-bar.menu-toggle-bar--top {
                    transform: translate(0, -8px);
               }
                .menu-toggle-bar.menu-toggle-bar--bottom {
                    transform: translate(0, 8px);
               }
                .nav-open .menu-toggle-bar.menu-toggle-bar--top {
                    transform: translate(0, 0) rotate(45deg);
               }
                .nav-open .menu-toggle-bar.menu-toggle-bar--middle {
                    opacity: 0;
               }
                .nav-open .menu-toggle-bar.menu-toggle-bar--bottom {
                    transform: translate(0, 0) rotate(-45deg);
               }
                
            `}
            </style>
        </>

    )
}