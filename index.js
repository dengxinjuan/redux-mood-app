//grab the mood section
const mood = document.getElementById("mood");

//set the current mood so aviod repeat code
function setCurrentMood() {
  mood.innerText = store.getState().mood;
}

setCurrentMood();

/*grab the happy buttons, add event listener and dispatch the function, And i put a payload in the face.
I only test the payload in this function though.
*/
const happyBtn = document.getElementById("happy");

happyBtn.addEventListener("click", function () {
  store.dispatch({ type: "HAPPY", payload: "(^_^)" });
  mood.style.backgroundColor = "orange";
  setCurrentMood();
});

//grab the sad buttons, add event listener and dispatch the function
const sadBtn = document.getElementById("sad");

sadBtn.addEventListener("click", function () {
  store.dispatch({ type: "SAD" });
  mood.style.backgroundColor = "grey";
  setCurrentMood();
});

//grab the angry buttons, add event listener and dispatch the function
const angryBtn = document.getElementById("angry");

angryBtn.addEventListener("click", function () {
  store.dispatch({ type: "ANGRY" });
  mood.style.backgroundColor = "blue";
  setCurrentMood();
});

//grab the confused buttons, add event listener and dispatch the function
const confusedBtn = document.getElementById("confused");

confusedBtn.addEventListener("click", function () {
  store.dispatch({ type: "CONFUSED" });
  mood.style.backgroundColor = "red";
  setCurrentMood();
});

//grab the random buttons, add event listener and dispatch the function
const randomBtn = document.getElementById("random");

randomBtn.addEventListener("click", function () {
  const moodType = ["CONFUSED", "ANGRY", "SAD"];
  var randomMood =
    moodType[Math.floor(Math.floor(Math.random() * moodType.length))];
  store.dispatch({ type: randomMood });
  mood.style.backgroundColor = "green";
  setCurrentMood();
});
