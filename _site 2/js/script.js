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
    const ANNOUNCEMENTS =  {"endline_test":{"start_datetime":"2023/11/30","end_datetime":"2023/12/13:11:59","content":"Endline knowledge test is due by 13rd Dec 11:59pm (ET) ","link_name":"Quiz Link","link":"https://survey.wb.surveycto.com/collect/endline_rrf23?caseid="},"open_session":{"start_datetime":"2023/11/8, 11:59 PM","end_datetime":"2023/11/29, 10:30 PM","content":"Live opening session on 29th Nov from 9:30am to 10:30am (ET)","link_name":"Connection Link","link":"https://worldbankgroup.webex.com/worldbankgroup/j.php?MTID=m304842374546d1780cec1c682fc572ce"},"office_hour1":{"start_datetime":"2023/11/8, 11:59 PM","end_datetime":"2023/11/30, 10:30 AM","content":"Admin office hours on 30th Nov from 9:30am to 10:30am (ET)","link_name":"Connection Link","link":"https://worldbankgroup.webex.com/worldbankgroup/j.php?MTID=m94a56bb2b9784b7eb34f18cff5060cd5"},"office_hour2":{"start_datetime":"2023/12/5, 11:59 PM","end_datetime":"2023/12/6, 10:30 AM","content":"Technical office hours 6th Dec from 9:30am to 10:30am (ET)","link_name":"Webex Link","link":"https://worldbankgroup.webex.com/worldbankgroup/j.php?MTID=mb54608cd074dcbee4564c54f3f53655c"},"closing_session":{"start_datetime":"2023/12/06, 11:59 PM","end_datetime":"2023/12/13, 10:30 AM","content":"Live closing session 13th Dec from 9:30am to 10:30am (ET)","link_name":"Webex Link","link":"https://worldbankgroup.webex.com/worldbankgroup/j.php?MTID=m3f2f55f1543115c378ea3489d7bf6263"},"quizzes":{"start_datetime":"2023/11/8","end_datetime":"2023/12/13","content":"Baseline test, quizzes and endline test are all due 13th December, 11.59pm (ET)"}}
    
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
