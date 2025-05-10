import {
  auth, db, provider, onAuthStateChanged,
  signInWithPopup, collection, addDoc, getDocs
} from './firebase.js';

document.getElementById("login-btn").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await addDoc(collection(db, "users"), {
      name: user.displayName,
      email: user.email
    });
    showFriendList();
  } catch (error) {
    alert("Erro ao entrar com Google: " + error.message);
  }
});

async function showFriendList() {
  const usersRef = collection(db, "users");
  const snapshot = await getDocs(usersRef);
  const ul = document.getElementById("users-ul");
  ul.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const li = document.createElement("li");
    li.textContent = `${data.name} (${data.email})`;
    ul.appendChild(li);
  });
  document.getElementById("friend-list").style.display = "block";
}

onAuthStateChanged(auth, user => {
  if (user) {
    showFriendList();
  }
});