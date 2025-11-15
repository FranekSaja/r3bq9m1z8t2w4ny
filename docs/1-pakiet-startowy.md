# Krok 1: Przygotowanie do pracy

Witaj! Ten rozdział pomoże Ci jednorazowo skonfigurować komputer, abyś mógł swobodnie edytować treść strony.

### 1.1. Konto na GitHub

**GitHub** to serwis, na którym przechowywany jest kod Twojej strony. Umożliwia on bezpieczne zarządzanie plikami i śledzenie wszystkich wprowadzanych zmian.

1.  Odwiedź stronę [https://github.com/](https://github.com/).
2.  Załóż darmowe konto, postępując według wyświetlanych tam wskazówek.

![Ekran zakładania konta na GitHub](images/github-sign-up-screen.png)

### 1.2. Edytor Visual Studio Code (VS Code)

**Visual Studio Code** to program, który posłuży Ci jako główne narzędzie do edycji plików z treścią.

1.  Przejdź na stronę [https://code.visualstudio.com/](https://code.visualstudio.com/).
2.  Pobierz wersję programu odpowiednią dla Twojego systemu (Windows lub macOS).
3.  Zainstaluj program, korzystając z domyślnych ustawień instalatora.

![Strona pobierania Visual Studio Code](images/vs-code-dowland-page.png)

### 1.3. System kontroli wersji Git

**Git** to narzędzie działające w tle, które współpracuje z VS Code i GitHubem, umożliwiając pobieranie i zapisywanie zmian.

1.  Odwiedź stronę [https://git-scm.com/downloads](https://git-scm.com/downloads).
![Strona pobierania Git](images/git-dowland-page.png)



2.  Pobierz i zainstaluj wersję dla swojego systemu, również zgadzając się na domyślne ustawienia.

![Ekran instalacji Git](images/git-install-screen.png)


### 1.4. Konfiguracja Git (jednorazowa)

Zanim zaczniesz pracę, musisz jednorazowo "przedstawić się" systemowi Git. Dzięki temu Twoje zmiany będą prawidłowo podpisane.

1.  W VS Code otwórz zintegrowany terminal, wybierając z górnego menu **"Terminal" -> "New Terminal"**.
2.  W oknie terminala, które pojawi się na dole ekranu, wpisz i zatwierdź (wciskając Enter) kolejno dwie poniższe komendy. Pamiętaj, aby wstawić swoje prawdziwe dane.

    ```bash
    git config --global user.name "Twoje Imię i Nazwisko"
    git config --global user.email "twoj-adres@email.com"
    ```

To wszystko. Ta konfiguracja jest jednorazowa i zostanie zapamiętana dla wszystkich Twoich przyszłych projektów.

### 1.5. Pobranie plików strony

Teraz możesz pobrać pliki strony na swój komputer.

1.  Otwórz program **Visual Studio Code**. Na ekranie powitalnym, który się pojawi, kliknij przycisk **"Clone Git Repository"**.

    ![Ekran powitalny VS Code z opcją klonowania repozytorium](images/vs-code-app-screen.png)

2.  W polu, które się pojawi, wklej adres repozytorium: `https://github.com/przykladowy-user/przykladowe-repo.git` i zatwierdź.

    ![Okno wklejania adresu repozytorium](images/clone-repo-window-2.png)

3.  Gdy program zakończy pobieranie, potwierdź chęć otwarcia projektu, klikając **"Open"**.

Świetnie, wszystko gotowe. Pliki strony znajdują się teraz na Twoim komputerze i możesz przystąpić do ich edycji.