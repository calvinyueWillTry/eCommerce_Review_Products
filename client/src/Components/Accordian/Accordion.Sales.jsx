import Accordion from 'react-bootstrap/Accordion';
import "../../public/CSS/shop.css"
import DropdownProductReview from '../Accord.Modal';

function SalesAccordianTemplate(props) {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
        <p className='review-text'>{props.oldPrice}</p>
        <p></p>
          <p className='review-text'>{props.discount} </p>
          <p></p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <DropdownProductReview className='review-text' productName={props.header}/>
      </Accordion.Item>
    </Accordion>
  );//{/** defined from Accord.Model line 14 */}
};

export default SalesAccordianTemplate;
//exported to Sales