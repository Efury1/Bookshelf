import React, {Component} from "react";


const RadioButton = () => {
  const [favouriteBook, setFavouriteBook] = React.useState('favourtie');

  const handleCatChange = () => {
    setFavouriteBook(!'favourtie');
  };

  return (
    <div>
      <RadioButton level="Favourites" value={favouriteBook === 'favourite'} onChange={handleFavouriteChange}/>
    </div>
  )
}

export default App;
