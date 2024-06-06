import '../App.css';

function Header(props) {
  return (
    <div className='flex shopping-cart'>
        <div onClick={() => props.handleShow(false)} >Shopping cart App</div>
        <div onClick={() => props.handleShow(true)}> Cart
        <sup> {props.count} </sup>
        </div>
    </div>
  );
}

export default Header;