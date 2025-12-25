// Strata Game Compiler
// Compiles selected components and assets into a playable TypeScript game

import { GameAsset } from '@/lib/asset-library/asset-types';
import { strata } from './pygame-simulation';

export function compileStrataGame(
  selectedComponents: Record<string, string>, // componentId -> variant
  selectedAssets: GameAsset[]
): string {
  
  const imports = `import { strata } from './pygame-simulation';\n\n// Initialize Strata\nstrata.init();\n\n// Constants\nconst SCREEN_WIDTH = 800;\nconst SCREEN_HEIGHT = 600;\nconst FPS = 60;\nconst GRAVITY = 0.5;\n`;

  const assetLoader = generateAssetLoader(selectedAssets);
  
  const mainLoop = `
class Game {
    constructor() {
        this.screen = strata.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
        strata.display.setCaption("My Strata Creation");
        this.clock = new strata.time.Clock();
        this.isRunning = true;
        this.state = "title"; // title, gameplay, ending
        this.score = 0;
        ${assetLoader}
    }
        
    run() {
        while (this.isRunning) {
            const dt = this.clock.tick(FPS) / 1000.0;
            
            const events = strata.event.get();
            for (let event of events) {
                if (event.type === strata.QUIT) {
                    this.isRunning = false;
                }
            }
                    
            if (this.state === "title") {
                this.showTitleScreen();
            } else if (this.state === "gameplay") {
                this.runGameplay(dt);
            } else if (this.state === "ending") {
                this.showEndingScreen();
            }
                
            strata.display.flip();
        }
            
        strata.quit();
    }

    showTitleScreen() {
        const keys = strata.key.getPressed();
        this.screen.fill([50, 50, 150]);
        
        if (keys[strata.K_SPACE]) {
            this.state = "gameplay";
        }
    }

    runGameplay(dt) {
        const keys = strata.key.getPressed();
        this.screen.fill([135, 206, 235]);
        
        if (!this.player) {
            this.player = { x: SCREEN_WIDTH / 2, y: SCREEN_HEIGHT - 100, vy: 0 };
        }

        // Basic movement
        if (keys[strata.K_LEFT]) this.player.x -= 5;
        if (keys[strata.K_RIGHT]) this.player.x += 5;
        
        strata.draw.rect(this.screen, [255, 0, 0], [this.player.x, this.player.y, 32, 32]);
        
        this.score++;
        if (this.score > 300) this.state = "ending";
    }

    showEndingScreen() {
        const keys = strata.key.getPressed();
        this.screen.fill([0, 50, 0]);
        if (keys[strata.K_r]) {
            this.state = "title";
            this.score = 0;
        }
    }
}

const game = new Game();
game.run();
`;

  return imports + mainLoop;
}

function generateAssetLoader(assets: GameAsset[]): string {
  let loader = `
        // Load assets
        this.assets = {};`;
  
  assets.forEach(asset => {
    if (asset.type === 'sprite' || asset.type === 'background') {
      loader += `
        this.assets['${asset.id}'] = strata.image.load('${asset.path || asset.id}');`;
    } else if (asset.type === 'sound' || asset.type === 'music') {
      loader += `
        this.assets['${asset.id}'] = strata.mixer.Sound('${asset.path || asset.id}');`;
    }
  });
  
  return loader;
}

export function downloadTypeScriptFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
