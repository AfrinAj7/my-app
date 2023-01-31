import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
function HelloWorld() {
  return (
    <div>
      <h1>heading</h1>
      <p>
        life is beautiful 
      </p>
    </div>
  );
}
root.render(<HelloWorld />);


