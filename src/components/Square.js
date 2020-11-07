import React, { useState } from 'react';
import styled from 'styled-components';

const Sqr = styled.div`
    width: 50px;
    height: 50px;
    border: thin black solid;
    background-color: white;
    display: inline-block;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Square({ player, sqrId }) {
    const [displayed, setDisplayed] = useState(false);
    const [xOrO, setXOrO] = useState('');

    const played = () => {
        if(!displayed) {
            setDisplayed(true);
            setXOrO(player ? 'X' : 'O')
        } else
            return null;
    }

    return (
        <Sqr id={sqrId} onClick={played}>
            {displayed && <div>{xOrO}</div>}
        </Sqr>
    );
}