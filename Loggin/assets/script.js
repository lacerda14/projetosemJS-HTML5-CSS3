
function login () 

{ 

    let logincadastrado = "lacerdapedro"
    let senhacadastrada ='Pi040921'
    let logini = document.getElementById ('login')
    let senhai = document.getElementById ("senha");
    let logininformado = String (logini.value)
    let senhainformada = String (senhai.value)

if (senhacadastrada === senhainformada && logincadastrado === logininformado)
{
    alert (`Seja muito bem-vindo ${logincadastrado}`);
    

} else{
    alert ('Tente novamente!')
}

}