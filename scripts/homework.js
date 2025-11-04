const textField = document.getElementById("textField")
const namesList = document.getElementById("namesList")

const savingForm = document.getElementById("savingForm")
const saveButton = document.getElementById("saveButton")
const savedName = localStorage.getItem("Saved Name")
namesList.innerHTML = `<li class="text-capitalize">${savedName}</li>`
if (savedName === null) {
  namesList.innerHTML = `<li></li>`
}
saveButton.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.setItem("Saved Name", textField.value)

  namesList.innerHTML = `<li class="text-capitalize">${textField.value}</li>`
  savingForm.reset()
})

const removeButton = document.getElementById("removeButton")
removeButton.addEventListener("click", (e) => {
  e.preventDefault()
  localStorage.removeItem("Saved Name")
  namesList.innerHTML = `<li></li>`
})

const timer = document.getElementById("timer")
let seconds = sessionStorage.getItem("Seconds")
const setTimer = function () {
  seconds++
  sessionStorage.setItem("Seconds", seconds)
  timer.innerText = `Secondi = ${seconds}`
}

setInterval(setTimer, 1000)
