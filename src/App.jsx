import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  // TODO
  const [clickedEpisode, setClickedEpisode] = useState(null);

  const displayEpisode = (episode) => {
    setClickedEpisode(episode);
  };

  return (
    <div>
      <h1>Dark Echoes</h1>
      <div className="episodeLayout">
        <div className="episodeList">
          {episodeList.map((episode) => (
            <div
              key={episode.id}
              className="episodeItems"
              onClick={() => displayEpisode(episode)}
            >
              {episode.title}
            </div>
          ))}
        </div>
        <div className="episodeDetails">
          {clickedEpisode ? (
            <div>
              <h2>Episode {clickedEpisode.id}</h2>
              <h2>{clickedEpisode.title}</h2>
              <p>{clickedEpisode.description}</p>
            </div>
          ) : (
            <p>Select episode for details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// import useState
// import episodeList
// Create a function that displays the episodes in a list
// create div for episode listing
// div for onClick?
// div title and description?
