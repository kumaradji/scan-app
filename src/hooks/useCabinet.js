// src/hooks/useCabinet.js

import {useCallback, useEffect, useState} from "react";

export const useCabinet = (hasToken) => {
  const [showCabinet, setShowCabinet] = useState(false);

  const toggleCabinet = useCallback((token) => {
    if (token) {
      setShowCabinet(true);
    } else {
      setShowCabinet(false);
    }
  }, []); 

  useEffect(() => {
    toggleCabinet(hasToken);
  }, [hasToken, toggleCabinet]);

  return {
    showCabinet,
    setShowCabinet
  };
}