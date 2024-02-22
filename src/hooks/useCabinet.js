// src/hooks/useCabinet.js

import {useCallback, useState} from "react";

export const useCabinet = () => {
  const [showCabinet, setShowCabinet] = useState(false);

  const toggleCabinet = useCallback((token) => {
    setShowCabinet(!!token);
  }, []);

  const setTokenInCabinet = useCallback((token) => {
    toggleCabinet(token);
  }, [toggleCabinet]);

  return {
    showCabinet,
    setShowCabinet,
    toggleCabinet,
    setTokenInCabinet,
  };
};




// import {useCallback, useEffect, useState} from "react";
//
// export const useCabinet = (hasToken) => {
//   const [showCabinet, setShowCabinet] = useState(false);
//
//   const toggleCabinet = useCallback((token) => {
//
//     console.log(showCabinet, token);
//
//     if (token) {
//       setShowCabinet(true);
//     } else {
//       setShowCabinet(false);
//     }
//   }, []);
//
//   useEffect(() => {
//     toggleCabinet(hasToken);
//   }, [hasToken, toggleCabinet]);
//
//   return {
//     showCabinet,
//     setShowCabinet
//   };
// }