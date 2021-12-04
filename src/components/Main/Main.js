import React, { useState } from 'react';
import styles from './Main.module.css'
import mainimg from './img/robot-head.png';
import yellowbutton from './img/yellowbutton.svg';
import yellowbuttonhover from './img/yellowbuttonhover.svg';
import against from './img/against.svg';
import againsthover from './img/againsthover.svg';
import votefor from './img/votefor.svg';
import voteforhover from './img/voteforhover.svg';
import line from './img/line.svg';
import fb from './img/fb.svg';
import vk from './img/vk.svg';
import tw from './img/tw.svg';
import od from './img/od.svg';
import {Link} from "react-router-dom";

function Main() {
	let maintext = "Разработка чат‑бота для подразделения\nУниверситета ИТМО";
	const [visible, setVisible] = React.useState(false);

	return (
		<div className={styles.main}>
			<div className={styles.maincontainer}>

				<h1 className={styles.heading}>{maintext}</h1>

				<div className={styles.maincontainerleft}>
					<img className={styles.mainimg} src={mainimg} alt="" />
					<div className={styles.maintext}>Студенческий офис, как единый информационный центр, сталкивается с множеством обращений, которые схожи по своей сути и приводят к одинаковым ответам, но создают большую нагрузку на сотрудников. Одним из наиболее популярных форматов обращений является использование формы обратной связи, что свидетельствует о том, что студентам удобно задавать вопросы и получать ответы в текстовом формате. В данный момент ответы на обращения можно получить только в период работы офиса.</div>
					<div className={styles.maintexthide}>Изменить эту ситуацию может внедрение чат‑бота для студенческого офиса. Чат‑бот — специально обученная программа, которая имитирует речевое поведение человека в переписке, анализируют заданный вопрос и подбирает ответы из заранее сформированного реестра. В компании МТС сообщают, что 80% клиентов компании устраивают ответы, полученные от ботов. Также в компании прогнозируют, что к 2023 году 80% общения с клиентами будет осуществляться в автоматическом режиме. Эффективность использования чат-ботов доказывает и исследование разработчика CRM-системы Salesforce, проведенное в прошлом году. Согласно полученным данным, 69% клиентов предпочитают использовать чат‑бот для связи с компанией и решения возникающих вопросов. 35% опрошенных полагают, что чат‑боты более эффективны и удобны, чем приложение, для ответов на простые вопросы и разрешения нестандартных ситуаций.</div>
					<div className={styles.maintexthide}>Предлагается создать чат‑бота для ответов на популярные обращения в студенческий офис на платформе Телеграм. Для успешной реализации проекта необходимо совместно со студенческим офисом разработать реестр вопросов и ответов, на основе которого провести обучение бота. В итоге студенты смогут получать ответы на большое количество вопросов мгновенно и в любое время суток.</div>
					{visible && <div>
							<div className={styles.maintext}>Изменить эту ситуацию может внедрение чат‑бота для студенческого офиса. Чат‑бот — специально обученная программа, которая имитирует речевое поведение человека в переписке, анализируют заданный вопрос и подбирает ответы из заранее сформированного реестра. В компании МТС сообщают, что 80% клиентов компании устраивают ответы, полученные от ботов. Также в компании прогнозируют, что к 2023 году 80% общения с клиентами будет осуществляться в автоматическом режиме. Эффективность использования чат-ботов доказывает и исследование разработчика CRM-системы Salesforce, проведенное в прошлом году. Согласно полученным данным, 69% клиентов предпочитают использовать чат‑бот для связи с компанией и решения возникающих вопросов. 35% опрошенных полагают, что чат‑боты более эффективны и удобны, чем приложение, для ответов на простые вопросы и разрешения нестандартных ситуаций.</div>
							<div className={styles.maintext}>Предлагается создать чат‑бота для ответов на популярные обращения в студенческий офис на платформе Телеграм. Для успешной реализации проекта необходимо совместно со студенческим офисом разработать реестр вопросов и ответов, на основе которого провести обучение бота. В итоге студенты смогут получать ответы на большое количество вопросов мгновенно и в любое время суток.</div>
					</div>}
					<div className={styles.maintextshow} onClick={() => setVisible(!visible)}>
						{visible ? 'Скрыть два абзаца ▲' : 'Читать весь текст ▼'}
					</div>
				</div>

				<div className={styles.maincontainerright}>

					<img src = {yellowbutton} alt=""
					     onMouseOver={e => (e.currentTarget.src = yellowbuttonhover)}
					     onMouseOut={e => (e.currentTarget.src = yellowbutton)}
					 />

					<div className={styles.maintexth5}>Голосовать</div>

					<img src = {votefor} alt=""
					     onMouseOver={e => (e.currentTarget.src = voteforhover)}
					     onMouseOut={e => (e.currentTarget.src = votefor)}
					/>

					<img src = {against} alt=""
					     onMouseOver={e => (e.currentTarget.src = againsthover)}
					     onMouseOut={e => (e.currentTarget.src = against)}
					/>

					<div className={styles.maintexth5}>Статистика</div>

					<img src = {line} alt="" />

					<div className={styles.maintextvote}>За: <span className={styles.maintextvotespan}>11 789</span></div>
					<div className={styles.maintextvote}>Против: <span className={styles.maintextvotespan}>23 213</span></div>
					<div className={styles.maintextvote}>Всего: <span className={styles.maintextvotespan}>35 002</span></div>

					<div className={styles.maintexth5}>Поделиться</div>

					<img src = {fb} alt="" />
					<img src = {vk} alt="" />
					<img src = {tw} alt="" />
					<img src = {od} alt="" />

					<div className={styles.maintexth5}>Сроки</div>
					<div className={styles.maintextvote}>До конца голосования осталось: <span className={styles.maintextvotespan}>41 день</span></div>

				</div>

				<div className={styles.maincontainerbottom}>
				</div>

			</div>
		</div>
	);
}

export default Main;
