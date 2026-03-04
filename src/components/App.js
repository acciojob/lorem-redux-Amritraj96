import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLoremData } from '../redux/actions';
import '../styles/App.css';

const App = ({ data, loading, error, fetchLoremData }) => {
  useEffect(() => {
    fetchLoremData();
  }, [fetchLoremData]);

  return (
    <div className="container">
      <h1>A short Naration of Lorem Ipsum</h1>
      <p className="description">
        Below Contains A title and Body gotten from<br />
        a random API, Please take your time to Review
      </p>

      {/* Loading State Implementation */}
      {loading && <p>Loading...</p>}
      
      {/* Error Handling */}
      {error && <p>Error: {error}</p>}

      {/* Data Display */}
      <div className="grid">
        {!loading && data && data.map((item, index) => (
          <div key={index} className="card">
             {/* Rendered inside HTML <p> elements as required */}
            <p><strong>Title :</strong>{item.title}</p>
            <p><strong>Body :</strong>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchLoremData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
