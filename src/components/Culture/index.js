import { StyledCulture } from "../styles/Culture.styled";
import artGallery from "../../images/artGallery.png";
import theater from "../../images/theater.png";
import movies from "../../images/movies.png";
import zoo from "../../images/zoo.png";
import museum from "../../images/museum.png";
import historicSite from "../../images/historicSite.png";
import concert from "../../images/concert.png";
import comedyClub from "../../images/comedyClub.png";
import arena from "../../images/arena.png";

const Culture = ({ city, selectedCities }) => {
  return selectedCities === undefined ? (
    <StyledCulture>
      <h2 data-cy="culture-header">Culture</h2>
      <div className="culture-element">
        <h4>
          Art Galleries
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={artGallery}
            alt="Mona Lisa to symbolize art galleries"
          />
        </h4>
        {city.attributes.details.culture.art_galleries ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.art_galleries}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Comedy Clubs
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={comedyClub}
            alt="Microphone to symbolize comedy clubs"
          />
        </h4>
        {city.attributes.details.culture.comedy_clubs ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.comedy_clubs}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Concert Venues
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={concert}
            alt="Concert hall to symbolize venues"
          />
        </h4>
        {city.attributes.details.culture.concert_venues ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.concert_venues}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Historical Sites
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={historicSite}
            alt="Leaning tower of Pisa to symbolize historical sites"
          />
        </h4>
        {city.attributes.details.culture.historical_sites ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.historical_sites}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Movie Theaters
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={movies}
            alt="Cinema to symbolize movie theaters"
          />
        </h4>
        {city.attributes.details.culture.movie_theaters ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.movie_theaters}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Museums
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={museum}
            alt="Museum to symbolize venues"
          />
        </h4>
        {city.attributes.details.culture.museums ? (
          <p data-cy="venue-value">{city.attributes.details.culture.museums}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Performing Arts Venues
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={theater}
            alt="Stage to symbolize performing arts venues"
          />
        </h4>
        {city.attributes.details.culture.performing_arts_venues ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.performing_arts_venues}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Sports Venues
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={arena}
            alt="Arena to symbolize stadiums"
          />
        </h4>
        {city.attributes.details.culture.sports_venues ? (
          <p data-cy="venue-value">
            {city.attributes.details.culture.sports_venues}
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        <h4>
          Zoos
          <img
            data-cy="culture-icon"
            className="culture-icon"
            src={zoo}
            alt="Zoo entrance to symbolize venues"
          />
        </h4>
        {city.attributes.details.culture.zoos ? (
          <p data-cy="venue-value">{city.attributes.details.culture.zoos}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
    </StyledCulture>
  ) : (
    <StyledCulture>
      <h2>Culture</h2>
      <div className="culture-element">
        <h3>{selectedCities[0].attributes.name}</h3>
        <h3>{selectedCities[1].attributes.name}</h3>
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.art_galleries ? (
          <p>{selectedCities[0].attributes.details.culture.art_galleries}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Art Galleries
          <img
            className="culture-icon"
            src={artGallery}
            alt="Mona Lisa to symbolize art galleries"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.art_galleries ? (
          <p>{selectedCities[1].attributes.details.culture.art_galleries}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.comedy_clubs ? (
          <p>{selectedCities[0].attributes.details.culture.comedy_clubs}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Comedy Clubs
          <img
            className="culture-icon"
            src={comedyClub}
            alt="Microphone to symbolize comedy clubs"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.comedy_clubs ? (
          <p>{selectedCities[1].attributes.details.culture.comedy_clubs}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.concert_venues ? (
          <p>{selectedCities[0].attributes.details.culture.concert_venues}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Concert Venues
          <img
            className="culture-icon"
            src={concert}
            alt="Concert hall to symbolize venues"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.concert_venues ? (
          <p>{selectedCities[1].attributes.details.culture.concert_venues}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.historical_sites ? (
          <p>{selectedCities[0].attributes.details.culture.historical_sites}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Historical Sites
          <img
            className="culture-icon"
            src={historicSite}
            alt="Leaning tower of Pisa to symbolize historical sites"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.historical_sites ? (
          <p>{selectedCities[1].attributes.details.culture.historical_sites}</p>
        ) : (
          <p>N/A</p>
        )}{" "}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.movie_theaters ? (
          <p>{selectedCities[0].attributes.details.culture.movie_theaters}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Movie Theaters
          <img
            className="culture-icon"
            src={movies}
            alt="Cinema to symbolize movie theaters"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.movie_theaters ? (
          <p>{selectedCities[1].attributes.details.culture.movie_theaters}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.museums ? (
          <p>{selectedCities[0].attributes.details.culture.museums}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Museums
          <img
            className="culture-icon"
            src={museum}
            alt="Museum to symbolize venues"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.museums ? (
          <p>{selectedCities[1].attributes.details.culture.museums}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.performing_arts_venues ? (
          <p>
            {
              selectedCities[0].attributes.details.culture
                .performing_arts_venues
            }
          </p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Performing Arts Venues
          <img
            className="culture-icon"
            src={theater}
            alt="Stage to symbolize performing arts venues"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.performing_arts_venues ? (
          <p>
            {
              selectedCities[1].attributes.details.culture
                .performing_arts_venues
            }
          </p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.sports_venues ? (
          <p>{selectedCities[0].attributes.details.culture.sports_venues}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Sports Venues
          <img
            className="culture-icon"
            src={arena}
            alt="Arena to symbolize stadiums"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.sports_venues ? (
          <p>{selectedCities[1].attributes.details.culture.sports_venues}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
      <div className="culture-element">
        {selectedCities[0].attributes.details.culture.zoos ? (
          <p>{selectedCities[0].attributes.details.culture.zoos}</p>
        ) : (
          <p>N/A</p>
        )}
        <h4>
          Zoos
          <img
            className="culture-icon"
            src={zoo}
            alt="Zoo entrance to symbolize venues"
          />
        </h4>
        {selectedCities[1].attributes.details.culture.zoos ? (
          <p>{selectedCities[1].attributes.details.culture.zoos}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>
    </StyledCulture>
  );
};

export default Culture;
