import React, { useState } from 'react'
import {
  CButtonGroup,
} from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import makeAnimated from 'react-select/animated'
import { DatePicker } from 'antd';
import ImportTrackSale from '../../track-sale-list/components/import-track-sale'
import { useHistory } from 'react-router-dom'

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const animatedComponents = makeAnimated()

const ImportHistoryHeader = () => {
  const history = useHistory()

  const [showFilterBox, setShowFilterBox] = useState(true)
  const [showColumnsBox, setShowColumnsBox] = useState(false)
  const [filter, setFilter] = useState({
    campaignSearchText: '',
    campaignSearch: [],
    campaignTypes: [],
    status: null,
  })


  return (
    <>
      <div className="d-flex flex-row w-100 justify-content-between mb-2">
        <div className="d-flex flex-row gap-2">

        </div>

        <div className="d-flex flex-row gap-2">
          <CButtonGroup>
            <CustomButton color="secondary"
              onClick={() => ImportTrackSale({ show: true, history })}>
              <div>
                <FontAwesomeIcon icon={faUpload} className="me-1" />
                Import
              </div>
            </CustomButton>
          </CButtonGroup>
          <CButtonGroup>
            <CustomButton color="secondary">
              <FontAwesomeIcon icon={faDownload} className="me-1" />
              Export
            </CustomButton>
          </CButtonGroup>
        </div>
      </div>
    </>
  )
}

export default ImportHistoryHeader
