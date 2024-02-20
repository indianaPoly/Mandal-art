export type GridType = 'rootNode' | 'leafNode';
export type CellType = 'isTopTopic' | 'isSubTopic';

export interface CellProp {
  belongsToGrid?: GridType;
  selfType?: CellType;
  value?: string;
  isSealed?: boolean;
}
