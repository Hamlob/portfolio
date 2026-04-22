import { useState, useCallback } from 'react'

// ---- ORIGINAL LOGIC (untouched) ----
function calcShuntStub(z0, rl, xl, fullsolution = 0) {
    var B1, B2, beta_d1, beta_d2, d, d1, d2, lo, lo1, lo2, ls, ls1, ls2, solution, t1, t2;

    solution = [];

    if ((rl == z0)) {
        t1 = ((- xl) / (2 * z0));
        t2 = t1;
    } else {
        t1 = ((xl + Math.sqrt(((rl * (Math.pow((z0 - rl), 2) + Math.pow(xl, 2))) / z0))) / (rl - z0));
        t2 = ((xl - Math.sqrt(((rl * (Math.pow((z0 - rl), 2) + Math.pow(xl, 2))) / z0))) / (rl - z0));
    }
    beta_d1 = Math.atan(t1);
    beta_d2 = Math.atan(t2);
    if ((beta_d1 >= 0)) {
        d1 = (beta_d1 / (2 * Math.PI));
    } else {
        d1 = ((beta_d1 / (2 * Math.PI)) + (1 / 2));
    }
    if ((beta_d2 >= 0)) {
        d2 = (beta_d2 / (2 * Math.PI));
    } else {
        d2 = ((beta_d2 / (2 * Math.PI)) + (1 / 2));
    }
    B1 = (((Math.pow(rl, 2) * t1) - ((z0 - (xl * t1)) * (xl + (z0 * t1)))) / (z0 * (Math.pow(rl, 2) + Math.pow((xl + (z0 * t1)), 2))));
    B2 = (((Math.pow(rl, 2) * t2) - ((z0 - (xl * t2)) * (xl + (z0 * t2)))) / (z0 * (Math.pow(rl, 2) + Math.pow((xl + (z0 * t2)), 2))));
    lo1 = ((- Math.atan((z0 * B1))) / (2 * Math.PI));
    lo2 = ((- Math.atan((z0 * B2))) / (2 * Math.PI));
    ls1 = (Math.atan((1 / (z0 * B1))) / (2 * Math.PI));
    ls2 = (Math.atan((1 / (z0 * B2))) / (2 * Math.PI));
    if ((lo1 < 0)) {
        lo1 += (0.5);
    }
    if ((lo2 < 0)) {
        lo2 += (0.5);
    }
    if ((ls1 < 0)) {
        ls1 += (0.5);
    }
    if ((ls2 < 0)) {
        ls2 += (0.5);
    }
    if (fullsolution) {
        solution = { "d1": d1, "d2": d2, "lo1": lo1, "lo2": lo2, "ls1": ls1, "ls2": ls2 };
    } else {
        if ((d1 < d2)) {
            d = d1;
        } else {
            d = d2;
        }
        if ((lo1 < lo2)) {
            lo = lo1;
        } else {
            lo = lo2;
        }
        if ((ls1 < ls2)) {
            ls = ls1;
        } else {
            ls = ls2;
        }
        solution = { "d": d, "lo": lo, "ls": ls };
    }
    return solution;
}
// ---- END ORIGINAL LOGIC ----

export default function StubTuningCalc() {
    const [z0, setZ0] = useState('')
    const [rl, setRl] = useState('')
    const [xl, setXl] = useState('')
    const [fullSol, setFullSol] = useState(0)
    const [result, setResult] = useState(null)

    const calculate = useCallback(() => {
        const res = calcShuntStub(parseInt(z0), parseInt(rl), parseInt(xl), fullSol)
        setResult(res)
    }, [z0, rl, xl, fullSol])

    return (
        <section className="stub-section">
            <h1>Shunt Stub Tuning Calculator</h1>
            <img src="/images/stubSchem.png" alt="Stub schematic" />

            <div className="stub-form">
                <label htmlFor="charImp">Z0</label>
                <input type="number" id="charImp" value={z0} onChange={e => setZ0(e.target.value)} />

                <label htmlFor="loadRes">Rload</label>
                <input type="number" id="loadRes" value={rl} onChange={e => setRl(e.target.value)} />

                <label htmlFor="loadReact">Xload</label>
                <input type="number" id="loadReact" value={xl} onChange={e => setXl(e.target.value)} />

                <label htmlFor="fullSol"></label>
                <select id="fullSol" value={fullSol} onChange={e => setFullSol(parseInt(e.target.value))}>
                    <option value={0}>Shortest Solution</option>
                    <option value={1}>Full Solution</option>
                </select>
            </div>

            <button className="btn-primary" onClick={calculate}>Calculate</button>

            {result && (
                <div className="stub-result">
                    <h2>Solution:</h2>
                    {Object.entries(result).map(([key, value]) => (
                        <p key={key}>{key} = {value} λ</p>
                    ))}
                </div>
            )}
        </section>
    )
}
