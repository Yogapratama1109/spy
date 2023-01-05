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
import imagedua from '../image/2.png'
import imagetiga from '../image/3.png'
import imageempat from '../image/4.png'
import iconDonasi from '../image/icon-donasi.png'
import imagelima from '../image/5.png'
import imageenam from '../image/6.png'


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
                      <a href="#" class="nav-link"><img className='icon-donasi' src={iconDonasi} alt=""/>Donasi</a>
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
                  <p className='btn-text'>Donasi Sekarang</p>
                </div>
                <div className='button-2'>
                <img className='img-empat' src={imageempat} alt=""/><span className='text-btn'>Lihat Video</span>
                </div>
              </div>
            </div>
            <div className='image'>
              <img className='pic' src={imagedua} alt=""/>
            </div>
          </div>
          <div className='main'>
            <div className='flex-2'>
              <img className='img' src={imagetiga} alt=""/>
              <div className='about'>
                <h4>Tentang Kami</h4>
                <h3>Apa Sih Sahabat Peduli Yatim Tuh ?</h3>
                <p className='p-1'>Sahabat Peduli Yatim adalah sebuah komunitas sosial agama, dengan konsep mengadakan santunan dari masjid ke masjid setiap bulannya.</p>
                <div className='flex-3'>
                  <div className='satu'>
                    <p className='angka-satu'>5</p><p className='t-satu'>Tahun Berdiri</p>
                  </div>
                  <div className='dua'>
                    <p className='angka-dua'>40</p><p className='t-dua'>Orang Volunteer SPY</p>
                  </div>
                  <div className='tiga'>
                    <p className='angka-tiga'>56</p><p className='t-tiga'>Kegiatan Terencana</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='section-bidang'>
                <h4 className='text-satu'>Bergerak Dibidang</h4>
                <h3 className='text-dua'>Dibidang Apa Aja Ya?</h3>
            </div>
            {/* Banner */}
            <div class="banner">
                <div class="wrapperBanner">
                    <div class="imagePreview">
                      <img className='img' src={imageenam} alt=""/>
                    </div>

                </div>
            </div>
            {/* End Banner */}
          </div>
        </div>
    </>
  )
}

export default Home
