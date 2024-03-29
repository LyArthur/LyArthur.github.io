import React from "react";
import {useDraggable} from "@dnd-kit/core";

const cvLink = <p>Cliquez <a href='./CV_Arthur_LY.pdf' target='_blank'>ici</a> pour voir mon CV !</p>;
const cvLinkEn = <p>Click <a href='./CV_Arthur_LY.pdf' target='_blank'>here</a> to see my CV !</p>;

export function Draggable({id, styles, title, content, language}) {
    const {attributes, listeners, setNodeRef, transform,} = useDraggable({
        id
    });

    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }
        : {};
    const CustomStyle = {
        height: '31px',
        touchAction: 'none'
    };
    const windowWidth = window.innerWidth;
    if (windowWidth < 1169){
        return (
            <div
                ref={setNodeRef}
                style={{...style, ...CustomStyle, ...styles}}
                id={"card-" + id}
                {...listeners}
                {...attributes}
            >
                <div className="card" onClick={() => {
                    localStorage["z-index"] = parseInt(localStorage["z-index"]) + 1;
                    document.querySelector("#card-" + id).style.zIndex = localStorage["z-index"];
                }}
                     style={{touchAction: 'none'}}>
                    <div className="card-header"
                         style={{touchAction: 'none'}}>
                    <span
                        className="iconify red"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    ></span>
                        {" "}
                        &nbsp;{" "}
                        <span
                            className="iconify green"
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
                            touchAction: 'none'
                        }}
                    >
                        <br/>
                        <span className="wave">{title}</span>
                        <br/>
                        <span>{<p>{content}</p>}{id === 2 ? (language === "fr" ? cvLink : cvLinkEn) : null}</span>
                        <br/>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div
                ref={setNodeRef}
                style={{...style, ...CustomStyle, ...styles}}
                id={"card-" + id}
            >
                <div className="card" onClick={() => {
                    localStorage["z-index"] = parseInt(localStorage["z-index"]) + 1;
                    document.querySelector("#card-" + id).style.zIndex = localStorage["z-index"];
                }}>
                    <div className="card-header" {...listeners}
                         {...attributes}
                         style={{touchAction: 'none'}}>
                    <span
                        className="iconify red"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    ></span>
                        {" "}
                        &nbsp;{" "}
                        <span
                            className="iconify green"
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
                        <br/>
                        <span className="wave">{title}</span>
                        <br/>
                        <span>{<p>{content}</p>}{id === 2 ? (language === "fr" ? cvLink : cvLinkEn) : null}</span>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}
