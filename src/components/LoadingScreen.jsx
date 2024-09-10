import React from 'react';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div id="loadingScreen">
      <h2>Loading...</h2>
      <p>Please wait while we fetch the information.</p>
    </div>
  );
};

export default LoadingScreen;
