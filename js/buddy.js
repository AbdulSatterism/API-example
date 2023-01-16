const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `${buddy.name.title} ${buddy.name.first} ${buddy.email}`
        buddiesContainer.appendChild(p)
    }
}
