// Data awal
let user = { name: "Budiman", role: "Frontend Developer" };

// Render ke tampilan (one-way)
const app = document.getElementById("app");
app.appendChild(createProfileCard(user.name, user.role));


// Tambahkan elemen input untuk ubah nama
const inputGroup = document.createElement('div');
inputGroup.className = 'input-group';
inputGroup.innerHTML = `
  <label>Ubah Nama:</label><br>
  <input id="nameInput" type="text" value="${user.name}">
`;
app.appendChild(inputGroup);

// Binding dua arah
const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('input', () => {
  user.name = nameInput.value;
  app.querySelector('.card h2').textContent = user.name || "Tanpa Nama";
});


// Membuat Profile Card
function createProfileCard(name, role) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${name}</h2>
    <p>${role}</p>
  `;
  return card;
}

