import { useState } from 'react'
import './styles/reset.css'
import './styles/base.css'
import { VscLinkExternal, VscArrowSwap } from 'react-icons/vsc'
import { toRoman, fromRoman } from 'toroman'

export function App() {
    const [isSwapped, setIsSwapped] = useState(false);

    const [arabicValue, setArabicValue] = useState(0);
    const [romanValue, setRomanValue] = useState('');

    const swap = () => setIsSwapped(prevState => !prevState);

    const handleKeyDown = (e) => {
        // I, V, X, L, C, D, M, Backspace
        const allowedKeyCodes = [73, 86, 88, 76, 67, 68, 77, 8];

        if (allowedKeyCodes.includes(e.keyCode))
            return;

        e.preventDefault();
    }

    const updateArabicValue = (value) => {
        if (!value) {
            setArabicValue(0);

            return;
        }

        setArabicValue(fromRoman(value.toString().toUpperCase()));
    }

    const updateRomanValue = (value) => {
        if (!value) {
            setRomanValue('');

            return;
        }

        setRomanValue(toRoman(parseInt(value)));
    }

    const handleChange = (e) => {
        console.log(e);

        if (e.target.id === 'arabic') {
            setArabicValue(e.target.value);

            updateRomanValue(e.target.value);
        }

        if (e.target.id === 'roman') {
            setRomanValue(e.target.value);

            updateArabicValue(e.target.value);
        }

        throw new Error("The input id MUST either be 'arabic' or 'roman' and not ${e.target.id}");
    };

    return (
        <main>
            <h1>Conversor Romano</h1>

            <a href="https://www.linkedin.com/in/matheusgesser/" target='_blank' rel='noreferrer'>
                <h2>Matheus Gesser <VscLinkExternal /></h2>
            </a>

            <span>
                <strong>{isSwapped ? 'Romano' : 'Árabe'}</strong>

                <VscArrowSwap className={isSwapped ? 'swap' : undefined} onClick={swap} />

                <strong>{isSwapped ? 'Árabe' : 'Romano'}</strong>
            </span>

            <section className={isSwapped ? 'container swap' : 'container'}>
                <input type='number' id='arabic' value={arabicValue} onChange={handleChange}></input>

                <input type='text' id='roman' value={romanValue} onChange={handleChange} onKeyDown={handleKeyDown}></input>
            </section>
        </main>
    )
}
