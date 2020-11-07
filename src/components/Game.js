import React, { useState } from 'react';
import Square from './Square.js';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
`;

const GridContainer = styled.div`
    background-color: grey;
`;

const concatValXTimes = (val, num) => {
    let str = '';
    for(let i = 0; i < num; i++)
        str = str + val;
    return str;
}


export default function Game({ dimensions }) {
    const [xLength, yLength] = dimensions.split('-');
    const [player, setPlayer] = useState(true);
    const grid = [];
    
    //winning conditions
    const checkFor = (player) => {
        for(let i = 0; i < xLength; i++)
        if(grid[i].join('') === concatValXTimes(player, xLength))
            console.log(`${player} Wins`);
        for(let i = 0; i < xLength; i++){
            let col = '';
            for(let j = 0; j < yLength; j++)
                col = col + grid[j][i];
            if(col === concatValXTimes(player, yLength))
                console.log(`${player} Wins`);
        }
        (function () {
            let diag = '';
            for(let i = 0; i < xLength; i++)
                diag = diag + grid[i][i]
            if(diag === concatValXTimes(player, xLength))
                console.log(`${player} Wins`);
        })();
        (function () {
            let diag = '';
            for(let i = xLength - 1; i >= 0; i--)
                diag = diag + grid[i][Math.abs(i - (xLength - 1))];
            if(diag === concatValXTimes(player, xLength))
                console.log(`${player} Wins`);
        })();
    }

    const createGrid = (xL, yL) => {
        let gridArr = [];
        for(let i = 0; i < yL; i++){
            let row = [];
            for(let j = 0; j < xL; j++)
                row.push(<Square player={player} sqrId={`${j}-${i}`} />);
            gridArr.push(row);
        }   
        return gridArr.map((row, i) => (<Row id={`row-${i}`}>{row}</Row>));
    }
    
    const clickedOnGrid = () => {
        setPlayer(!player);
        setTimeout(() => {
            for(let i = 0; i < xLength; i++){
                let row = [];
                for(let j = 0; j < yLength; j++)
                    row.push(document.getElementById(`${j}-${i}`).textContent);
                grid.push(row);
            }
            checkFor('X');
            checkFor('O');
        }, 25);
    }   

    return (
        <div>
            <h2>{player ? 'X' : 'O'}'s Turn</h2>
            <GridContainer onClick={clickedOnGrid}>
                {createGrid(xLength, yLength)}
            </GridContainer>
        </div>
    );
}