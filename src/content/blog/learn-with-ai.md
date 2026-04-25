---
title: "learn-with-ai: Ein Lernsystem aus Markdown und einem AI-Agent"
description: "Ein Repo aus Markdown-Dateien plus Anweisungen für einen AI-Agent. 15–20 Minuten pro Tag, strukturierte Sessions, Spaced Repetition."
date: 2026-04-25
tags: ["AI", "Lernen", "Claude Code", "Spaced Repetition"]
---

[`learn-with-ai`](https://github.com/janmarkuslanger/learn-with-ai) ist ein Repo aus ein paar Markdown-Dateien und einer Anweisungsdatei für einen AI-Agent. Der Agent übernimmt die Rolle eines Lerncoaches und führt durch tägliche Sessions von 15–20 Minuten.

## Setup

Drei Schritte:

1. Repo klonen oder forken.
2. `CURRICULUM.md` ausfüllen — Background, aktuelle Projekte, Ziel, Sprache, tägliches Zeitbudget und der Lernpfad in 3–6 Phasen mit je 3–6 Themen.
3. Repo in einem AI-Agent öffnen, der `AGENTS.md` versteht (z. B. Claude Code oder Cursor) und `learn` eingeben.

Der Agent liest `CURRICULUM.md` und `PROGRESS.md` selbst und beginnt die nächste Session.

## Aufbau

```
CURRICULUM.md   ← persönliche Konfiguration (einzige Datei, die der Lernende füllt)
AGENTS.md       ← Anweisungen für den Agent (Rolle, Session-Modi, Regeln)
PROGRESS.md     ← Fortschritt, SRS-Plan, Lückentracker (vom Agent gepflegt)

/concepts       ← Concept-Sessions
/quizzes        ← Quiz-Ergebnisse
/katas          ← Design- und Coding-Aufgaben
/deep-dives     ← Trade-off-Diskussionen
/review         ← Review-Sessions
/templates      ← Markdown-Templates pro Session-Typ
```

`AGENTS.md` ist der Kern. Dort sind Session-Modi, Auto-Rotation, SRS-Regeln, Mastery-Bedingungen, Phase Exit Gates und das Return-from-Break-Protokoll definiert.

## Session-Modi

```
learn       Auto-Auswahl basierend auf Fortschritt
concept     neues Konzept einführen (15–20 Min)
quiz        5 Fragen zum letzten Konzept
kata        fokussierte Design- oder Coding-Aufgabe
deep dive   Trade-offs, Edge Cases, Feynman-Check
review      Spaced Repetition über alte Themen
wildcard    freies Szenario auf einem beliebigen Thema
```

Die Auto-Rotation pro Thema ist `concept → quiz → kata → deep-dive`. Nach jedem vierten abgeschlossenen Thema wird automatisch ein Review eingeschoben.

## Spaced Repetition

Nach jedem Quiz oder Review berechnet der Agent das nächste Review-Datum nach festen Regeln:

| Antwort | Neues Intervall |
|---|---|
| knew it | aktuelles Intervall × 2 (mindestens 7 Tage) |
| unsure | aktuelles Intervall halten |
| guessed / falsch | zurück auf 3 Tage |

Erstes Review eines Themas: 7 Tage. Die Daten stehen in `PROGRESS.md` und sind nachvollziehbar.

## Mastery und Phase Exit

Ein Thema gilt als gemeistert, wenn es nach dem vollen Zyklus mindestens zweimal reviewt wurde und in den letzten beiden Reviews jede Frage mit Confidence "knew it" und korrekt beantwortet wurde. Gemeisterte Themen bleiben im Review, nur seltener.

Vor dem Übergang zur nächsten Phase gibt es ein Phase Exit Review über alle Themen der aktuellen Phase. Pass-Kriterium: ≥ 80 % korrekt, kein "guessed" auf den Kernthemen. Bei nicht bestandenem Review werden die schwachen Themen gezielt wiederholt, dann erneut geprüft.

## Return from Break

`AGENTS.md` definiert, was nach Pausen passiert:

| Pause | Aktion |
|---|---|
| < 2 Wochen | normal weiter |
| 2–4 Wochen | Diagnose mit 3 Fragen zum letzten Thema |
| > 4 Wochen | Review der letzten 3 Themen, alle stark überfälligen Intervalle auf 3 Tage zurückgesetzt |
| > 12 Wochen | Phase Exit Review der letzten Phase wiederholen |

## Beispiel: Concept-Session

Beispielablauf für das Thema "CAP-Theorem", wenn `learn` getippt wird und das Thema noch keinen Concept-Eintrag hat:

1. Vorwissen-Check: "Wo ist dir das schon mal begegnet, auch wenn du den Namen nicht kanntest?"
2. Erklärung des Konzepts — Kernaussage, Trade-offs, Anwendungsfälle.
3. Eigenes Beispiel: "Gib mir dein eigenes Beispiel — nicht das aus der Erklärung." Eine Umformulierung wird nicht akzeptiert.
4. Kontrast: "Was ist der Unterschied zu PACELC, und wann wählst du welches Modell?"
5. Connections: "Welche Konzepte aus früheren Sessions baut das auf oder widerspricht dem?"

Das Ergebnis landet in `concepts/2026-04-25-cap-theorem.md`. `PROGRESS.md` wird aktualisiert: Concept abgehakt, nächstes Review in 7 Tagen, eventuelle Lücken in den Tracker eingetragen.

In der nächsten Session erkennt der Agent über `PROGRESS.md`, dass das Quiz fehlt, und stellt fünf Fragen aus genau diesem Concept-File. Nach jeder Antwort kommt die Confidence-Frage ("knew it / unsure / guessed"), dann das Feedback. Korrekte Antworten mit niedriger Confidence werden als "lucky" markiert und wie Fehler behandelt.

## Warum Markdown statt UI

- Markdown öffnet sich in jedem Editor und ist ohne Tooling lesbar.
- Jede Session ist ein Git-Commit, also versionierbar und durchsuchbar.
- Das System ist agent-agnostic: solange ein Agent `AGENTS.md` versteht, funktioniert es. Wechsel zwischen Anbietern ist möglich.

## Lerntheoretischer Hintergrund

Drei Mechanismen sind im System abgebildet:

- **Active Recall** durch Quizzes und Reviews. Wissen wird aktiv abgerufen, nicht nur erneut gelesen.
- **Spaced Repetition** durch wachsende Intervalle bei sicherem Wissen und Reset bei Fehlern oder Raten.
- **Feynman-Technik** nach Katas und Deep-Dives: das Konzept in 2–3 Sätzen einem Junior erklären. Vage Erklärungen werden vom Agent als Lücke markiert.

## Grenzen

Das System organisiert Wissensaufnahme, es ersetzt keine Bücher oder Kurse. In `CURRICULUM.md` werden Quellen referenziert, der Agent zitiert daraus in Sessions.

Tonfall, Sprache, Tempo und Themenmix werden über `CURRICULUM.md` gesteuert. `AGENTS.md` muss nur angefasst werden, wenn das Coaching-Verhalten selbst geändert werden soll.

[github.com/janmarkuslanger/learn-with-ai](https://github.com/janmarkuslanger/learn-with-ai)
