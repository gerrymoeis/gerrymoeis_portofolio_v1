# Project Vision & Technical Specification: Windows XP Portfolio

**Version: 1.0**

This document is the single source of truth for the project. It summarizes the core vision, features, design principles, and key technical decisions to guide development and maintain conceptual integrity.

---

## 1. High-Level Vision & Goals

- **Primary Goal**: To create a unique, memorable, and interactive portfolio to attract recruiters, HR managers, and potential clients for job and internship opportunities.
- **Core Identity**: The portfolio's identity is built on evoking the nostalgia and specific aesthetic of the Windows XP operating system.
- **Desired Impression**: The project should project an image of being **"creative," "out-of-the-box," "humorous,"** and technically proficient. It must be a "wow" factor that makes the user stand out.
- **Success Metrics**: 
  - Tangible: Securing interviews, job offers, or freelance inquiries.
  - Intangible: Serving as a proud digital art piece, sparking conversations.
- **Long-term Vision**: The portfolio is designed to be an expandable personal platform, potentially including:
  - A blog for sharing technical articles.
  - A contact page for freelance inquiries.
  - Donation/sponsorship features (e.g., a sponsor showcase).

---

## 2. User Experience (UX) & Feature Breakdown

### 2.1. Core Interaction Principles

- **Desktop Metaphor**: The entire UI is based on a desktop metaphor. All content is accessed through desktop icons, a taskbar, and a start menu.
- **Draggable & Resizable Windows**: This is a **critical, non-negotiable** feature. Every application or content view will open in a window that the user can freely move and resize, mimicking a real OS.
- **One-Page Feel**: While functionally multi-section, the experience should feel like a seamless single-page application. No hard page reloads.

### 2.2. User Flow & Key Features (MVP)

1.  **Initial Load**: User arrives at the "Desktop". An "About Me" window is shown by default to immediately provide context.
2.  **Navigation**: 
    - **Taskbar**: Persistently visible at the bottom. It will show currently open "applications" and provide access to the Start Menu.
    - **Start Menu**: The primary navigation hub. It will contain links to: `About Me`, `My Projects`, `Blog`, `Contact`, `Sponsor`.
3.  **Content "Applications"**:
    - **`My Projects` (Explorer Window)**: 
        - Opens an "Explorer"-style window.
        - Projects are displayed as **large icons** with their respective logos/images.
        - Clicking an icon opens a new, separate window detailing that specific project.
    - **`About Me` (Custom Window)**: 
        - Not a simple Notepad. This will be a more creative UI, potentially styled like "System Properties" or a custom welcome screen.
        - It must be able to display a profile picture alongside rich text.
    - **`Contact Me` (CMD Window)**: 
        - The contact form will be presented inside an interactive Command Prompt-style window.
        - User input will be styled to look like command-line entries.

---

## 3. Design System & Aesthetics (The "XP" Look & Feel)

- **Guiding Principle**: Authenticity over direct imitation. We will capture the *spirit* and key elements of the XP aesthetic, but interpret them cleanly for the web.

- **Font**: 
    - **Requirement**: A true retro, pixelated font. `Silkscreen` was deemed not suitable.
    - **Decision**: We will use the **`Tiny5`** font from Google Fonts.
    - **Implementation Snippet**:
      ```css
      @import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
      
      .tiny5-regular {
        font-family: "Tiny5", sans-serif;
        font-weight: 400;
        font-style: normal;
      }
      ```

- **Color Palette**: 
    - **Inspiration**: The iconic Windows XP "Luna" theme (the classic blue title bar, green start button, and silver/grey window chrome).
    - **Execution**: We will define a Tailwind CSS color palette that is a modernized interpretation of these colors, ensuring web accessibility and a clean look.

- **Icons**: 
    - **Requirement**: A comprehensive set of pixel-art icons for files, folders, UI elements, etc.
    - **Action**: Researching open-source pixel-art libraries that are consistent in style (e.g., `Pixelarticons`, `HackerNoon Icons`).

- **Animations**: 
    - **Requirement**: Animations are crucial for an authentic feel. We will use `framer-motion`.
    - **Scope**: Replicate classic XP animations like window minimize/maximize/close, dragging visuals, and subtle UI transitions.
    - **Out of Scope (MVP)**: Sound effects are not required for the initial release but can be added later.

---

## 4. Technical Architecture & Decisions

- **Frontend**: Next.js 15+ (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS. We will build a modular, component-based Design System from scratch.
- **State Management**: We will likely need a state management solution (like Zustand or Jotai) to handle the state of open/closed/active windows globally.
- **Backend**: Supabase is the **exclusive** choice for the database, authentication, and file storage.
- **Content Management**: 
    - **Decision**: We will use a **Headless CMS** to manage content for the blog and projects.
    - **Rationale**: This approach dramatically speeds up development by providing a ready-made admin interface, allowing us to focus on the unique frontend experience.
    - **Chosen CMS**: **Strapi**. It is free, open-source, highly customizable, and has strong community support for Next.js and Supabase integration.
