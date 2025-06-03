import { JSX } from 'react'
import Section from '@/wrappers/section'

export default function Home(): JSX.Element {
    return (
        <Section name="home">
            <div className="h-[20rem] w-[40rem] flex-row-center border border-gray-950/10 rounded-3xl shadow-[0.3rem_0.3rem_0.5rem] shadow-gray-500/15 backdrop-blur-sm bg-white-show/25">
                <div className="flex-col-start h-full w-11/12 gap-2 !text-black-custom">
                    <h1 className="order-2 font-stalinist-one leading-10 tracking-wide text-[2.8rem] font-bold text-shadow-[0.2rem_0.2rem_0.05rem] text-shadow-gray-950/60">AANG SOLIHIN</h1>
                    <h2 className="order-1 font-montserrat tracking-wider font-bold text-[1.9rem]">Heyyy, I&apos;am...</h2>
                    <h2 className="order-3 font-montserrat tracking-wider font-bold text-[1.7rem]">Software Engineer</h2>
                    <p className="order-4 font-montserrat font-semibold text-justify leading-4">On this portfolio page, you can find some of my information and matters relating to my skills and development in the world of technology.</p>
                </div>
            </div>
        </Section>
    )
}