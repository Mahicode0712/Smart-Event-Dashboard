const form=document.querySelector(".form")
form.addEventListener("submit", function (event) {
event.preventDefault();
const title=Eventtitle.value
const date=Eventdate.value
const category=Eventcategory.value
const description=description.value
console.log(title,date,category,description)
const card=document.createElement("div")
card.innerHTML=
<div class="card">
    <h3>$("title")</h3>
    <p>$("date")</p>
    <button class="delete-btn">❎</button>
</div>
});

eventcard.appendChild(card)
form.reset();
eventContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
