export function useHttp() {
  const get = async (url) => {
    const response = await fetch(url);
    return await response.json();
  }

  const post = async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await response.json();
  }

  return  {
    get, post
  }
}
