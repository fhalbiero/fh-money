import styled from 'styled-components';
import { darken, transparentize } from 'polished';


export const Container = styled.form`
    h2 { 
        color: var(--rext-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        background: var(--green);
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        color: #fff;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`;


interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: '#e52840',
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${({ isActive, activeColor }) => isActive 
        ? transparentize(0.9, colors[activeColor]) 
        : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, "#d7d7d7")};
    }

    img {
        width: 24px;
        height: 24px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;

        color: var(--text-title);
    }

`;