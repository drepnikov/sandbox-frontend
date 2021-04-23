import * as React from "react";
import "./CollapsedPanel.scss";
import { ServiceContainer } from "@Core/services/ServiceContainer";
import { useOnMountAnimation } from "@Features/animations/hooks/useOnMountAnimation";
import { AnimationsEnum } from "@Features/animations/types/AnimationsEnum";
import { ReactComponent as ArrowUpIcon } from "@Core/components/CollapsedPanel/assets/arrowUp.svg";
import { ReactComponent as ArrowDownIcon } from "@Core/components/CollapsedPanel/assets/arrowDown.svg";
const { stylesHandler } = ServiceContainer;

interface IProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

const CollapsedPanel: React.FC<IProps> = ({ children, isOpen, toggleOpen }) => {
    const animation = useOnMountAnimation({ type: AnimationsEnum.noticeMe });

    const classNames = {
        collapsedPanelBlock: stylesHandler.getClassName("collapsed-panel", { isOn: isOpen }),
        collapsedPanelContainerBlock: stylesHandler.getClassName("collapsed-panel-container", { isOn: isOpen }),
        collapsedPanelContentElement: stylesHandler.getClassName("collapsed-panel__content"),
        arrowIconBlock: stylesHandler.getClassName("arrow-icon", { additionalClassName: animation }),
    };

    return (
        <div className={classNames.collapsedPanelContainerBlock}>
            <div className={classNames.collapsedPanelBlock}>
                <div className={classNames.collapsedPanelContentElement}>{children}</div>
                {isOpen ? (
                    <ArrowUpIcon className={classNames.arrowIconBlock} onClick={toggleOpen} />
                ) : (
                    <ArrowDownIcon className={classNames.arrowIconBlock} onClick={toggleOpen} />
                )}
            </div>
        </div>
    );
};

export { CollapsedPanel };
