import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Home from './index';

it('renders learn react link', async () => {
    let list=[]
    const handler = jest.fn((e)=>{
        list = [{url:'testurl'}]
    });

    const {rerender} = render(<Home handler={handler} gifList={list}/>);
    const input = screen.getByTestId('input-search')
    fireEvent.change(input,{target:{value:'test'}})

    rerender(<Home handler={handler} gifList={list}/>)
    const img = screen.getAllByTestId('img-item')
    expect(img.length).toBe(1)
    expect(handler).toBeCalledTimes(1)
});

// it('renders learn img link', () => {
//     render(<Home handler={handler} gifList={}/>);
//     const handler = jest.fn();
// });
