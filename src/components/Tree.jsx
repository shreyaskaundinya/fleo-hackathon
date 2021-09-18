import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Leaf from './Leaf';

const Tree = ({ data }) => {
    const [showLeafs, setShowLeafs] = useState(false);

    // if leaf contains children -> render a tree else -> render a leaf
    const LeafComponents = data.head.children.map((leafData) => {
        if (leafData.head.children.length > 0) {
            return <Tree data={leafData} />;
        } else {
            return (
                <Leaf
                    leafData={leafData.head.data}
                    key={leafData.head.data.name}
                />
            );
        }
    });

    useEffect(() => {}, [data]);

    return (
        <TreeContainer>
            <Head
                onClick={() => {
                    setShowLeafs((prev) => !prev);
                }}>
                <Leaf leafData={data.head.data}></Leaf>
            </Head>
            <Leafs show={showLeafs}>{LeafComponents}</Leafs>
        </TreeContainer>
    );
};

Tree.propTypes = {
    data: PropTypes.object,
};

export default Tree;

const TreeContainer = styled.ul`
    display: flex;
    flex-direction: column;
    position: relative;
`;
const Head = styled.div``;

const Leafs = styled.li`
    display: ${(props) => {
        return props.show ? 'flex' : 'none';
    }};
    gap: 2rem;
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 5px 0 5px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 50%;
        border-top: 1px solid #ccc;
        width: 50%;
        height: 20px;
    }

    &::after {
        right: auto;
        left: 50%;
        border-left: 1px solid #ccc;
    }

    &:only-child::after,
    &:only-child::before {
        display: none;
    }

    &:only-child {
        padding-top: 0;
    }

    &:first-child::before,
    &:last-child::after {
        border: 0 none;
    }

    &:last-child::before {
        border-right: 1px solid #ccc;
        border-radius: 0 5px 0 0;
        -webkit-border-radius: 0 5px 0 0;
        -moz-border-radius: 0 5px 0 0;
    }
    &:first-child::after {
        border-radius: 5px 0 0 0;
        -webkit-border-radius: 5px 0 0 0;
        -moz-border-radius: 5px 0 0 0;
    }
`;
