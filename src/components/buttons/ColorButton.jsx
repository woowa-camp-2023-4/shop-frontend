import "./ColorButton.scss";

export const ColorButton = props => {
    return (
        <button className={"color-button"}>
            {props.children}
        </button>
    );
};