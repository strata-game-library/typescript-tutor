API Reference
=============

This section documents the Strata TypeScript Tutor API and game engine interfaces.

Strata Engine Core
------------------

The Strata game engine provides the foundation for building browser-based games.

Game Class
~~~~~~~~~~

The main game container that manages the game loop, rendering, and input.

.. code-block:: typescript

   import { Game } from '@strata/engine';

   const game = new Game({
     width: 800,
     height: 600,
     title: 'My Game',
     backgroundColor: '#1a1a2e'
   });

   // Game loop
   game.onUpdate((deltaTime: number) => {
     // Update game logic
   });

   game.onRender((ctx: CanvasRenderingContext2D) => {
     // Custom rendering
   });

   game.start();

Sprite Class
~~~~~~~~~~~~

Base class for all visual game objects.

.. code-block:: typescript

   import { Sprite } from '@strata/engine';

   const player = new Sprite({
     x: 100,
     y: 200,
     width: 32,
     height: 32,
     texture: 'player.png'
   });

   // Movement
   player.x += 5;
   player.y += 5;

   // Collision detection
   if (player.collidesWith(enemy)) {
     player.takeDamage(10);
   }

Vector2 Class
~~~~~~~~~~~~~

2D vector for positions, velocities, and directions.

.. code-block:: typescript

   import { Vector2 } from '@strata/engine';

   const velocity = new Vector2(5, 3);
   const position = new Vector2(100, 200);

   // Vector operations
   position.add(velocity);
   velocity.normalize();
   velocity.scale(2);

   // Distance and angle
   const dist = position.distanceTo(target);
   const angle = position.angleTo(target);

Component System
----------------

Add behaviors to sprites using the component pattern.

Built-in Components
~~~~~~~~~~~~~~~~~~~

**Gravity**

.. code-block:: typescript

   player.addComponent(new Gravity({ 
     strength: 0.5,
     terminal: 15 
   }));

**PlatformerMovement**

.. code-block:: typescript

   player.addComponent(new PlatformerMovement({
     speed: 200,
     jumpPower: 12,
     keys: { left: 'a', right: 'd', jump: 'space' }
   }));

**TopDownMovement**

.. code-block:: typescript

   player.addComponent(new TopDownMovement({
     speed: 150,
     keys: 'wasd'
   }));

**Health**

.. code-block:: typescript

   player.addComponent(new Health({
     max: 100,
     current: 100,
     onDeath: () => game.gameOver()
   }));

Input Handling
--------------

Keyboard Input
~~~~~~~~~~~~~~

.. code-block:: typescript

   // Check if key is currently pressed
   if (game.isKeyDown('space')) {
     player.jump();
   }

   // Key press event (fires once)
   game.onKeyPress('e', () => {
     player.interact();
   });

   // Key release event
   game.onKeyRelease('shift', () => {
     player.stopRunning();
   });

Mouse Input
~~~~~~~~~~~

.. code-block:: typescript

   // Mouse position
   const mousePos = game.mousePosition;

   // Mouse events
   game.onMouseClick((x, y, button) => {
     if (button === 'left') {
       player.shoot(x, y);
     }
   });

   game.onMouseMove((x, y) => {
     cursor.x = x;
     cursor.y = y;
   });

Audio System
------------

Sound Effects
~~~~~~~~~~~~~

.. code-block:: typescript

   import { Sound } from '@strata/engine';

   const jumpSound = new Sound('jump.ogg');
   const coinSound = new Sound('coin.ogg');

   // Play sound
   jumpSound.play();
   coinSound.play({ volume: 0.5 });

Background Music
~~~~~~~~~~~~~~~~

.. code-block:: typescript

   import { Music } from '@strata/engine';

   const bgm = new Music('level1.ogg');
   bgm.play({ loop: true, volume: 0.3 });

   // Control
   bgm.pause();
   bgm.resume();
   bgm.stop();

Scene Management
----------------

.. code-block:: typescript

   import { Scene, SceneManager } from '@strata/engine';

   // Define scenes
   class TitleScene extends Scene {
     onEnter() {
       // Setup title screen
     }
     
     onUpdate(dt: number) {
       if (game.isKeyDown('enter')) {
         this.manager.switchTo('gameplay');
       }
     }
   }

   class GameplayScene extends Scene {
     onEnter() {
       // Setup gameplay
     }
   }

   // Register and start
   const scenes = new SceneManager(game);
   scenes.register('title', new TitleScene());
   scenes.register('gameplay', new GameplayScene());
   scenes.switchTo('title');

Lesson API
----------

The lesson system provides structured learning content.

Lesson Structure
~~~~~~~~~~~~~~~~

.. code-block:: typescript

   interface Lesson {
     id: string;
     title: string;
     description: string;
     order: number;
     intro: string;
     learningObjectives: string[];
     goalDescription: string;
     content: {
       introduction: string;
       steps: Step[];
     };
     prerequisites: string[];
     difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
     estimatedTime: number;
   }

   interface Step {
     id: string;
     title: string;
     description: string;
     initialCode: string;
     solution: string;
     hints: string[];
     tests: Test[];
   }

Progress Tracking
~~~~~~~~~~~~~~~~~

.. code-block:: typescript

   // Get user progress
   const progress = await api.getProgress(lessonId);

   // Update progress
   await api.updateProgress(lessonId, {
     currentStep: 'step-3',
     completed: false,
     code: userCode
   });

REST Endpoints
--------------

**GET /api/lessons**
  Returns list of all available lessons.

**GET /api/lessons/:id**
  Returns specific lesson content.

**GET /api/progress/:lessonId**
  Returns user progress for a lesson.

**POST /api/progress/:lessonId**
  Updates user progress.

**GET /api/assets**
  Returns available game assets.

.. toctree::
   :maxdepth: 2
   :caption: Modules

   modules
