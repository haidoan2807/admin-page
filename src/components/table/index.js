import React, { useState } from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import Pagination from 'src/components/table/components/pagination'
import styled from 'styled-components'
import SortArrow from './components/sort-arrow'

const TitleColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CustomTable = ({
  columns = [],
  data = [],
  Header,
  Footer,
  maxRow = 0,
  type = 'rows',
  server = false,
  pagination = true,
  custom = {
    pagination: {},
  },
  ...props
}) => {
  const [dataList, setDataList] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [state, setState] = useState({
    sortKey: 'Name',
    sortDirection: '',
  })

  const indexOfLastData = currentPage * pageSize
  const indexOfFirstData = indexOfLastData - pageSize
  let currentData = data;
  if (pagination) {
    currentData = data.slice(indexOfFirstData, indexOfLastData)
  }

  const handleSort = (col) => {
    if (col.name === state.sortKey) {
      setState((prevState) => ({
        ...prevState,
        sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
      }))
      if (state.sortDirection === 'asc') {
        setDataList((data) => data.sort((a, b) => (a[col.selector] < b[col.selector] ? 1 : -1)))
      } else {
        setDataList((data) => data.sort((a, b) => (a[col.selector] > b[col.selector] ? 1 : -1)))
      }
    } else {
      setState((prevState) => ({ ...prevState, sortKey: col.name, sortDirection: 'asc' }))
      setDataList((data) => data.sort((a, b) => (a[col.selector] > b[col.selector] ? 1 : -1)))
    }
  }

  const paginate = (number) => setCurrentPage(number)
  return (
    <div className="container-fluid d-flex flex-column pt-3 bg-white">
      {Header && (
        <>
          <Header />
        </>
      )}
      <div style={{ overflow: 'auto' }}>
        <CTable bordered borderColor="#E5E5E5">
          <CTableHead>
            <CTableRow>
              {columns.map((col) => (
                <CTableHeaderCell
                  key={`table-header-col-${col.selector}`}
                  scope="col"
                  style={{ backgroundColor: '#FAFAFA', fontSize: '14px', color: '#282828' }}
                >
                  <TitleColumn className={`${col.className}`}>
                    {col.name}
                    {col.sortable && (
                      <SortArrow
                        sort={col.name === state.sortKey ? state.sortDirection : undefined}
                        onClick={() => handleSort(col)}
                      />
                    )}
                  </TitleColumn>
                </CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentData.map((obj, index) => (
              <CTableRow key={`table-data-row-${index}`}>
                {columns.map((col, index) => {
                  return (
                    <CTableDataCell
                      key={`table-data-cell-row-${index}`}
                      scope="row"
                      style={{ fontSize: '14px', color: '#57585B' }}
                    >
                      {col.render ? col.render(col, obj) : obj[col.selector]}
                    </CTableDataCell>
                  )
                })}
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>

      {dataList.length > maxRow && pagination && (
        <>
          <Pagination
            currentPage={currentPage}
            pageSize={[pageSize, setPageSize]}
            custom={custom.pagination}
            totalData={dataList.length}
            paginate={paginate}
          />
        </>
      )}

      {Footer && (
        <>
          <Footer />
        </>
      )}
    </div>
  )
}

CustomTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  Header: PropTypes.elementType,
  Footer: PropTypes.elementType,
  maxRow: PropTypes.number,
  type: PropTypes.string,
  pagination: PropTypes.bool,
  server: PropTypes.bool,
  custom: PropTypes.object,
}

export default CustomTable
