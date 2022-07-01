import React from 'react';
import BlockFive from './BlockFive/BlockFive';
import BlockFour from './BlockFour/BlockFour';
import BlockThere from "./BlockThere/BlockThere";
import BlockTwo from "./BlockTwo/BlockTwo";
import BlockOne from "./BlocOne/BlockOne";

const Home = () => {
  return (
    <div>
      <BlockOne />
      <BlockTwo />
      <BlockThere />
      <BlockFour />
      <BlockFive />
    </div>
  );
};

export default Home;