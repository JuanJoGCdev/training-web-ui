import React from 'react'
import ContactList from '../components/ContactList';
import ContactFavorite from '../components/ContactFavorite';


const OverviewPage = ({ loading, error }) => {

    if (loading) {
        return <div>Cargando...</div>;
      }
    
      if (error) {
        return <div>Error al cargar los contactos</div>;
      }
    

    return (
        <>
            <div className='m-10 flex items-center space-x-4'>
                <h1 className='text-xl'>Favorites</h1>
                <hr className=' h-0.5 flex-grow border-0 rounded bg-c1d72d' />
            </div>  <section>
                <ContactFavorite />
            </section>

            <div className='m-10 flex items-center space-x-4'>
                <h1 className='text-xl'>Contacts</h1>
                <hr className=' h-0.5 flex-grow border-0 rounded bg-c1d72d' />
            </div>

            <section>
                <ContactList />
            </section>
        </>

    )
}

export default OverviewPage