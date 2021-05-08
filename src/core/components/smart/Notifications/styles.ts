import { css } from "@emotion/react";
import { NotificationMessagesType } from "@Core/store/NotificationStore/NotificationStore";

const width = 100;
const marginLeft = width / 2;

const messages = {
    danger: css`
        color: red;
    `,
    info: css`
        color: white;
    `,
    success: css`
        color: blue;
    `,
};

const display = css`
    display: block;
`;

export const notifications = (show: NotificationMessagesType) => css`
    position: fixed;
    left: 50%;
    width: ${width}px;
    margin-left: -${marginLeft}px;
    height: 100px;
    background-color: #ad8080;
    display: none;

    ${show && display};
    ${show && messages[show]}
`;
