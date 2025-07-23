// OBTENER DATOS
const publicationsContainer = document.getElementById('publicationsContainer')
const projectsContainer = document.getElementById('projectsContainer')
const accordionProgress = document.getElementById('accordionPanelsStayOpenProgress')
const listPolicy = document.getElementById('listPolicy')
const workContainer = document.getElementById('workContainer')

async function papers(){
    const response = await fetch('../resources/papers.json')
    return await response.json()
}

papers().then(data => {
    data.forEach(element => {
        let item = document.createElement("div");
        item.setAttribute("class", "publication-item");
        item.innerHTML = `
            <div class="publication-title">${element.title}</div>
            <div class="publication-authors">${element.author}</div>
            <div class="publication-abstract">${element.text}</div>
            <div class="publication-links">
                <a href="${element.link}" target="_blank">[Paper]</a>
            </div>
        `;
        publicationsContainer.appendChild(item);
    });
})

async function progress(){
    const response = await fetch ('../resources/reprogress.json')
    return await response.json()
}

progress().then(data =>{
    data.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${element.id}">
        <button class = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${element.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${element.id}">${element.title}</button></h2>`;
        item.setAttribute("class", "accordion-item");
        accordionProgress.appendChild(item);

        let body = document.createElement("div");
        body.innerHTML = `<div class="accordion-body accordion-text"><i>${element.coauthor}</i>\n<i>${element.subtitle}</i>
        <p>${element.text}</p></div>`;
        body.setAttribute("id", `panelsStayOpen-collapse${element.id}`);
        body.setAttribute("class", "accordion-collapse collapse");
        body.setAttribute("aria-labelledby", "panelsStayOpen-headingOn");
        item.appendChild(body);
    });
})

async function policy(){
    const response = await fetch ('../resources/policy.json')
    return await response.json()
}

policy().then(data =>{
    data.forEach(element =>{
        let item = document.createElement("li")
        item.innerHTML = `<a href="${element.link}">${element.title}</a>`
        item.setAttribute("class", "list-item");
        listPolicy.appendChild(item)
    })
})

async function experience(){
    const response = await fetch('../resources/experience.json')
    return await response.json()
}

experience().then(data => {
    data.forEach(element => {
        let item = document.createElement("div");
        item.setAttribute("class", "project-item");
        item.innerHTML = `
            <div class="project-title">${element.title}</div>
            <div class="project-details">${element.field} • ${element.time}</div>
            <div class="project-description">${element.text}</div>
        `;
        projectsContainer.appendChild(item);
    });
})

async function work(){
    const response = await fetch('../resources/work.json')
    return await response.json()
}

work().then(data => {
    data.forEach(element => {
        if (workContainer) {
            let item = document.createElement("div");
            item.setAttribute("class", "project-item");
            item.innerHTML = `
                <div class="project-title">${element.title}</div>
                <div class="project-details">${element.field} • ${element.time}</div>
                <div class="project-description">${element.text}</div>
            `;
            workContainer.appendChild(item);
        }
    });
})

/* Original code preserved for reference
work().then(data =>{
    data.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${element.id}">
        <button class = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${element.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${element.id}">${element.company}</button></h2>`;
        item.setAttribute("class", "accordion-item");
        accordionWork.appendChild(item);

        let body = document.createElement("div");
        body.innerHTML = `<div class="accordion-body accordion-text"><i>${element.time}</i>
        <p>${element.text}</p></div>`;
        body.setAttribute("id", `panelsStayOpen-collapse${element.id}`);
        body.setAttribute("class", "accordion-collapse collapse");
        body.setAttribute("aria-labelledby", "panelsStayOpen-headingOn");
        item.appendChild(body);
    });
})
*/