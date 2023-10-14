import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CustomTable } from 'src/components'
import { useQuery } from 'src/helper/custom-hook';

const ShowImportedHistory = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [trackSaleData, setTrackSalesData] = useState([]);
    const query = useQuery();
    console.log('id', query.get('id'));

    useEffect(() => {
        const id = query.get('id');
        if (id) {
            setTrackSalesData(trackSales.data);
        } else {
            history.push('/track-sales');
        }
    }, [])

    const trackSales = {
        columns: [
            {
                name: 'Campaign ID',
                selector: 'campainID',
            },
            {
                name: 'Campaign Name',
                selector: 'campainName',
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
        ],
        data: [
            {
                campainID: 557,
                campainName: 'Instagram Ads	',
                salesDate: <div className="text-end">11/01/2022</div>,
                campaignType: 'Campaign only',
                saleValue: <div className="text-end">$1,831.18</div>,
            },
            {
                campainID: 557,
                campainName: 'Instagram Ads	',
                salesDate: <div className="text-end">11/01/2022</div>,
                campaignType: 'Campaign only',
                saleValue: <div className="text-end">$1,914.04</div>,
            },
            {
                campainID: 556,
                campainName: 'Instagram Ads	',
                salesDate: <div className="text-end">11/01/2022</div>,
                campaignType: 'Campaign only',
                saleValue: <div className="text-end">$1,472.29</div>,
            },
            {
                campainID: 558,
                campainName: 'Instagram Ads	',
                salesDate: <div className="text-end">11/01/2022</div>,
                campaignType: 'Campaign only',
                saleValue: <div className="text-end">$2,805.73</div>,
            },
        ]
    }

    return (
        <CustomTable data={trackSaleData} columns={trackSales.columns}
            Header={() => (
                <>
                    <h3>Track Sales List</h3>
                </>
            )}
            pagination={false}
        />
    )
}

export default ShowImportedHistory
