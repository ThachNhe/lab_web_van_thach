import React from "react";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {
    const ColorRandom = getRandomColor();
    return (props) =>(
        <div style={{ color: ColorRandom }}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default Color;