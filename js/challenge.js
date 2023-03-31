document.addEventListener("DOMContentLoaded", function () {
	const counter = document.querySelector("#counter");
	const minusBtn = document.querySelector("#minus");
	const plusBtn = document.querySelector("#plus");
	const likeBtn = document.querySelector("#heart");
	const pauseBtn = document.querySelector("#pause");
	const likesList = document.querySelector(".likes");
	const commentsList = document.querySelector("#list");
	const commentForm = document.querySelector("#comment-form");
	const submitBtn = document.querySelector("#submit");
	const commentInput = document.querySelector("#comment-input");
	let count = 0;
	let interval;

	function setTimer() {
		interval = setInterval(() => {
			count++;
			counter.textContent = count;
		}, 1000);
	}

	minusBtn.addEventListener("click", () => {
		count -= 2;
	});

	plusBtn.addEventListener("click", () => {
		count += 1;
	});

	likeBtn.addEventListener("click", () => {
		const li = document.createElement("li");
		console.log(likesList);
		li.textContent = count;
		likesList.appendChild(li);
	});

	pauseBtn.addEventListener("click", () => {
		console.log(pauseBtn.textContent === " pause ");
		if (pauseBtn.textContent === " pause ") {
			console.log("YES");
			pauseBtn.textContent = " resume ";
			minusBtn.disabled = true;
			plusBtn.disabled = true;
			likeBtn.disabled = true;
			submitBtn.disabled = true;
			clearInterval(interval);
		} else {
			pauseBtn.textContent = " pause ";
			minusBtn.disabled = false;
			plusBtn.disabled = false;
			likeBtn.disabled = false;
			submitBtn.disabled = false;
			setTimer();
		}
	});

	commentForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const p = document.createElement("p");
		p.textContent = commentInput.value;
		commentsList.appendChild(p);
		commentForm.reset();
	});

	setTimer();
});
