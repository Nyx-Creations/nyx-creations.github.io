let contentmap = new Map();
let openmap = new Map();
let titlemap = new Map();

function start() {
    let array = document.getElementsByTagName("section")
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let header = element.getElementsByTagName("h2")[0];
        titlemap.set(element.id, element.getElementsByTagName("h2")[0].innerHTML);
        header.innerHTML = `<button onclick="toggle('${element.id}')">-</button> ` + header.innerHTML;
        contentmap.set(element.id, element.innerHTML);
        openmap.set(element.id, true);
    }
}

function toggle(id) {
    const element = document.getElementById(id);
    const header = element.getElementsByTagName("h2")[0];
    if (openmap.get(id)) {
        element.innerHTML = `<h2><button onclick="toggle('${element.id}')">+</button> ${titlemap.get(id)}</h2>`;
        openmap.set(id, false);
    } else {
        element.innerHTML = contentmap.get(id);
        openmap.set(id, true);
    }
}