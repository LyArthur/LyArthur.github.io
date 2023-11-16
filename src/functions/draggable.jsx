import React from "react";
import { useDraggable,DragOverlay } from "@dnd-kit/core";


export function Draggable({ id, styles,title,content }) {
    const { attributes, listeners, setNodeRef, transform,  } = useDraggable({
        id
    });

    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }
        : {};
    const CustomStyle = {
        zIndex:'100'
        //todo
        //height : '100px"
    };
    return (
        <div
            ref={setNodeRef}
            style={{ ...style,...CustomStyle, ...styles }}
            id={"card-"+id}
        >
            <div className="card">
                <div className="card-header" {...listeners}
                     {...attributes}>
                    <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    ></span>
                    {" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                    ></span>
                </div>
                <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "200%",
                    }}
                >
                    <br />
                    <span className="wave">{title} :) </span>
                    <br />
                    <span>{content}</span>
                    <br />
                </div>
            </div>
        </div>
    );
}
