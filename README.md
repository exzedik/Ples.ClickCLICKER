
## ples.click / brasko.click silent "autoclicker"

Jednoduchý skript, který nevyžaduje jakékoli stahování, stačí jen prohlížeč (ideálně Chrome, doporučuji Brave)  Tento skript je navržen tak, aby zatěžoval co nejméně RAM, tudíž nezobrazuje kliky, pouze každých 11 sekund započítá do tabulky 1000 kliků (limit).

### Jak na to

Do konzole (ctrl + shift + J) vložte následující skript:

    function funca(){
         $.post("api/update", {
            increment: "1000"
        }, function(data, status) {
            console.log(status);
        });
    }
    setInterval(funca , 11000)
    funca()
  
Klávesou Enter skript spustíte. Pokud se těchto 1000 kliků přičte, do konzole se vypíše "success". Pokud uvidíte jednou za čas Error 429, ignorujte jej.

Příklad funkčního skriptu:

![Příklad](https://media.discordapp.net/attachments/808273939629473796/858801598838210580/unknown.png)

 ### Jak z tohoto vytěžit co nejvíc?
 [Brave](https://brave.com/) je "vytuněný" chrome, který má vylepšenou bezpečost. Mezi to také patří Tor. Stisknutím **Alt + Shift + N** otevřete okno, s Tor. Díky tomu máte pro každé Tor okno jinou IP a můžete "klikat" z několika IP zaráz. (**+** vyšší rychlost, **-** vyšší zatížení PC)
 

 *(README.md je schválně noob-friendly)*
