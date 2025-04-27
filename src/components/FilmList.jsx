import data from '../assets/kinopoisk.json'
import FilmCardInList from './FilmCardInList'

export default function FilmList () {
  const films = data.docs
  const filmCards = films.map((film) => <FilmCardInList film={film} key={film.id}/>)

  return <div>{filmCards}</div>
}