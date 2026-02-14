import Image from "next/image";
import { useState } from "react";
import "./app/layout.css";

// Görevler:
//  Kullanıcının oturum durumunu useState veya useReducer hook'u ile yöneteceğiz.
//    - Eğer kullanıcı giriş yapmamışsa (isAuthUser === false), yalnızca Login butonu görüntülenmelidir.
//    - Eğer kullanıcı giriş yapmışsa (isAuthUser === true), Dashboard ve Sign out linkleri görüntülenmelidir.
//  Login butonuna tıklandığında, kullanıcı oturum açmalı ve Dashboard ile Sign out linkleri görünmelidir.
//  Sign out linkine tıklandığında, kullanıcı oturumu kapatmalı ve yalnızca Login butonu görünmelidir.
//  Logo bileşenini bağımsız bir bileşen olarak tanımlayın ve tasarımı bozmadan üstte görüntüleyin.
//  Beklenen çıktıyı görmek için public/preview1.png  ve public/preview2.png dosyalarını inceleyin.

// Ek görev:
// - Navbar'a bir Contact Us linki ekleyin ve bu linkin her iki durumda da (giriş yapmış ya da yapmamış) görünür olmasını sağlayın.

export default function Navbar() {
  const [isAuthUser, setIsAuthUser] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Logo />

        <h1 className="navbar-title">Hesabınıza giriş yapın</h1>

        <div className="navbar-links">
          {!isAuthUser ? (
            <a
              href="#"
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                setIsAuthUser(true);
              }}
            >
              Login
            </a>
          ) : (
            <>
              <a href="#" className="navbar-link">
                Dashboard
              </a>

              <a
                href="#"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAuthUser(false);
                }}
              >
                Sign out
              </a>
            </>
          )}

          <a href="#" className="navbar-contact">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo-wrapper">
      <a href="#" className="logo-link" aria-label="Home">
        <Image
          className="logo-img"
          src="/mark.svg"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
      </a>
    </div>
  );
}
