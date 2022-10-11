import React from 'react'
import * as S from './Style/HomeStyle'
import Image from '../img/avatar.png'


export default function Home() {
  return (
    <S.Container>
        <S.Navigation>
            <S.Menu>
              <div>
                <S.Links className='open1' to='/sobre'>Hey!</S.Links> 
                <S.Links className='hide1' to='/sobre'>Sobre</S.Links> 
              </div>
              <div>
                <S.Links className='open2' to='/trabalhos'>Me chamo</S.Links> 
                <S.Links className='hide2' to='/trabalhos'>Trabalhos</S.Links> 
              </div>  
              <div>
                <S.Links className='open3' to='/contato'>David.</S.Links>
                <S.Links className='hide3' to='/contato'>Contato</S.Links>
              </div>  
            </S.Menu>
        </S.Navigation>
        <S.Image src={Image} alt="" />
    </S.Container>
  )
}
