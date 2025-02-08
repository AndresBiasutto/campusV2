import React from 'react'
import Container from '../../layouts/Container'
import { TbError404 } from "react-icons/tb";

const Missing: React.FC = () => {
  return (
    <Container>
        <h1>missing url <TbError404 /> </h1>
    </Container>
  )
}

export default Missing