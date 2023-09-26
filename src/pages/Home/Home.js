import React from 'react';
import './Home.scss';
import { Cube } from '../../components/Cube/Cube';
import { MenuCube } from '../../components/Menu/MenuCube';
import { Section1 } from '../../components/Sections/Section1/Section1';
import { Section2 } from '../../components/Sections/Section2/Section2';
import { Section3 } from '../../components/Sections/Section3/Section3';
import { LateralMenu } from '../../components/LateralMenu/LateralMenu';

export const Home = () => {
    return (
        <div class="Home">
            <Cube />
            <MenuCube />
            <Section1/>
            <Section2/>
            <Section3/>
            <LateralMenu/>
        </div>
    )
}

