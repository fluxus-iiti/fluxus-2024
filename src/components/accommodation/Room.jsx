'use client'
import Image from 'next/image'
import React from 'react'

export default function room({ele}) {
    return (
        <div>
            <div className="card">
                <Image src={ele.image} placeholder="blur"/>
            </div>
            <style jsx>
                {`
                    .card {
                        position: relative;
                        width: 300px;
                        height: 100%;
                        background-color: #f2f2f2;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        perspective: 1000px;
                        box-shadow: 0 0 0 5px #ffffff80;
                        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                      }
                      
                      .card svg {
                        width: 48px;
                        fill: #333;
                        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                      }
                      
                      .card:hover {
                        transform: scale(1.05);
                        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
                      }
                `}
            </style>

        </div>
    )
}
