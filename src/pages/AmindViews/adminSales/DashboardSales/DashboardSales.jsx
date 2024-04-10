import './DashboardSales.css'

function DashboardSales({ totalSneakersSales, totalClothesSales, totalSales }) {
    return (
      <>
        <div className="dashboard-sales">
          <div className='dashboard'>
            Dashboard
          </div>
          <div className='info-types-sales'>
            <div className='sales-sneakers'>
              <h1>Ventas totales sneakers</h1>
              <p>$2000{totalSneakersSales}</p>
            </div>
            <div className='sales-clothes'>
              <h1>Ventas totales Ropa</h1>
              <p>$2000{totalClothesSales}</p>
            </div>
          </div>
          <hr className='line'/>
          <div className='sales-total'>
            <h1>Venta total</h1>
            <p>$3000{totalSales}</p>
          </div>
        </div>
      </>
    );
  }
   
   export default DashboardSales;