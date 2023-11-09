window.onload = onLoad();

function onLoad(){
    addCollapsibles();
    addAnnouncement();
}
    
function addCollapsibles() {
    const collapsibles = document.getElementsByClassName("collapsibile-title");

    for (let element of collapsibles){
        element.addEventListener("click", ()=>{
            if (element.parentElement.className === 'collapsible active'){
                element.parentElement.className = 'collapsible'
                const icon = element.getElementsByTagName('i')[0]
                icon.className = "fa fa-angle-down"
            }else{
                element.parentElement.className = 'collapsible active'
                const icon = element.getElementsByTagName('i')[0]
                icon.className = "fa fa-angle-up"
            }
        }
        )

    }

}

function addAnnouncement(){
    
    const ANNOUNCEMENTS = {
        office_hour1:{
            start_datetime: "2023-11-8",
            end_datetime: "2023-12-13",
            content: "Office Hour happening today at 2pm (EST)."
        },
        office_hour2:{
            start_datetime: "2023-11-30",
            end_datetime: "2023-12-13",
            content: "Office Hour happening today at 2pm (EST)."
        },
        quizzes:{
            start_datetime: "2023-11-8",
            end_datetime: "2023-12-13",
            content: "All quizzes are due 13 December, 11pm (EST) "
        }
    }
    const announceElement = document.getElementsByClassName("announcement");
    if (announceElement.length === 0) return;

    for (const key in ANNOUNCEMENTS){
        const announce = ANNOUNCEMENTS[key]
        const announceStart = new Date(announce.start_datetime)
        const announceEnd = new Date(announce.end_datetime);
        const now = new Date();
        if (announceStart < now && announceEnd > now){
            announceElement[0].className = 'announcement active'
            const list = announceElement[0].getElementsByTagName("ul")?.[0]
            const item = document.createElement('li')
            item.textContent = announce.content
            list.appendChild(item)
        }
    }
}