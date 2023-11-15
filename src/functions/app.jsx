import React, {useEffect, useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from '../functions/droppable';
import {Draggable} from '../functions/draggable';
import {restrictToParentElement} from "@dnd-kit/modifiers";

export default function Apps({datas}) {
    const [notes, setNotes] = useState(datas);
    useEffect(() => {
        if (datas) {
            setNotes(datas);
        }
    }, [datas]);

    if (datas) {
        return (
            <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
                <Droppable id={"dropable"}>
                    {datas.map((onglet) => {
                        if (localStorage["card-"+onglet.id+"-x"] === undefined){
                            localStorage["card-"+onglet.id+"-x"] = 0;
                        }
                        if (localStorage["card-"+onglet.id+"-y"] === undefined){
                            localStorage["card-"+onglet.id+"-y"] = 0;
                        }
                        return (<Draggable
                            styles={{
                                position: "absolute",
                                left: `${localStorage["card-"+onglet.id+"-x"] ? localStorage["card-"+onglet.id+"-x"] : onglet.position.x}px`,
                                top: `${localStorage["card-"+onglet.id+"-y"] ? localStorage["card-"+onglet.id+"-y"] : onglet.position.y}px`
                            }}
                            key={onglet.id}
                            id={onglet.id}
                            title={onglet.description_header}
                        />)})}
                </Droppable>
            </DndContext>
        );

        function handleDragEnd(event) {
            // If the item is dropped over a container, set it as the parent
            // otherwise reset the parent to `null`
            const note = notes.find((x) => x.id === event.active.id);
            localStorage["card-"+note.id+"-x"] = parseInt(localStorage["card-"+note.id+"-x"]) + event.delta.x;
            localStorage["card-"+note.id+"-y"] = parseInt(localStorage["card-"+note.id+"-y"]) + event.delta.y;
            note.position.x += event.delta.x;
            note.position.y += event.delta.y;
            const _notes = notes.map((x) => {
                if (x.id === note.id) return note;
                return x;
            });
            setNotes(_notes);
        }
    }
    return null;
};
