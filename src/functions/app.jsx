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
                    {datas.map((onglet) => (<Draggable
                        styles={{
                            position: "absolute",
                            left: `${localStorage["x"] ? localStorage["x"] : onglet.position.x}px`,
                            top: `${localStorage["y"] ? localStorage["y"] : onglet.position.y}px`
                        }}
                        key={onglet.id}
                        id={onglet.id}
                        title={onglet.description_header}
                    />))}
                </Droppable>
            </DndContext>
        );

        function handleDragEnd(event) {
            localStorage["x"] = parseInt(localStorage["x"]) + event.delta.x;
            localStorage["y"] = parseInt(localStorage["y"]) + event.delta.y;

            // If the item is dropped over a container, set it as the parent
            // otherwise reset the parent to `null`
            const note = notes.find((x) => x.id === event.active.id);
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
