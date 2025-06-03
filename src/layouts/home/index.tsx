import { JSX } from 'react'
import Section from '@/wrappers/section'
import Button from '@/elements/button/MoreAboutMe'

export default function Home(): JSX.Element {
    return (
        <Section name="home">
            <div className="h-[22rem] w-[40rem] flex-col-center border border-neutral-950/10 rounded-3xl shadow-[0.3rem_0.3rem_0.3rem] shadow-gray-500/15 backdrop-blur-sm bg-silver-haze/25">
                <div className="flex-col-start h-[16rem] w-11/12 gap-2.5 !text-black-sapphire">
                    <h1 className="order-2 font-stalinist-one leading-10 tracking-wide text-[2.8rem] font-semibold text-shadow-[0.2rem_0.2rem_0.05rem] text-shadow-neutral-950/70">AANG SOLIHIN</h1>
                    <h2 className="order-1 font-jetbrains-mono tracking-wider font-extrabold text-3xl">Heyyy, I&apos;am...</h2>
                    <h2 className="order-3 font-jetbrains-mono tracking-wider font-extrabold text-2xl">Software Engineer</h2>
                    <p className="order-4 font-jetbrains-mono font-semibold text-justify leading-5">On this portfolio page, you can find some of my information and matters relating to my skills and development in the world of technology.</p>
                </div>
                <div className="h-[5rem]">
                    <Button>More About Me</Button>
                </div>
            </div>
        </Section>
    )
}