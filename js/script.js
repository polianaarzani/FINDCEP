$(document).ready(function(){
    $('.btn').click(function(e){
        e.preventDefault()

        let dados=$('#CEP').val()

        let url =`viacep.com.br/ws/${dados}/json/`

        console.log(url)

        $.ajax({
            type: 'GET',
            dataType:'JSON',
            assync: true,
            url: url,
            success: function(dados){
                console.log('Requisição recebida com sucesso!')
            }
        })
    })
})