import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fullCode = `const developer = {
  name: 'Deepak Chauhan',
  role: 'Full Stack Developer',
  skills: ['React', 'JS', 'AI'],
  available: true
}`;

export default function CodeTypewriter() {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        let timer;

        const startTyping = () => {
            setDone(false);
            setDisplayed('');
            i = 0;

            timer = setInterval(() => {
                i++;
                setDisplayed(fullCode.slice(0, i));

                if (i >= fullCode.length) {
                    clearInterval(timer);
                    setDone(true);
                    setTimeout(startTyping, 2000); // repeat after 2s pause
                }
            }, 40);
        };

        startTyping();
        return () => clearInterval(timer);
    }, []); // runs once, loops forever

    return (
        <div className='bg-[#1a1a2e] rounded-xl overflow-hidden p-6' style={{

            boxShadow: '0 0 60px rgba(120, 80, 255, 0.2)',
            border: '1px solid rgba(255,255,255,0.08)'
        }}>

            {/* Top bar */}
            <div style={{
                background: '#12121f',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                <span style={{ marginLeft: 'auto', color: '#888', fontSize: '13px', fontFamily: 'monospace' }}>

                </span>
            </div>

            {/* Code area */}
            <div className='p-[28px] min-h-fit'>
                <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                        background: 'transparent',
                        margin: 0,
                        padding: 0,
                        fontSize: '24px',
                        lineHeight: '1',
                    }}
                >
                    {displayed}
                </SyntaxHighlighter>
            </div>

            {/* Compiled successfully bar */}
            {done && (
                <div style={{
                    padding: '10px 20px',
                    color: '#4ec94e',
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                    ✓ Compiled successfully
                </div>
            )}
        </div>
    );
}