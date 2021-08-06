// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.



//---------Google analytics--------------//
(
    function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
    {   
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    }
        
)(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


ga('create', 'UA-12345-6', 'auto');

ga('send', 'pageview', location=pathname);
//---------------------------------------//


//Function to send analytics
function gaEventSend(category, action, label) {
    ga('send','event',{
        eventCategory: category,
        eventAction: action,
        eventLabel: label 
        }
    );
};



function getMaiElements() {
    //Send analytics data for click in Entre em Contato link
    let ContactField = document.getElementsByClassName("menu-lista-link menu-lista-contato");
    if(ContactField !== null) {
        ContactField[0].onclick = function(){
            gaEventSend('menu','entre_em_contato','link_externo')
        };
    };

    //Send analytics data for click in Download PDF link
    let DowloadPDF = document.getElementsByClassName("menu-lista-link menu-lista-download");
    if(DowloadPDF !== null) {
        DowloadPDF[0].onclick = function() {
            gaEventSend('menu', 'download_pdf', 'download_pdf')
        };
    };


    let LoremCard = document.getElementById("lorem");
    if (LoremCard !== null) {
        LoremCard.onclick = function () {
            gaEventSend('analise', 'ver_mais', 'Lorem');
        };        
    };

};