import ProjectGrid from '../components/ProjectCard'
import { SectionPrompt } from '../components/Terminal'

const projects = [
    {
        title: 'Urban Dictionary',
        description: 'Slang dictionary website for Slovak language',
        image: '/images/urbandictionary.png',
        link: 'https://urbandictionary.sk',
    },
    {
        title: 'Wake-O-Matic',
        description: 'Sleep detection and prevention for drivers using Raspberry Pi.',
        image: '/images/wakeomatic.svg',
        link: 'https://github.com/Hamlob/wake-o-matic',
    },
    {
        title: 'Open Day Badge',
        description: 'A name badge with visual effects to represent the discipline, built-in snake game and NFC communication to share one\'s details. It was done as a university team project.',
        youtube: 'https://www.youtube.com/embed/-_bDtoWxqG0?si=aKbM_4RCFimkPa7n',
        link: 'https://github.com/Hamlob/TDP4',
    },
]

export default function Software() {
    return (
        <section className="section">
            <SectionPrompt path="~/projects/software" command="ls -la" title="Software" />
            <ProjectGrid projects={projects} />
        </section>
    )
}
