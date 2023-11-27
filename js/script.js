---
---
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
    const ANNOUNCEMENTS =  {{site.data.course.announcements | jsonify}}
    
    const announceElement = document.getElementsByClassName("announcement");
    if (announceElement.length === 0) return;

    for (const key in ANNOUNCEMENTS){
        const announce = ANNOUNCEMENTS[key]
        const announceStart = new Date(announce.start_datetime)
        const announceEnd = new Date(announce.end_datetime);
        
        const now = new Date().toLocaleString("en-US", {timeZone:'America/New_York'})
        if (announceStart < new Date(now) && announceEnd >new Date(now)){
            announceElement[0].className = 'announcement active'
            const list = announceElement[0].getElementsByTagName("ul")?.[0]
            list.className="circle"
            const item = document.createElement('li')
            item.textContent = announce.content
            if (announce.link){
                const link = document.createElement('a')
                const linkText = document.createTextNode(announce.link_name);
                link.href=announce.link
                link.target="_blank"
                link.appendChild(linkText)
                item.appendChild(link)
            }
                

            list.appendChild(item)
        }
    }
}
