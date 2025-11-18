# Krok 4: Jak opublikować zmiany?

Gdy wprowadzisz już wszystkie zmiany i zapiszesz pliki, ostatnim krokiem jest ich publikacja. Dzięki temu staną się widoczne na publicznej stronie internetowej. Cały proces przeprowadzisz wygodnie wewnątrz VS Code. 

**Ta instrukcja zakłada, że konfiguracja Git i GitHub została przeprowadzona poprawnie. Patrz [Krok 1: Pakiet Startowy](1-pakiet-startowy.md).**

---

### 4.1. Przejdź do panelu kontroli wersji

1.  W panelu po lewej stronie okna VS Code kliknij ikonę przedstawiającą rozgałęzienie (trzecia od góry).
2.  Otworzy się panel **"Source Control"**, w którym zobaczysz listę wszystkich zmodyfikowanych przez Ciebie plików.

![Panel kontroli wersji w VS Code](images/source-control-panel.png)

---

### 4.2. Przygotuj zmiany do zatwierdzenia (Stage Changes)

Zanim zatwierdzisz zmiany, musisz wskazać, które z nich chcesz zapisać w "paczce". Ten proces nazywa się "stagingiem".

1.  Najedź kursorem na plik, który chcesz zatwierdzić.
2.  Kliknij ikonę **"+"** (plus), która pojawi się obok nazwy pliku.
3.  Plik zostanie przeniesiony do sekcji **"Staged Changes"**. Oznacza to, że jest gotowy do zatwierdzenia.

![Przygotowywanie zmian do zatwierdzenia](images/staged-changes.png)

---

### 4.3. Opisz i zatwierdź zmiany (Commit)

Teraz, gdy zmiany są już przygotowane, możesz je ostatecznie zatwierdzić.

1.  W polu tekstowym **"Message"** wpisz krótko, co zostało zmienione, np. "Dodanie nowego projektu" lub "Poprawki w biografii".
2.  Kliknij przycisk **"Commit"**.

![Wpisywanie wiadomości i zatwierdzanie zmian](images/staged-changes.png)

---

### 4.4. Zsynchronizuj zmiany z serwerem (Sync Changes)

Ostatni etap to wysłanie przygotowanej "paczki" na serwer.

1.  Po zatwierdzeniu zmian, na niebieskim pasku pojawi się przycisk **"Sync Changes"**, zwykle z ikoną kręcących się strzałek.
2.  Kliknij go, aby wysłać swoje zmiany.

![Przycisk synchronizacji zmian na dolnym pasku](images/git-push-window.png)

Po chwili synchronizacja się zakończy. Twoje modyfikacje zostały opublikowane dalsze śledzenie postępów publikacji zmian odbędzie się na platformie **GitHub** w interfejsie repozytorium strony

---

## Przewodnik po GitHub i obsługa błędów

Po wysłaniu zmian na serwer, proces publikacji jest kontynuowany na platformie GitHub. Poniżej znajdziesz informacje, jak śledzić postęp i co robić, gdy coś pójdzie nie tak.

### Gdzie widać najnowszą zmianę?

Najnowsza zmiana jest widoczna od razu na głównej stronie projektu w sekcji **Code**. Zobaczysz tam informację o ostatnim zatwierdzeniu (commicie) oraz status publikacji (deploymentu).

- **Zielony "ptaszek"** oznacza, że wszystko przebiegło pomyślnie, a zmiany są już widoczne na stronie.
- **Czerwony "krzyżyk"** oznacza, że wystąpił błąd.

Informacja o poprawnie przeprowadzonej aktualizacji:
![Widok poprawnie wdrożonej zmiany na stronie projektu](images/repo-dashbord-screen.png)
Informacja o błędzie w publikacji zmian:
![Błąd budowania widoczny na stronie projektu](images/github-build-error.png)

---

### Historia i szczegóły aktualizacji (zakładka Actions)

Pełną historię wszystkich aktualizacji kodu – zarówno tych udanych, jak i nieudanych – znajdziesz w zakładce **Actions**.

![Zakładka Actions z listą poprzednich publikacji](images/github-actions-screen.png)

Po kliknięciu w konkretną zmianę (konkretny commit) zobaczysz podsumowanie danej aktualizacji.

![Podsumowanie konkretnej aktualizacji](images/deployment-summary-screen.png)

---

### Dwa etapy aktualizacji: Build i Deploy

Każda zmiana przechodzi przez dwa główne etapy:

1.  **Build (Budowanie)**: W tym kroku serwer "czyta" wszystkie pliki projektu (w tym pliki `.mdx` z treścią) i na ich podstawie buduje finalną wersję strony.
2.  **Deploy (Publikacja)**: Gotowa strona jest umieszczana na serwerze, dzięki czemu staje się publicznie dostępna.

**Ważne:** Jeśli edytujesz **tylko treść** (pliki `.mdx`), ewentualne błędy mogą pojawić się **tylko na etapie "Build"**. Najczęściej wynikają one z nieprawidłowej struktury metadanych (np. brak cudzysłowu, literówka w nazwie pola). Nie musisz w takim przypadku przejmować się etapem "Deploy".

---

### Jak wygląda i gdzie znaleźć błąd?

Jeśli proces budowania strony się nie powiedzie, zobaczysz czerwony krzyżyk przy nazwie zmiany :

![Błąd budowania widoczny na stronie projektu](images/github-build-error.png)


---

### Co zrobić z błędem?

Gdy zobaczysz błąd, pierwszym krokiem jest zrozumienie, co go spowodowało.

1.  Na stronie głównej projektu w GitHub kliknij na tytuł ostatniego commita (po lewej stronie czerwonego krzyżyka).

    ![Link do szczegółów commita](images/github-build-error.png)

2.  Otworzy się podsumowanie zmian wprowadzonych w tym commicie. Zobaczysz tam:
    -   **Na czerwono**: Linie, które zostały usunięte.
    -   **Na zielono**: Linie, które zostały dodane.

    ![Podsumowanie zmian w commicie](images/changes-summary-screen.png)

W powyższym przykładzie widać, że błąd polegał na **usunięciu obowiązkowych pól** (`title`, `abstract`) i **dodaniu jednego, nieistniejącego pola** (`example`). Taka zmiana w metadanych sprawiła, że strona nie mogła się poprawnie zbudować. O zasadach poprawnego edytowania plików `mdx` patrz w [Kroku 3](3-przewodnik-po-tresciach.md)