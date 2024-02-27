import Card from './Card'

const SponsorData1 = [
    {
        id:"1",
        company:"NHAI",
        title:"Platinum Partner ",
        image:require('../../../public/images/sponsor/1.png')
    },
    {
        id:"2",
        company:"Metro Shoes",
        title:"Styled By Partner",
        image:require('../../../public/images/sponsor/2.png')
    },
    {
        id:"3",
        company:"Suzuki ",
        title:"Motorcycle Partner ",
        image:require('../../../public/images/sponsor/3.png')
    },
    {
        id:"4",
        company:"Dabur ",
        title:"Ayurveda Partner ",
        image:require('../../../public/images/sponsor/4.png')
    },
    
]

const SponsorData2 = [
    {
        id:"5",
        company:"Adriot Associates ",
        title:"Water Technology Partner",
        image:require('../../../public/images/sponsor/5.png')
    },
    {
        id:"6",
        company:"Prestige",
        title:"Partner ",
        image:require('../../../public/images/sponsor/6.png')
    },
    {
        id:"7",
        company:"Tata Steel ",
        title:"Steel Partner ",
        image:require('../../../public/images/sponsor/7.png')
    },
    {
        id:"8",
        company:"Teachnook ",
        title:"Ed-Tech Partner  ",
        image:require('../../../public/images/sponsor/8.jpg')
    },
    
]

const SponsorData3 = [
    {
        id:"9",
        company:"Supergrads",
        title:"Education Partner ",
        image:require('../../../public/images/sponsor/9.png')
    },
    {
        id:"10",
        company:"KSG",
        title:"Official UPSC Partner",
        image:require('../../../public/images/sponsor/10.jpeg')
    },
    {
        id:"11",
        company:"Spykar",
        title:"Style Partner",
        image:require('../../../public/images/sponsor/11.png')
    },
    {
        id:"12",
        company:"EaseMyTrip",
        title:"Travel Partner",
        image:require('../../../public/images/sponsor/12.png')
    },
    
]
const SponsorData4 = [
    {
        id:"13",
        company:"JioSaavn",
        title:"Partner ",
        image:require('../../../public/images/sponsor/13.png')
    },
    
]


export default function SnapScroll() {
    return (
        <div className="     w-full ">
            <div className="support-scrollsnap"></div>

            <div className="scroll-container">
                <div className="scroll-area !flex-wrap !py-20">
                    {SponsorData1.map((ele,index)=>{
                        return (
                            <div key={index}>
                            <Card ele={ele} />
                            </div>
                        )
                    })}
                    
                </div>
                <div className="scroll-area !flex-wrap !py-20">
                    {SponsorData2.map((ele,index)=>{
                        return (
                            <div key={index}>
                            <Card ele={ele} />
                            </div>
                        )
                    })}
                    
                </div>
                <div className="scroll-area !flex-wrap !py-20">
                    {SponsorData3.map((ele,index)=>{
                        return (
                            <div key={index}>
                            <Card ele={ele} />
                            </div>
                        )
                    })}
                    
                </div>
                <div className="scroll-area !flex-wrap !py-20">
                    {SponsorData4.map((ele,index)=>{
                        return (
                            <div key={index}>
                            <Card ele={ele} />
                            </div>
                        )
                    })}
                    
                </div>
                
                
                
            </div>
            <style jsx>
                {`
                    html {
                        background: transparent;
                    }

                    .scroll-container,
                    .scroll-area {
                        max-width: 100%;
                        height: 60vh;
                        font-size: 15px;
                    }

                    .scroll-container {
                        overflow: auto;
                        -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */
                        -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer */
                        scrollbar-width: none; /* Hide scrollbar for Firefox */
                        -webkit-scroll-snap-type: y mandatory;
                        -ms-scroll-snap-type: y mandatory;
                        scroll-snap-type: y mandatory;
                    }

                    .scroll-area {
                        scroll-snap-align: start;
                    }

                    .scroll-container,
                    .scroll-area {
                        margin: 0 auto;
                    }

                    .scroll-area {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                    }

                    .scroll-area:nth-of-type(1),
                    .scroll-area:nth-of-type(2),
                    .scroll-area:nth-of-type(3),
                    .scroll-area:nth-of-type(4) {
                        background: transparent;
                    }

                    /* Hide scrollbar for WebKit (Chrome, Safari, etc.) */
                    .scroll-container::-webkit-scrollbar {
                        
                    }

                    /* Hide scrollbar for Firefox */
                    .scroll-container {
                        scrollbar-width: none;
                    }
                `}
            </style>
        </div>
    )
}
