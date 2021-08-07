

//---------Google analytics--------------//
(
    function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
    {   
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    }
        
)(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


ga('create', 'UA-12345-6', 'auto');

ga('send', 'pageview');
//---------------------------------------//


//Função para enviar os eventos para o google analytics
function gaEventSend(category, action, label) {
    ga('send','event',{
        eventCategory: category,
        eventAction: action,
        eventLabel: label 
        }
    );
};







function load(){
    
    var contactfield = document.getElementsByClassName("menu-lista-link menu-lista-contato");
    contactfield[0].addEventListener("click",function(){
        gaEventSend('menu','entre_em_contato','link_externo')
    })

    var downloadpdf = document.getElementsByClassName("menu-lista-link menu-lista-download");
    downloadpdf[0].addEventListener("click",function(){
        gaEventSend('menu', 'download_pdf', 'download_pdf')
    })


    var ContactNameField = document.getElementById("nome");
    ContactNameField.addEventListener("change",function(){
        gaEventSend('contato', 'nome', "preencheu")
    })

    var ContactEmailField = document.getElementById("email");
    ContactEmailField.addEventListener("change",function(){
        gaEventSend('contato', 'email', "preencheu")
    })

    var ContactPhoneField = document.getElementById("telefone");
    ContactPhoneField.addEventListener("change",function(){
        gaEventSend('contato', 'telefone', "preencheu")
    })       
    var ContactCheckField = document.getElementById("aceito");
    ContactCheckField.addEventListener("change",function(){
        gaEventSend('contato', 'aceito', "preencheu")
    })     


    //Foi criado a ID para o botão para ser possivel mapear o click
    var sendbutton = document.getElementById("enviaform");
    sendbutton.addEventListener("click",function(){
        gaEventSend('contato', 'enviado', "enviado")
    })

  
}

//Para os cards-montadoras 
$(document).ready(function(){
    $('.cards-montadoras').on("click", '.card-montadoras',function(){
        var dataId = $(this).attr("data-id");
            if(dataId == 'lorem'){
                gaEventSend('analise', 'ver_mais', 'Lorem');

            }

            else if(dataId == 'ipsum'){
                gaEventSend('analise', 'ver_mais', 'Ipsum”')
            }

            else if(dataId == 'dolor'){
                gaEventSend('analise', 'ver_mais', "Dolor")
            }
            
    });
});



document.addEventListener("DOMContentLoaded", load, false);