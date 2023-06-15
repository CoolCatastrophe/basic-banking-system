function Features() {
  return (
    <section className="features-section">
      <h2 className="features-heading">Experience the Difference :</h2>
      <img
        className="underline"
        alt="underline"
        src="./illustrations/underline.svg"
      />
      <div className="features">
        <div className="feature">
          <ion-icon name="shield-checkmark-outline"></ion-icon>
          <h2>Secure Transactions</h2>
          <p className="features-description">
            We ensure the security of customer transactions and personal
            information.
          </p>
        </div>
        <div className="feature">
          <ion-icon name="star-outline"></ion-icon>
          <h2>Financial Expertise</h2>
          <p className="features-description">
            We provide expert financial assistance to help customers make
            informed decisions.
          </p>
        </div>
        <div className="feature">
          <ion-icon name="flash-outline"></ion-icon>
          <h2>Advanced Technology</h2>
          <p className="features-description">
            We leverage cutting-edge technology to provide efficient and
            convenient banking services.
          </p>
        </div>
        <div className="feature">
          <ion-icon name="extension-puzzle-outline"></ion-icon>
          <h2>Personalized Service</h2>
          <p className="features-description">
            We offer personalized and tailored solutions to meet individual
            customer needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;