---
title: "Claude Code Skills: Einmal schreiben, überall nutzen"
description: "Skills für Claude Code lassen sich in einem eigenen Repo pflegen und per Marketplace in jedem Projekt installieren — wiederverwendbare AI-Workflows ohne Copy-Paste."
date: 2026-05-11
tags: ["Claude Code", "AI", "Skills", "Developer Tools"]
---

Wer regelmäßig mit Claude Code arbeitet, kennt das Problem: hilfreiche Instruktionen landen in der `CLAUDE.md` eines Projekts — und bleiben dort. Beim nächsten Projekt fängt man von vorne an oder kopiert manuell rüber.

Claude Code hat dafür eine Lösung: Skills. Und die lassen sich über einen Marketplace installieren.

## Das Konzept

Ein Skill ist eine Instruktionsdatei, die Claude Code beibringt, wie es eine bestimmte Aufgabe erledigen soll — Architektur-Dokumentation generieren, einen Commit validieren, einen Architecture Decision Record schreiben. Der Skill lebt in einem eigenen GitHub-Repo, ist versioniert und kann von jedem genutzt werden, der Claude Code einsetzt.

Ich habe ein solches Repo veröffentlicht: [`janmarkuslanger/skills`](https://github.com/janmarkuslanger/skills).

## Installation per Marketplace

Das ist der Teil, den ich wirklich cool finde. Zwei Befehle, und die Skills sind in jedem Projekt verfügbar:

```
/plugin marketplace add janmarkuslanger/skills
/plugin install janmarkuslanger-skills
```

Danach lassen sich Skills direkt aufrufen:

```
/diff-commit
/create-architecture-docs
/architecture-proposal
```

Kein Copy-Paste zwischen Projekten. Kein manuelles Synchronisieren. Wenn sich ein Skill verbessert, kommt das Update über den Plugin-Mechanismus.

## Wiederverwendbarkeit in der Praxis

Das ist der eigentliche Gewinn: Man investiert einmal in eine gute Instruktion, und sie funktioniert in jedem Projekt. Wer eigene Skills schreibt, kann sie genauso veröffentlichen und teilen oder intern im Team nutzen, ohne sie in jedes Repo einzeln einzubauen.

Das Prinzip ist dasselbe wie bei npm-Paketen oder Homebrew-Formeln, nur für AI-Workflows. Der Skill-Mechanismus von Claude Code macht das möglich.

## Was in meinem Repo steckt

Ein paar Beispiele aus `janmarkuslanger/skills`:

**`diff-commit`** — Prüft die aktuellen Git-Änderungen auf typische Probleme (Debug-Statements, Secrets, Conflict-Marker) und generiert eine Commit-Message im Conventional-Commit-Format.

**`create-architecture-docs`** — Analysiert den Codebase und schreibt eine vollständige `ARCHITECTURE.md`, inklusive Mermaid-Diagrammen.

**`architecture-proposal`** — Bevor Code entsteht: stellt gezielte Fragen und erzeugt ein `SYSTEM_DESIGN.md` als Architektur-Blueprint.

**`adr`** — Schreibt Architecture Decision Records mit Kontext, Entscheidung und Konsequenzen.

Jeder Skill ist ein eigenes Verzeichnis mit einer `SKILL.md` — in sich geschlossen, kein geteilter Zustand.

## Eigene Skills bauen

Das Schöne: Das Format ist einfach. Eine `SKILL.md` mit Frontmatter und den Instruktionen für den Agent — das war's. Wer eigene Workflows hat, die sich wiederholen, kann sie genauso verpacken und installierbar machen.

Der Marketplace-Mechanismus von Claude Code ist noch relativ neu, aber genau dafür gedacht: um zu verhindern, dass gute Instruktionen in einzelnen Projekten versanden.

[github.com/janmarkuslanger/skills](https://github.com/janmarkuslanger/skills)
