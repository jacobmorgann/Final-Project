let CookieArray = new Array();

const login = ()=> {
    let usrNameEntry = document.querySelector(".usrName");
    let passcodeEntry = document.querySelector(".passcode")
    if ((usrNameEntry.value == "COOKIES") &&
        (passcodeEntry.value == "COOKIES")) {
            reveal();
            loginSuccess(true);
        }
    else
        loginSuccess(false)
}
const reveal = function () {
    let calorieList = document.querySelector(".floatRightCookies");
    calorieList.style = "display: inline-block";
    let calorieEntry = document.querySelector(".cookieEntry");
    calorieEntry.style = "display: inline-block";
}
function loginSuccess(indicator) {
    let loginMessage = document.querySelector(".loginMessage");
    if (indicator)
        loginMessage.textContent = "Welcome Cookie Lover"
    else
        loginMessage.textContent = "Login is incorrect"
}
function cookieCaloriesInstance() {
    let newCookieName = document.querySelector(".cookieFirstName").value;
    let newCookieCalories = document.querySelector(".cookieCalories").value;
    let calories = parseFloat(newCookieCalories);

let cookieID = Date.now();

let newCookie = new Cookie (newCookieName, newCookieCalories, calories, cookieID)
CookieArray.push (newCookie);
updateCookieList(newCookie);
resetFields();
}
function resetFields() {
    document.querySelector(".cookieFirstName").textContent="";
    document.querySelector(".cookieCalories").textContent="";
}
function updateCookieListAll(cookieList) {
    CookieArray.forEach((cookie) => {
        let cookieItem = document.createElement("li");
        let info = `${cookie.cookieName}, ${cookie.amountCalories()} : ${cookie.calories}`;
        cookieItem.textContent = info;
        cookieList.append(listItem);
    });
}
const updateCookieList = (cookie) => {
    let cookieList = document.querySelector(".cookieList");
    let listItem = document.createElement("li");
    listItem.textContent = cookie.cookieInfo();
    listItem.className = "sos"+cookie.cookieNumber;
    cookieList.append(listItem);
    setModificationsStatus();
};
const getCookieData = ()=> {
    revealCookieInfo(true);
let cookieNumberBox = document.querySelector(".calorieNumber");
let cookieNumber = cookieNumberBox.value;
cookieNumberBox.disabled = true;
cookieNumber = parseInt(cookieNumber);
let cookie = CookieArray [cookieNumber-1];
let cookieData = document.querySelector(".cookieData");
let info = cookie.cookieInfo();
cookieData.textContent=info;
let caloriesBox = document.querySelector(".newCalories");
caloriesBox.value = cookie.calories;
};

const setModificationsStatus = function() {
    let modsArea = document.querySelector (".modifications");
    if (CookieArray.length>0)
        modsArea.style = "display:inline-block";
    else
        modsArea.style = "display:none";
};
const revealCookieInfo = (onOrOff) => {
    let cookieInfoArea = document.querySelector(".cookieInfo");
    if (onOrOff)
        cookieInfoArea.style = "display: inline-block;";
    else   
        cookieInfoArea.style = "display: none;";
};

const saveCookieData = function() {
    let cookieNumberBox = document.querySelector(".calorieNumber");
    let cookieNumber = cookieNumberBox.value;
    cookieNumber = parseInt(cookieNumber);
    let cookie = CookieArray[cookieNumber-1];
    let caloriesBox = document.querySelector(".newCalories");
    cookie.calories = parseInt(caloriesBox.value);
    let record = document.querySelector(".sos"+cookie.cookieNumber);
    record.textContent = `You entered ${cookie.cookieName}, Your cookie is ${cookie.amountCalories()} : Amount of calories -> ${cookie.calories}`
    cookieNumberBox.disabled = false;
    revealCookieInfo(false);
    setModificationsStatus();
};
const removeCookie = function() {
    let cookieNumberBox = document.querySelector(".calorieNumber");
    let cookieNumber = cookieNumberBox.value;
    cookieNumber = parseInt(cookieNumber);
    let cookie = CookieArray[cookieNumber-1];
    CookieArray.splice(cookieNumber-1, 1);
    let listItem = document.querySelector(".sos"+cookie.cookieNumber); 
    let cookieList = document.querySelector(".cookieList");
    cookieList.removeChild(listItem);
    cookieNumberBox.disabled = false;
    revealCookieInfo(false);
    setModificationsStatus();
};