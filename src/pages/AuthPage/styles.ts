import styled from "@emotion/styled";
import background from "./assets/background.jpg";

export const DIV_MAIN_CONTAINER__AUTH_PAGE = styled.div`
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    background-color: #050608;

    @media (min-width: 576px) {
        height: 100vh;
        grid-template-rows: none;
        grid-template-columns: 1fr 1fr;
    }
`;

export const DIV_FORM_CONTAINER__AUTH_PAGE = styled.div`
    border-radius: 5%;
    padding: 10px 25px;
    background-color: rgba(66, 66, 66, 0.55);
    color: white;

    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.199);
    height: 50vh;
    margin-top: 15px;

    @media (min-width: 576px) {
        height: 250px;
        width: 450px;

        margin: 0 auto;
    }
`;

export const DIV_LAYOUT_INFO_BLOCK__AUTH_PAGE = styled.div`
    background-image: url(${background});
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    display: flex;
    justify-content: center;

    @media (min-width: 576px) {
        height: 100vh;
        background-size: auto;
    }
`;
