import React, { useState, createContext } from 'react';

export const DataContext = createContext(null);
export const Color = [
    {
        color: '#AECBFA',
    },
    {
        color: '#F28B82',
    },
    {
        color: '#A7FFEB',
    }
]
const arrNotes = [
    {
        id: 1,
        title: 'Ghi chú 1',
        body: 'Nội dung ghi chú 1',
        backgroundColor: Color[0].color,
        status: 'note',
    },
    {
        id: 2,
        title: 'Ghi chú 2',
        body: 'Nội dung ghi chú 2',
        backgroundColor: Color[1].color,
        status: 'archives',
    },
    {
        id: 3,
        title: 'Ghi chú 3',
        body: 'Nội dung ghi chú 3',
        backgroundColor: Color[2].color,
        status: 'deletes',
    },
]

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    return (
        <DataContext.Provider value={{ notes, setNotes }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
