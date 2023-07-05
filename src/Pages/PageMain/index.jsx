import { Container } from "./style";
import fitDance from "../../assets/fitDance.jpg"
import personal from "../../assets/personal.jpg"
import levantamento from "../../assets/victor-freitas-WvDYdXDzkhs-unsplash.jpg"
import halteres from "../../assets/um-conjunto-com-muitos-halteres.jpg"
import localizacao from "../../assets/manha-ensolarada-de-verao-mulher-atletica-nova-que-faz-o-pino-na-rua-do-parque-da-cidade-entre-edificios-urbanos-modernos-exercicio-ao-ar-livre-estilo-de-vida-saudavel.jpg"
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from "../../assets/arrow-rigth.svg"
import agachamento from '../../assets/agachamento.jpg'
import esteira from '../../assets/esteiras.jpg'

import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export function Initial() {

    const labelCarrosel = useRef();
    const labelHeader = useRef();
    const menuFechado = useRef();

    const labelContainer = useRef();

    let idx = 0;

    const menuToggle = () => {

         if(labelHeader.current.classList.contains("open")){
            menuFechado.current.innerHTML = "menu"
            labelHeader.current.classList.remove("open");
         }
         else {
            menuFechado.current.innerHTML = "close"
            labelHeader.current.classList.add("open");
         }


         
    }

    const arrows = (event) => {

        if(labelContainer.current.offsetWidth <= 768){

            if(event.target.id === "arrowLeft"){
         
                if(idx <= 0){
                    idx = 3;
                 
                }
                idx--;
                labelCarrosel.current.style.transform = `translateX(${-idx * 80}vw)`
            }
            else{
                if(idx >= 2){
                    idx = 0;
    
                    return labelCarrosel.current.style.transform = `translateX(${-idx * 80}vw)`
    
                }
                idx++;
                labelCarrosel.current.style.transform = `translateX(${-idx * 80}vw)`
            }


        }

        else{

            if(event.target.id === "arrowLeft"){
         
                if(idx <= 0){
                    idx = 3;
                 
                }
                idx--;
                labelCarrosel.current.style.transform = `translateX(${-idx * 40}vw)`
            }
            else{
                if(idx >= 2){
                    idx = 0;
    
                    return labelCarrosel.current.style.transform = `translateX(${-idx * 40}vw)`
    
                }
                idx++;
                labelCarrosel.current.style.transform = `translateX(${-idx * 40}vw)`
            }
    

        }
    }

    useEffect(() => {
         if(labelContainer.current.offsetWidth <= 768){
              
         }
    }, [] )

    return (

        <Container ref={labelContainer}>
            <span onClick={menuToggle} id="menuFechado" className="material-symbols-outlined" ref={menuFechado}>
                menu
            </span>
            <header ref={labelHeader}>

                <ul>
                    <li>Home</li>
                    <li>Serviços</li>
                    <li>Localização</li>
                    <li>Sobre Nós</li>
                </ul>

                <button id="iniciarHeader">Iniciar</button>

            </header>

            <main>
                <div className="conteudoInicial">

                    <div className="textoConteudoInicial">
                        <h1>Transforme seu corpo e sua vida</h1>

                        <p>Descubra o poder da mudança para alcançar uma versão extraordinária de si mesmo</p>

                        <div className="buttonIniciarEValor">

                            <button id="iniciarMain">Iniciar</button>
                            <button id="buttonMes">R$75/mês</button>

                        </div>
                    </div>

                </div>
            </main>

            <div className="servicos">

                <div className="textoServico">
                    <h1>Nossos Serviços</h1>
                </div>

                <div className="containerTodasImagens">


                    <div className="imagensServicos">

                        <div className="imagens">
                            <img src={fitDance} alt="" />

                            <div className="textoImagensServicos">
                                <h1>Fit dance</h1>
                                <p>Fit Dance é uma forma de atividade física que combina movimentos de dança com exercícios aeróbicos e de condicionamento físico</p>
                            </div>
                        </div>
                    </div>

                    <div className="imagensServicos">

                        <div className="imagens">
                            <img src={levantamento} alt="" />

                            <div className="textoImagensServicos">
                                <h1>Treino de Força</h1>
                                <p>é uma forma de exercício físico que tem como objetivo principal o desenvolvimento e fortalecime-mento dos músculos do corpo</p>
                            </div>
                        </div>
                    </div>

                    <div className="imagensServicos">

                        <div className="imagens">
                            <img src={personal} alt="" />

                            <div className="textoImagensServicos">
                                <h1>Treinos Personalizados</h1>
                                <p>Treinos personalizados para cada pessoa, considerando suas metas e seu temposico</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p id="pHeader">Ver todos serviços</p>

            </div>

            <div className="infoAcademia">

                <div className="localizacaoESobrenos">

                    <div className="localizacao">

                        <h1>Localização</h1>

                        <p>Rua Neymar Junior Santos - Sp Numero 92</p>

                    </div>

                    <div className="sobrenos">
                        <h1>Sobre Nós</h1>
                        <p>Bem-vindo à nossa academia! Nós somos um centro de fitness dedicado a ajudar você a alcançar seus objetivos de saúde e bem-estar. Com uma equipe de profissionais experientes e uma variedade de instalações e serviços, estamos comprometidos em proporcionar a você uma experiência única.
                            Aqui, acreditamos que o condicionamento físico é mais do que apenas exercícios. É um estilo de vida que abraça a força, a resistência e a energia que podem transformar sua vida. Nossas instalações modernas são projetadas para inspirar e motivar você a alcançar seu potencial máximo.</p>
                    </div>
                </div>

                <div className="fotosAmbienteAcademia">

                    <h1>Academia confortável</h1>

                    <img className="left" onClick={arrows} id="arrowLeft" src={arrowLeft} alt="seta para esquerda" />
                    <img id= "arrowRight" onClick={arrows} src={arrowRight} alt="seta para a direita" />


                     
                    <div className="containerImg">
                    <div ref={labelCarrosel} className="carrosel">
                      <img src={halteres} alt="" />
                      <img src={agachamento} alt="" />
                      <img src={esteira} alt="" />
                    </div>
                    </div>
                      
                </div>

            </div>
        </Container>

    )
}