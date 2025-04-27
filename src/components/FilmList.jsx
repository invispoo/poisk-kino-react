import data from '../assets/kinopoisk.json'
import FilmCardInList from './FilmCardInList'
import './FilmList.css'

export default function FilmList () {
  const films = data.docs
  const filmCards = films.map((film) => <FilmCardInList film={film} key={film.id}/>)

  return <div className="list">{filmCards}</div>
}