import "./ColorButton.scss";

export const ColorButton = props => {
    const onButtonClick = () => {
        if (!props.disabled) props.onClick();
    }

    return (
        <button
            className={props.disabled ? "color-button-disabled" : "color-button"}
            onClick={onButtonClick}
        >
            {props.children}
        </button>
    );
};