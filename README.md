# Japan Tap Gates Project

This project is an exploration of **high-volume, low-latency transaction systems**, inspired by real-world transit infrastructure like Japan’s train gates.

In Japan, millions of passengers pass through automated train gates every day. Each tap of a card must be validated, recorded, and completed in a fraction of a second. The system is expected to work reliably at massive scale, under constant load, with zero tolerance for delays.

This repository exists to explore **how systems like that might be designed**, from the ground up.

---

## Inspiration

This project is a continuation of ideas explored in my article:

[**Millions of records, amazingly fast automated train gates**](https://www.linkedin.com/pulse/millions-records-amazingly-fast-automated-train-gates-mike-firoved-rvsvc/)  
by *Mike Firoved* (LinkedIn)

In my article, I describe the scale, performance, and reliability requirements of transit systems that process tens of millions of transactions daily, and how their architecture differs from typical CRUD-based applications.

This repository turns those ideas into **code and experiments**.

---

## Purpose

The goals of this project are:

- Explore database patterns for **extremely fast writes**
- Experiment with **transaction batching and idempotency**
- Study **queue-based and append-only designs**
- Practice clean infrastructure setup using Docker and Knex
- Build intuition for systems that must work at scale, every time

This is not a production system.  
This is a playground, a place to test ideas and document lessons.

---

## Tech Stack

- **Node.js**
- **PostgreSQL**
- **Knex.js**
- **Docker Compose**
- **dotenv**
- Local-first development workflow

---
## Getting It Running

Follow these steps to bring up the database, initialize schema, and run basic experiments.

### 1. Start the database
Create and start the Postgres Docker container:
```sh
npm run make-db
```
### 2. Run migrations
Create the initial tables and schema using Knex migrations:
```sh
npm run migrate
```

### 3. Seed test data
Insert 100,000 simulated user card accounts:
```sh
npm run seed-db
```

### 4. Query a single card
Run a test query against the database for one account:
```sh
npm run try-card`
```

### 5. Tear everything down
Stop the database and remove all containers and volumes:
Take down docker db and cleanup
```sh
npm run kill-db
```


---

*This README was written with the assistance of ChatGPT.*

