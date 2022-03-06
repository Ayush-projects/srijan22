import React, { useState } from 'react';

export const LastLocationContext = React.createContext({ lastLocation: null, setLastLocation: () => {} });

const LastLocationProvider = props => {
  const [lastLocation, setLastLocation] = useState(null);

  return (
    <LastLocationContext.Provider value={{ lastLocation: lastLocation, setLastLocation: setLastLocation }}>
      {props.children}
    </LastLocationContext.Provider>
  );
}

export default LastLocationProvider;