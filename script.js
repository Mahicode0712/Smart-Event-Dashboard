
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const clearBtn = document.getElementById('clearBtn');
const sampleBtn = document.getElementById('sampleBtn');
const keyOutput = document.getElementById('keyOutput');

// 1. Create and Append an Event Card
function createEventCard(title, date, category, desc) {
    
    const emptyMsg = document.querySelector('.empty-msg');
    if (emptyMsg) {
        emptyMsg.remove();
    }

    
    const card = document.createElement('div');
    card.classList.add('event-item');

    
    card.innerHTML = `
        <h3>${title}</h3>
        <div class="event-meta">
            <span class="event-badge">${category}</span>
            <span>${date}</span>
        </div>
        <p>${desc}</p>
        <button class="delete-btn" title="Delete Event">✖</button>
    `;

    
    eventList.appendChild(card);
}

// 2. Form Submission
eventForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const category = document.getElementById('eventCategory').value;
    const desc = document.getElementById('eventDesc').value;

    if(title === '' || date === '') {
        alert("Please fill in required fields.");
        return;
    }

    createEventCard(title, date, category, desc);

    
    eventForm.reset();
});

// 3. Delete Buttons
eventList.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('delete-btn')) {
        
        const card = e.target.closest('.event-item');
        card.remove();

        
        if (eventList.children.length === 0) {
            eventList.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
        }
    }
});

// 4. Clear All Events
clearBtn.addEventListener('click', function() {
    eventList.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
});

// 5. Add Sample Events 
sampleBtn.addEventListener('click', function() {
    const samples = [
        { title: 'Web Dev II Exam', date: '2026-03-10', cat: 'Conference', desc: 'Final examination for Advanced JS.' },
        { title: 'React Workshop', date: '2026-04-05', cat: 'Workshop', desc: 'Deep dive into Hooks and Context API.' }
    ];

    samples.forEach(event => {
        createEventCard(event.title, event.date, event.cat, event.desc);
    });
});

// 6. Keyboard Interaction 
document.addEventListener('keydown', function(e) {
    
    keyOutput.textContent = e.key === " " ? "Spacebar" : e.key;
    
    
    keyOutput.style.color = "purple";
    setTimeout(() => {
        keyOutput.style.color = "inherit";
    }, 200);
});