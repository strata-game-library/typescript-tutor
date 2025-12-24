/**
 * Asset Library Type Definitions
 * CC0 Asset management system for Strata TypeScript Tutor
 */

/** Categories for sprite assets */
export type AssetCategory =
  | 'characters'
  | 'enemies'
  | 'items'
  | 'effects'
  | 'backgrounds'
  | 'tiles'
  | 'ui'
  | 'misc';

/** Types of assets available */
export type AssetType = 'sprite' | 'sound' | 'music' | 'background';

/** Categories for sound effects and music */
export type SoundCategory =
  | 'jump'
  | 'collect'
  | 'hit'
  | 'shoot'
  | 'powerup'
  | 'ui'
  | 'ambient'
  | 'music'
  | 'misc';

/** Categories for background images */
export type BackgroundCategory =
  | 'space'
  | 'forest'
  | 'city'
  | 'underwater'
  | 'desert'
  | 'dungeon'
  | 'abstract'
  | 'solid'
  | 'misc'
  | 'tiles'
  | 'enemies'
  | 'backgrounds';

// Base asset interface
export interface BaseAsset {
  id: string;
  name: string;
  description: string;
  type: AssetType;
  path: string;
  thumbnail?: string;
  tags: string[];
  license: string;
  suggestedUse?: string;
  size?: {
    width: number;
    height: number;
  };
}

// Sprite asset interface
export interface SpriteAsset extends BaseAsset {
  type: 'sprite';
  category: AssetCategory;
  frameCount?: number;
  frameWidth?: number;
  frameHeight?: number;
  animations?: {
    [key: string]: {
      frames: number[];
      duration: number;
    };
  };
  defaultAnimation?: string;
}

/** Sound asset interface */
export interface SoundAsset extends Omit<BaseAsset, 'description'> {
  type: 'sound' | 'music';
  category?: SoundCategory;
  description?: string;
  duration?: number;
  loop?: boolean;
  volume?: number;
}

// Background asset interface
export interface BackgroundAsset extends BaseAsset {
  type: 'background';
  category: BackgroundCategory;
  tiling?: boolean;
  parallax?: boolean;
  scrollSpeed?: {
    x: number;
    y: number;
  };
}

// Union type for all assets
export type GameAsset = SpriteAsset | SoundAsset | BackgroundAsset;

// Asset filter options
export interface AssetFilter {
  type?: AssetType;
  category?: AssetCategory | SoundCategory | BackgroundCategory;
  tags?: string[];
  search?: string;
}

// Asset selection state
export interface AssetSelection {
  player?: SpriteAsset;
  enemies?: SpriteAsset[];
  items?: SpriteAsset[];
  background?: BackgroundAsset;
  sounds?: SoundAsset[];
  music?: SoundAsset;
}

// Asset metadata for palette display
export interface AssetPaletteItem {
  asset: GameAsset;
  selected?: boolean;
  preview?: boolean;
}

// Asset load status
export interface AssetLoadStatus {
  total: number;
  loaded: number;
  failed: string[];
  isLoading: boolean;
}

// Sprite sheet configuration
export interface SpriteSheetConfig {
  path: string;
  frameWidth: number;
  frameHeight: number;
  frameCount: number;
  spacing?: number;
  margin?: number;
}

// Asset pack definition
export interface AssetPack {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  license: string;
  assets: GameAsset[];
}
