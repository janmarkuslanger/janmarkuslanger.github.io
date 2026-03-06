---
title: "Fehlerbehandlung in Go: Explizit ist besser als magisch"
description: "Go's explizite Fehlerbehandlung ist kein Nachteil – sie ist eines der besten Features der Sprache."
date: 2025-03-01
tags: ["Go", "Fehlerbehandlung"]
---

Wer von anderen Sprachen zu Go wechselt, stört sich anfangs oft an der Wiederholung:

```go
result, err := doSomething()
if err != nil {
    return err
}
```

Nach hundert Zeilen fühlt sich das mechanisch an. Warum hat Go kein Try-Catch? Kein `throw`?

## Explizitheit als Design-Entscheidung

Go hat Exceptions absichtlich nicht. Der Grund: Exceptions machen Kontrollfluss schwammig. Wenn irgendwo tief in einem Callstack ein Fehler geworfen wird, weiß der Aufrufer oft nicht, was passieren kann. Somit muss er die Dokumentation kennen, den Quellcode lesen oder es durch Testing herausfinden. Im schlimmsten Fall wird eine Fehler dann erst sichtbar, sobald er im produktiven Bereich landet.

In Go ist Fehlerbehandlung **Teil der Signatur**. Eine Funktion, die fehlschlagen kann, sagt das explizit:

```go
func parseConfig(path string) (*Config, error) {
    data, err := os.ReadFile(path)
    if err != nil {
        return nil, fmt.Errorf("config lesen: %w", err)
    }
    // ...
}
```

Der Aufrufer kann nicht vergessen, dass diese Funktion fehlschlagen kann. Der Compiler erzwingt die Auseinandersetzung damit.

## Fehler wrappen und kontextualisieren

Seit Go 1.13 gibt es `%w` in `fmt.Errorf`, das ermöglicht, Fehler zu wrappen und trotzdem den Ursprungsfehler für `errors.Is` und `errors.As` zugänglich zu halten:

```go
var ErrNotFound = errors.New("nicht gefunden")

func getUser(id string) (*User, error) {
    user, err := db.FindUser(id)
    if err != nil {
        if errors.Is(err, sql.ErrNoRows) {
            return nil, fmt.Errorf("user %s: %w", id, ErrNotFound)
        }
        return nil, fmt.Errorf("user laden: %w", err)
    }
    return user, nil
}

// Aufrufer:
user, err := getUser("123")
if errors.Is(err, ErrNotFound) {
    // spezifisch behandeln
}
```

Das ergibt einen Fehler-Kontext-Pfad, der beim Debugging unmittelbar hilft: `user 123: nicht gefunden`.

## Wann Panic okay ist

`panic` ist für Fehler, die nicht vorkommen dürfen wie programmierfehler, nicht Laufzeitfehler:

```go
func divide(a, b int) int {
    if b == 0 {
        panic("division durch null: b darf nicht 0 sein")
    }
    return a / b
}
```

Für alles, was im Betrieb passieren kann (Netzwerk, Dateisystem, User-Input), ist `error` der richtige Weg.

## Das Ergebnis

Ja, Go's Fehlerbehandlung ist ausführlicher. Aber nach einigen Monaten merkt man: Man versteht fremden Code schneller. Man sieht sofort, wo Fehler entstehen können. Und man schreibt Funktionen, die ehrlich über ihr Verhalten sind.

Explizitheit sorgt für mehr Zeilen aber weniger Überaschungen.
