const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passBtn = document.getElementById("passBtn")
const passOne = document.getElementById("passOne")
const passTwo = document.getElementById("passTwo")
const lengthInput = document.getElementById("lengthInput")

passBtn.addEventListener("click", generatePasswords)

function generatePasswords() {
  let passwordLength = lengthInput.value
  passOne.textContent = getRandomPassword(passwordLength)
  passTwo.textContent = getRandomPassword(passwordLength)

  // BUG: only copying second password
  passOne.addEventListener("click", copyText(passOne.innerHTML))
  passTwo.addEventListener("click", copyText(passTwo.innerHTML))
}

function getRandomPassword(length) {
  let randomPassword = ""
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    randomPassword += characters[randomIndex]
  }
  return randomPassword
}

function copyText(text) {
  navigator.clipboard.writeText(text)
}