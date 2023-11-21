import style from './css/SectionThree.module.css'
import imgMoney from '../assets/images/image-currency.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'
import airplane from '../assets/images/image-plane.jpg'
import confetti from '../assets/images/image-confetti.jpg'

function SectionThree() {
  return (
    <div className={style.container}>

      <h1 className={style.mainTitle}>
        Latest Articles
      </h1>

      <div className={style.section_2}>
        <div className={style.card}>
          <img src={imgMoney} className={style.img_card}/>
          <h2 className={style.author_card}>
            By Claire Robinson
          </h2>
          <h1 className={style.title_card}>
            Receive money in any currency with no fees
          </h1>
          <p className={style.paragraph}>
          The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …
          </p>
        </div>

        <div className={style.card}>
          <img src={restaurant} className={style.img_card}/>
          <h2 className={style.author_card}>
            By Wilson Hutton
          </h2>
          <h1 className={style.title_card}>
          Treat yourself without worrying about money
          </h1>
          <p className={style.paragraph}>
          Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
          </p>
        </div>

        <div className={style.card}>
          <img src={airplane} className={style.img_card}/>
          <h2 className={style.author_card}>
            By Wilson Hutton
          </h2>
          <h1 className={style.title_card}>
            Take your Easybank card wherever you go
          </h1>
          <p className={style.paragraph}>
          We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>

        <div className={style.card}>
          <img src={confetti} className={style.img_card}/>
          <h2 className={style.author_card}>
            By Claire Robinson
          </h2>
          <h1 className={style.title_card}>
          Our invite-only Beta accounts are now live! 
          </h1>
          <p className={style.paragraph}>
          After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  ) 
}

export default SectionThree