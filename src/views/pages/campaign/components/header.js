import React, { useState } from 'react'
import {
  CButtonGroup,
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInputGroup,
  CFormInput,
  CButton,
} from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faColumns,
  faFilter,
  faFilePdf,
  faFileCsv,
  faPlus,
  faSyncAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import CreateCampaign from './create-campaign'
import CreateNewSales from './add-sales-value'
import styled from 'styled-components'
import CustomSelectInput from 'src/components/customselectinput'
import makeAnimated from 'react-select/animated'

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

const Header = () => {
  const [showFilterBox, setShowFilterBox] = useState(true)
  const [showColumnsBox, setShowColumnsBox] = useState(false)
  const [filter, setFilter] = useState({
    campaignSearchText: '',
    campaignSearch: [],
    campaignTypes: [],
    status: null,
  })
  const [campaignTypes, setCampaignTypes] = useState([])
  const [campaignOptions, setCampaignOptions] = useState([])
  const [campaignStatuses, setCampaignStatuses] = useState([
    {
      label: 'All',
      value: '',
    },
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'Inactive',
      value: 'Inactive',
    },
  ])

  const [settingColumns, setSettingColumns] = useState([
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'Type',
      value: 'campaign_type.name',
    },
    {
      label: 'Start Date',
      value: 'start_date',
    },
    {
      label: 'Total Sales',
      value: 'total_sale',
    },
    {
      label: 'Total Customers',
      value: 'total_customer',
    },
    {
      label: 'Total Cost',
      value: 'total_cost',
    },
    {
      label: 'Total Profit',
      value: 'campaign_roi',
    },
    {
      label: 'ROI%',
      value: 'roi_percent',
    },
    {
      label: 'Status',
      value: 'status',
    },
  ])

  const [selectedShowColumns, setSelectedShowColumns] = useState([
    {
      label: 'Name',
      value: 'name',
    },
    {
      label: 'Type',
      value: 'campaign_type.name',
    },
    {
      label: 'Start Date',
      value: 'start_date',
      type: 'dateTime',
    },
    {
      label: 'Total Sales',
      value: 'total_sale',
      type: 'currency',
    },
    {
      label: 'Total Customers',
      value: 'total_customer',
      type: 'number',
    },
    {
      label: 'Total Cost',
      value: 'total_cost',
      type: 'currency',
    },
    {
      label: 'Total Profit',
      value: 'campaign_roi',
      type: 'number',
    },
    {
      label: 'ROI%',
      value: 'roi_percent',
      type: 'percent',
    },
    {
      label: 'Status',
      value: 'status',
    },
  ])

  const toggleFilterBox = () => {
    setShowFilterBox(!showFilterBox)
    setShowColumnsBox(false)
  }

  const toggleColumnsBox = () => {
    setShowColumnsBox(!showColumnsBox)
    setShowFilterBox(false)
  }

  return (
    <>
      <ButtonGroup className="mb-3">
        <CustomButton color="secondary" style={{ borderStyle: 'none' }} onClick={toggleFilterBox}>
          <FontAwesomeIcon icon={faFilter} /> Filter
        </CustomButton>
        <CustomButton
          color="secondary"
          onClick={toggleColumnsBox}
          style={{ marginLeft: '5px', borderStyle: 'none' }}
        >
          <FontAwesomeIcon icon={faColumns} /> Columns
        </CustomButton>
      </ButtonGroup>

      <CCollapse visible={showFilterBox} className="mb-3">
        <Container>
          <InputSection>
            <CInputGroup>
              <CFormInput
                type="text"
                placeholder="Search by username or email"
                style={{ fontSize: '14px' }}
              />
              <CButton type="button" color="secondary" variant="outline" id="search">
                <FontAwesomeIcon icon={faSearch} />
              </CButton>
            </CInputGroup>
          </InputSection>
          <InputSection>
            <CustomSelectInput
              value={filter.campaignSearch}
              isMulti={true}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={campaignOptions}
              inputId="select_campaigns"
              instanceId="select_campaigns"
              placeholder="Select campaign name"
              onChange={(selected) => {
                setFilter({
                  ...filter,
                  campaignSearch: selected,
                })
              }}
            />
          </InputSection>
          <InputSection>
            <CustomSelectInput
              value={filter.campaignTypes}
              isMulti={true}
              closeMenuOnSelect={false}
              components={animatedComponents}
              options={campaignTypes}
              inputId="select_campaign_type_input"
              instanceId="select_campaign_type_instant"
              placeholder="Select campaign type"
              onChange={(selected) => {
                setFilter({
                  ...filter,
                  campaignTypes: selected,
                })
              }}
            />
          </InputSection>
          {/* <InputSection>
            <CustomSelectInput
              isMulti={true}
              value={filter.status}
              components={animatedComponents}
              options={campaignStatuses}
              inputId="select_status"
              instanceId="select_status"
              placeholder="Select status"
              onChange={(selected) => {
                setFilter({
                  ...filter,
                  status: selected,
                })
              }}
            />
          </InputSection> */}
          <ButtonGroup>
            <CustomButton color="primary">Apply</CustomButton>
            <CustomButton color="main" style={{ marginLeft: '5px' }}>
              Reset
            </CustomButton>
          </ButtonGroup>
        </Container>
        <div className="mt-3">
          <span>Summary: This list shows all Active/Inactive campaigns.</span>
        </div>
      </CCollapse>

      <CCollapse visible={showColumnsBox} className="mb-3">
        <CustomSelectInput
          isMulti={true}
          closeMenuOnSelect={false}
          // components={animatedComponents}
          options={settingColumns}
          defaultValue={settingColumns}
          value={selectedShowColumns}
          inputId="select_campaign_type_input"
          instanceId="select_campaign_type_instant"
          onChange={(selected) => {
            if (selected.length == 0) {
              setSelectedShowColumns(selectedShowColumns)
              return
            }
            setSelectedShowColumns(selected)
          }}
        />
        <div className="text-end mt-2">
          <CustomButton color="primary" onClick={() => setSelectedShowColumns(settingColumns)}>
            Clear
          </CustomButton>
        </div>
      </CCollapse>

      <div className="d-flex flex-row w-100 justify-content-between mb-2">
        <div>
          <CustomButton color="secondary">
            <FontAwesomeIcon icon={faSyncAlt} />
          </CustomButton>
        </div>
        <div className="d-flex flex-row gap-2">
          {/* <CustomButton color="primary" onClick={() => CreateCampaign({ show: true })}>
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Create Campaign
          </CustomButton>
          <CustomButton color="primary" onClick={() => CreateNewSales({ show: true })}>
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Add Sales Value
          </CustomButton> */}
          <CButtonGroup role="group" color="primary">
            <CustomButton color="primary">
              <FontAwesomeIcon icon={faFilePdf} className="me-1" />
              Export PDF
            </CustomButton>
            <CDropdown variant="btn-group">
              <CDropdownToggle style={{ backgroundColor: '#1A428A' }}></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => {}}>Download now</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CButtonGroup>
          <CButtonGroup role="group" color="primary">
            <CustomButton color="primary">
              <FontAwesomeIcon icon={faFileCsv} className="me-1" />
              Export CSV
            </CustomButton>
            <CDropdown variant="btn-group">
              <CDropdownToggle style={{ backgroundColor: '#1A428A' }}></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => {}}>Download now</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CButtonGroup>
        </div>
      </div>
    </>
  )
}

export default Header
