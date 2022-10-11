import React from 'react'
import * as S from './Style/WorkStyle'

export default function Work() {
  return (
    <S.Container>
      <S.Links to='/'>david.<span>home</span></S.Links>
      <S.Titulo>Front-End React</S.Titulo>
      <S.Caixa>
        <a className='pagina' href="">ODS Bangu</a>
        <S.Paragrafo>Info Page</S.Paragrafo>
        <a href="">Repositório</a>
      </S.Caixa>
      <S.Caixa>
        <a className='pagina' target="_blank" href="https://recipes-beryl-delta.vercel.app">Recipes</a>
        <S.Paragrafo>Pair Programing utilizando GitFlow</S.Paragrafo>
        <a target="_blank" href="https://github.com/Davidharaujo/Recipes">Repositório</a>
      </S.Caixa>
      <S.Caixa>
        <a className='pagina' target="_blank" href="https://to-do-project-beige.vercel.app">To-Do-List</a>
        <S.Paragrafo>Uso de React Hooks</S.Paragrafo>
        <a target="_blank" href="https://github.com/Davidharaujo/ToDo_List">Repositório</a>
      </S.Caixa>
      <S.Caixa>
        <a className='pagina' target="_blank" href="https://consume-api.vercel.app">The M Art</a>
        <S.Paragrafo>Consumo de API com axios</S.Paragrafo>
        <a target="_blank" href="https://github.com/Davidharaujo/ConsumeAPI">Repositório</a>
      </S.Caixa>
      <S.Caixa>
        <a className='pagina' target="_blank" href="https://calculator-alpha-steel.vercel.app">Calculator</a>
        <S.Paragrafo>Uso de funções e propriedade on</S.Paragrafo>
        <a target="_blank" href="https://github.com/Davidharaujo/calculator">Repositório</a>
      </S.Caixa>
    </S.Container>
  )
}
