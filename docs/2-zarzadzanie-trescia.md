# Krok 2: Jak zarządzać treścią?

Cała treść Twojej strony znajduje się w plikach z rozszerzeniem `.mdx`. W tym rozdziale dowiesz się, jak je edytować, dodawać i usuwać.

### 2.1. Budowa pliku `.mdx`

Każdy plik z treścią składa się z dwóch części: metadanych (informacji o dokumencie) oraz treści właściwej.

**Przykładowa struktura:**
```mdx
---
title: "Tytuł Projektu lub Publikacji"
description: "Krótki opis, który będzie widoczny na liście."
type: "current"
---

Tutaj zaczyna się właściwa treść dokumentu.
Możesz tu swobodnie pisać, a pusta linia oddzieli akapity.
```

*   **Metadane:** To informacje zawarte między `---` na górze pliku. Służą one do automatycznego budowania strony, np. tworzenia tytułów i opisów. Twoim zadaniem jest jedynie edycja wartości w cudzysłowach.

*   **Treść właściwa:** To tekst znajdujący się poniżej metadanych. Jest to główna zawartość, która pojawi się na podstronie.

Twoja praca z treścią będzie polegała wyłącznie na edycji plików `.mdx` w folderze `src/content/`.

### 2.2. Edycja istniejącej treści

1.  W panelu plików po lewej stronie VS Code znajdź i otwórz plik, który chcesz zmodyfikować.
2.  Wprowadź potrzebne zmiany w tekście.
3.  Zapisz plik za pomocą skrótu `Ctrl + S` (Windows) lub `Cmd + S` (macOS).

### 2.3. Dodawanie nowej treści (np. projektu)

1.  W panelu plików kliknij prawym przyciskiem myszy na folder, w którym chcesz umieścić nowy wpis (np. `src/content/projects`).
2.  Wybierz opcję **"New File"**.
3.  Nadaj plikowi prostą nazwę, używając małych liter i myślników zamiast spacji (np. `nowy-projekt-badawczy.mdx`). Pamiętaj o rozszerzeniu `.mdx`.
4.  Aby zachować spójną strukturę, skopiuj zawartość z innego, istniejącego pliku i dostosuj ją do swoich potrzeb.

### 2.4. Usuwanie treści

1.  W panelu plików kliknij prawym przyciskiem myszy na plik, który chcesz usunąć.
2.  Wybierz opcję **"Delete"** i potwierdź swój wybór.

### 2.5. Automatyczne tworzenie podstron

Warto wiedzieć, że strona została zaprojektowana tak, aby ułatwić Ci pracę.

Gdy dodasz nowy plik `.mdx` do folderu z projektami lub publikacjami, system automatycznie utworzy dla niego nową podstronę i doda odpowiedni wpis na liście zbiorczej. Nie musisz wykonywać żadnych dodatkowych kroków – wystarczy, że stworzysz plik z treścią.