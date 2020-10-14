pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";

library H3 {
    using SafeMath for uint8;
    using SafeMath for uint32;

    function nextDirection(uint256 path)
        public
        pure
        returns (uint256 direction, uint256 nextPath)
    {
        direction = (path >> (256 - 3)); // Take first 3 bits of path
        nextPath = path << 3; // Trim direction from path
    }

    function traverse(uint64 origin, uint256 direction)
        public
        returns (uint64 destination)
    {}
}
