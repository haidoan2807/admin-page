import React, { useRef, useState } from 'react'
import {
    CButtonGroup,
    CCol,
    CFormInput,
    CFormLabel,
    CInputGroup,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
} from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import CustomButton from '../../../../../components/custombutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faFileCircleExclamation, faUpload } from '@fortawesome/free-solid-svg-icons'
import CSVReader from 'react-csv-reader'
import CustomSelectInput from 'src/components/customselectinput'
import makeAnimated from 'react-select/animated'
import { showError } from 'src/components/toastify'

const animatedComponents = makeAnimated()

const parseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};

const ImportTrackSale = (props) => {
    return new Promise((resolve) => {
        let el = document.createElement('div')

        const handleResolve = (result) => {
            unmountComponentAtNode(el)
            el = null
            resolve(result)
        }

        render(<DialogContent {...props} onExit={handleResolve} />, el)
    })
}

const DialogContent = (props) => {
    const { show } = { ...props }
    const { history } = { ...props }
    const csvReaderRef = useRef(null);
    const [options, setOptions] = useState([
        {
            value: 0,
            label: 'dd/mm/yyyy',
        },
        {
            value: 1,
            label: 'mm/dd/yyyy',
        },
    ])
    const [visible, setVisible] = useState(show)
    const [fileName, setFileName] = useState('');
    const [importData, setImportData] = useState([]);

    const importHistory = () => {
        if (fileName) {
            setVisible(false)
            history.push('/track-sales/preview-imported-history', { importedHistory: importData });
        } else {
            showError({ message: "Please upload *.csv file to import" });
        }
    }

    const triggerImport = () => {
        document.getElementById("CSVReader").click();
        // if (csvReaderRef.current !== null) {
        //     csvReaderRef.current.click();
        // }
    }

    const onFileLoaded = (data, fileInfo) => {
        console.log('onFileLoaded1', data);
        console.log('onFileLoaded2', fileInfo);
        setFileName(fileInfo.name);
        setImportData(data);
        document.getElementById("CSVReader").value = "";
    }

    return (
        <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle style={{ color: '#000000', fontSize: '18px' }}><b>Import Track Sale</b></CModalTitle>
            </CModalHeader>
            <CModalBody style={{ fontSize: '14px' }}>
                <CRow className="mb-1">
                    <CCol md={4} className="center-label">
                        <CFormLabel>Select date format:</CFormLabel>
                    </CCol>
                    <CCol md={5}>
                        <CInputGroup>
                            {/* <CFormInput type="date" id="start-date" onChange={() => { }} /> */}
                            <CustomSelectInput
                                closeMenuOnSelect={true}
                                components={animatedComponents}
                                defaultValue={options[0]}
                                options={options}
                                placeholder="Date format"
                            />
                        </CInputGroup>
                    </CCol>

                </CRow>
                <CRow className="mb-1">
                    <CCol>
                        <div className="d-flex flex-row">
                            <span className="me-4">Supported file type:</span>
                            <b>.csv</b>
                        </div>
                    </CCol>

                </CRow>
                <CRow className="mb-1">
                    <CCol>
                        <CButtonGroup className="me-4">
                            <CustomButton color="primary"
                                onClick={triggerImport}
                            >
                                <FontAwesomeIcon icon={faUpload} className="me-2" />
                                Select file
                                <CSVReader
                                    cssClass="d-none"
                                    inputId="CSVReader"
                                    label="Supported file type: .csv"
                                    onFileLoaded={onFileLoaded}
                                    parserOptions={parseOptions}
                                    inputStyle={{ color: "red" }}
                                // ref={csvReaderRef}
                                />
                            </CustomButton>
                        </CButtonGroup>
                        <span>{fileName}</span>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CustomButton
                            color="link"
                            className='import-track-sale'
                            onClick={() => { }}
                        >
                            <FontAwesomeIcon icon={faDownload} className="me-2" />
                            Download Default file
                        </CustomButton>

                    </CCol>
                    <CCol>
                        <CustomButton
                            color="link"
                            className='import-track-sale'
                            onClick={() => { }}
                        >
                            <FontAwesomeIcon icon={faFileCircleExclamation} className="me-2" />
                            Instruction to Use
                        </CustomButton>

                    </CCol>
                </CRow>

            </CModalBody>
            <CModalFooter>
                <CustomButton color="primary" onClick={importHistory}>Import</CustomButton>
                <CustomButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                </CustomButton>
            </CModalFooter>
        </CModal>
    )
}

export default ImportTrackSale
