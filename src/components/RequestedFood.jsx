import React from 'react';

const RequestedFood = ({ data ,index}) => {
    const { _id, FoodName, FoodImage, FoodQuantity, PickupLocation, ExpiredDateTime,RequestDateTime, FoodStatus } = data

    function formatDate(dateTimeString) {
        const dateObject = new Date(dateTimeString);
 
        const day = dateObject.getDate();
        const month = dateObject.toLocaleString('default', { month: 'short' });
        const year = dateObject.getFullYear();
        let hours = dateObject.getHours();
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
 
        return `${day} ${month} ${year} / ${hours}.${minutes} ${ampm}`;
      }
    return (
        <div>
            <div className='container mx-auto border p-10'>
                <table className=''>
                    <thead>
                        <tr className='text-center'>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Sl. No.</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Food name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Quantity</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Expiry date</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Requested date</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>FoodStatus</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Pickup Location</th>
                        </tr>
                    </thead>

                    <tbody className='text-center'>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{FoodName}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{FoodQuantity}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{formatDate(ExpiredDateTime)}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{formatDate(RequestDateTime)}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{FoodStatus}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{PickupLocation}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default RequestedFood;