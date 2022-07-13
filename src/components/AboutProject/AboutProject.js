import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__shell'>
        <article>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='about-project__time-line_shell'>
        <div className='about-project__time-line_first'>1 неделя</div>
        <div className='about-project__time-line_sec'>4 недели</div>
      </div>
      <div className='about-project__time-line_description_shell'>
        <p className='about-project__time-line_description_back about-project__time-line_description_text'>
          Back-end
        </p>
        <p className='about-project__time-line_description_front about-project__time-line_description_text'>
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
