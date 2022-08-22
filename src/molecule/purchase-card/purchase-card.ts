import styled from "styled-components";

export const PurchaseWrapper = styled.div`
    width: 50%;
    max-width: 45rem;
    height: 30rem;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .check-wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
            background-color: ${({theme}) => theme.colors.white};
            height: 84px;
            width: 84px;
            border-radius: 50%;
            box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
        }
    .main-content {
        display: flex;
        flex-direction: column;
        width: 80%;

        
    }

    .text-wrapper{
        width: 65%;
        display: flex;
        flex-direction: column;

        h1{
            margin: 0;
            font-size: 2.5vw;
        }

        .text {
            color: ${({theme}) => theme.colors.gray2};
            font-size: 20px;
            font-weight: normal;
            width: 90%;
        }
        
        .anchor-tag {
            color: ${({theme}) => theme.colors.primary};
            font-weight: 400;
            margin-top: 2rem;
        }
    }
`

export const ScreenOverlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`