import React from 'react';

const FormComponent = () => {
   

    return (
        <section className='flex items-center justify-center'>
            <article className='bg-c1d72d py-12 px-24'>
                <form className="max-w-sm mx-auto grid place-items-center">
                    <fieldset className="mb-3">
                        <input type="text" id="first_name" className="shadow-sm bg-white bg-opacity-45 border-b border-gray-50  placeholder-black placeholder-opacity-70  w-72 h-14 p-4" placeholder="First Name" required />
                    </fieldset>
                    <fieldset className="mb-3">
                        <input type="text" id="last-name" className="shadow-sm bg-white bg-opacity-45 border-b border-gray-50  placeholder-black placeholder-opacity-70 w-72 h-14 p-4" placeholder='Last Name' required />
                    </fieldset>
                    <fieldset className="mb-3">
                        <input type="email" id="email" className="shadow-sm bg-white bg-opacity-45 border-b border-gray-50  placeholder-black placeholder-opacity-70 w-72 h-14 p-4" placeholder='Email' required />
                    </fieldset>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                        <label htmlFor="terms" className="col-start-1 col-end-3 ms-2 text-sm font-medium flex-grow">Enable like favorite</label>
                        <input type="checkbox" id="checkbox" className=" col-end-13 col-span-1 form-checkbox w-8 h-4 accent-transparent opacity-65 rounded-md flex-shrink" />
                    </div>
                    <button type="submit" className="bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 text-center">Save</button>
                </form>
            </article>
        </section>
    );
};

export default FormComponent;