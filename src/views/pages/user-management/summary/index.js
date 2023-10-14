import React, { useState } from 'react'
import { CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'
import Chart from '../userlist/components/chart'
import CustomButton from 'src/components/custombutton'
import styled from 'styled-components'

const CardTitle = styled(CCardTitle)`
  font-size: 16px;
  color: #595959;
`

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Summary = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 2, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 3, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 4, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 5, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 6, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 7, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
    { id: 8, name: 'Miriam Van Heusden', time: 'Created Nov 14 2021 12:00 AM' },
  ])
  const [size, setSize] = useState(5)

  return (
    <CRow>
      <CCol lg={6}>
        <CRow>
          <CCol lg={6}>
            <CCard>
              <CCardBody>
                <CardTitle>TOTAL SUBSCRIBERS</CardTitle>
                <CCardText
                  className="d-flex justify-content-center pt-2"
                  style={{ color: '#39D1EE', fontSize: '30px' }}
                >
                  1,560
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol lg={6}>
            <CCard>
              <CCardBody>
                <CardTitle>ACTIVE SUBSCRIBERS</CardTitle>
                <CCardText
                  className="d-flex justify-content-center pt-2"
                  style={{ color: '#1B8512', fontSize: '30px' }}
                >
                  1,000
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol lg={12} className="my-2">
            <CCard>
              <CCardBody>
                <CardTitle>SUBSCRIPTION OVERVIEW</CardTitle>
                <OverviewContainer>
                  <Item>
                    <span style={{ color: '#DE7A05', fontSize: '30px' }}>300</span>
                    <CCardText>Free Trial</CCardText>
                  </Item>
                  <Item>
                    <span style={{ color: '#1B8512', fontSize: '30px' }}>560</span>
                    <CCardText>Intergration</CCardText>
                  </Item>
                  <Item>
                    <span style={{ color: '#1B8512', fontSize: '30px' }}>700</span>
                    <CCardText>D.Y.I (Do It Yoursself)</CCardText>
                  </Item>
                </OverviewContainer>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol lg={12}>
            <CCard>
              <CCardBody>
                <CardTitle>SUBSCRIBER HISTORY</CardTitle>
                <Chart />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCol>

      <CCol lg={6} className="d-flex flex-col">
        <CCard className="container-fluid">
          <CCardBody>
            <CardTitle className="d-flex flex-row justify-content-between align-items-center">
              <div className="d-flex flex-row align-items-center">
                <span style={{ fontSize: '16px' }}>NEW SUBSCRIBERS</span>
                <CustomButton color="primary" className="rounded-pill ms-2">
                  This month
                </CustomButton>
              </div>
              <span style={{ fontSize: '24px', color: '#0666AB' }}>{users.length}</span>
            </CardTitle>
            {users.slice(0, size).map((user) => {
              return (
                <div key={user.id} className="my-2">
                  <CCardText className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <i className="far fa-user-circle fa-2x me-2"></i>
                      <span style={{ color: '#0666AB', fontSize: '14px' }}>{user.name}</span>
                    </div>
                    <span style={{ fontSize: '14px' }}>{user.time}</span>
                  </CCardText>
                </div>
              )
            })}
            {users.length > size ? (
              <CustomButton
                color="main"
                className="d-flex w-100 flex-row justify-content-center"
                onClick={() => setSize(10)}
              >
                See more
              </CustomButton>
            ) : (
              <CustomButton
                color="main"
                className="d-flex w-100 flex-row justify-content-center"
                onClick={() => setSize(5)}
              >
                See less
              </CustomButton>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Summary
