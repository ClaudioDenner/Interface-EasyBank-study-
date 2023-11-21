import style from './css/SectionTwo.module.css'
import online from '../assets/images/icon-online.svg'
import budgeting from '../assets/images/icon-budgeting.svg'
import onboarding from '../assets/images/icon-onboarding.svg'
import api from '../assets/images/icon-api.svg'

function SectionTwo() {
  return (
    <div className={style.container}>
        <h1 className={style.titles}>
            Why choose Easybank?
        </h1>

        <p className={style.paragraph}>
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>

        <div className={style.container_1}>
            <div className={style.card}>
                <img src={online} className={style.imgs} />
                <h2 className={style.subtitle}>
                    Online Banking
                </h2>

                <p className={style.paragraph}>
                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
            </div>

            <div className={style.card}>
                <img src={budgeting} className={style.imgs}/>

                <h2 className={style.subtitle}>
                    Simple Budgeting
                </h2>

                <p className={style.paragraph}>
                See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                </p>                
            </div>

            <div className={style.card}>
                <img src={onboarding} className={style.imgs}/>
                <h2 className={style.subtitle}>
                    Fast Onboarding
                </h2>

                <p className={style.paragraph}>
                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                </p>
            </div>

            <div className={style.card}>
                <img src={api} className={style.imgs}/>

                <h2 className={style.subtitle}>
                    Open API
                </h2>

                <p className={style.paragraph}>
                Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                </p>
            </div>
        </div>

 

    </div>
  )
}

export default SectionTwo