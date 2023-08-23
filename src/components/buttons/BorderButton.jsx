import "./BorderButton.scss";

export const BorderButton = props => {
    const onButtonClick = () => {
        if (!props.disabled) props.onClick();
    }

    return (
        <button
            className={props.disabled ? "border-button-disabled" : "border-button"}
            onClick={onButtonClick}
        >
            {props.children}
        </button>
    );
};