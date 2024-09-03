import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../PlanContent/Buttons';

interface PlanBlockProps {
    refProp: (node?: Element | null | undefined) => void;
    inView: boolean;
    title: string;
    content: React.ReactNode;
    buttons: Route[];
}

export const PlanBlock: React.FC<PlanBlockProps> = ({
    refProp,
    inView,
    title,
    content,
    buttons,
}) => (
    <div ref={refProp} className={`plan-items_block ${inView ? 'plan-items_block_loading' : ''}`}>
        <h2>{title}</h2>
        <div className='plan-items_block--content'>
            {content}
            <ul>
                {buttons.map((route, i) => {
                    const { to, title } = route;
                    return (
                        <li key={i}>
                            <Link to={to} target='_blank'>
                                <button>{title}</button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
);
