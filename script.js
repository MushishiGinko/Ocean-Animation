const items = document.querySelector(".item-container")

const valueFormatter = new Intl.NumberFormat("en-us", {
  minimumIntegerDigits: 8,
  maximumFractionDigits: 0,
  useGrouping: false,
})

const total = 30000000

setupItems()

async function setupItems() {
  const display = 888888
  // moneyElem.innerText = 10234513

  const quantityLeft = Math.max(total - display, 0)
  // console.log(quantityLeft)
  const stringifiedAmount = valueFormatter.format(quantityLeft)
  const icons = {
    xxl: {
      amount: parseInt(`${stringifiedAmount[0]}${stringifiedAmount[1]}`),
      icon: "flower",
    },
    xl: {
      amount: parseInt(stringifiedAmount[2]),
      icon: "star",
    },
    lg: {
      amount: parseInt(stringifiedAmount[3]),
      icon: "bug",
    },
    md: {
      amount: parseInt(stringifiedAmount[4]),
      icon: "star",
    },
    sm: {
      amount: parseInt(stringifiedAmount[5]),
      icon: "flower",
    },
    xs: {
      amount: parseInt(stringifiedAmount[6]),
      icon: "bug",
    },
  }

  Object.values(icons).forEach(({ amount, icon }) => {
    for (let i = 0; i < amount; i++) {
      createItems(icon)
    }
  })
}

function createItems(icon) {
  const img = document.createElement("img")
  const top = randomNumberBetween(0, 50)
  const size = top / 5 + 1
  img.classList.add("items")
  img.src = `./imgs/${icon}.png`
  img.style.width = `${size}vmin`
  img.style.height = `${size}vmin`
  img.style.top = `${top}vh`
  img.style.left = `${randomNumberBetween(0, 100)}vw`
  img.style.setProperty("--rotation", `${randomNumberBetween(-30, 30)}deg`)
  items.appendChild(img)
}

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}