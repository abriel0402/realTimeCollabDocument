const API_URL = "http://localhost:8000";

export async function httpGetContent(code) {
  const response = await fetch(`${API_URL}/api/get-content`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(code),
  });

  return await response.json();
}

export async function httpUpdateContent(newContent) {
  console.log(newContent);
  return await fetch(`${API_URL}/api/update-content`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContent),
  });
}

export async function httpCreateDocument() {
  // fetch the created document

  return await fetch(`${API_URL}/api/create-document`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(document),
  });
}
