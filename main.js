// Skript nefunguje, pokud klikáte zároveň přitom, jak běží. Nechte ho tedy běžet na pozadí. (github.com/exzedik)
function funca(){
     $.post("api/update", {
        increment: "1000"
    }, function(data, status) {
        console.log(status);
    });
}
setInterval(funca , 11000)
funca()
