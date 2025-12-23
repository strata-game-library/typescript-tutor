Module Reference
================

This page provides detailed documentation for all Strata TypeScript Tutor modules.

@strata/engine
--------------

Core game engine module.

Classes
~~~~~~~

Game
^^^^
Main game container and loop manager.

Sprite
^^^^^^
Base class for visual game objects.

Vector2
^^^^^^^
2D vector for math operations.

Scene
^^^^^
Base class for game scenes.

SceneManager
^^^^^^^^^^^^
Manages scene transitions.

Sound
^^^^^
Sound effect playback.

Music
^^^^^
Background music playback.

@strata/components
------------------

Pre-built behavior components.

Movement Components
~~~~~~~~~~~~~~~~~~~

- **Gravity** - Applies downward acceleration
- **PlatformerMovement** - Side-scrolling controls
- **TopDownMovement** - 4/8-directional movement
- **VehicleMovement** - Racing game physics

Combat Components
~~~~~~~~~~~~~~~~~

- **Health** - HP management with callbacks
- **MeleeAttack** - Close-range combat
- **RangedAttack** - Projectile combat
- **Invincibility** - Temporary immunity

UI Components
~~~~~~~~~~~~~

- **HealthBar** - Visual health display
- **ScoreCounter** - Score tracking
- **Timer** - Countdown/countup timer
- **DialogueBox** - Text display

@strata/physics
---------------

Physics simulation utilities.

- **AABB** - Axis-aligned bounding box collision
- **CircleCollider** - Circular collision detection
- **Rigidbody** - Physics simulation
- **Raycast** - Line-of-sight detection

@strata/utils
-------------

Utility functions.

- **clamp(value, min, max)** - Constrain value to range
- **lerp(a, b, t)** - Linear interpolation
- **randomRange(min, max)** - Random number in range
- **randomChoice(array)** - Random array element
- **degToRad(degrees)** - Convert degrees to radians
- **radToDeg(radians)** - Convert radians to degrees
