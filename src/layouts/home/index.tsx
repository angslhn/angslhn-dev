import { JSX } from 'react'
import Section from '@/wrappers/section'
import AboutMe from '@/elements/button/aboutme'
import HireMe from '@/elements/button/hireme'

export default function Home(): JSX.Element {
    return (
        <Section name="home">
            <div className="h-[20rem] w-[40rem] flex-col-center border border-charcoal-blue/15 rounded-xl bg-silver-haze/15 backdrop-blur-sm">
                <div className="flex-col-start h-[15.5rem] w-11/12 gap-3">
                    <h1 className="order-2 font-stalinist-one text-charcoal-blue leading-9 tracking-wide text-[2.8rem] font-semibold text-shadow-[0.2rem_0.2rem_0.05rem] text-shadow-charcoal-blue/80">AANG SOLIHIN</h1>
                    <h2 className="order-1 mb-1 font-jetbrains-mono text-charcoal-blue tracking-wider font-extrabold text-3xl">
                        Heyyy, I'am...
                    </h2>
                    <h2 className="order-3 font-jetbrains-mono text-charcoal-blue tracking-wider font-extrabold text-2xl">
                        Fullstack Developer.
                    </h2>
                    <p className="order-4 font-jetbrains-mono text-charcoal-blue font-semibold text-justify leading-5 text-sm">
                        On this portfolio page, you can find some of my information and matters relating to my skills and development in the world of technology.
                    </p>
                </div>
                <div className="h-[4.5rem] flex items-start justify-center gap-3">
                    <AboutMe>
                        <span className="text-silver-haze font-jetbrains-mono font-extrabold">
                            About Me
                        </span>
                        <svg className="text-silver-haze w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path className="fill-current" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                        </svg>
                    </AboutMe>
                    <HireMe>
                        <span className="text-silver-haze font-jetbrains-mono font-extrabold">
                            Hire Me
                        </span>
                        <svg className="text-silver-haze w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path className="fill-current" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"/>
                        </svg>
                    </HireMe>
                </div>
            </div>
        </Section>
    )
}