"use client"

import { useEffect, useRef, useState } from "react";
import "./Slider.css"
import HeroProdacts from "./HeroProduct/HeroProdacts";


export const Hero = () => {

    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    useEffect(() => {
        if(scrollRef.current) {
            setMaxScroll(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
        }
    },[]);

    const handleScroll = () => {
        if(scrollRef.current) {
            setScrollPosition(scrollRef.current.scrollLeft);
        }
    };
    const scroll = (direction) => {
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollBy({
            left: direction === "next" ? width : -width, behavior:"smooth"
        });
    };

 return(
    <div className="slider-wrapper max-h-max">
        <div>
            <div className="container"
            ref={scrollRef}
            onScroll={handleScroll}>
                <div style={{backgroundColor:"#ff7675"}} className="card">
                    Card1
                </div>
                <div style={{backgroundColor:"#74b9ff"}} className="card">
                    Card2
                </div>
                <div style={{backgroundColor:"#55efc4"}} className="card">
                    Card3
                </div>
            </div>
            {/* Controls */}
            <div className="controls">
                {scrollPosition > 10 &&(
                    <button onClick={() => scroll("prev")} className="text-black pointer">Previous</button>
                )}
                {scrollPosition < maxScroll - 10 && (
                    <button onClick={() => scroll("next")} className="text-black curs">Next</button>
                )}
            </div>
            <div className="relative -top-80 z-100">
                <HeroProdacts />
            </div>
        </div>
        
    </div>
 )
};