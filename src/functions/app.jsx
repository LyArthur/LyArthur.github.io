import React, {useEffect, useState} from 'react';
import {DndContext, useSensor, useSensors} from '@dnd-kit/core';

import {Droppable} from '../functions/droppable';
import {Draggable} from '../functions/draggable';
import {restrictToParentElement} from "@dnd-kit/modifiers";
import {check_borders} from './checkBordersCards';
import {MyPointerSensor} from './test';

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Apps({datas}) {
    const sensors = useSensors(
        useSensor(MyPointerSensor)
    )
    const [notes, setNotes] = useState(datas);
    useEffect(() => {
        if (datas) {
            setNotes(datas);
        }
        check_borders();
    }, [datas]);
    if (datas) {
        return (
            <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]} onDragStart={showWindow}
                        autoScroll={false} sensors={sensors}>
                <Droppable id={"dropable"}>
                    <i className="fa-solid fa-arrow-rotate-right"
                       style={{
                           position: "absolute",
                           right: "5vw",
                           fontSize: "3rem",
                           rotate: "-90deg",
                           zIndex: "10000",
                           cursor: "pointer"
                       }}
                       onClick={() => {
                           Array.from(document.getElementsByClassName("card")).forEach((card) => {
                               card.style.display = "block";
                               let x = randomIntFromInterval(25, window.innerWidth - parseInt(window.getComputedStyle(card).getPropertyValue("width")) - 25);
                               let y = randomIntFromInterval(0, window.innerHeight * 0.4);
                               console.log(x, y);
                               card.parentElement.style.left = x + "px";
                               localStorage[card.parentElement.id + "-x"] = x;
                               card.parentElement.style.top = y + "px";
                               localStorage[card.parentElement.id + "-y"] = y;
                           })
                       }}
                    ></i>
                    {datas.map((onglet) => {
                        if (localStorage["card-" + onglet.id + "-x"] === undefined) {
                            localStorage["card-" + onglet.id + "-x"] = randomIntFromInterval(25, window.innerWidth - 25);
                        }
                        if (localStorage["card-" + onglet.id + "-y"] === undefined) {
                            localStorage["card-" + onglet.id + "-y"] = randomIntFromInterval(0, window.innerHeight * 0.4);
                        }
                        return (<Draggable
                            styles={{
                                position: "absolute",
                                left: `${localStorage["card-" + onglet.id + "-x"]}px`,
                                top: `${localStorage["card-" + onglet.id + "-y"]}px`
                            }}
                            key={onglet.id}
                            id={onglet.id}
                            title={onglet.description_header}
                            content={onglet.description}
                            language={onglet.language}
                        />)
                    })}
                </Droppable>
            </DndContext>
        );

        function showWindow(event) {
            const note = notes.find((x) => x.id === event.active.id);
            localStorage["z-index"] = parseInt(localStorage["z-index"]) + 1;
            document.querySelector("#card-" + note.id).style.zIndex = localStorage["z-index"];
        }

        function handleDragEnd(event) {
            // If the item is dropped over a container, set it as the parent
            // otherwise reset the parent to `null`
            const note = notes.find((x) => x.id === event.active.id);
            localStorage["card-" + note.id + "-x"] = parseInt(localStorage["card-" + note.id + "-x"]) + event.delta.x;
            localStorage["card-" + note.id + "-y"] = parseInt(localStorage["card-" + note.id + "-y"]) + event.delta.y;
            const _notes = notes.map((x) => {
                if (x.id === note.id) return note;
                return x;
            });
            setNotes(_notes);
        }
    }
    return null;
};
