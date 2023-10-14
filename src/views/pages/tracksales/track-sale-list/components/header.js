import React, { useState } from 'react'
import {
  CButtonGroup,
  CCollapse,
  CCol,
  CRow,
} from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSyncAlt,
  faDownload,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import CustomSelectInput from 'src/components/customselectinput'
import makeAnimated from 'react-select/animated'
import { DatePicker } from 'antd';
import ImportTrackSale from './import-track-sale'
import { useHistory } from 'react-router-dom'
import PropTypes, { array, bool, func } from 'prop-types'

const { RangePicker } = DatePicker;

const TrackSaleHeader = (props) => {
  const { filterColumnsTable } = props;
  const history = useHistory()

  const [showColumnsBox, setShowColumnsBox] = useState(props.isShownFilterCols)

  return (
    <>
      <div className="d-flex flex-row w-100 justify-content-between mb-2">
        <div className="d-flex flex-row gap-2">
          <CButtonGroup role="group" color="secondary">
            <CustomButton color="secondary">
              <FontAwesomeIcon icon={faSyncAlt} />
            </CustomButton>
          </CButtonGroup>
          <CButtonGroup role="group" color="secondary">
            <CustomButton color="secondary" onClick={() => {
              setShowColumnsBox(!showColumnsBox)
            }}>
              Hide/ Unhide collumn
            </CustomButton>
          </CButtonGroup>

        </div>




      </div>

          <CCollapse visible={showColumnsBox} className="mb-3">

                <CustomSelectInput
                  isMulti={true}
                  closeMenuOnSelect={false}
                  // components={animatedComponents}
                  options={props.settingColumns}
                  defaultValue={props.settingColumns}
                  value={props.selectedShowColumns}
                  inputId="select_campaign_type_input"
                  instanceId="select_campaign_type_instant"
                  onChange={(selected) => {
                    if (selected.length == 0) {
                      filterColumnsTable(props.selectedShowColumns)
                    } else {
                      filterColumnsTable(selected);
                    }
                  }}
                />

                <div className="text-end mt-2">
                  <CustomButton color="primary" onClick={() => filterColumnsTable(props.settingColumns)}>
                    Clear
                  </CustomButton>
                </div>

          </CCollapse>

      <div className="d-flex flex-row w-100 justify-content-between mb-2">
        <div></div>
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
              <div>
                <FontAwesomeIcon icon={faDownload} className="me-1" />
                Export
              </div>
            </CustomButton>
          </CButtonGroup>

        </div>
      </div>
    </>
  )
}

TrackSaleHeader.propTypes = {
  filterColumnsTable: func,
  isShownFilterCols: bool,
  selectedShowColumns: array,
  settingColumns: array,
}
export default TrackSaleHeader
