import { CCard, CCardBody, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CustomTable } from 'src/components'
import CustomButton from 'src/components/custombutton';
import { useQuery } from 'src/helper/custom-hook';
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import ConfirmDialog from 'src/components/popup';
import EditIndvidualTrackSale from './components/edit-individual-track-sale';

const trackSales = {
    columns: [
        {
            name: 'Campaign ID',
            selector: 'campaignID',
        },
        {
            name: 'Campaign Name',
            selector: 'campaignName',
        },
        {
            name: <div className="text-center">Sales Date</div>,
            selector: 'salesDate',
        },
        {
            name: <div className="text-center">Campaign Type</div>,
            selector: 'campaignType',
        },
        {
            name: <div className="text-center">Sales Value</div>,
            selector: 'saleValue',
        },
        {
            name: <div className="text-center">Number of Customer</div>,
            selector: 'numberOfCustomer',
        },
    ],
    data: [
        {
            campaignID: 1,
            campaignName: 'HUPER 8.3',
            salesDate: 'Mar 15, 2022',
            campaignType: '10% discount',
            saleValue: '$40.05',
            numberOfCustomer: 6,
        },
        {
            campaignID: 2,
            campaignName: 'HUPER 10',
            salesDate: 'April 15, 2022',
            campaignType: '90% discount',
            saleValue: '$40.05',
            numberOfCustomer: 6,
        },
    ]
}

const individualSale = {
    columns: [
        {
            name: 'Campaign ID',
            selector: 'campaignID',
        },
        {
            name: 'Campaign Name',
            selector: 'campaignName',
        },
        {
            name: <div className="text-center">Sales Date</div>,
            selector: 'salesDate',
        },
        {
            name: <div className="text-center">Campaign Type</div>,
            selector: 'campaignType',
        },
        {
            name: <div className="text-center">Sales Value</div>,
            selector: 'saleValue',
        },
        {
            name: <div className="text-center">Number of <br/>Customer</div>,
            selector: 'numberOfCustomer',
        },
        {
            name: <div className="text-center">Source type</div>,
            selector: 'sourceType',
        },
        {
            name: <div className="text-center">Payment Description</div>,
            selector: 'paymentDescription',
        },
        {
            name: <div className="text-center">Sale Id( From POS)</div>,
            selector: 'saleID',
        },
        {
            name: <div className="text-center">Action</div>,
            render: (col, obj) => (
              <div className="d-flex flex-row justify-content-center" key={obj.id}>  
                <CustomButton
                  color="main"
                  onClick={() =>
                    EditIndvidualTrackSale({
                      show: true,
                      isViewed: false,
                    })
                  }
                >
                  <img src={EditIcon} />
                </CustomButton>
                <CustomButton color="main">
                  <img src={TrashIcon} onClick={() =>
                    ConfirmDialog({
                      show: true,
                      message: (
                        <span>
                          Are you sure you want to <b>delete</b> {obj.campaignName}?
                        </span>
                      ),
                    })} />
                </CustomButton>
              </div>
            ),
        },
    ],
    data: [
        {
            campaignID: 1,
            campaignName: 'HUPER 8.3',
            salesDate: 'Mar 15, 2022',
            campaignType: '10% discount',
            saleValue: '$40.05',
            numberOfCustomer: 6,
            sourceType: 'POS Integration',
            paymentDescription: 'Test 001 HUPER 8.3',
            saleID: 'KOUNTA-1353313086',
        },
        {
            campaignID: 2,
            campaignName: 'HUPER 10',
            salesDate: 'April 15, 2022',
            campaignType: '90% discount',
            saleValue: '$40.05',
            numberOfCustomer: 6,
            sourceType: 'POS Integration',
            paymentDescription: 'Test 001 HUPER 8.3',
            saleID: 'KOUNTA-1353313407',
        },
    ]
}



const TrackSalesDetail = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [trackSalesData, setTrackSalesData] = useState([]);
    const [individualSaleData, setIndividualSaleData] = useState([]);
    const query = useQuery();;
    console.log('id', query.get('id'));

    useEffect(() => {
        const id = query.get('id');
        if (id) {
            setTrackSalesData(trackSales.data);
            setIndividualSaleData(individualSale.data);
        } else {
            history.push('/track-sales');
        }
    }, [])

    return (
        <>
            <CRow>
                <CCol xs>
                    <CCard className="mb-4">
                        <CCardBody>
                            <CustomTable data={trackSalesData} columns={trackSales.columns}
                                Header={() => (
                                    <>
                                        <h3>Track Sales Detail</h3>
                                    </>
                                )}
                                pagination={false}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow>
                <CCol xs>
                    <CCard className="mb-4">
                        <CCardBody>
                            <CustomTable data={individualSaleData} columns={individualSale.columns}
                                Header={() => (
                                    <>
                                        <h3>Individual Sale</h3>
                                    </>
                                )}
                                pagination={false}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>

    )
}

export default TrackSalesDetail
