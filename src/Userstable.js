function UsersTable({ userData }) {
  return (
    <div id="users">
      <h2 className="users-heading">Users Section</h2>
      <div className="users-section">
        <div className="users-text">
          <h2 className="user-heading">Our Valued Customers :</h2>
          <p className="users-description">
            At MoneyWise, our customers are at the heart of everything we do. We
            value each and every individual who entrusts us with their financial
            well-being. Whether you're a seasoned investor or just starting your
            financial journey, we are here to support you every step of the way.
            Our dedicated team of experts is committed to providing personalized
            services tailored to your unique needs. Join our community of
            satisfied customers and experience the difference with MoneyWise.
          </p>
          <div className="users-testimonial">
            <img
              alt="user"
              src="./images/steve.jpg"
              className="testimonial-image"
            />
            <p className="testimonial-text">
              "MoneyWise Bank has been a <strong> game-changer </strong> in my
              financial journey. The team at MoneyWise goes{" "}
              <strong>above and beyond</strong> to provide expert financial
              guidance, helping me make
              <strong> informed decisions </strong>that align with my goals"
              <span>- Steve</span>
            </p>
          </div>
        </div>
        <div>
          {userData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>email</th>
                  <th>current-balance</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.currentBalance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="newtons-cradle">
              <div className="newtons-cradle__dot"></div>
              <div className="newtons-cradle__dot"></div>
              <div className="newtons-cradle__dot"></div>
              <div className="newtons-cradle__dot"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersTable;



