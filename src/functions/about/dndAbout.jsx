import React, {useEffect, useState} from 'react';
import {DndContext, useSensor, useSensors} from '@dnd-kit/core';

import {Droppable} from './droppable';
import {Draggable} from './draggable';
import {restrictToParentElement} from "@dnd-kit/modifiers";
import {check_borders} from './checkBordersCards';
import {MyPointerSensor} from './pointerSensor';

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function move(element, x, y) {
    element.style.left = x + "px";
    localStorage[element.id + "-x"] = x;
    element.style.top = y + "px";
    localStorage[element.id + "-y"] = y;
}

export default function DnDAbout({datas}) {
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
                           let cards = document.getElementsByClassName("card");
                           let bio = cards[0];
                           let cv = cards[1];
                           cv.style.display = "block";
                           bio.style.display = "block";

                           let bioWidth = parseInt(window.getComputedStyle(bio).width);
                           let cvWidth = parseInt(window.getComputedStyle(cv).width);

                           if (window.innerWidth + 100 < bioWidth + cvWidth) {
                               move(cv.parentElement, 0, 0);
                               move(bio.parentElement, 0, parseInt(window.getComputedStyle(cv).height) + 20)
                           } else {
                               move(bio.parentElement, 0, 0);
                               move(cv.parentElement, bioWidth + 20, 0)
                           }
                       }}
                    ></i>
                    {datas.map((onglet) => {
                        if (localStorage["card-" + onglet.id + "-x"] === undefined) {
                            localStorage["card-" + onglet.id + "-x"] = onglet.id === 2 && window.innerWidth > 1100 ? 520 : 0;
                        }
                        if (localStorage["card-" + onglet.id + "-y"] === undefined) {
                            localStorage["card-" + onglet.id + "-y"] = onglet.id === 1 && window.innerWidth < 1100 ? 200 : 0;
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
