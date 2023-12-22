import React from "react";

import Banner from "../Banner";

function WonBanner({numofGuesses}) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numofGuesses === 1 ? "1 guess" : `${numofGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
