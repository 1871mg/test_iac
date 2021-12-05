import React from 'react';
import styles from './Main.module.css'
import mainimg from './img/robot-head.png';
import line from './img/line.svg';
import fb from './img/fb.svg';
import vk from './img/vk.svg';
import tw from './img/tw.svg';
import od from './img/od.svg';
// import {Link} from "react-router-dom";

function Main() {
	let maintext = "Разработка чат‑бота для подразделения\nУниверситета ИТМО";
	const [visible, setVisible] = React.useState(false);

	return (
		<div className={styles.main}>
			<div className={styles.maincontainer}>

				<h1 className={styles.heading}>{maintext}</h1>

				<div className={styles.maincontainerleftright}>

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
						<div className={styles.yellowbutton}>
							<div className={styles.yellowbuttontext}>Реализовать инициативу</div>
						</div>

						<div className={styles.maintexth5}>Голосовать</div>
						<div className={styles.cyanpinkbuttons}>
							<div className={styles.cyanbutton}>
								<div className={styles.cyanbuttontext}>За</div>
							</div>
							<div className={styles.pinkbutton}>
								<div className={styles.pinkbuttontext}>Против</div>
							</div>
						</div>

						{/*<img src = {votefor} alt=""*/}
						{/*     onMouseOver={e => (e.currentTarget.src = voteforhover)}*/}
						{/*     onMouseOut={e => (e.currentTarget.src = votefor)}*/}
						{/*/>*/}

						<div className={styles.maintexth5}>Статистика</div>
						<img className={styles.line} src = {line} alt="" />
						<div className={styles.maintextvote}>За: <span className={styles.maintextvotespan}>11 789</span></div>
						<div className={styles.maintextvote}>Против: <span className={styles.maintextvotespan}>23 213</span></div>
						<div className={styles.maintextvote}>Всего: <span className={styles.maintextvotespan}>35 002</span></div>

						<div className={styles.maintexth5}>Поделиться</div>
						<div className={styles.socials}>
							<div className={styles.social}><img className={styles.socialimg} src = {fb} alt="" /></div>
							<div className={styles.social}><img className={styles.socialimg} src = {vk} alt="" /></div>
							<div className={styles.social}><img className={styles.socialimg} src = {tw} alt="" /></div>
							<div className={styles.social}><img className={styles.socialimg} src = {od} alt="" /></div>
					</div>

						<div className={styles.maintexth5plus23pxbottom}>Сроки</div>
						<div className={styles.maintextvote}>До конца голосования осталось: <span className={styles.maintextvotetimespan}>41 день</span></div>

					</div>
				</div>

				<div className={styles.maincontainerbottom}>
					<div className={styles.maintexth5}>Оставить комментарий</div>
					<textarea className={styles.maininput}>Все комментарии взяты с сайта инициатив Ростова-на-Дону для прмиера :)</textarea>
					<div className={styles.maintexth5}>Геннадий Сергейчик</div>
					<div className={styles.maintextcomment}>27 дня назад в 20:48</div>
					<div className={styles.maintext}>А вы, для начала, попробуйте восстановить просто трамвайную ветку, по 39-й линии, до ЖК"Красный Аксай", да по Ченцова, от 14-й линии, до 26-й, как было до войны, у "плохих" коммунистов, и посмотрите окупаемость, сейчас стало модно всё считать, демократия-с. Тут только по Ченцова сколько надо перекладывать коммуникаций из-за простых рельсов. А мечтать о монорельсе, так посмотрите, как в Москве, с чем уже столкнулись, с какими проблемами. А ведь там средств побольше.</div>
					<div className={styles.maintextanswer}>Ответить</div>

					<div className={styles.maintexth5}>Сергей Калюжный</div>
					<div className={styles.maintextcomment}>22 дня назад в 12:34</div>
					<div className={styles.maintext}>Все проблемы от лени и нежелания! Трамвай восстановить!))) Так давайте на (каретах) ездить. Наймем кучеров вместо водителей)</div>
					<div className={styles.maintextanswer}>Ответить</div>

					<div className={styles.maintexth70pxright}>
						<div className={styles.maintexth5}>Иван Малышев</div>
						<div className={styles.maintextcomment}>22 дня назад в 12:34</div>
						<div className={styles.maintext}>К чему эти крайности?Трамвай в европе сейчас - это самый современный вид транспорта.</div>
						<div className={styles.maintext}>Конечно, речь о современном трамвае, а не о том, что у нас по Горького и Станиславского ходит.</div>
						<div className={styles.maintextanswer}>Ответить</div>
					</div>

					<div className={styles.maintexth5}>Константин Чураков</div>
					<div className={styles.maintextcomment}>27 дня назад в 20:48</div>
					<div className={styles.maintext}>Один день для Вас не в счет? Геннадий а не будет ли два снегопада в следующем году?  Я понял деньгами Вас работать не заставишь. Вам пол дня прогулять за оклад подавай. Но это не демократия. Это менталитет.</div>
					<div className={styles.maintextcancel}>Отмена</div>
					<div className={styles.maininput}><div className={styles.maintextinput}>Ок. Тогда зачем старые рельсы выдернули от северного, по нагибина, по текучева и буденновскому , до ц. Рынка??? Новые не положили и все в асфальт. А металл продали и и бабки попелили(((</div></div>

				</div>

			</div>
		</div>
	);
}

export default Main;
