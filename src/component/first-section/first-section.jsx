const FirstSection = () => {
  return (
    <div className="container-1">
      <div className="headerset">
        <div className="logoset">Allies</div>
        <div className="item">Why Allies?</div>
        <div className="item">Features</div>
        <div className="item">Pricing</div>
        <div className="item">
          <img
            style={{ paddingTop: "7px" }}
            src="/assets/login.png"
            className="login"
          />
        </div>
      </div>
      <div className="app-image">
        <img src="/assets/firstapp1.png" className="app-image1" />
        <img src="/assets/firstapp2.png" className="app-image2" />
      </div>
    </div>
  );
};
export default FirstSection;
