// Simple JS to populate events and last-updated
const events = [
  { title: "Raffle: Warden x Billions", date: "2025-10-20", desc: "Special raffle event — join #raffles channel for details." },
  { title: "Community AMA", date: "2025-11-01", desc: "AMA with the team — ask about roadmap & roles." }
];

// render events
const eventsContainer = document.getElementById('events-container');
if(events.length === 0){
  eventsContainer.innerHTML = '<p>No events yet. Check Discord for updates.</p>';
} else {
  events.forEach(ev => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `<h4>${ev.title}</h4><time>${ev.date}</time><p>${ev.desc}</p>`;
    eventsContainer.appendChild(div);
  });
}

// set last updated
document.getElementById('last-updated').textContent = new Date().toISOString().split('T')[0];

// small helper: replace default texts (optional)
document.getElementById('target-role').textContent = 'Community Helper';
document.getElementById('why-text').textContent = 'I want to join to help new members, run small events, and contribute creative assets.';
