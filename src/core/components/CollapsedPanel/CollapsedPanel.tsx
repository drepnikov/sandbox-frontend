import * as React from "react";
import "./CollapsedPanel.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { useToggle } from "@Core/hooks/useToggle";
import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";
import { ReactComponent as ArrowUpIcon } from "@Core/components/CollapsedPanel/assets/arrowUp.svg";
import { ReactComponent as ArrowDownIcon } from "@Core/components/CollapsedPanel/assets/arrowDown.svg";
const { stylesHandler } = ServiceContainer;

interface IProps {}

const CollapsedPanel: React.FC<IProps> = ({ children }) => {
    const [isPanelVisible, togglePanelVisible] = useToggle();
    const animation = useOnMountAnimation({ type: AnimationsEnum.noticeMe });

    const classNames = {
        collapsedPanelBlock: stylesHandler.getClassName("collapsed-panel", { isOn: isPanelVisible }),
        collapsedPanelContentElement: stylesHandler.getClassName("collapsed-panel__content"),
        arrowIconBlock: stylesHandler.getClassName("arrow-icon", { additionalClassName: animation }),
    };

    return (
        <div
            onScroll={() => {
                console.log("скроллигш");
            }}
            className={classNames.collapsedPanelBlock}
        >
            <div className={classNames.collapsedPanelContentElement}>{children}</div>
            {isPanelVisible ? (
                <ArrowUpIcon className={classNames.arrowIconBlock} onClick={togglePanelVisible} />
            ) : (
                <ArrowDownIcon className={classNames.arrowIconBlock} onClick={togglePanelVisible} />
            )}
        </div>
    );
};

export { CollapsedPanel };
