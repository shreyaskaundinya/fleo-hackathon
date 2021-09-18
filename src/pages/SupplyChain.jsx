import React from 'react';
import { BasePage } from '../components/GlobalComponents/BasePage';
import { sampleData } from '../utils/sampleData';
import Tree from '../components/Tree';

const SupplyChain = () => {
    return (
        <BasePage>
            <Tree data={sampleData} />
        </BasePage>
    );
};

export default SupplyChain;
