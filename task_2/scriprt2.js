"use strict"
//================================= Задача 2 ====================================
// Задача 2.Розробити Класи

// House   Dog  Bird
// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення

// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)

// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення

// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))

// --- властивості ---
// Координата Х
// Координата У
// шлях до зображення
// інтервал оновлення

// --- методи ---
// генерування елемента розмітки
// оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)

// Подумайте яким має бути спільний клас предок.
// )


//================================================================================

class Farce {
  constructor(positionX, positionY, url, interval) {
    this.positionX = positionX
    this.positionY = positionY
    this.url = url
    this.interval = interval
	 this.el = this.createElement()
  }
  createElement() {
    this.container = document.createElement("div")
	 this.container.classList.add('image')
	 this.container.style.left = `${this.positionX}%`
	 this.container.style.top = `${this.positionY}%`
    this.img = document.createElement("img")
	 this.img.classList.add("picture")
	 this.img.src = this.url
    this.container.append(this.img)
	 return this.container
  }
  getRandom(min,max){
	 return min + Math.floor(Math.random() * (max - min + 1))
  }

  render(targetSelector){

	document.querySelector(targetSelector).append(this.el)
  }
}

class House extends Farce {
  constructor(positionX, positionY, url, interval) {
    super(positionX, positionY, url, interval)
    this.house = this.createElement()
  }
  getScale() {
    let interval = setInterval(() => {
      this.img.style.transform = `scale(${this.getRandom(1.5, 2)})`
    },this.interval * 1000)
  }
  render(targetSelector) {
		document.querySelector(targetSelector).append(this.house)
  }
}

class Dog extends Farce {
  constructor(positionX, positionY, url, interval) {
    super(positionX, positionY, url, interval)
    this.dog = this.el
  }
  getMove() {
    let interval = setInterval(() => {
      this.container.style.left = `${this.getRandom(10, 90)}%`
    }, this.interval * 1000)
  }
  render(targetSelector) {
    document.querySelector(targetSelector).append(this.dog)
  }
}

class Bird extends Farce {
  constructor(positionX, positionY, url, interval) {
    super(positionX, positionY, url, interval)
	 this.bird = this.createElement()
	 console.log(this.bird)
  }

  getMove() {
    let interval = setInterval(() => {
      this.container.style.top = this.getRandom(10, 90) + "%"
		this.container.style.left = this.getRandom(10, 90) + "%"
    }, this.interval * 1000)
  }
  render(targetSelector) {
    document.querySelector(targetSelector).append(this.bird)
  }
}

const house = new House(50,30,'../img/house_PNG39.png',2)
house.render("#block")
house.getScale()
const dog = new Dog(20,30,"../img/dog.png",3)
dog.render("#block")
dog.getMove()
const bird = new Bird(60, 80,"../img/bird.png", 2)
bird.render("#block")
bird.getMove()
