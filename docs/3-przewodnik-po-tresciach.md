# Krok 3: Gdzie znaleźć i jak edytować treść?

Ten rozdział pomoże Ci zlokalizować pliki `.mdx` odpowiedzialne za konkretne sekcje na stronie i opisze Ci ich zawartość

### 3.1. Znaczenie metadanych

Jak już wiesz, każdy plik `.mdx` zaczyna się od sekcji metadanych. Poniżej znajdziesz przypomnienie poprawnego zapisu:

**Przykład:**
```
---
title: "Tytuł projektu"
description: "Krótki opis, który pojawi się na liście projektów."
type: "current"
---
```

Prawidłowe i spójne wypełnianie metadanych jest ważne dla właściwego działania strony. Jeżeli w składni tego zapisu pojawi się błąd, strona nie zbuduje się prawidłowo

### 3.2. Lokalizacja plików

Oto lista najważniejszych miejsc, w których znajdziesz pliki do edycji:

-   **Strona główna (ABOUT):**
    -   **Plik:** `content/bio/index.mdx`
    -   **Zawartość:** Główny tekst biograficzny.

-   **Projekty (PROJECTS):**
    -   **Folder:** `content/projects/`
    -   **Zawartość:** W tym folderze każdy plik `.mdx` to osobny projekt.

-   **Publikacje (PUBLICATIONS):**
    -   **Folder:** `content/publications/`
    -   **Zawartość:** Analogicznie do projektów, każdy plik `.mdx` w tym folderze to osobna publikacja.

-   **Dydaktyka (TEACHING):**
    -   **Plik:** `content/sup_pages/teaching.mdx`
    -   **Zawartość:** Treść podstrony poświęconej dydaktyce.

### 3.3. Metadane i ich walidacja

Każdy rodzaj treści (biografia, projekt, publikacja) posiada własny, ściśle zdefiniowany zestaw metadanych. Jest to kluczowe dla spójności i poprawnego działania strony. Poniżej znajdziesz szczegółowy opis wymaganych i opcjonalnych pól dla każdej sekcji. Kolejność podawania metadanych w pliku nie ma znaczenia

**Ważne:** System automatycznie weryfikuje poprawność metadanych. Jeśli pominiesz wymagane pole, podasz je z błędem lub dodasz pole, które nie jest zdefiniowane w konfiguracji, strona nie zostanie opublikowana, a w interfejsie repozytorium na GitHub  zobaczysz komunikat o błędzie.

![Przykład błędu budowy strony w GitHub](images/github-build-error.png)

Więcej o procesie publikacji strony i obsłudze błędów znajdziesz w [Krok 4: Publikacja Zmian](4-publikacja-zmian.md)

---

#### **Strona główna (ABOUT)**
**Plik:** `content/bio/index.mdx`

-   **Wymagane:**
    -   `name`: Imię i nazwisko.
    -   `title`: Tytuł zawodowy lub specjalizacja.
-   **Opcjonalne:**
    -   `email`: Adres e-mail.
    -   `image`: Ścieżka do zdjęcia.
    -   `cv_url`: Link do CV.
    -   `contact`: Dane kontaktowe (telefon, e-mail, adres).
    -   `socialLinks`: Lista linków do mediów społecznościowych.

Strona ABOUT jako jedyna ma specyficzną, ale prostą budowę metadanych. Mimo to, na wszelki wypadek zamieszczone jest zdjęcie przedstawiające prawidłowy układ metadanych w pliku `index.mdx`:

![Przykład metadanych w pliku index.mdx](images/index-mdx-metadata.png)

---

#### **Projekty (PROJECTS)**
**Folder:** `content/projects/`

-   **Wymagane:**
    -   `title`: Tytuł projektu.
    -   `description`: Krótki opis widoczny na liście projektów.
-   **Opcjonalne:**
    -   `date`: Data (używane do sortowania).
    -   `summary`: Dłuższy opis.
    -   `status`: Status projektu. Może przyjąć jedną z dwóch wartości: `current` (dla bieżących) lub `past` (dla archiwalnych).
    -   `start_date`: Data rozpoczęcia.
    -   `end_date`: Data zakończenia.
    -   `tags`: Tagi lub słowa kluczowe. Listę należy sformatować w następujący sposób:
        ```
        ["Tag 1", "Tag 2"]
        ```
    -   `founding_entity`: Instytucja finansująca.
    -   `grant_number`: Numer grantu.
    -   `investigators`: Lista badaczy. Formatowanie jest takie samo jak w przypadku tagów:

        ```
         ["Anna Nowak", "Jan Kowalski"]
        ```
    -   `publications`: Powiązane publikacje.
    -   `project_site`: Link do strony projektu.

---

#### **Publikacje (PUBLICATIONS)**
**Folder:** `content/publications/`

-   **Wymagane:**
    -   `title`: Tytuł publikacji.
    -   `abstract`: Abstrakt.
    -   `author`: Autor/autorzy.
    -   `keywords`: Słowa kluczowe. Formatowanie jest takie samo jak w przypadku tagów:
        ```
        ["Słowo kluczowe 1", "Filozofia"]
        ```
    -   `publicationDate`: Data publikacji.
    -   `lang`: Język publikacji. Może przyjąć jedną z dwóch wartości: `pl` (dla polskiego) lub `en` (dla angielskiego).
-   **Opcjonalne:**
    -   `preprint`: Link do preprintu.
    -   `journalLink`: Link do czasopisma.
    -   `pdfFile`: Ścieżka do pliku PDF.

---

#### **Dydaktyka (TEACHING)**
**Plik:** `content/sup_pages/teaching.mdx`

-   **Wymagane:**
    -   `id`: Identyfikator strony (musi mieć wartość `teaching`).
    -   `title`: Tytuł strony.

---

### 3.4. Przykład w praktyce

Aby zobaczyć, jak wszystkie te elementy łączą się w całość, spójrz na poniższy przykład. Jest to kompletna sekcja metadanych dla jednego z projektów.


Przykład poprawnie wprowadzonych metadanych na podstawie pliku w `content/projects`:

![Przykład metadanych w pliku MDX](images/right-metadata-insert.png)