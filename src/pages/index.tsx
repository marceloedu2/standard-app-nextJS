import React from 'react'
import Javascript from '@/assets/javascript.svg'
import { ContainerHome } from '@/styles/pages/home'

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <Javascript />
      <h1>ReactJS Structure</h1>
      <p>A Next.js + eslint + prettier + styled-components structure</p>
    </ContainerHome>
  )
}
export default Home
