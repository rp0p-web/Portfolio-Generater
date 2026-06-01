import { useLocation } from "react-router-dom"

function Home() {

  const location = useLocation();

  const username = location.state?.username;

  return (

    <div className="home">

      <h1>
        Welcome {username}
      </h1>

    </div>

  );
}

export default Home;