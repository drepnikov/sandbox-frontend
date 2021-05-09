import background from "./assets/background.jpg";
import { css } from "@emotion/react";
import { showFromBottom } from "@Features/animations/styles";

export const authPageContainer = () => css`
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

export const formContainer = () => css`
    border-radius: 5%;
    padding: 20px 25px;
    background-color: rgba(66, 66, 66, 0.55);
    color: white;

    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.199);
    height: 50vh;
    margin-top: 15px;

    ${showFromBottom()}

    @media (min-width: 576px) {
        padding-bottom: 30px;
        height: auto;
        width: 450px;

        margin: 0 auto;
    }
`;
//todo: Попробуй для мобильной версии загружать более маленькую картинку
export const infoBlockContainer = () => css`
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
