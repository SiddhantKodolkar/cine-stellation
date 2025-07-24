# 🎬 Cine-Stellation

A constellation-style, full-stack movie recommendation app that blends ML-based suggestions with immersive graph visualizations.

<img width="1241" height="820" alt="image" src="https://github.com/user-attachments/assets/0323fce6-a12d-45e0-9e5e-22ec0d28f6ce" />

## 🌌 Overview

Cine-Stellation allows users to explore thousands of movies using a dynamic constellation-based graph UI. The app offers both interactive discovery and intelligent recommendations powered by modern ML models. 

Built using:
- 🌐 **Next.js** + **Tailwind CSS** (Frontend)
- ⚙️ **FastAPI** (Backend)
- 🧠 **Scikit-learn** + **Sentence-Transformers**
- 🛢 **MongoDB**

---

## 🧠 Features

### 🔗 Graph-Based Movie Exploration
- Interactive constellation view of 5,000+ movies.
- Visualizes similarity between movies using cosine distance.
- Hover to explore genres and top matches.
- Click **"Mark as watched"** to generate 5 more graph-linked recommendations in real time.

<img width="1184" height="678" alt="image" src="https://github.com/user-attachments/assets/27eee2e2-8c33-4990-9d55-f8c217f4f827" />


---

### 🔍 Search by Plot Description

- Search movies by natural language plot input.
- Uses `all-mpnet-base-v2` (Sentence Transformers) to encode and retrieve semantically similar plots.
- Displays best-matching title, confidence score, overview, release date, and cast.

<img width="1062" height="849" alt="image" src="https://github.com/user-attachments/assets/7414b1b6-60c6-41fe-8fee-e435f2aa2980" />


---

## ⚙️ Tech Stack

| Layer        | Tech Used                                      |
|--------------|------------------------------------------------|
| Frontend     | Next.js, React, Tailwind CSS, D3 / Canvas API  |
| Backend      | FastAPI, Uvicorn, Pydantic                     |
| ML Models    | Scikit-learn, Sentence Transformers (MPNet)    |
| Database     | MongoDB                                        |
| Auth         | JWT (next-auth for user-facing UI)             |

---

## 💡 How It Works

### Recommendation Logic
- Movie similarity: Calculated using cosine similarity on TF-IDF or metadata vectors.
- User watched history triggers a real-time update of 5 similar titles via graph connections.
- MPNet transformer encodes user plot queries for nearest neighbor search.

---

## 🚀 Getting Started

Clone the repo and follow the instructions in [`/frontend`](./frontend) and [`/backend`](./backend) directories to spin up the app locally.

```bash
git clone https://github.com/SiddhantKodolkar/cine-stellation.git
cd cine-stellation
# Refer to frontend/ and backend/ READMEs




