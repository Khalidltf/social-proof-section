const Quotes = (props) => {
  const { img, name, status, quote } = props;
  return (
    <>
      <li>
        <blockquote>
          <div className="split a-center">
            <img src={img} alt="" />
            <div className="flex-group">
              <p className="name">{name}</p>
              <p className="status">{status}</p>
            </div>
          </div>
          <p className="quote">{quote}</p>
        </blockquote>
      </li>
    </>
  );
};

export default Quotes;
