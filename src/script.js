const titleEl = document.querySelector('#title')
const chapterEl = document.querySelector('#chapter')
const verseEl = document.querySelector('#verse')
const textEl = document.querySelector('#text')
const translatorEl = document.querySelector('#translator')
const btnEl = document.querySelector('#reload')

const fetchData = async () => {
  const BASE_URL = 'https://bible-api.com/data/almeida/random'
  try {
    const req = await fetch(BASE_URL)

    if (!req.ok) {
      throw new Error('Algo deu errado ao buscar os dados')
    }

    const data = await req.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

const insertDataIntoDom = (data) => {
  titleEl.textContent = data.random_verse.book
  chapterEl.textContent = data.random_verse.chapter
  verseEl.textContent = data.random_verse.verse

  textEl.textContent = data.random_verse.text.trim()
  translatorEl.textContent = data.translation.identifier
}

const reloadPage = () => {
  window.location.reload()
}

btnEl.addEventListener('click', reloadPage)

const init = async () => {
  const data = await fetchData()
  insertDataIntoDom(data)
}

init()
