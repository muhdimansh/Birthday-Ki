# Tiga Bab, Satu Takdir · Birthday Adventure for Ki

**Build type:** GitHub Pages-ready, self-contained browser game with procedural WebGL 3D environments. No external libraries or network dependencies.

## Story

- Bab 1 — **Langkah**: an afternoon garden → **KASUT**
- Bab 2 — **Melodi**: a rainy music room → **EARPHONE**
- Bab 3 — **Damai**: a late-night library → **BUKU**

There are 36 different interactive challenges (12 per chapter), three progressive hints per puzzle, a saved journal and animated gift reveals. Optional background notes are synthesized with Web Audio; sound is off by default and all audio-based clues have visual equivalents.

## How to play

1. Keep the entire project folder together; don't open the `index.html` without its companion files.
2. Open `index.html` in a desktop browser, or publish it using GitHub Pages to play on iPhone/Android Chrome.
3. Drag the 3D background to inspect a scene. Tap the glowing object or **Periksa objek berkilau** to open its puzzle.
4. Press **Petunjuk** up to three times when needed. Progress saves in that browser using localStorage.
5. If WebGL isn't available, illustrated chapter environments appear automatically.

## Free GitHub Pages deployment

1. Sign in to GitHub, create a new **public repository** (e.g. `ki-birthday-adventure`).
2. Extract the ZIP. Upload the *contents* of `tiga_bab_satu_takdir_ki_cinematic/` to the repository root. `index.html` should be directly in the root, not nested inside another folder.
3. Commit the upload to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**, **Branch** to `main`, and folder to `/ (root)`. Save.
6. Once GitHub Pages reports publishing is complete, open `https://YOUR-USERNAME.github.io/ki-birthday-adventure/` in Chrome. Replace `YOUR-USERNAME` with your account username.

The game works as a static website; it doesn't require a server, paid hosting, or API keys. Published files in a public repository are visible to others, so avoid putting private information in the game assets.

## File structure

```
index.html                The game launcher
style.css                 UI, atmosphere, transitions, touch responsiveness
game.js                   State, navigation, answer validation and hint logic
scenes/
  chapterData.js          The three story chapters and wishes
  renderer.js             Procedural WebGL 3D environments + illustrated fallback
models/
  giftModels.js           Handmade SVG models for the gift reveals
animations/
  cinematics.js           Gift celebration particles
  atmosphere.js           Rain, floating lights and library dust
 audio/
  synth.js                Optional synthesized music/chimes
puzzles/
  puzzleData.js           All 36 puzzles, solutions and three hints each
tests/
  README.md               Test instructions and scope
```

## Size budget

The allocated maximum is **100 MB**, not a target. This package is intentionally very small because the 3D environment geometry, animations and synthesized audio are generated from code instead of embedded video or large models.

## Known boundaries

- Procedural stylized 3D, **not** movie-quality character animation or photorealistic assets.
- Some phones have limited GPU support; a hand-drawn fallback is included.
- For best results on iPhone, use the GitHub Pages HTTPS URL in Chrome or Safari instead of opening the file directly in Files.
- Progress is saved locally, not synchronized across devices or private browsing sessions.
- The intended ~1-hour duration is a **design ambition**, not a verified playtime. Please have a person play through and adjust difficulty if desired.

## Testing

A browser automation test accompanies the package notes. The project was checked for JavaScript syntax, initial loading, mobile overflow, incorrect answer blocking, progressive hints, full 36-puzzle playthrough, chapter transitions, and final birthday letter.
