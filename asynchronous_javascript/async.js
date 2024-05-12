async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data)
}

fetchUsers()

const getData = async function() {
  const [users, posts, albums] = await Promise.all
}