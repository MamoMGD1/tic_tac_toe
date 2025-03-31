# Tic-Tac-Toe AI (Minimax Algorithm)

This project is a **Tic-Tac-Toe game** where a human player competes against an **AI opponent powered by the Minimax Algorithm**. The AI is designed to make optimal moves, ensuring that it never loses when playing perfectly.

## 🚀 How the Minimax Algorithm Works

The **Minimax Algorithm** is a recursive decision-making algorithm used in **game theory and AI** for finding the best move in a turn-based game. It operates on the principle of **maximizing the AI's advantage** while **minimizing the opponent's best possible move**.

### 🏆 Why Minimax is Ideal for Tic-Tac-Toe
- **Perfect Play Guarantee:** The AI **never loses** if it plays optimally.
- **Full Search Space Exploration:** Since Tic-Tac-Toe has a limited number of moves, Minimax can evaluate all possible outcomes efficiently.
- **Deterministic Behavior:** Unlike AI with randomness, Minimax ensures the AI always makes the **best move possible**.

## 🔥 Limitations of Minimax
While Minimax is great for simple games like **Tic-Tac-Toe**, it becomes impractical for games with **huge search spaces** due to its **exponential complexity**.

### 🛑 Where Minimax Struggles
- **Chess (10^120 possible moves)** 🔄: Too many possible positions to compute.
- **Go (10^170 possible moves)** 🎭: Much larger search space than chess.
- **Poker (Hidden Information)** ♠️: Minimax assumes full knowledge of the game state, but poker includes hidden cards.
- **Pathfinding on a Large Map** 🗺️: Searching all possible routes may not be efficient.

### ⚡ Optimizations for Larger Games
To handle larger search spaces, we can improve Minimax using:
- **Alpha-Beta Pruning:** Cuts off unnecessary branches, reducing computations.
- **Monte Carlo Tree Search (MCTS):** Useful for games like Go where exhaustive search is infeasible.
- **Neural Networks:** Used in AI like AlphaGo to evaluate board positions intelligently.

## 📜 License
This project is open-source under the **MIT License**. Feel free to contribute or modify!


