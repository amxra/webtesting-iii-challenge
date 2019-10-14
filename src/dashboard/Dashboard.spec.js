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


describe('Dashborad Component', () => {
    test('macthes the snapshot', () =>{
        expect(wrapper.container).toMatchSnapshot();
    })

})