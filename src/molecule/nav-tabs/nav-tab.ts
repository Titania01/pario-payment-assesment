import styled from "styled-components";

export const NavTabWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    border-bottom: 1px solid black;
    position: relative;
`
export const TabContainer = styled.div<{isActive?: boolean}>`
     display: flex;
     flex-direction: column;
     align-items: center;
    text-align: center;
    position: relative;
    padding: 1rem;

    
    span{
        color: ${({isActive, theme}) => isActive ? theme.colors.primary : theme.colors.gray4};
        font-size: 24px;
        font-weight: 700;
        cursor: pointer;
    }

    .tab-line{
        display: ${({isActive}) => isActive ? "flex" : "none"};
        width: 100%;
        height: 0;
        border: 6px solid orange;
        border-radius: 10px;
        position: absolute;
        bottom: -5px;
        left: 0;
    }
`