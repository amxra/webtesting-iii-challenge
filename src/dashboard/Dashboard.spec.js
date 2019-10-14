// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
// import { isMainThread } from 'worker_threads';
// import { wrap } from 'module';


afterEach(rtl.cleanup);

let wrapper;


beforeEach(() =>{
    wrapper = rtl.render(<Dashboard/>)
})


describe('Dashboard Component', () => {
    test('macthes the snapshot', () =>{
        expect(wrapper.container).toMatchSnapshot();
    })

    test('shows control and display', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument()
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument()
        expect(wrapper.queryByText(/open gate/i)).not.toBeInTheDocument()
        expect(wrapper.queryByText(/unlock gate/i)).not.toBeInTheDocument()
       
    })

})

