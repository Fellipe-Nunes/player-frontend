import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { myDislikes, myLikes } from '../../../services/admin'
import { Table, Container, Row, Col } from 'react-bootstrap'


import Loading from '../../../components/layout/loading'
import TopTitle from '../../../components/layout/title'


const MinhasAvaliacoes = () => {


  const [isLoading, setIsLoading] = useState(false)
  const [euCurto, setEuCurto] = useState([])
  const [naoCurto, setNaoCurto] = useState([])

  useEffect(() => {

    let get = async () => {
      setIsLoading(true)
      const likes = await myLikes()
      const dislike = await myDislikes()
      setEuCurto(likes.data)
      setNaoCurto(dislike.data)
      setIsLoading(false)
    }

    get()

    return () => get = () => {
    }

  }, [])





  return (

    <>

      <Container>
        <>
          <TopTitle title="Minhas avaliações" />
          {isLoading
            ? <Loading />
            :
            <Row>
              <Col sm={6}>
                <TableRating responsive="sm">
                  <thead>
                    <tr>
                      <th>LIKES</th>
                    </tr>
                  </thead>

                  <tbody>
                    {euCurto.map((item, i) => (
                      <tr key={i}>
                        <td>{item.nome}</td>
                      </tr>
                    ))}

                  </tbody>
                </TableRating>
              </Col>
              <Col sm={6}>
                <TableRating responsive="sm">
                  <thead>
                    <tr>
                      <th>DISLIKES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {naoCurto.map((item, i) => (
                      <tr key={i}>
                        <td>{item.nome}</td>
                      </tr>
                    ))}

                  </tbody>
                </TableRating>
              </Col>
            </Row>
          }
        </>

      </Container>
    </>
  )
}



export default MinhasAvaliacoes

const TableRating = styled(Table)`
th {
  background: #FFF;
}  

.btn {
  padding: 0.3rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  
}

.btn .active .btn- {
  :focus{
    background:red;
  }
}


.icon {
  font-size: 1.3em;
  cursor: pointer;
  :hover{
      color: #FF4C4C;
  }
  
.swal2-header {
  background: #000;
}
}
`