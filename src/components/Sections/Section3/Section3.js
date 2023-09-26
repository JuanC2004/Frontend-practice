import React from 'react';
import './Section3.scss';
import { useLocation } from 'react-router-dom';

export const Section3 = () => {
    const location = useLocation();
    const shouldHide = location.pathname === '/products';
    return (
        <div className={shouldHide ? 'hidden' : ''}>
            {/* Contenido de Section1 */}
            <div class="Section3">Products</div>
        </div>
        
    )
}
