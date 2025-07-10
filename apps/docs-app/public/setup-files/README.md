# Tagaddod Design System - AI Setup Files

This directory contains downloadable setup files for AI-powered development with the Tagaddod Design System.

## ⚠️ IMPORTANT: DO NOT INSTALL TAILWIND CSS

The Tagaddod Design System provides its own complete styling solution. **DO NOT install or configure Tailwind CSS** as it will conflict with the design system's styles and tokens. Follow the setup files exactly as written.

## Available Files

| File | Purpose |
|------|---------|
| `nextjs-setup.md` | AI instructions for Next.js 15 project scaffolding |
| `vite-setup.md` | AI instructions for Vite + React project creation |
| `tagaddod-installation.md` | Complete package installation instructions |
| `themeprovider-setup.md` | ThemeProvider configuration for multi-theme support |
| `styles-activation.md` | CSS import order and Google Fonts optimization |
| `component-integration.md` | Component usage patterns and best practices |
| `rtl-support.md` | Enhanced RTL support for Arabic language |
| `optimization.md` | Advanced performance optimization strategies |

## How to Use

1. **Download the file** you need for your current setup step
2. **Provide it to your AI agent** (Cursor AI, Claude Code, etc.)
3. **Give the AI instruction** specified in the main documentation
4. **Let the AI handle the setup** automatically

## Example Usage

```
Download: nextjs-setup.md

AI Instruction:
"Please use the nextjs-setup.md file to create a new Next.js 15 project with TypeScript 
and App Router. Follow all the specifications in the rules file."
```

## File Format

All files are in Markdown format (`.md`) and contain:
- Clear objectives and prerequisites
- Step-by-step AI agent instructions
- Validation steps and troubleshooting
- Success indicators

## Access via Storybook

When Storybook is running, these files are available at:
- `http://localhost:6006/setup-files/[filename].md`

## Repository Location

These files are also available in the repository at:
`packages/storybook/src/stories/rules/`