import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const Card = () => {
    const { t } = useTranslation("crd");

    const Crd = [
        { id: "1", num: 5, span: "span1" },
        { id: "2", num: 300, span: "span2" },
        { id: "3", num: 150, span: "span3" },
    ];

    const refs = Crd.reduce((acc, value) => {
        acc[value.id] = useRef();
        return acc;
    }, {});

    const [visible, setVisible] = useState(Crd.reduce((acc, value) => {
        acc[value.id] = false;
        return acc;
    }, {}));

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(prev => ({
                            ...prev,
                            [entry.target.dataset.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        Object.values(refs).forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [refs]);

    const getBorderColor = (id) => {
        switch (id) {
            case "1": return 'border-red-400';
            case "2": return 'border-green-400';
            case "3": return 'border-yellow-400';
            default: return 'border-green-400';
        }
    };

    const getHoverShadowStyle = (id) => {
        switch (id) {
            case "1": return { boxShadow: '0 4px 15px rgba(255, 99, 99, 0.5)' };
            case "2": return { boxShadow: '0 4px 15px rgba(0, 128, 0, 0.5)' };
            case "3": return { boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)' };
            default: return { boxShadow: '0 4px 15px rgba(0, 128, 0, 0.5)' };
        }
    };

    return (
        <section className='bg-oq py-[50px] dark:bg-dakr'>
            <div className='container flex flex-row items-center justify-center xl:justify-between flex-wrap xl:gap-0 gap-[50px]'>
                {Crd.map(({ num, span, id }) => {
                    return (
                        <div
                            key={id}
                            ref={refs[id]}
                            data-id={id}
                            className={`flex flex-col items-center gap-[20px] w-[300px] text-gren dark:text-oq py-[10px] rounded-2xl border-t-2 ${getBorderColor(id)}`}
                            style={{ transition: 'box-shadow 0.3s ease' }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = getHoverShadowStyle(id).boxShadow}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            {visible[id] && (
                                <CountUp start={0} end={num} duration={3} className='text-5xl font-bold text-green' suffix='+'/>
                            )}
                            <span className='sm:text-xl text-lg text-qora dark:text-oq'>{t(span)}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Card;
