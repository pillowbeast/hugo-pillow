---
title: "{{ replace (replace .Name "-" " ") "_" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
metadata:
  rating: "8/10"
summary: "Write a short description of the recipe here."
cookDetails:
  prepTime: "10 min"
  cookTime: "20 min"
  totalTime: "30 min"
  servings: "4"
  cuisine: "Cuisine Type"
  mealType: "Main Course"
  difficulty: "Easy"
ingredients:
  part1:
    - { amount: "1 cup", name: "Ingredient 1" }
    - { amount: "2 tbsp.", name: "Ingredient 2" }
    - { amount: "500 g", name: "Ingredient 3" }
  part2:
    - { amount: "1 cup", name: "Ingredient 1" }
    - { amount: "2 tbsp.", name: "Ingredient 2" }
    - { amount: "500 g", name: "Ingredient 3" }
steps:
  - "Step 1: Add details here."
  - "Step 2: Add details here."
  - "Step 3: Add details here."
image: "images/default-recipe.jpg"
draft: true
categories: []
tags: [Dinner, Pasta]
---

{{< metadata >}}

## The Origin

Write a short introduction or story about the recipe here. Share its history, inspiration, or personal connection.

{{< recipe >}}