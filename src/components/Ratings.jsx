import Star from "../assets/icon-star.svg";

const Ratings = () => {
  return (
    <>
      <ul className="ratings flow-content">
        <li>
          <div className="stars" aria-hidden="true">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          Rated 5 Stars in Reviews
        </li>

        <li>
          <div className="stars" aria-hidden="true">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          Rated 5 Stars in Report Guru
        </li>

        <li>
          <div className="stars" aria-hidden="true">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
          Rated 5 Stars in BestTech
        </li>
      </ul>
    </>
  );
};

export default Ratings;
