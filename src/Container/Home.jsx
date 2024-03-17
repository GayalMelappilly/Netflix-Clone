import Banner from '../Components/Banner/Banner';
import RowPost from '../Components/RowPost/RowPost';
import { originals, now_playing, ml_movies, hi_movies, ta_movies } from '../url';

// import axios from 'axios'

function Home() {
  // const [id, setId] = useState()
  return (
    <div>
      <Banner />
      <RowPost title='Now Playing' url={now_playing} />
      <RowPost title='Netflix Originals' url={originals} isSmall />
      <RowPost title='Mollywood Movies' url={ml_movies} isSmall />
      <RowPost title='Bollywood Movies' url={hi_movies} isSmall />
      <RowPost title='Tollywood Movies' url={ta_movies} isSmall />

    </div >
  );
}

export default Home;
