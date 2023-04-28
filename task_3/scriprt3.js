//================================= Задача 3 ====================================
// Задача 3.Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.

class IsNotNumber extends Error {
  constructor() {
    super()
    this.message = "Має бути число"
    this.name = "IsNotNumber"
  }
}

class Diapazon extends Error {
  constructor() {
    super()
    this.message = "Ви ввели значення за межами діапозону"
    this.name = "Diapazon"
  }
}

class IsHoliday extends Error {
  constructor() {
    super()
    this.message = "Ви вказали місяці канікул"
    this.name = "IsHoliday"
  }
}

class Student {
  constructor() {
    this.month = parseInt(prompt("Введіть номер місяця від 1 до 12"))
    this.score = parseInt(prompt("Введіть оцінку учня від 1 до 100"))
  }
  finalResult() {
    if (this.score < 75 && this.month !== 11 && this.month !== 5)
      alert(`Ви можете виправити оцінку`)
    else if (this.score > 75) alert(`Вам не потрібно виправляти оцінку`)
    else if (this.month === 11 || this.month === 5)
      alert(`Нажаль Ви не зможете виправити оцінку`)
  }

  validateValuesUser() {
    try {
      if (isNaN(this.month) || isNaN(this.score)) throw new IsNotNumber()
      if (
        this.month < 1 ||
        this.month > 12 ||
        this.score < 1 ||
        this.score > 100
      )
        throw new Diapazon()
      if (this.month === 6 || this.month === 7 || this.month === 8)
        throw new IsHoliday()
    } catch (err) {
      if (err instanceof IsNotNumber) alert(`${err.message} \nСпробуйте ще раз`)
      else if (err instanceof Diapazon)
        alert(`${err.message} \nСпробуйте ще раз`)
      else if (err instanceof IsHoliday) alert(`${err.message}`)

      return false
    }
    return true
  }
}

let student = new Student()
student.validateValuesUser()
student.finalResult()
