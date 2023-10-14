import React from 'react'
import { CFormSelect, CPagination, CPaginationItem } from '@coreui/react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, pageSize, custom, totalData, paginate }) => {
  const pageNumbers = []
  const [size, setSize] = pageSize

  for (let i = 1; i <= Math.ceil(totalData / size); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="d-flex flex-row align-items-center justify-content-between mb-1">
      <div style={{ color: '#282828', fontSize: '14px' }}>
        {custom.tooltip || `1 - ${size} of ${totalData} rows `}
      </div>

      <div className="d-flex flex-row">
        <div className="me-2" style={{ cursor: 'pointer' }}>
          <CPagination size="sm">
            <CPaginationItem
              aria-label="Previous"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1 ? true : false}
            >
              <span aria-hidden="true">&laquo;</span>
            </CPaginationItem>
            {pageNumbers.map((number) => (
              <CPaginationItem
                key={number}
                onClick={() => paginate(number)}
                active={currentPage === number ? true : false}
              >
                {number}
              </CPaginationItem>
            ))}
            <CPaginationItem
              aria-label="Next"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === pageNumbers.length ? true : false}
            >
              <span aria-hidden="true">&raquo;</span>
            </CPaginationItem>
          </CPagination>
        </div>
        <div>
          <CFormSelect size="sm" onChange={(e) => setSize(e.target.value)}>
            <option value="5">5/page</option>
            <option value="10">10/page</option>
            <option value="15">15/page</option>
            <option value="20">20/page</option>
          </CFormSelect>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pageSize: PropTypes.array,
  custom: PropTypes.object,
  totalData: PropTypes.number,
  paginate: PropTypes.func,
}

export default Pagination
