import React from 'react'

const Offline = () => {
    //refresh
    const refreshFunc=()=>{
        window.location.reload()
    }
    return (
        <div className='fs-4 fw-bold bg-dark w-100 position-absolute d-flex align-items-center justify-contents-center' style={{height:'100vh',zIndex:111}}>
        <div className='w-fit mx-auto'>
            <p className='text-danger mt-5'>You are offline</p>
            <button className='bg-warning rounded-2 fs-5 border-0' onClick={refreshFunc}>refresh</button>
        </div>
        </div>
    )
}

export default Offline
