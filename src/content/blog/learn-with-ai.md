---
title: "learn-with-ai: Ein persönliches Lernsystem aus Markdown und einem AI-Agent"
description: "Wie ich mit ein paar Markdown-Dateien und Claude Code ein Lernsystem gebaut habe, das täglich 15–20 Minuten reicht, sich an mein Leben anpasst und nichts vergisst."
date: 2026-04-25
tags: ["AI", "Lernen", "Claude Code", "Spaced Repetition"]
---

Ich wollte ein Lernsystem, das mit mir arbeitet, nicht gegen mich. Keine App mit Pushnotifications, keine Plattform die mein Tempo vorgibt, keine vorgekauten Kurse. Nur ein Plan, ein Coach und ein Ort an dem alles dokumentiert wird.

Das Ergebnis ist [`learn-with-ai`](https://github.com/janmarkuslanger/learn-with-ai) — ein Repo aus Markdown-Dateien plus ein paar Anweisungen für einen AI-Agent. 15–20 Minuten am Tag, strukturierte Sessions, echter Fortschritt.

## Setup

Das Setup besteht aus genau drei Schritten:

1. Repo klonen oder forken.
2. `CURRICULUM.md` ausfüllen — Background, aktuelle Projekte, Ziel, Sprache, tägliches Zeitbudget und der eigene Lernpfad in 3–6 Phasen mit je 3–6 Themen.
3. Repo in einem AI-Agent öffnen, der `AGENTS.md` versteht (z. B. Claude Code oder Cursor) und `learn` tippen.

Mehr nicht. Der Agent liest `CURRICULUM.md` und `PROGRESS.md` selbst, weiß wo ich stehe und legt los.

Die wichtigste Datei ist `AGENTS.md`. Sie definiert die Rolle des Agents als Coach, die Session-Modi, die Auto-Rotation, das Spaced-Repetition-Schema, die Mastery-Bedingungen und die harten Regeln (z. B. "Niemals Inhalte erfinden", "Niemals weichgespültes Feedback"). Diese Datei ist das Herz des Systems — der Agent hat keinen Spielraum für gut gemeinte aber unscharfe Kompromisse.

## Wie eine Session aussieht

Es gibt sechs Session-Typen:

```
learn       → Auto-Auswahl basierend auf Fortschritt
concept     → 15–20 Min: ein neues Konzept einführen
quiz        → 5 Fragen zum letzten Konzept
kata        → eine fokussierte Design- oder Coding-Aufgabe
deep dive   → Trade-offs, Edge Cases, Feynman-Check
review      → Spaced Repetition über alte Themen
wildcard    → freies Szenario auf einem beliebigen Thema
```

Die Auto-Rotation pro Thema läuft `concept → quiz → kata → deep-dive`. Nach jedem vierten vollständig abgeschlossenen Thema schiebt der Agent automatisch ein Review ein.

## Vorteile

**Personalisiert auf die Person, nicht auf eine Zielgruppe.** Der Agent kennt meinen Background und meine echten Projekte. Erklärungen werden in dem Tempo gemacht, das zu meinem Level passt. Beispiele kommen aus meinem eigenen Code, nicht aus einem generischen Lehrbuch.

**Spaced Repetition ist eingebaut.** Nach jedem Quiz oder Review berechnet der Agent das nächste Review-Datum nach klaren Regeln: "knew it" verdoppelt das Intervall (mindestens 7 Tage), "unsure" hält das Intervall, "guessed" oder falsch setzt auf 3 Tage zurück. Steht alles in `PROGRESS.md` und ist nachvollziehbar.

**Markdown als Storage.** Jede Session landet in `concepts/`, `quizzes/`, `katas/`, `deep-dives/` oder `review/` als Markdown-Datei mit Datum und Slug. Versionierbar mit Git, durchsuchbar mit grep, lesbar ohne Tooling. Wenn der AI-Anbieter morgen verschwindet, bleibt mein Wissen.

**Echtes Feedback statt Lob.** In `AGENTS.md` steht ausdrücklich: "Do not pad with praise. Skip 'Great effort!', 'Good thinking!', and similar filler." Der Agent sagt mir, wenn meine Erklärung schwammig ist, statt mich zu loben. Das ist unbequem und genau der Punkt.

**Phase Exit Gates.** Bevor ich von Phase 1 zu Phase 2 wechsle, gibt es ein verpflichtendes Phase Exit Review über alle Themen. Pass-Kriterium: ≥ 80% korrekt und kein "guessed" auf den Kernthemen. Keine Selbstüberschätzung, kein "ich glaub das hab ich verstanden".

**Return-from-Break Protocol.** Das Leben passiert. Wer länger als 2 Wochen weg war, bekommt eine kurze Diagnose. Wer länger als 4 Wochen weg war, bekommt erst ein Review der letzten drei Themen. Über 12 Wochen Pause: Phase Exit Review wiederholen. Niemand muss erklären "ich war krank" — das System fängt das automatisch auf.

**Mastery Threshold.** Ein Thema gilt erst dann als gemeistert, wenn es mindestens zweimal nach dem vollen Zyklus reviewt wurde und in den letzten beiden Reviews jede Frage mit "knew it" und korrekt beantwortet wurde. Mastered Topics tauchen weiterhin im Review auf, nur seltener.

## Ein konkretes Beispiel

Angenommen mein `CURRICULUM.md` enthält in Phase 1 das Thema "CAP-Theorem". Ich tippe `learn`, der Agent liest `PROGRESS.md`, sieht dass dieses Thema noch keinen Concept-Eintrag hat, und startet eine Concept-Session.

Was dann passiert, ist nicht "Hier ist eine Erklärung":

1. Erst fragt er: "Wo ist dir das schon mal begegnet, auch wenn du den Namen nicht kanntest?" — er kalibriert sein Erklärung an meinem Vorwissen.
2. Er erklärt das CAP-Theorem fokussiert. Eine Kernaussage, Trade-offs, wann nutzen, wann nicht.
3. Dann: "Gib mir dein eigenes Beispiel — nicht das aus der Erklärung." Eine Umformulierung wird nicht akzeptiert.
4. Kontrast: "Was ist der Unterschied zu PACELC, und wann wählst du welches Modell?"
5. Connections: "Welche Konzepte aus früheren Sessions baut das auf oder widerspricht dem?"

Nach 15–20 Minuten landet das Ergebnis in `concepts/2026-04-25-cap-theorem.md`. `PROGRESS.md` wird aktualisiert: Concept abgehakt, Review-Datum berechnet (7 Tage), Lücken eingetragen falls welche aufgetaucht sind.

Am nächsten Tag tippe ich wieder `learn`. Der Agent sieht: Concept ist da, Quiz fehlt. Er startet ein Quiz mit fünf Fragen aus genau dem Concept-File von gestern — keine erfundenen Edge Cases, nur was tatsächlich erklärt wurde. Nach jeder Antwort kommt die Confidence-Frage ("knew it / unsure / guessed"), dann erst das Feedback. Korrekte Antworten mit niedriger Confidence werden als "lucky" markiert und wandern in den Gap Tracker — ein "lucky guess" muss genauso wiederholt werden wie ein Fehler.

Nach Quiz, Kata und Deep-Dive ist das Thema durch. Nach drei weiteren Themen kommt automatisch ein Review.

## Warum Markdown und nicht eine Web-App

Der naheliegende Gedanke ist eine UI mit Datenbank. Ich habe das bewusst nicht getan:

- **Portabilität.** Markdown öffnet sich in jedem Editor, läuft auf jedem Gerät, lebt 30 Jahre.
- **Versionierung.** Jede Session ist ein Git-Commit. Ich sehe genau was ich wann gelernt habe und wie sich mein Verständnis entwickelt hat.
- **Lesbarkeit ohne Tool.** Wenn ich nachgucken will, was ich vor zwei Monaten zu Konsistenzmodellen geschrieben habe, brauche ich nichts außer einen Texteditor.
- **Agent-agnostic.** Heute Claude Code, morgen vielleicht ein anderer Agent. Solange er `AGENTS.md` versteht, funktioniert das System weiter.

## Was lerntheoretisch dahintersteckt

Drei Mechanismen tragen das System:

**Active Recall.** Quizzes und Reviews zwingen mich, das Wissen aktiv aus dem Gedächtnis zu holen. Das ist der einzige nachweislich wirksame Weg, Wissen langfristig zu verankern — Lesen und Markieren funktioniert nicht.

**Spaced Repetition.** Die Intervalle wachsen exponentiell, solange ich es draufhabe, und schrumpfen sofort, wenn ich rate. Genau das, was Anki und Co. machen, nur eingebettet in einen ganzheitlichen Lernablauf statt als isolierte Karteikarten.

**Feynman-Technik.** Nach jedem Kata und jedem Deep-Dive muss ich das Konzept einem Junior in 2–3 Sätzen erklären. Wer es nicht einfach erklären kann, hat es nicht verstanden. Der Agent ist hier knallhart und gibt sich nicht mit "ist halt so" zufrieden.

## Was das System nicht ist

Es ist kein Ersatz für Bücher oder Kurse. Im `CURRICULUM.md` gibt es eine Sektion für Referenzen, und der Agent zitiert daraus in den Sessions. Das System organisiert Wissensaufnahme, es generiert sie nicht.

Es ist auch keine Wissens-Datenbank. Es geht nicht darum, möglichst viele Notizen anzuhäufen, sondern darum, dass Konzepte hängen bleiben und in Projekten anwendbar werden. Deshalb ist der Mastery-Threshold streng und es gibt keine "schnelle Lerneinheit".

## Wer es probieren will

Repo klonen, `CURRICULUM.md` ausfüllen, in Claude Code oder Cursor öffnen, `learn` tippen. Der Rest passiert von selbst. Wenn etwas nicht passt — Tonfall zu hart, Sessions zu lang, Themenmix zu eng — einfach `CURRICULUM.md` anpassen. `AGENTS.md` muss man nicht anfassen, außer man will das Coaching-Verhalten selbst ändern.

[github.com/janmarkuslanger/learn-with-ai](https://github.com/janmarkuslanger/learn-with-ai)
