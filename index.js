let myLeads = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let listItems = ""

btnEl.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderList()


})

function renderList() {

    for (i = 0; i < myLeads.length; i++) {


        // listItems = "<li><a href='" + myLeads[i] +"' target = '_blank'>" + myLeads[i] + "</a></li> " //very important ****

        // template strings------------->
        listItems = `
                     <li>
                         <a href='${myLeads[i]}'     target='_blank'>
                             ${myLeads[i]}
                         </a>
                     </li>
        
                    `

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> " //reads the html tags and manipulates the dom

        // other way of doing this is---------------:::----->

        // const li = document.createElement("li")//create a li element
        //  li.textContent = myLeads[i] //change the innertect content
        // ulEl.append(li) // append the li eliment to ulEl
    }


ulEl.innerHTML += listItems

}