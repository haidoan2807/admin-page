import React from 'react'
import { CustomTable } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilCheckAlt, cilX } from '@coreui/icons'
import CustomButton from 'src/components/custombutton'
import EditSubscription from 'src/views/pages/subcription-management/components/edit-subscription'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faSleigh } from '@fortawesome/free-solid-svg-icons'

const AgencySubscription = () => {
    const SubscriptionHeader = React.lazy(() => import('./components/header'))
    const tableData = {
        columns: [
            {
                name: 'Agency Name',
                selector: 'agency-name',
                sortable: true,
            },
            {
                name: 'Subscription Name',
                selector: 'subscription-name',
                sortable: true,
            },
            {
                name: 'Total Sales',
                selector: 'total-sales',
                sortable: true,
            },
            {
                name: <div className="text-center">Total Profit</div>,
                selector: 'total-profit',
                sortable: true,
            },
            {
                name: <div className="text-center">ROI%</div>,
                selector: 'roi',
                sortable: true,
            },
           
            {
                name: <div className="text-center">Status</div>,
                selector: 'status',
                sortable: true,
                render: (col, obj) => {
                    return obj.status ? (
                        <div className="text-center">Active</div>
                    ) : (
                        <div className="text-center">Expired</div>
                    )
                },
            },
            {
                name: <div className="text-center w-100">Action</div>,
                selector: 'action',
                render: (col) => (
                    <div className="d-flex flex-row justify-content-center">
                        <CustomButton color="main" onClick={() => { }}>
                            <FontAwesomeIcon icon={faBan} size="lg" className="mt-1" />
                        </CustomButton>
                        <CustomButton
                            color="main"
                            onClick={() =>
                                EditSubscription({
                                    show: true,
                                })
                            }
                        >
                            <img src={EditIcon} />
                        </CustomButton>
                        <CustomButton color="main">
                            <img src={TrashIcon} onClick={() => { }} />
                        </CustomButton>
                    </div>
                ),
            },
        ],
        data: [
            {
                id: 1,
                'agency-name': 'Thang Long Agency',
                'subscription-name': 'COVID 19 OFFER',
                'total-sales': '50',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: false,
            },
            {
                id: 2,
                'agency-name': 'Hoi An Agency',
                'total-sales': '50',
                'subscription-name': 'Independence day',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: false,
            },
            {
                id: 3,
                'agency-name': 'Dong Nai Agency',
                'subscription-name': 'Valentine day',
                'total-sales': '50',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: true,
            },
            {
                id: 4,
                'agency-name': 'Life Shot Agency',
                'subscription-name': 'International Teacher Day offer',
                'total-sales': '50',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: true,
            },
            {
                id: 5,
                'agency-name': 'Y.O.U Agency',
                'subscription-name': 'NEW-Trial',
                'total-sales': '50',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: false,
            },
            {
                id: 6,
                'agency-name': 'Kite Agency',
                'subscription-name': 'PER',
                'total-sales': '50',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: true,
            },
            {
                id: 7,
                'agency-name': 'PORT Agency',
                'subscription-name': 'WOMAN DAY OFFER',
                'total-sales': '50',
                'total-profit': <div className="text-end">$0.50</div>,
                'roi': <div className="text-end">50.00%</div>,
                status: true,
            },
        ],
    }

    return (
        <CustomTable data={tableData.data} columns={tableData.columns} Header={SubscriptionHeader}/>
    )
}

export default AgencySubscription
