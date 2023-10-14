import React from 'react'
import styled from 'styled-components'
import IconSortUp from 'src/assets/images/icon_sort_up.svg'
import IconSortDown from 'src/assets/images/icon_sort_down.svg'
import IconSortUpBlack from 'src/assets/images/icon_sort_up_black.svg'
import IconSortDownBlack from 'src/assets/images/icon_sort_down_black.svg'
import PropTypes from 'prop-types'

const SortIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  cursor: pointer;
`

const SortArrow = ({ sort, onClick }) => {
  return (
    <SortIcon onClick={onClick}>
      <img src={sort === 'asc' ? IconSortUpBlack : IconSortUp} style={{ marginBottom: '1px' }} />
      <img src={sort === 'desc' ? IconSortDownBlack : IconSortDown} />
    </SortIcon>
  )
}

SortArrow.propTypes = {
  sort: PropTypes.string,
  onClick: PropTypes.func,
}

export default SortArrow
