import React from 'react'
import * as S from './Style/AboutStyle'
import Img from '../img/about.png'

export default function About() {
  return (
    <S.Container>
      <S.Links to='/'>david.<span>home</span></S.Links>
      <S.CaixaEntrada>
        <S.TituloEntrada>Criando aplicações web e aprimorando sempre!</S.TituloEntrada>
      </S.CaixaEntrada>
      <S.CaixaTexto>
        <S.Sobre>Sobre Mim</S.Sobre>
        <S.Apresentacao>Olá, me chamo David. Desenvolvedor React em constante mudança, cursando Sistemas de Computação na UFF.</S.Apresentacao>
        
        <S.Paragrafo>Nascido e criado na Zona Oeste do Rio, morador do bairro de Bangu, desde a infância curioso e em busca de novos conhecimentos. Meu contato com computadores foi em 2006 e desde então não pude deixa-lo de lado. Aos 15 anos comecei meus primeiros cursos na área de Edição com Photoshop e Pacote Office.</S.Paragrafo>
        <S.Paragrafo>Mas foi só aos 20 meu primeiro contato com uma linguagem de programação, Python, enquanto cursava Licenciatura em Física na UFRJ. Me despertou um interesse que só fui dar ouvidos muitos anos depois. Devido a algumas questões pessoais, naquele momento tinha decido seguir para outro caminho.</S.Paragrafo>
        
        <S.Paragrafo>Foi quando comecei meu Tecnologo em Gastronomia, via ProUni, no IBMR. Foram anos fantásticos e cheios de experiência. Posso dizer que minhas principais soft skills, como lidar com a pressão, foco, gestão de tempo, trabalho em equipe e resiliência enquanto trabalhava na área.</S.Paragrafo>
        <S.Paragrafo>E chegamos a 2021, conversando com uma colega sobre trabalho, ela me conta um pouco da rotina dela e meu interesse em Python reacende, dado a essa conversa. De lá pra cá não parei mais de aprender e extender horizontalmente meu conhecimento.</S.Paragrafo>
        
      </S.CaixaTexto>
      <S.CaixaFig>
        <S.Image src={Img} alt="Foto pessoal" />
        
        <S.Foco>Conheci o VaiNaWeb em fevereiro de 2022, uma inciativa ímpar para ensino de Desenvolvimento Front-end e que me contemplava. Me inscrevi e foi durante as aulas que minha paixão pelo universo front-end se fez. Página a página, desafio pós desafio, o futuro como Desenvolvedor começou a se formar na minha frente e hoje posso dizer que esse futuro é meu!</S.Foco>
        
      </S.CaixaFig>
    </S.Container>
  )
}
