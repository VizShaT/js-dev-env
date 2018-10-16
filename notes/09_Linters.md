# Linting 

## Linters

1. JSLint
2. JSHint
3. ESLint

## Core Decisions 

1. Config format?
2. Which built-in rules ?
3. Warnings or Errors ?
4. Which plugins ?
5. Use preset instead ?

## Preset

1. eslint-loader
	- Re-lints all files upon save
	
2. eslint-watch
	- ESLint wrapper that add file watch
	- Not tied to webpack
	- Better warning/error formatting
	- Displays clean message
	- Easily lint tests and build scripts too
	
	