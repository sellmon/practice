//Modal window
let modal = document.getElementById('my-modal')
let btn = document.getElementById('popup-btn')
let close = document.getElementById('span-close')

btn.onclick = function () {
    modal.classList.remove('hidden')
    document.body.classList.add('fixed')
}
close.onclick = function () {
    modal.classList.add('hidden')
    document.body.classList.remove('fixed')
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.add('hidden')
        document.body.classList.remove('fixed')
    }
}


//Tabs
let tabs = document.querySelectorAll(".tab")
let indicator = document.querySelector(".indicator")
let panels = document.querySelectorAll(".tab-panel")

indicator.style.width = tabs[0].getBoundingClientRect().width + 'px'
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        let tabTarget = tab.getAttribute("aria-controls")

        indicator.style.width = tab.getBoundingClientRect().width + 'px'
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + 'px'


        panels.forEach(panel =>{
            let panelId = panel.getAttribute("id")
            if(tabTarget === panelId){
                panel.classList.remove("hidden")
                panel.classList.add("visible")
            } else {
                panel.classList.add("hidden")
            }
        })
    })
})

//Menu
window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn')
    const dropdown = document.querySelector('#dropdown')

    menuBtn.addEventListener('click', () => {
        dropdown.classList.toggle('flex')
        dropdown.classList.toggle('hidden')
    })

    window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('#menu-btn') && !target.closest('#dropdown')) {
            dropdown.classList.toggle('hidden', true)
        }
    })

})


//Selector
function select () {
    let sel = document.getElementById('selector').selectedIndex;
    let options = document.getElementById('selector').options;
    alert('Your choice: ' + options[sel].text)
}

//Border radius
function border () {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbl = document.getElementById('rbl').value;
    let rbr = document.getElementById('rbr').value;
    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbl = document.getElementById('tbl');
    let tbr = document.getElementById('tbr');

    let block = document.getElementById('block');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px ';
}