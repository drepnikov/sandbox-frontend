import styled from "@emotion/styled";
import { Navigation } from "@Core/components/smart/Navigation/Navigation";
import { NavigationTab } from "@Core/components/smart/Navigation/NavigationTab/NavigationTab";

export const StyledAuthFormContainer = styled.div`
    width: 100%;
`;

export const StyledAuthNavigation = styled(Navigation)`
    margin-bottom: 30px;
    margin-top: 10px;
`;

export const StyledNavigationTab = styled(NavigationTab)`
    .route-link {
        background-color: black;
    }
`;

export const StyledForm = styled.form``;

export const StyledSendBtn = styled.button`
    width: 100%;

    color: white;
`;
