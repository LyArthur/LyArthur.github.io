import {PointerSensor} from "@dnd-kit/core";

export class MyPointerSensor extends PointerSensor {
    static activators = [
        {
            eventName: 'onPointerDown',
            handler: ({nativeEvent: event}) => {
                if (isInteractiveElement(event.target)) {
                    if(event.target.parentElement.classList.contains("red")){
                        event.target.closest(".card").style.display = "none";
                    } else if (event.target.parentElement.classList.contains("green")){
                        localStorage[event.target.closest(".card").parentElement.id+"-x"] = "0";
                        localStorage[event.target.closest(".card").parentElement.id+"-y"] = "0";
                        event.target.closest(".card").parentElement.style.top = "0";
                        event.target.closest(".card").parentElement.style.left = "0";
                    }
                    return false;
                }
                return true;
            },
        },
    ];
}

function isInteractiveElement(element) {
    const interactiveElements = [
        'circle'
    ];

    if (interactiveElements.includes(element.tagName.toLowerCase())) {
        return true;
    }

    return false;
}