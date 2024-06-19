import React from 'react';
import ReusableIcon from './ButtonWithIcon';


const CardContact = ({ favorite, icons }) => {
    return (
        <div className="w-64 h-72 max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10">
                <img
                    className={`mt-4 w-28 h-28 mb-3 rounded-full shadow-lg ${favorite ? 'border-4 border-c1d72d' : ''}`}
                    src=""
                    alt="Profile"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">Full name</h5>
                <span className="text-sm text-gray-500">Email@email.com</span>
                <hr className="bg-gray h-0.5 w-3/4 mt-5" />

                <div className="flex space-x-4 justify-center mt-4">
                    {icons.map((icon, index) => (
                        <ReusableIcon key={index} iconName={icon.name} color={icon.color} text={icon.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardContact;