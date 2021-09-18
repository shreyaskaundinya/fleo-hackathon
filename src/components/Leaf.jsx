import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tree from './Tree';

const StatusThemes = {
    'On Track': {
        color: 'rgb(16, 162, 118)',
        bg: 'rgba(16, 162, 118, 0.2)',
    },
    'Off Track': {
        color: 'rgb(229, 164, 12)',
        bg: 'rgba(229, 164, 12, 0.2)',
    },
    'At Risk': {
        color: 'rgb(230, 77, 11)',
        bg: 'rgba(230, 77, 11, 0.2)',
    },
};

const Leaf = ({ leafData }) => {
    const { name, currentValue, targetValue, completionPercentage, status } =
        leafData;

    return (
        <LeafContainer>
            <Card>
                <CardDescription>
                    <Name>{name}</Name>
                    <Completion>
                        <span>{completionPercentage}%</span> Complete
                    </Completion>
                </CardDescription>
                <CardBody>
                    <Sales>
                        <TotalSales>
                            Total Sales : {currentValue}crores
                        </TotalSales>
                        <TargetSales>
                            Target Sales: {targetValue}crores
                        </TargetSales>
                    </Sales>
                    <Status theme={StatusThemes[status]}>{status}</Status>
                </CardBody>
                <CardProgress
                    theme={StatusThemes[status]}
                    max={targetValue}
                    value={currentValue}></CardProgress>
            </Card>
        </LeafContainer>
    );
};

export default Leaf;

Leaf.propTypes = {
    data: PropTypes.object,
    children: PropTypes.array,
};

const LeafContainer = styled.div``;

const Card = styled.div`
    background: white;
    padding: 1rem;
    width: 300px;
    height: max-content;
    border-radius: 10px;
    box-shadow: 0 0 3px 3px rgba(10, 10, 10, 0.1);
`;
const CardDescription = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const Name = styled.p`
    text-transform: uppercase;
    font-weight: 700;
`;

const Completion = styled.p`
    span {
        font-weight: 700;
    }
`;

const CardBody = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const Sales = styled.div`
    display: flex;
    flex-direction: column;
`;
const Status = styled.div`
    padding: 0.5rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.color};
    font-weight: 700;
    font-size: 0.95em;
`;

const TotalSales = styled.p`
    font-weight: 700;
`;
const TargetSales = styled.p`
    font-weight: 700;
`;

const CardProgress = styled.progress`
    &::-webkit-progress-value {
        background: ${(props) => props.theme.color};
    }
    &::-moz-progress-bar {
        background: ${(props) => props.theme.color};
    }
    background: ${(props) => props.theme.bg};
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &[value] {
        width: 100%;
        height: 20px;
        border-radius: 999px;
        overflow: hidden;
    }
`;
