import {Button, Stack} from 'react-bootstrap';
export default function ChidComponent({increment,decrement}){
    return(
        <>
          
          <div className="pb-5">
          <Stack  gap={3} className='mt-5 m-5' >
           <Button variant="success" onClick={increment} size='lg'>+</Button>{' '}
           <Button variant="danger" onClick={decrement} size='lg'>-</Button>
           </Stack>
           </div>
          
        </>
    );
}