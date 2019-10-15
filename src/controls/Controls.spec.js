// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../dashboard/Dashboard';


afterEach(rtl.cleanup);

let wrapper;


beforeEach(() =>{
    wrapper = rtl.render(<Dashboard/>)
});


describe('Controls Component', () => {
    test('matches the snapshot', () =>{
        expect(wrapper.container).toMatchSnapshot();
    })

    test('the closed toggle button is disabled if the gate is locked',()=>{
        rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));

        expect(wrapper.queryByText(/open gate/i)).toBeDisabled();
    })

    test('the locked toggle button is disabled if the gate is open',()=>{
        expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
    })
})






