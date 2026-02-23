import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions"; // Adjust path if necessary
import '../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <p>Below Contains A title and Body gotten from<br/>a random API, Please take your time to Review</p>
      </div>

      {/* Loading State Implementation */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* Data Display */}
      <div className="grid-container">
        {!loading && data && data.map((item, index) => (
          <div key={item.id || index} className="card">
            <p><strong>Title :</strong>{item.title}</p>
            <p><strong>Body :</strong>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
