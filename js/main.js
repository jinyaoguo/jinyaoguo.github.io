// OBTENER DATOS
const accordionPapers = document.getElementById('accordionPanelsStayOpenPapers')
const accordionProgress = document.getElementById('accordionPanelsStayOpenProgress')
const listPolicy = document.getElementById('listPolicy')
const accordionExperience = document.getElementById('accordionPanelsStayOpenExperience')
const accordionWork = document.getElementById('accordionPanelsStayOpenWork')

async function papers(){
    const response = await fetch ('../resources/papers.json')
    return await response.json()
}

papers().then(data =>{
    data.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${element.id}">
        <button class = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${element.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${element.id}">${element.title}</button></h2>`;
        item.setAttribute("class", "accordion-item");
        accordionPapers.appendChild(item);

        let body = document.createElement("div");
        // body.innerHTML = `<div class="accordion-body"><div class="row d-flex justify-content-center"><div class="accordion-text"><i>${element.coauthor}</i> \n <i> ${element.subtitle}</i><div class="col-xl-4 accordion-img"><img src="../img/${element.img}.jpg" class="img-fluid" alt="img-${element.id}"></div>
        body.innerHTML = `<div class="accordion-body"><div class="row d-flex justify-content-center"><div class="accordion-text"><i>${element.author}</i><br> 
        <p>${element.text}</p>
        <p>[<a href="${element.link}">Paper</a>]</p>
        </div></div></div>`;
        body.setAttribute("id", `panelsStayOpen-collapse${element.id}`);
        body.setAttribute("class", "accordion-collapse collapse");
        body.setAttribute("aria-labelledby", "panelsStayOpen-headingOn");
        item.appendChild(body);
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
    const response = await fetch ('../resources/experience.json')
    return await response.json()
}

experience().then(data =>{
    data.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `<h2 class="accordion-header" id="panelsStayOpen-heading${element.id}">
        <button class = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${element.id}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${element.id}">${element.title}</button></h2>`;
        item.setAttribute("class", "accordion-item");
        accordionExperience.appendChild(item);

        let body = document.createElement("div");
        body.innerHTML = `<div class="accordion-body accordion-text"><i>${element.field}</i>\n<i>${element.time}</i>
        <p>${element.text}</p></div>`;
        body.setAttribute("id", `panelsStayOpen-collapse${element.id}`);
        body.setAttribute("class", "accordion-collapse collapse");
        body.setAttribute("aria-labelledby", "panelsStayOpen-headingOn");
        item.appendChild(body);
    });
})

async function work(){
    const response = await fetch ('../resources/work.json')
    return await response.json()
}

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