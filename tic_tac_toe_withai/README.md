# 🤖 Tic-Tac-Toe AI (ReactJS)

A smart and responsive **Tic-Tac-Toe** game built using **ReactJS**, where you can play against an intelligent AI opponent trained with unbeatable logic.

---

## 🚀 Live Demo

🎮 Play now: [TicTacToe with ai](https://ai-tictactoegame.vercel.app)

---

## 🧠 Features

- 🎯 Play against an unbeatable AI using the Minimax algorithm
- 🧑‍🤝‍🧑 Play with a friend (two-player mode)
- 🔁 Restart game button
- 🧾 Real-time scoreboard (Win / Loss / Draw)
- 📱 Fully responsive UI for all screen sizes
- 🧼 Clean and intuitive interface

---

## 🛠️ Tech Stack

| Layer         | Technology               |
|---------------|---------------------------|
| Framework     | React.js (Vite or CRA)    |
| Language      | JavaScript (ES6+)         |
| State Mgmt    | React Hooks (`useState`)  |
| Styling       | CSS Modules / Tailwind CSS |
| AI Logic      | Minimax Algorithm         |
| Deployment    | Vercel                    |


## 📦 Installation

### Prerequisites

- Node.js >= 14.x
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/adityawaghamare04/TicTactoe.git
cd tic_tac_toe_withai

# Install dependencies
npm install

# Run the app
npm run dev    # or npm start if using CRA

# visit
http://localhost:3000

```
## 📂 Project Structure
```
tic_tac_toe_withai/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Board.jsx
│   │   └── Cell.jsx
│   ├── utils/
│   │   └── ai.js           # Minimax algorithm
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── App.css
├── package.json
└── README.md
```
## 🧠 How AI Works
The AI uses the Minimax algorithm, which simulates every possible move in the game and picks the optimal move that maximizes its chances of winning while minimizing the player's chances.

## 📄 License
This project is licensed under the MIT License.

