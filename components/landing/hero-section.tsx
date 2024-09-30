import Link from "next/link";
import ShimmerButton from "../ui/shimmer-button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="">
      <section
        id="hero"
        className="relative mx-auto mt-32 px-6 md:px-8 max-w-[80rem] text-center"
      >
        {/* <div className='inline-flex justify-between items-center gap-1 border-white/5 bg-white/10 hover:bg-white/20 opacity-0 backdrop-filter-[12px] px-3 border rounded-full h-7 text-white text-xs dark:text-black transition-all translate-y-[-1rem] animate-fade-in hover:cursor-pointer ease-in group'>
                #textshimmer - beta version
            
            </div> */}

        <h1 className="bg-clip-text bg-gradient-to-br from-30% from-gray-300  py-6 font-medium text-5xl text-balance text-transparent sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          Rakshak is the new way
          <br className="md:block hidden" /> to manage operations.
        </h1>
        <p className="mb-3 text-balance text-gray-400 text-lg md:text-xl tracking-tight translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          Rakshak allows you to audit, manage and store hardware inventory
          <br className="md:block hidden" /> on a blockchain integrated with
          Machine Learning.
        </p>
        <div className="flex justify-center items-center">
          <Link href="/signup" className="">
          <div className="flex">
            <ShimmerButton className="shadow-2xl">
              <span className="flex item-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get Started <ChevronRight />
              </span>
            </ShimmerButton>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
