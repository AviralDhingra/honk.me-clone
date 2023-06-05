// Font Family
// Real QR Code
// QR Hover Popup

// Clear up styles (App.css)

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="centered">
        <div className="lhs">
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
            <a href="https://apps.apple.com/us/app/honk/id1458452703">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="download app - qr code"
                className="qr-code"
              />
            </a>
          </div>
          <div>
            <p className="copyright">© 2023 Los Feliz Engineering</p>
            <div class="footer-nav">
              <a href="https://example.com/">Privacy</a>
              <a href="https://example.com/">Terms</a>
              <a href="https://example.com/">FAQs</a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/intent/user?screen_name=usehonk"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="rhs">
          <img
            src="https://www.vhv.rs/dpng/d/396-3968705_mobile-app-icon-transparent-hd-png-download.png"
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
