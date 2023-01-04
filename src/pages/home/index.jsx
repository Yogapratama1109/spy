import React from 'react'
import '../home/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/1.png'
import image from '../image/2.png'


const Home = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">

              <a class="navbar-brand" href="#">
                  <img src={logo} alt=""/>
              </a>

              <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
              </button>

              
              <div class="navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <div class="menu">
                    <a class="nav-link active"href="#">Beranda</a>
                    <a class="nav-link" href="#">Donasi</a>
                    <a class="nav-link" href="#">Kegiatan</a>
                    <a class="nav-link" href="#">Bergerak Dibidang</a>
                  </div>

                  <div class="getStarted">
                      <div class="polygon">
                          <div class="clipath"></div>
                      </div>
                      <div class="buttonWrapper">
                        <a href="#" class="nav-link">Get Started</a>
                      </div>
                  </div>

                </div>
              </div>
            </div>
        </nav>
        {/* <!-- App --> */}
        <div className="app-container">
          <div className='flex-1'>
            <div className='group-1'>
              <div className='text-1'>
                <h1>Membuat <span>hidup</span> seseorang menjadi <span>lebih baik</span> dengan memberikan milikmu.</h1>
              </div>
              <div className='text-2'>
              “Aku dan orang yang menanggung anak yatim (kedudukannya) di surga seperti ini”, kemudian beliau shallallahu 'alaihi wa sallam mengisyaratkan jari telunjuk dan jari tengah beliau shallallahu 'alaihi wa sallam, serta agak merenggangkan keduanya.” (HR. Bukhari)
              </div>
              <div className='group-1'>
                <div className='button-1'>

                </div>
                <div className='button-2'>

                </div>
              </div>
            </div>
            <div className='image'>
              <img src={image} alt=""/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home
