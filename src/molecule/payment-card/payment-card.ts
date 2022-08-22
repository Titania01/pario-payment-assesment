import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    height: 30rem;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
    border-radius: 10px;
    margin-bottom: 4.3125rem;
    font-weight: 600;
    font-size: 18px;

    .card-top  {
        background-color: ${({theme}) => theme.colors.blue};
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 3.875rem;
        border-radius: 16px 10px 0px 0px;
        

        .text  {
            color: ${({theme}) => theme.colors.white};
            margin: 2rem 6rem;
        }
    }

    .middle-text {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;

       .first-text{ 
            display: flex;
            justify-content: space-between;
            width: 75%;
            color: ${({theme}) => theme.colors.lightBlue};
          }


        }
        .card-line{
          width: 90%;
          height: 0.1rem;
          background-color: ${({theme}) => theme.colors.gray2};
          margin: 3rem auto;
          padding: 0 2rem;
        }

        .total {
            display: flex;
            justify-content: space-between;
            width: 85%;
            border: 1px solid ${({theme}) => theme.colors.gray2};
            border-radius: 5px;
            margin: 3rem auto;
            padding: 0 2rem;
            color: ${({theme}) => theme.colors.lightBlue};
        }

    
`