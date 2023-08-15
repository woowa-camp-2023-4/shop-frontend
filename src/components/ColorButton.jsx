import "./ColorButton.scss";

const ColorButton = props => {
    return (
        <button className={"color-button"}>
            {props.children}
        </button>
    );
};

export default ColorButton;