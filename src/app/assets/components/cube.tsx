import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import profile from "@/app/assets/images/profilePic.png"

export default function Cube() {
    const ref = useRef<HTMLDivElement>(null);

    useAnimationFrame((t) => {
        if (ref.current) {
            const rotate = Math.sin(t / 10000) * 200;
            const y = (1 + Math.sin(t / 1000)) * -50;
            ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
        }
    });

    return (
        <div className="container">
            <div className="cube" ref={ref}>
                <div
                    className="side front"
                // style={{
                //     backgroundImage: `url(${profile.src})`,
                //     backgroundSize: "contain",
                //     backgroundPosition: "center",
                //     backgroundRepeat: "no-repeat",
                // }}
                />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
        </div>
    );
}
