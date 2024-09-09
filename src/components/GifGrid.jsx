import PropTypes from "prop-types";
import GifItem from "./GifItem.jsx";
import useFetchGifs from "../hooks/useFetchGifs.js";
import Spinner from "./Spinner.jsx";

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <Spinner isLoading={isLoading} />
      {/* {
                isLoading && <h2>Loading...</h2>
            }     */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
