import { useEffect, useState } from 'react';
import { GridType, CellProp } from '../../type';
import Cell from '../cell';

const ThreeByThree = ({ type }: { type: GridType }) => {
  const [grid, setGrid] = useState<CellProp[][]>([[]]);

  useEffect(() => {
    const cell: CellProp = {};
    const newGrid: CellProp[][] = [];
    for (let i = 0; i < 3; ) {
      const row: CellProp[] = [];
      for (let j = 0; j < 3; ) {
        const newCell: CellProp = { ...cell };
        if (type === 'rootNode') {
          if (i === 1 && j === 1) {
            newCell.belongsToGrid = 'rootNode';
            newCell.selfType = 'isTopTopic';
            newCell.value = '2024';
            newCell.isSealed = true;
          } else {
            newCell.belongsToGrid = 'rootNode';
            newCell.selfType = 'isSubTopic';
            newCell.isSealed = false;
          }
        }
        if (type === 'leafNode') {
          if (i === 1 && j === 1) {
            newCell.belongsToGrid = 'leafNode';
            newCell.selfType = 'isTopTopic';
            newCell.isSealed = true;
          } else {
            newCell.belongsToGrid = 'leafNode';
            newCell.selfType = 'isSubTopic';
            if (newCell.value === '') {
              newCell.isSealed = true;
            } else {
              newCell.isSealed = false;
            }
          }
        }
        row.push({ ...newCell });
        j += 1;
      }
      newGrid.push(row);
      i += 1;
    }
    console.log(newGrid);
    setGrid(newGrid);
  }, [type]);

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={rowIndex}
          style={{
            display: 'flex',
          }}
        >
          {row.map((cell) => cell && <Cell key={cell.value} />)}
        </div>
      ))}
    </div>
  );
};

export default ThreeByThree;
