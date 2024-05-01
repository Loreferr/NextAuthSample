async function getUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}
export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1>Users</h1>

      {users.map((user: any) => (
        <div key={user.id}>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
}
