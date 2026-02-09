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
    <h2>$("title")</h2>
    <p>$("date")</p>
    <button>$("")</button>
</div>
});

eventcard.appendChild(card)