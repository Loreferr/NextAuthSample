export async function POST(req: Request) {
  const { name, username, email, password } = await req.json();
  console.log({ name, username, email, password });
  const requestBody = {
    name,
    username,
    email,
    password,
  };

  const response = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });
  const data = await response.text();
  console.log(data);

  if (data === "User Registered") {
    console.log(data);
  } else {
    console.log("User not registered");
  }

  return Response.json(data); // Add semicolon here
}

/*export async function POST(req: Request) {
    const { name, username, email, password } = await req.json();
    console.log({ name, username, email, password });
    const formData = new FormData();
  
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    console.log(formData);
  
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  
    if (data === "User Registered") {
      console.log(data);
    } else {
      console.log("User not registered");
    }
  
    return Response.json(data); // Add semicolon here
  }*/
