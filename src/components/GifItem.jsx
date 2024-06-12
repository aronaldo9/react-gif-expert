import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;

/* Tarea testing
  
  1. Añadir PropTypes
   a. title obligatorio
   b. url obligatorio
  
  2. Evaluar el snapshot
 */
