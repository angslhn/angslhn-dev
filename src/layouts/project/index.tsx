import { JSX } from 'react'
import Section from '@/wrappers/section'

export default function Project(): JSX.Element {
    return (
        <Section name="project">
            <div className="h-[37.5625rem] w-[57rem] flex-col-center">
                <div className="h-[8rem] w-full flex-col-center gap-2.5">
                    <h3 className="hoverable font-jetbrains-mono text-silver-haze font-extrabold text-2xl px-2 py-1.5 bg-charcoal-blue rounded-sm">My Projects</h3>
                    <p className="font-jetbrains-mono text-silver-haze px-2 py-1.5 bg-charcoal-blue font-semibold text-sm rounded-sm">Here are some projects I have been working on recently.</p>
                </div>
                <div className="h-[29.5625rem] w-full flex-row-center">
                    <p className="font-jetbrains-mono text-charcoal-blue font-bold text-sm">Data could not be found!</p>
                </div>
            </div>
        </Section>
    )
}