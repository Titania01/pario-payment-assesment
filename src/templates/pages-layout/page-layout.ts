import styled from "styled-components";

export const LayoutWrapper = styled.section`
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;

    main{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;

        .children{
            width: 50%;
            max-width: 45rem;
            margin: 4rem auto;
        }
    }
`
export const BackgroundWrapper = styled.div`
    width: 100%;

    svg{
        width: 100%;
    }
`
