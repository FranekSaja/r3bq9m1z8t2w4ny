# Krok 3: Gdzie znaleźć i edytować treść?

Ten rozdział pomoże Ci zlokalizować pliki `.mdx` odpowiedzialne za konkretne sekcje na stronie.

### 3.1. Znaczenie metadanych

Jak już wiesz, każdy plik `.mdx` zaczyna się od sekcji metadanych. Poniżej znajdziesz przypomnienie i wyjaśnienie najważniejszych pól:

**Przykład:**
```
---
title: "Tytuł projektu"
description: "Krótki opis, który pojawi się na liście projektów."
type: "current"
---
```

-   `title`: Oficjalny tytuł Twojego projektu lub publikacji.
-   `description`: Zwięzły opis, który reprezentuje wpis na stronach zbiorczych (np. na liście wszystkich projektów).
-   `type`: Kategoria, która pomaga w grupowaniu treści. Dla projektów możesz użyć `current` (dla bieżących) lub `past` (dla archiwalnych).

Prawidłowe i spójne wypełnianie metadanych jest ważne dla porządku i czytelności strony.

### 3.2. Lokalizacja plików

Oto lista najważniejszych miejsc, w których znajdziesz pliki do edycji:

-   **Strona główna (ABOUT):**
    -   **Plik:** `src/content/bio/index.mdx`
    -   **Zawartość:** Główny tekst biograficzny.

-   **Projekty (PROJECTS):**
    -   **Folder:** `src/content/projects/`
    -   **Zawartość:** W tym folderze każdy plik `.mdx` to osobny projekt.

-   **Publikacje (PUBLICATIONS):**
    -   **Folder:** `src/content/publications/`
    -   **Zawartość:** Analogicznie do projektów, każdy plik `.mdx` w tym folderze to osobna publikacja.

-   **Dydaktyka (TEACHING):**
    -   **Plik:** `src/content/sup_pages/teaching.mdx`
    -   **Zawartość:** Treść podstrony poświęconej dydaktyce.