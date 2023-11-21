import style from './css/SectionOne.module.css'
import mockups from '../assets/images/image-mockups.png'

function SectionOne() {
  return (
    <div className={style.container}>
        <div className={style.container_1}>
          <img src={mockups} className={style.mockup} />
        </div>
        
        <div className={style.container_2}>
            <h1 className={style.title}>Next generation digital banking</h1>
            <p className={style.paragraph}>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more
            </p>
            <button className={style.button}>
                Request Invite
            </button>
        </div>

    </div>
  )
}

export default SectionOne