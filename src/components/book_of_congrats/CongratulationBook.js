import React, { useEffect } from "react";
import "./book.scss";
import anna from "../../images/anna.jpg";
import classNames from "classnames";
import audio from "../../dich.mp3";

const music = new Audio(audio);

const CongratulationBook = ({ isOpen, setOpen, setActive }) => {
	useEffect(() => {
		if (isOpen) {
			music.play();
		} else {
			music.pause();
			music.load();
		}
	}, [isOpen]);

	return (
		<div className="book">
			<div
				className={classNames("card", { "card--open": isOpen })}
				onClick={() => {
					if (!isOpen) setActive(true);
					setOpen(!isOpen);
				}}
			>
				<div className="card__image-box">
					<div className="card__bark" />
					<div className="card__image-box__img">
						<img src={anna} alt="anya" />
					</div>
					<h3 className="card__image-box__text">Нажми мне на нос</h3>
				</div>
				<div className="details">
					<h4 className="color1">Дорогая Аня</h4>
					<h4 className="color2 margin">С днем рождения !!!</h4>
					<div className="text">
						<p>Пусть я не смогу быть </p>
						<p>с тобой в этот день,</p>
						<p>Но я постараюсь создать атмосферу</p>
						<p>праздника этой открыткой,</p>
						<p>Ты на столько замечательный человек</p>
						<p>Что все люди, находящиеся рядом</p>
						<p>с тобой становятся счастливее,</p>
						<p>И я желаю тебе быть самой счастливой :)</p>
						<br />
						<p className="text-right">С днем рождения, лисёнок!</p>
						<p className="text-right">♥Антончик</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CongratulationBook;
