import React from 'react';
import {useDroppable} from '@dnd-kit/core';
const CustomStyle = {
    position: "relative",
    display: "flex",
    minHeight: "60vh",
    width: "calc(100vw - 50px)",
    touchAction: "none"
};
export function Droppable(props) {

    const {setNodeRef} = useDroppable({
        id: props.id
    });


    return (
        <div ref={setNodeRef} style={{...CustomStyle}}>
            {props.children}
        </div>
    );
}