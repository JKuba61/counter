const counterBox = document.querySelector(`.counter`)
const counterItem = document.querySelectorAll(`.counter__number`)

const options = {
	rootMargin: `-370px`,
}
const handleCounter = entry => {
	if (entry[0].isIntersecting) {
		counterItem.forEach(item => {
			const updateCounter = () => {
				const finalNumber = item.getAttribute(`data-number`)
				speed = finalNumber / 300
                console.log(speed);
				value = parseInt(item.textContent)

				if (value < finalNumber) {
					item.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 1)
				} else item.textContent = finalNumber
			}

			updateCounter()
		})
	}
}
const observer = new IntersectionObserver(handleCounter, options)
observer.observe(counterBox)
