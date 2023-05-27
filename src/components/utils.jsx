
const Url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

async function getRecords(url, bod) {
    var body_string = JSON.stringify(bod);
  
    const response = await fetch(url, {
        method: "POST",
        // mode: 'cors',
        body: body_string,
        headers: {"Content-type": "application/json"},
      });
  
    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }
    return response.json();
  }

export { Url, getRecords };