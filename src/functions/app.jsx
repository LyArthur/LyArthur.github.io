import React, {useState} from 'react';
import {DndContext, DragOverlay} from '@dnd-kit/core';

import {Droppable} from '../functions/droppable';
import {Draggable} from '../functions/draggable';
import {restrictToParentElement, restrictToWindowEdges} from "@dnd-kit/modifiers";

var notesData = [
    {
        id: "1",
        position: {
            x: 0,
            y: 0
        }
    }
];
export default function Apps({datas}) {
    const [notes, setNotes] = useState(datas);
    if (datas){
        /*console.log(datas);
        datas.map((onglet) => (<Draggable
            styles={{
                position: "absolute",
                left: `${onglet.position.x}px`,
                top: `${onglet.position.y}px`
            }}
            key={onglet.id}
            id={onglet.id}
        />))
        datas.map((onglet) => (
        console.log(onglet.description_header)))*/

        return (
            <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
                <Droppable id={"dropable"}>
                    {datas.map((onglet) => (<Draggable
                        styles={{
                            position: "absolute",
                            left: `${onglet.position.x}px`,
                            top: `${onglet.position.y}px`
                        }}
                        key={onglet.id}
                        id={onglet.id}
                        title={onglet.description_header}
                    />))}
                </Droppable>
            </DndContext>
        );
        function handleDragEnd(event) {

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
/*
import React, {useState} from 'react';
import {DndContext, DragOverlay} from '@dnd-kit/core';

import {Droppable} from '../functions/droppable';
import {Draggable} from '../functions/draggable';
import {restrictToWindowEdges} from "@dnd-kit/modifiers";

const notesData = [
    {
        id: "1",
        position: {
            x: 0,
            y: 0
        }
    }
];
export default function Apps(datas) {
    const [notes, setNotes] = useState(notesData);
    const draggableMarkup = (<Draggable
        styles={{
            position: "absolute",
            left: `${notesData[0].position.x}px`,
            top: `${notesData[0].position.y}px`
        }}
        key={notesData[0].id}
        id={notesData[0].id}
    />);

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Droppable id={"dropable"}>
                {draggableMarkup}
            </Droppable>
        </DndContext>
    );

    function handleDragEnd(event) {

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
};*/
