import React from 'react'
import '../components/About.css';
import { logoImages } from '../helper/images'

function About() {
  return (
    <div>
      <div className="profesional_plans">
        <h1>ПРОФЕСИОНАЛНА ОБУЧИТЕЛНА ПРОГРАМА</h1>
        <div className="grid_template_program">
          <div className="grid">
            <div className="grid_template">
              <span>Анализ</span>
            </div> 
            <div className="grid_template">
              <span>Персонализиран план</span>
            </div>
            <div className="grid_template">
              <span>Професионален коучинг</span>
            </div>
            <div className="grid_template">
              <span>Мобилна комуникация</span>
            </div>
            <div className="grid_template"> 
              <span>Доклад за напредъка</span>
            </div> 
          </div>
          <div className="program_info">
            <ul>
              <li>
                Ние анализираме вашето тяло, идентифицираме вашите специфични фитнес нужди и създаваме индивидуални планове, за да практикувате ефективно.
              </li>
              <li>
                Предоставяме персонализирано обучение под ръководството на ТАНЖУ ТАСИМ и проследяваме ежедневно с нашето професионално мобилно приложение.
              </li>
              <li>
                Анализираме напредъка ви на седмична/месечна база, проверяваме и преразглеждаме плановете ви, за да постигнете максимални резултати.
              </li>
              <li>
                За да спазвате напълно програмата, ние поддържаме вашата мотивация на върха и възнаграждаваме вашата стабилност.
              </li>
              <li>
                Когато достигнете мечтаното тяло, ние сме винаги с вас, за да го защитим.
              </li>
            </ul>
          </div>

        </div>
        <div className="about_template">
          <div className="about_section">
            <h1>ПРОМЯНА НА <span>ФОРМАТА</span> </h1>
            <div className="main_about">
              <p> 
                ДА ИМАТЕ ЗДРАВО И ПОДГЛЕДАНО ТЯЛО // Намалена мастна маса, увеличена мускулна сила и издръжливост Имунна система с висока енергия и сила // Запознайте се с текст без тревожност, стрес, умора и депресия
              </p>
              <button>РЕГИСТРИРАЙ СЕ</button>
            </div>
            
          </div>
          <div className="about_img">
              <img src={logoImages.testImg} alt="" />
          </div>
        </div>
        
      </div>
      <div className="programs_section">
        <div className="training_tempalte">
          <div className="programs training_program">
            <div className="layout">
              <div className="showing_line">
                  <span>ТРЕНИРОВАЧНА ПРОГРАМА</span>
              </div>
              <div id='layout_span'>
                <span >ВИЖ <i class="fa-solid fa-arrow-right-long"></i></span>
              </div>
              
            </div>
            
            
          </div>
          <div className="programs training_program">
            <div className="layout">
            <div className="showing_line">
                  <span>ОЩЕ МИСЛЯ</span>
              </div>
              <div id='layout_span'>
                <span >ВИЖ <i class="fa-solid fa-arrow-right-long"></i></span>
              </div>
            </div>
          </div>
          <div className="programs training_program">
            <div className="layout">
              <div className="showing_line">
                  <span>ЩЕ ГО ИЗМИСЛЯ</span>
              </div>
              <div id='layout_span'>
                <span >ВИЖ <i class="fa-solid fa-arrow-right-long"></i></span>
              </div>
            </div>
            
          </div>
          <div className="programs training_program">
            <div className="layout">
            <div className="showing_line">
                  <span>ИЗМИСЛИХ ГОО</span>
              </div>
              <div id='layout_span'>
                <span >ВИЖ <i class="fa-solid fa-arrow-right-long"></i></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;
