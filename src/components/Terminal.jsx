import { useEffect, useState } from 'react'

export function TermWindow({ title, accent, className = '', children }) {
    return (
        <div className={`term-window ${className}`} style={accent ? { '--win-accent': `var(--${accent})` } : undefined}>
            <div className="term-titlebar">
                <span className="term-dots"><i /><i /><i /></span>
                <span className="term-title">{title}</span>
            </div>
            <div className="term-body">{children}</div>
        </div>
    )
}

export function SectionPrompt({ path, command, title, subtitle }) {
    return (
        <div className="section-header">
            <p className="prompt-line">
                <span className="p-user">hamlob</span><span className="p-at">@</span><span className="p-host">portfolio</span>
                <span className="p-sep">:</span><span className="p-path">{path}</span><span className="p-sep">$</span> {command}
            </p>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    )
}

export function Typewriter({ text, speed = 55, delay = 300, onDone }) {
    const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const [count, setCount] = useState(reduced ? text.length : 0)

    useEffect(() => {
        if (count >= text.length) {
            onDone?.()
            return
        }
        const t = setTimeout(() => setCount(c => c + 1), count === 0 ? delay : speed)
        return () => clearTimeout(t)
    }, [count, text, speed, delay, onDone])

    return <span>{text.slice(0, count)}</span>
}
