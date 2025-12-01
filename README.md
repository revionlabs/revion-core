# Revion Core

Revion Core contains the shared domain models and deterministic logic that power the Revion OS context engine. This package computes readiness, capacity load, stress levels, and environment scoring based on real-world signals.

## Structure
- `models/` — static domain models and shared types
- `scoring/` — deterministic scoring functions
- `context/` — state transformers and data normalization

## Principles
- Pure functions only
- No side effects
- Deterministic and explainable
- No UI or browser logic

MIT License
