const btn = document.querySelector("#genpass");
const newpass = document.querySelector("#newpass");
const slider = document.getElementById("range");
const rangeval = document.getElementById("rangeVal");

const UpprCase = document.getElementById("capLet");
const lowerCase = document.getElementById("samLet");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbol");

// Set initial slider value
rangeval.innerText = slider.value;

// Update slider value dynamically
slider.addEventListener("input", () => {
    rangeval.innerText = slider.value;
});

// Copy password to clipboard
document.getElementById("copyBtn").addEventListener("click", () => {
    navigator.clipboard.writeText(newpass.innerText)
        .then(() => alert("Password copied!"))
        .catch(() => alert("Failed to copy!"));
});

// Generate password
btn.addEventListener("click", () => {
    let capletter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smlletter = 'abcdefghijklmnopqrstuvwxyz';
    let numberstr = '0123456789';
    let symbolstr = '~`!@#$%^&*()_-+=<>?/{}[]|';

    let finalstr = '';
    let latestpass = '';

    if(UpprCase.checked) finalstr += capletter;
    if(lowerCase.checked) finalstr += smlletter;
    if(numberCheck.checked) finalstr += numberstr;
    if(symbolCheck.checked) finalstr += symbolstr;

    if(finalstr === '') {
        alert("Please select at least one character type!");
        return;
    }

    for(let i = 0; i < slider.value; i++){
        let randnum = Math.floor(Math.random() * finalstr.length);
        latestpass += finalstr.charAt(randnum);
    }

    newpass.innerText = latestpass;
});
