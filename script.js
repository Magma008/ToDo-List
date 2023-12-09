const form = document.getElementById("form")
const ul = document.getElementById("ul")
const search = document.getElementById("search")
const remove = document.querySelector(".remove")

form.addEventListener("submit", addItem)

function addItem(e) {
    e.preventDefault()
    const addElem = document.querySelector(".addElem").value.trim()
    if (addElem !== "") {
        let li = document.createElement("li")
        li.className = "list"
        li.innerText = addElem

        let button = document.createElement("button")
        button.className = "delete"
        button.innerHTML = `<img class="take" src="Images/trash.png" alt="X">`
        li.appendChild(button)
        ul.appendChild(li)
    }
    else {
        alert("Please fill the gaps!!!")
    }
    document.querySelector(".addElem").value = ""
}

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("take")) {
        if (confirm("Do you really want to delete this item?")) {
            ul.removeChild(e.target.parentElement.parentElement);
        }
    }
})

remove.addEventListener("click", () => {
    let elems = ul.querySelectorAll(".list")
    Array.from(elems)
    if (confirm("Do you really want to delete all of the elements?")) {
        elems.forEach(item => {
            ul.remove(item)
        })
    }
})

search.addEventListener("input", (e) => {
    let text = e.target.value.toLowerCase()
    let elems = ul.querySelectorAll(".list")
    Array.from(elems).forEach(i => {
        if (i.firstChild.textContent.toLowerCase().includes(text)) {
            i.style.display = "flex"
        }
        else {
            i.style.display = "none"
        }
    })
})