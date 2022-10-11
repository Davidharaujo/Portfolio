import React from 'react'
import * as S from './Style/ContactStyle'

export default function Contact() {
  return (
    <S.Container>
      <S.Links to='/'>david.<span>home</span></S.Links>
      <S.CaixaEntrada>
        <S.TituloEntrada>Podemos desenvolver juntos!</S.TituloEntrada>
      </S.CaixaEntrada>
      <S.CaixaTexto>
        <S.Apresentacao>Vamos conversar! Estou disponível para novos empregos e para participar de projetos.</S.Apresentacao>
        <a target='_blank' href="mailto:a.davidhenrique@gmail.com">a.davidhenrique@gmail.com</a>
        <a target='_blank' href="https://github.com/Davidharaujo">Github</a>
        <a target='_blank' href="https://www.linkedin.com/in/davidharaujo/">LinkedIn</a>
        <a target='_blank' href="https://www.instagram.com/davidharaujo/">Instagram</a>
      </S.CaixaTexto>
      
    </S.Container>
  )
}
