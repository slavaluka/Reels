import "./iphone.css";

export default function Iphone() {
  return (
    <div className="scene">
      <div className="phone-con">
        <div className="phone">
          <div className="buttons">
            <div className="left">
              <div className="button"></div>
              <div className="button"></div>
              <div className="button"></div>
            </div>
            <div className="right">
              <div className="button"></div>
            </div>
          </div>
          <div className="camera"></div>
          <div className="screen-container">
            <div className="bg"></div>
            <div className="notch-container" tabIndex={0}>
              <div className="notch">
                <div className="content">
                  <div className="left">
                    <div className="tile"></div>
                    <div className="text"></div>
                  </div>
                  <div className="right"></div>
                  <div className="bar">
                    <div className="duration"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="notch-blur"></div>
            <div className="screen"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
