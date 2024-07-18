import { useState, useEffect, useCallback } from "react";
import Tile from "./Tile";
import "../styles/Puzzle.css";
import imageSrc from "../assets/images/Chihiro-dragon.png";

function PuzzleBoard() {
  const [tiles, setTiles] = useState([]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const sliceImage = (image) => {
      const img = new Image();
      img.onload = () => {
        const { width, height } = img;
        const tileWidth = width / 3;
        const tileHeight = height / 3;
        const slicedTiles = [];
        for (let y = 0; y < 3; y += 1) {
          for (let x = 0; x < 3; x += 1) {
            const canvas = document.createElement("canvas");
            canvas.width = tileWidth;
            canvas.height = tileHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(
              img,
              x * tileWidth,
              y * tileHeight,
              tileWidth,
              tileHeight,
              0,
              0,
              tileWidth,
              tileHeight
            );
            slicedTiles.push({
              id: y * 3 + x + 1,
              image: canvas.toDataURL(),
            });
          }
        }
        slicedTiles[slicedTiles.length - 1].image = null; // Last tile is the empty one
        setTiles(shuffleArray(slicedTiles));
      };
      img.src = image;
    };

    sliceImage(imageSrc);
  }, []);

  const isValidMove = (tileIndex, emptyIndex) => {
    const adjacentIndices = [
      emptyIndex - 3,
      emptyIndex + 3,
      emptyIndex % 3 !== 0 ? emptyIndex - 1 : -1,
      emptyIndex % 3 !== 2 ? emptyIndex + 1 : -1,
    ];
    return adjacentIndices.includes(tileIndex);
  };

  const handleTileClick = useCallback(
    (index) => {
      const emptyIndex = tiles.findIndex((tile) => tile.image === null);
      if (isValidMove(index, emptyIndex)) {
        const newTiles = [...tiles];
        [newTiles[index], newTiles[emptyIndex]] = [
          newTiles[emptyIndex],
          newTiles[index],
        ];
        setTiles(newTiles);
      }
    },
    [tiles]
  );

  const handleKeyDown = useCallback(
    (e) => {
      const emptyIndex = tiles.findIndex((tile) => tile.image === null);
      let targetIndex = -1;

      if (e.key === "ArrowUp") {
        targetIndex = emptyIndex + 3;
      } else if (e.key === "ArrowDown") {
        targetIndex = emptyIndex - 3;
      } else if (e.key === "ArrowLeft") {
        targetIndex = emptyIndex + 1;
      } else if (e.key === "ArrowRight") {
        targetIndex = emptyIndex - 1;
      }

      if (
        targetIndex >= 0 &&
        targetIndex < tiles.length &&
        isValidMove(targetIndex, emptyIndex)
      ) {
        handleTileClick(targetIndex);
      }
    },
    [tiles, handleTileClick]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="puzzle-container">
      <div className="puzzle-board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile.id}
            image={tile.image}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default PuzzleBoard;
