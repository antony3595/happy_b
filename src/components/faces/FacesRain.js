import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import heartIc from "../../images/face.png";

let Heart = function () {
	this.x = 0;
	this.y = 0;
	this.vy = 0;
	this.vx = 0;
	this.size = 0;
	this.reset();
};

const FacesRain = ({ setActive, triggerCoords, fiesta }) => {
	const canvasRef = useRef(null);
	const skyRef = useRef(null);

	useEffect(() => {
		let particleMax = 30;
		const canvas = canvasRef.current;
		const sky = skyRef.current;
		let ctx = canvas.getContext("2d");
		let width = sky.clientWidth;
		let height = sky.clientHeight;
		let i = 0;
		let active = false;
		let hearts = [];
		let heart;

		canvas.style.position = "absolute";
		canvas.style.left = canvas.style.top = "0";

		Heart.prototype.reset = function () {
			this.x = Math.random() * width;
			this.y = Math.random() * -height;
			// const [triggerX, triggerY] = triggerCoords;
			// this.x = triggerX;
			// this.y = triggerY;
			this.vy = 1 + Math.random() * 3;
			this.vx = 0.5 - Math.random();
			this.size = Math.random() * 20 + 40;
		};

		function generateSnowFlakes() {
			hearts = [];
			for (i = 0; i < particleMax; i++) {
				heart = new Heart();
				heart.reset();
				hearts.push(heart);
			}
		}

		generateSnowFlakes();

		function update() {
			ctx.clearRect(0, 0, width, height);

			if (hearts.every((item) => item.y > height)) {
				setActive(false);
				return;
			}

			for (i = 0; i < hearts.length; i++) {
				heart = hearts[i];
				heart.y += heart.vy;
				heart.x += heart.vx;

				ctx.globalAlpha = heart.o;
				ctx.beginPath();
				const flakeImg = new Image();
				flakeImg.src = heartIc;
				ctx.drawImage(flakeImg, heart.x, heart.y, heart.size, heart.size);

				ctx.closePath();
				ctx.fill();
			}

			window.requestAnimFrame(update);
		}

		function onResize() {
			width = sky.clientWidth;
			height = sky.clientHeight;
			canvas.width = width;
			canvas.height = height;

			let wasActive = active;
			active = true;

			if (!wasActive && active) {
				window.requestAnimFrame(update);
			}
		}

		// shim layer with setTimeout fallback
		window.requestAnimFrame = (function () {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function (callback) {
					window.setTimeout(callback, 1000 / 60);
				}
			);
		})();

		onResize();
		window.addEventListener("resize", onResize, false);
		return () => {
			ctx.clearRect(0, 0, width, height);
			window.removeEventListener("resize", onResize, false);
		};
	}, [setActive]);
	return (
		<section className="sky" onClick={(event) => console.log(event.clientX + " ", event.clientY)} ref={skyRef}>
			<canvas ref={canvasRef} />
		</section>
	);
};

FacesRain.propTypes = {
	setActive: PropTypes.func.isRequired,
};

export default FacesRain;
