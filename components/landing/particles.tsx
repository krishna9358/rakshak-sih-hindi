"use client"

import Particles from "../ui/particles";


export default function BgParticles(){
    return <div>
         <Particles
        className="absolute inset-0 text-white"
        quantity={50}
        ease={70}
        color={"#ffffff"}
        size={0.05}
        staticity={40}
        refresh
      />
    </div>
}