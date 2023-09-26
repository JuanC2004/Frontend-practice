import React from 'react'
import './Section1.scss';
import { useLocation } from 'react-router-dom';

export const Section1 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/flexbox';
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section1">
                Flexbox
            </div>
        </div>
        
    )
}
