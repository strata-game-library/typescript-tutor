/**
 * Draggable Asset Library - Types and components for drag-and-drop assets
 */

import type { GameAsset } from '@/lib/asset-library/asset-types';

/** Type for a draggable asset in the game canvas */
export interface DraggableAsset {
  id: string;
  type: 'sprite' | 'sound' | 'background' | 'component' | 'entity';
  name: string;
  path: string;
  thumbnail?: string;
  category?: string;
  asset?: GameAsset;
  properties?: Record<string, unknown>;
  defaultProperties?: Record<string, unknown>;
}

/** Drag item type identifier for react-dnd */
export const DRAG_TYPE = {
  ASSET: 'asset',
  COMPONENT: 'component',
} as const;

/** Factory function to create a draggable asset from a game asset */
export function createDraggableAsset(asset: GameAsset): DraggableAsset {
  return {
    id: asset.id,
    type: asset.type === 'background' ? 'background' : 'sprite',
    name: asset.name,
    path: asset.path,
    thumbnail: asset.thumbnail,
    category: 'category' in asset ? asset.category : undefined,
    asset,
  };
}
