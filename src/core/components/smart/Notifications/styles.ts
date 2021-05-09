import { css } from "@emotion/react";
import { NotificationMessagesType } from "@Core/store/NotificationStore/NotificationStore";
import { fadeInAndOut } from "@Features/animations/styles";
import { ActionConditionsEnum } from "@Core/types/common";

const width = 300;
const marginLeft = width / 2;

const messages = {
    [ActionConditionsEnum.danger]: css`
        color: red;
    `,
    [ActionConditionsEnum.info]: css`
        color: white;
    `,
    [ActionConditionsEnum.success]: css`
        color: green;
    `,
};

export const notifications = (show: Exclude<NotificationMessagesType, null>, duration: number) => css`
    position: fixed;
    top: 20px;
    left: 50%;
    text-align: center;
    width: ${width}px;
    margin-left: -${marginLeft}px;

    ${messages[show]}

    ${fadeInAndOut(duration)}
`;
