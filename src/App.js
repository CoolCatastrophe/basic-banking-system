import "./style.css";
import supabase from "./supabase";
import Hero from "./Hero";
import Features from "./Features";
import Transfers from "./Transfers";
import UsersTable from "./Userstable";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const { data: customers } = await supabase
        .from("customers")
        .select("*")
        .order("currentBalance", { ascending: false });
      setUserData(customers);
    }
    getUsers();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <UsersTable userData={userData} />
      <Transfers userData={userData} setUserData={setUserData} />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="./index.html" className="logo">
          <svg
            className="logo-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z" />
          </svg>
        </a>
        <strong>
          MoneyWise<sup>&copy;</sup>
        </strong>
      </div>
      <span></span>
      <nav className="nav">
        <ul className="nav-items">
          <li>
            <a className="nav-link" href="./index.html">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#users">
              Users
            </a>
          </li>
          <li>
            <a className="nav-link" href="#transfers">
              Transfers
            </a>
          </li>
          <li>
            <button className="nav-button">Explore Now</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  const DataColumn1 = ["Create account", "Sign in", "iOS app", "Android app"];

  const DataColumn2 = [
    "About MoneyWise",
    "For Business",
    "Our partners",
    "Careers",
  ];

  return (
    <footer className="footer">
      <div className="footer-start">
        <div className="logo-container">
          <a href="./index.html">
            <svg
              className="footer-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 21h-4v-11h4v11zm7-11h-4v11h4v-11zm7 0h-4v11h4v-11zm2 12h-22v2h22v-2zm-23-13h24l-12-9-12 9z" />
            </svg>
          </a>
          <strong className="logo-text">
            MoneyWise<sup>&copy;</sup>
          </strong>
        </div>
        <ul className="social-links">
          <li>
            <a className="footer-link" href="example.com">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a className="footer-link" href="example.com">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a className="footer-link" href="example.com">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
        <p className="copyright">
          Made with ❤️ for The Sparks Foundation : Graduate Rotational Internship
          Program.
        </p>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>910 Money Management Road, Bengaluru, Karnataka, India</p>
        <p>+91 415-201-6370</p>
        <p>support@moneywisebank.com</p>
      </div>
      <div className="footer-column">
        <h3>Account</h3>
        <ul>
          {DataColumn1.map((item, index) => (
            <li key={index}>
              <a className="footer-link" href="index.html">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          {DataColumn2.map((item, index) => (
            <li key={index}>
              <a className="footer-link" href="index.html">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default App;
