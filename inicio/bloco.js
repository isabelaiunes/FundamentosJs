// Um bloco é definido a partir de um par de chaves {}.
{
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}

{
    console.log("Passo #04");
    console.log("Passo #05");
}

{
    {
        {
            {
                ;
                ;
                ;
                /*Pode-se colocar um bloco de cógido dentro do outro,
                mas obrigatoriamente tem-se que abrir e fechar chaves.
                Normalmente, há um porquê de se fazer isso.
                */
            }
        }
    }
}

console.log("Fim!");