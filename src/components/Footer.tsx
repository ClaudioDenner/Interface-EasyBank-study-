import style from './css/Footer.module.css'
import logo from '../assets/images/logo-white.svg'
import facebook from '../assets/images/icon-facebook.svg'
import youtube from '../assets/images/icon-youtube.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'



export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.bloco_1}>
        <div className={style.section_1}>
          <img src={logo} />
          <div className={style.media_socials}>
              <img src={facebook} className={style.icon_media}/>
              <img src={youtube} />
              <img src={twitter} />
              <img src={pinterest} />
              <img src={instagram}/>
              
          </div>
        </div>

          <ul className={style.list}>
              <a href='#'><li>About Us</li></a>
              <a href='#'><li>Contact</li></a>
              <a href='#'><li>Blog</li></a>
              <a href='#'><li>Careers</li></a>
              <a href='#'><li>Support</li></a>
              <a href='#'><li>Privacy Policy</li></a>
          </ul>
      </div>

      <div className={style.section_2}>
        <button className={style.button}>
            Request Invite
        </button>

        <p className={style.paragraph}>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}
