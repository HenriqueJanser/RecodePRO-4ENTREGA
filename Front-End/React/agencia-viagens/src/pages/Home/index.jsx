import React from "react";

import "../../index.css";

import Imagem1 from "../../assets/img/salvadorimg3.jpg";
import Imagem2 from "../../assets/img/riodejaneiro1.png";
import Imagem3 from "../../assets/img/fortaleza-img2.jpg";
import Imagem4 from "../../assets/img/fortaleza-img2.jpg";
import Imagem5 from "../../assets/img/riodejaneiro-img3.jpg";
import Imagem6 from "../../assets/img/recife-img4.jpg";



export default function Home() {
    return (
        <main className="container-fluid">


            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">


                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Imagem1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Imagem2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Imagem3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Imagem4} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Salvador</h3>
                                <p className="card-text">Primeira capital da Am??rica Portuguesa, que corresponde ao atual Brasil, a cidade ?? uma das mais antigas do continente americano e uma das primeiras cidades planejadas no mundo, ainda no per??odo do Renascimento. Sua funda????o em 1549 por Tom?? de Sousa ocorreu por conta da implanta????o do Governo-Geral do Brasil pelo Imp??rio Portugu??s</p>
                                <a className="btn btn-primary" href="/">Quero conhe??er!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img className="card-img-top" src={Imagem5} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Fortaleza</h3>
                                <p className="card-text">A capital do estado do Cear??, situado na regi??o Nordeste do pa??s. Distante 2 285 km de Bras??lia, capital federal, a cidade desenvolveu-se ??s margens do riacho Paje??, e sua topon??mia ?? uma alus??o ao Forte Schoonenborch, o qual deu origem ao munic??pio, constru??do pelos holandeses durante sua segunda perman??ncia no local, entre 1649 e 1654.</p>
                                <a className="btn btn-primary" href="/">Quero conhe??er!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img className="card-img-top" src={Imagem6} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Rio de Janeiro</h3>
                                <p className="card-text">?? um munic??pio brasileiro, capital do estado hom??nimo, situado no Sudeste do pa??s. Maior destino tur??stico internacional no Brasil, da Am??rica Latina e de todo o Hemisf??rio Sul (em 2008), a capital fluminense ?? a cidade brasileira mais conhecida no exterior, funcionando como um "espelho", ou "retrato" nacional, seja positiva ou negativamente.</p>
                                <a className="btn btn-primary" href="/">Quero conhe??er!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Imagem6} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Recife</h3>
                                <p className="card-text">Capital do estado de Pernambuco, localizado na Regi??o Nordeste do pa??s. Com ??rea territorial de aproximadamente 218 km??, ?? formado por uma plan??cie aluvial, tendo as ilhas, pen??nsulas e manguezais como suas principais caracter??sticas geogr??ficas. Cidade nordestina com o melhor ??ndice de Desenvolvimento Humano.</p>
                                <a className="btn btn-primary" href="/">Quero conhe??er!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>

                <div className="text-center">
                    <p>Desenvolvido por Henrique Janser - Todos os direitos reservados.</p>
                </div>

            </footer>

        </main>
    );
}