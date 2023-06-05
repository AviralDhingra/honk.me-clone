// Font Family
// QR Code
// QR Link
// QR Hover Popup

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="centered">
        <div>
          <h1 className="text-yellow">Really,</h1>
          <h1>real-time</h1>
          <h1>messaging.</h1>
        </div>
        <p className="subheading">
          Honk is the best way to chat in real-time with friends.
        </p>
        <div
          className="rounded-lg"
          style={{
            backgroundColor: "white",
            display: "inline-block",
          }}
        >
          <a href="google.com">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="download app - qr code"
              className="qr-code"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
