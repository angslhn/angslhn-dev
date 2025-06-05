import { JSX } from 'react'
import Section from '@/wrappers/section'
import Button from '@/elements/button/aboutme'

export default function Home(): JSX.Element {
    return (
        <Section name="home">
            <div className="h-[20rem] w-[40rem] flex-col-center border border-charcoal-blue/15 rounded-2xl shadow-[0.1rem_0.1rem_0.4rem] shadow-charcoal-blue/15 backdrop-blur-sm bg-silver-haze/25">
                <div className="flex-col-start h-[15rem] w-11/12 gap-2">
                    <h1 className="order-2 font-stalinist-one text-charcoal-blue leading-10 tracking-wide text-[2.8rem] font-semibold text-shadow-[0.2rem_0.2rem_0.05rem] text-shadow-charcoal-blue/80">AANG SOLIHIN</h1>
                    <h2 className="order-1 font-jetbrains-mono text-charcoal-blue tracking-wider font-extrabold text-3xl">Heyyy, I&apos;am...</h2>
                    <h2 className="order-3 font-jetbrains-mono text-charcoal-blue tracking-wider font-extrabold text-2xl">Software Engineer</h2>
                    <p className="order-4 font-jetbrains-mono text-charcoal-blue font-semibold text-justify leading-5">On this portfolio page, you can find some of my information and matters relating to my skills and development in the world of technology.</p>
                </div>
                <div className="h-[5rem]">
                    <Button>More About Me</Button>
                </div>
            </div>
        </Section>
    )
}