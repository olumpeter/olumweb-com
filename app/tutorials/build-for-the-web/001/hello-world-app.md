<!--

---
title: >
  Build for the Web: 001 — Hello World App with TypeScript, Node.js & React
  Router v7
subtitle: PRACTICAL MODERN WEB PROGRAMMING FOR TOTAL BEGINNERS
description: >
  Learn how to set up a TypeScript + Node.js project using React Router v7
  Framework Mode. Perfect for beginners looking to build their first web app.
slug: 'build-for-the-web-001-hello-world-app'
series: 'Build for the Web'
tutorialNumber: 1
date: 2025-10-13
author: 'Peter Olum'
tags:
  - TypeScript
  - React
  - Tailwind CSS
  - React Router v7 Framework Mode
  - Node.js
  - Modern Web Development
readingTime: '8 min'
published: true
---

-->

<h1>
	Build for the Web: 001 — Hello World App with TypeScript, Node.js & React
	Router v7
</h1>

<h3><i>PRACTICAL MODERN WEB PROGRAMMING FOR TOTAL BEGINNERS</i></h3>

---

<h2>Table of Content</h2>

- [💡 Guide Emojis](#-guide-emojis)
- [🧭 Introduction](#-introduction)
- [🎯 What You'll Build](#-what-youll-build)
- [🛠 Setting Up Your Coding Environment](#-setting-up-your-coding-environment)

---

## 💡 Guide Emojis

- 👉 means it's your turn to **take action** in VS Code, the terminal, or the
  web browser.
- 👀 means **pause and observe** what appears on your screen.
- ✏️ means **edit or replace** code in a file.
- 🗑️ means **delete** files, folders, or lines of code you no longer need.
- ⚙️ means **configure** or **update project settings** such as `tsconfig.json`
  or `vite.config.ts`.
- 🎯 means **preview the goal or final output** you're working toward in this
  tutorial.
- 🚀 means **you’ve reached a new milestone** — time to move to the next step or
  section.

---

## 🧭 Introduction

- In this tutorial, you'll learn how to **build** your first **Hello World App**
  with **TypeScript** & **Node.js** using **React Router v7 Framework Mode**.

- We'll keep it **hands-on** and **beginner-friendly**, so by the end, you'll be
  confident **building a web page, understanding the project structure, and
  previewing your app in the browser**.

- This tutorial is the perfect starting point if you want to **learn modern web
  development using TypeScript** while using a **scaffolded React Router
  project** to simplify setup.

---

## 🎯 What You'll Build

- By the end of this **tutorial**, you'll have a simple web app that shows a red
  **"Hello, World!"** message styled with **Tailwind CSS** and running on
  **React Router v7 Framework Mode**.

<!-- 🎬 B-roll: Show browser with red "Hello, World!" on screen -->

![Final result showing red Hello World heading in browser](./images/hello-world-app-final-result.png)

- You'll **build** this from **scratch** using:
  - **TypeScript** for type-safe code.
  - **React Router v7 Framework Mode** for app structure.
  - **Tailwind CSS** for styling.

---

## 🛠 Setting Up Your Coding Environment

- In this **tutorial**, you'll use **Visual Studio Code (VS Code)** with an
  **integrated Bash terminal** as your **Integrated Development Environment
  (IDE)**.
- Make sure you have **VS Code** and **Git Bash** installed on your computer
  before proceeding.
- 👉 If you already have **VS Code** installed, open it and run the following
  command in the terminal to check whether **Node.js** is installed:

<!--
🎬 B-roll: show the running of `node -v` in the terminal
-->

```bash
node -v
```

- 👀 You should see an output like this if Node.js is installed:

**Output:**

```bash
v23.11.0
```

- 👀 If you see an error such as:

**Output:**

```bash
node: command not found
```

It means **Node.js isn't installed** on your computer.

- 👉 To fix it:
  1. Visit [nodejs.org ↗](nodejs.org).
  2. Download the **LTS (Long-Term Support)** version for your operating system
     — it’s the most stable option for beginners.
  3. Run the installer and follow the setup steps.
  4. After installation, open a **new terminal** and verify Node.js is
     installed:

  ```node
  node - v
  ```

  You should see a version number like v23.11.0.

- 🎯 Once you see the version number, you're ready to continue!

- 👉 To stay organized, go to your desktop and create a new folder called
  **TypeScript Projects**.
- To do this:
  1. Right-click on your desktop.
  2. Select **New > Folder**.
  3. Name the folder **TypeScript Projects**.

<!--
🎬 B-roll: show creating folder "TypeScript Projects" on desktop
-->

- Then, open the **TypeScript Projects** folder in **VS Code** by:
  1. Open **Visual Studio Code**.
  2. Click on **File > Open Folder…** from the top menu.
  3. Navigate to your desktop and select the **TypeScript Projects** folder.
  4. Click **Select Folder** (Windows) or **Open** (Mac).

<!--
> 🎬 B-roll: opening "TypeScript Projects" in VS Code
-->

- You can also use the shortcut **Ctrl+K, Ctrl+O** (Windows/Linux) or **Cmd+K,
  Cmd+O** (Mac) to open a folder quickly.

- The **TypeScript Projects** folder is where you'll **build** your first
  **Hello World App** with **TypeScript** & **Node.js** using **React Router v7
  Framework Mode**.

<!--
> 🎬 B-roll: pointing at the TypeScript Opened project in VS Code
-->

- 🚀 Now that your environment is ready, let's move on to creating your first
  real project.
- Since most real-world apps start from a scaffold, we'll use the **React Router
  v7 Framework Mode** template — it comes with **TypeScript** and
  **TailwindCSS** already set up.
- 👉 Run the following command in your terminal to **scaffold a new React Router
  v7 Framework Mode project** in a folder named **001-hello-world-app**:

```bash
npx create-react-router@latest 001-hello-world-app
```

<!--
🎬 B-roll: running the above command in the terminal
-->

- 👀 The installation may take a while depending on your **internet speed**.
- 👀 Once the **installation** completes, you should see a new folder named
  **001-hello-world-app**, and **output** in the terminal indicating that the
  project has been successfully created.

- 👉 Navigate to the **001-hello-world-app** folder with this command:

```bash
cd 001-hello-world-app
```

<!--
🎬 B-roll: showing the **001-hello-world-app** folder in VS Code and running cd 001-hello-world-app
-->

- Inside your **001-hello-world-app** project folder, you'll notice an **app**
  directory — this is where your **routes**, **layouts**, and **components**
  live.

<!--
🎬 B-roll: showing the app folder in VS Code Explorer
-->

- Let's start the development server to preview the app in the browser.
- 👉 Run the following command in your terminal:

```bash
npm run dev
```

<!--
🎬 B-roll: running the above command in the terminal
-->

- 👉 Once the server starts, open your browser and go to http://localhost:5173.
- 👀 You should now see the default React Router welcome page — this confirms
  your environment is set up correctly.

<!--
🎬 B-roll: showing browser with http://localhost:5173 open and displaying the default app
-->

🚀 With your development server running successfully, let's now clean up the
default scaffold so we can start fresh.

- ✏️ Before building _Your First Hello World App_, let's tidy up the default
  scaffold.
- Replace the code in the **app/routes/home.tsx** file with the following React
  code:

```tsx
export default function Home() {
	return (
		<>
			<h1>Hello, World!</h1>
		</>
	)
}
```

- 🗑️ Now you can go ahead and delete the **welcome** folder and everything that
  comes with it, since we're no longer using it.

<!--
> 🎬 B-roll: deleting the welcome folder in VS Code Explorer
-->

- ✏️ Replace the code in the **app/app.css** file with the following code:

```css
/* app/app.css */
@import 'tailwindcss';

@theme {
	--font-sans:
		'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
		'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

@layer base {
	html,
	body {
		font-family: var(--font-sans);
	}
}
```

- Starting with **TypeScript 7**, the following options in your
  **tsconfig.json** are **deprecated**:

```json
"baseUrl": ".",
"paths": {
  "~/*": ["./app/*"]
}
```

- ⚙ To prevent **related warnings** and **maintain compatibility**, add the
  following line inside your `compilerOptions` block:

```json
"ignoreDeprecations": "6.0"
```

- Here's what your updated **tsconfig.json** should look like:

```diff
{
  "include": [
    "**/*",
    "**/.server/**/*",
    "**/.client/**/*",
    ".react-router/types/**/*"
  ],
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "types": ["node", "vite/client"],
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "rootDirs": [".", "./.react-router/types"],
    "baseUrl": ".",
    "paths": {
      "~/*": ["./app/*"]
    },
    "esModuleInterop": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
+    "ignoreDeprecations": "6.0"
  }
}
```

- 💡 Tip: You can safely remove `"baseUrl"` and `"paths"` later once React
  Router supports an official import alias pattern.

- You're going to use **TailwindCSS** to style **Your First Hello World App**.
- 👉 To make sure TailwindCSS is working, add the following classes to the
  `<h1>` element in **app/routes/home.tsx**.

```tsx
// app/routes/home.tsx
export default function Home() {
	return (
		<>
			<h1 className='text-4xl font-bold text-red-600'>Hello, World!</h1>
		</>
	)
}
```

<!--
🎬 B-roll: showing the app/route/home.tsx with the changes made.
-->

- 👀 You should now see a large red "Hello, World!" heading in your browser.

---
