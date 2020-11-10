const connection = new WebSocket("ws://localhost:8080");

connection.onopen = (event) => {
    console.log("WebSocket is open now.");
};
connection.onclose = (event) => {
    console.log("WebSocket is closed now.");
};
connection.onerror = (event) => {
    console.error("WebSocket error observed:", event);
};
connection.onmessage = (event) => {
    console.log(event.data);
};

connection.send("sample");

