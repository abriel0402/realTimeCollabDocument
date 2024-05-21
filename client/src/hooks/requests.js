const API_URL = "http://localhost:8000";

export async function httpGetContent() {
  const response = await fetch(`${API_URL}/api/get-content`);

  return await response.json();
}

export async function httpUpdateContent(newContent) {
    console.log(newContent)
  return await fetch(`${API_URL}/api/update-content`, {
    method: "put",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(newContent),
  });
}


