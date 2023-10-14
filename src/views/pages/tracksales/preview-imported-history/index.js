import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CustomTable } from 'src/components'

const data = [
    {
        campainID: 55,
        campainName: 'HUPER 8.3',
        salesDate: <div className="text-end">11/01/2022</div>,
        campaignType: '10% discount',
        saleValue: 'Unlimited',
    },
]

const PreviewImportedHistory = (props) => {
    const location = useLocation();
    const history = useHistory();
    const [importData, setImportData] = useState([]);

    useEffect(() => {
        if (location && location.state && location.state.importedHistory) {
            console.log('importedHistory', location.state.importedHistory);
            setImportData(location.state.importedHistory);
        }
        else {
            history.push("/track-sales");
        }
    }, [])

    const tableData = {
        columns: [
            {
                name: 'Campaign ID',
                selector: 'id',
            },
            {
                name: 'Campaign Name',
                selector: 'campaign_name',
            },
            {
                name: <div className="text-center">Sales Date</div>,
                selector: 'sale-date',
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

    }

    console.log('importedHistory', importData);
    return (
        <CustomTable data={importData} columns={tableData.columns}
            Header={() => (
                <>
                    <h3>Track Sales List</h3>
                </>
            )}
            pagination={false}
        />
    )
}

export default PreviewImportedHistory
