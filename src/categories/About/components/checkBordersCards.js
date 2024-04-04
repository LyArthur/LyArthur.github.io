export function check_borders(){
    Array.from(document.getElementsByClassName("card")).forEach((card) => {
        let cardStyle = window.getComputedStyle(card.parentElement);
        let left = parseInt(cardStyle.getPropertyValue("left"));
        let width = parseInt(cardStyle.getPropertyValue("width"));
        let top = parseInt(cardStyle.getPropertyValue("top"));
        if (left+width+50 - window.innerWidth > 0){
            card.parentElement.style.left = left-width-(left+25 - window.innerWidth)+"px";
            localStorage[card.parentElement.id+"-x"] = left-width-(left+25 - window.innerWidth);
        }
        if (top < 0){
            card.parentElement.style.top = "0px";
            localStorage[card.parentElement.id+"-y"] = 0;
        }
    })
}