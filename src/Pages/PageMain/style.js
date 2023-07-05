import styled from "@emotion/styled";
import background from '../../assets/background.jpg'
import localizacao from "../../assets/manha-ensolarada-de-verao-mulher-atletica-nova-que-faz-o-pino-na-rua-do-parque-da-cidade-entre-edificios-urbanos-modernos-exercicio-ao-ar-livre-estilo-de-vida-saudavel.jpg"

export const Container = styled.div`
width: 100vw;
height: 100vh;
font-family: 'Roboto', sans-serif;
overflow: auto;


#menuFechado{
    display: none;
}
header{
    width: 100vw;
    height: 10vh;
    padding: 1rem 3rem;
    background-color: black;
    color: white;

    display: flex;
    align-items: center;
    justify-content: right;
    gap: 2rem;
}
ul{ 
    font-size: 1.4rem;
    list-style: none;
    display: flex;
    gap: 2rem;
    font: 900;
}
li{
    cursor: pointer;
    transition: 300ms;
    color: white;
}
li:hover{
    transform: scale(1.1);
}
button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 4rem;
    border-radius: 2rem 0 2rem 0;
    border: none;
    background-color: #490606;
    color: white;
    font-size: 1.8rem;
    font: lighter;
    cursor: pointer;

    transition: 300ms;
}
button:hover{
    transform: scale(1.1);
}

main{
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100vw;
    height: 90vh;

    background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 1)),linear-gradient(to bottom, transparent, rgba(0, 0, 0, .2)),url(${background});
    background-repeat: no-repeat;
}   

.conteudoInicial{
    display: flex;
    padding: 5rem 8rem 5rem ;
    width: 100%;
    height: 90vh;

}
.textoConteudoInicial{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    width: 40rem;
}
.textoConteudoInicial h1{
    font-size: 4rem;
    color: #800000;
}
.textoConteudoInicial p{
    font-size: 1.5rem;
    width: 25rem;
    color: white;
    font: 400;
}
.buttonIniciarEValor{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
}
.buttonIniciarEValor:hover{
    transform: scale(1.1);
}
#iniciarMain{
    border-radius: 0rem 0 0 3rem;
    height: 5rem;
    background-color: #800000;
}
#buttonMes{
    border-radius: 0 3rem 0 0;
    height: 5rem;
    font-size: 1.5rem;
 
}
.buttonIniciarEValor button:hover{
  transform: none;
}

.servicos{
    color: white;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 5rem;
    background-color: black;
}
.containerTodasImagens{
    width: 100%;
    display: flex;
    gap: 2rem;
}
.textoServico{
    font-size: 1.2rem;
    padding-bottom: 4rem;
}

.imagensServicos{
    width: 33vw;
}
.imagens{
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
}
.imagens img{
    width: 100%;
    height: 40rem;
    object-fit: cover;
    border-radius: 2rem 0 2rem 0;
}
.textoImagensServicos{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
}
.textoImagensServicos h1{
    font-size: 2rem;
    text-align: justify;
}
.textoImagensServicos p{
    font-size: 1.6rem;
    text-align: justify;
    line-height: 30px;
}

.infoAcademia{
    display: flex;
    width: 100vw;
    padding: 5rem;
    background-color: black;
    gap: 5rem;
}

.localizacaoESobrenos{
    width: 50vw;
    height: auto;
    //background-color: red;
    display: flex;
    flex-direction: column;
    gap: 8rem;
}
.localizacao{
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1)),url(${localizacao});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 30rem;
    border-radius: 0 5rem 0 0;

    display: flex;
    justify-content: space-evenly;
    align-items: end;
    color: white;
    gap: 2rem;
   
}
.localizacao h1{
    font-size: 2.4em;
} 

.localizacao p{
    font-size: 1.6em;
    color: #85827E;
    width: 30%;
}



.sobrenos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: white;
}

.fotosAmbienteAcademia{
    margin: auto 0;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 3rem;
    position: relative;
}

.fotosAmbienteAcademia img{
    width: 30px;
    //font-size: 50px;
}

#arrowLeft{
position: absolute;
left: 0%;
bottom: 45%;
cursor: pointer;
}
#arrowRight{
position: absolute;
right: 0%;
bottom: 45%;
cursor: pointer;
}


.containerImg{
    width: 30vw;
    height: 90%;
    display: flex;
    overflow: hidden;
    border-radius: 2rem 0 2rem 0;

}
.sobrenos p{
    line-height: 30px;
    font-size: 1.6em;
}
.carrosel{
    width: auto;
    height: auto;

    display: flex;
    transition: all 300ms ease-in-out;
    
}


.carrosel img{
    width: 40vw;
    height: auto;
    object-fit: cover;
    border-radius: 2rem 0 2rem 0;
}

#iniciarHeader{
  background-color: #800000;
}
#pHeader{
    padding: 2rem 0;
    font-size: 2em;
    cursor: pointer;
    transition: all 300ms;
}

#pHeader:hover{
    color: #85827E;
}

@media screen and (max-width: 768px){

   position: relative;
   
   //conteudo do header

   header{
     flex-direction: column;
     height: auto;
     align-items: center;
     position: absolute;
     transition: transform 300ms ease-in-out;
     translate: 0 -100%;


   } 
   ul{
    padding-top: 5rem;
    flex-direction: column;

   }

   li{
    font-size: 2em;
    color: white;
   }
   #menuFechado{
      font-size: 3em;
      color: white;
      position: absolute;
     
      padding: 1.5rem 50%;
      z-index: 1;
      display: block;
      background-color: black;
      width: 100vw;
   }

   .headerMinimalista{
    display: flex;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
    background-color: black;
   }

   .open{
    transform: translateY(100%);
   }

   //conteudo do main
   main{
    width: 100vw;
    //height: 100vh;
    background-position: 80% 50px;

   }
   .conteudoInicial{
    align-items: center;
   }
   .textoConteudoInicial{
    height: 80%;
    padding-top: 8rem;
    justify-content: space-around;
   }

   //conteudo servicos

   .servicos{
    //background-color: red;
    
   }

   .containerTodasImagens{
     display: flex;
     flex-direction: column;
     //justify-content: center;
     align-items: center;
     gap: 5rem;
   }

   .imagensServicos{
    width: 90vw;
    //background-color: green;
   }
   .imagensServicos img{
    width: 100%;

   }

   //localização e sobre nós

   .infoAcademia{
    flex-direction: column;
    //background-color: purple;
    padding: 5rem 2rem;
   }

   .localizacaoESobrenos{
    //background-color: #85827E;
    width: 100%;
   }

   .fotosAmbienteAcademia{
    //background-color: red;
    width: 100%;
   }
   .containerImg{
    width: 80vw;
    height: 70vh;
   }
   .containerImg img{
    width: 80vw;
   }
   #arrowLeft{
    bottom: 5%;
    left: 30%;
   }
   #arrowRight{
    bottom: 5%;
    right: 30%;
   }




   

}









`