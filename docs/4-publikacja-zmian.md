# Krok 4: Jak opublikować zmiany?

Gdy wprowadzisz już wszystkie zmiany i zapiszesz pliki, ostatnim krokiem jest ich publikacja. Dzięki temu staną się widoczne na publicznej stronie internetowej. Cały proces przeprowadzisz wygodnie wewnątrz VS Code. 

**Ta instrukcja zakłada, że konfiguracja Git i GitHub została przeprowadzona poprawnie. Patrz [Krok 1: Pakiet Startowy](1-pakiet-startowy.md).**

### 4.1. Przejdź do panelu kontroli wersji

1.  W panelu po lewej stronie okna VS Code kliknij ikonę przedstawiającą rozgałęzienie (trzecia od góry).
2.  Otworzy się panel **"Source Control"**, w którym zobaczysz listę wszystkich zmodyfikowanych przez Ciebie plików.

![Panel kontroli wersji w VS Code](images/source-control-panel.png)

### 4.2. Przygotuj zmiany do zatwierdzenia (Stage Changes)

Zanim zatwierdzisz zmiany, musisz wskazać, które z nich chcesz zapisać w "paczce". Ten proces nazywa się "stagingiem".

1.  Najedź kursorem na plik, który chcesz zatwierdzić.
2.  Kliknij ikonę **"+"** (plus), która pojawi się obok nazwy pliku.
3.  Plik zostanie przeniesiony do sekcji **"Staged Changes"**. Oznacza to, że jest gotowy do zatwierdzenia.

![Przygotowywanie zmian do zatwierdzenia](images/staged-changes.png)

### 4.3. Opisz i zatwierdź zmiany (Commit)

Teraz, gdy zmiany są już przygotowane, możesz je ostatecznie zatwierdzić.

1.  W polu tekstowym **"Message"** wpisz krótko, co zostało zmienione, np. "Dodanie nowego projektu" lub "Poprawki w biografii".
2.  Kliknij przycisk **"Commit"**.

![Wpisywanie wiadomości i zatwierdzanie zmian](images/staged-changes.png)

### 4.4. Zsynchronizuj zmiany z serwerem (Sync Changes)

Ostatni etap to wysłanie przygotowanej "paczki" na serwer.

1.  Po zatwierdzeniu zmian, na niebieskim pasku na samym dole okna VS Code pojawi się przycisk **"Sync Changes"**, zwykle z ikoną kręcących się strzałek.
2.  Kliknij go, aby wysłać swoje zmiany.

![Przycisk synchronizacji zmian na dolnym pasku](images/git-push-window.png)

Po chwili synchronizacja się zakończy. Twoje modyfikacje zostały opublikowane i wkrótce pojawią się na stronie.