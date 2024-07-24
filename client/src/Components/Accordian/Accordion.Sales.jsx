import Accordion from 'react-bootstrap/Accordion';

import DropdownProductReview from '../Accord.Modal';

function SalesAccordianTemplate(props) {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
        {props.oldPrice}
        <p></p>
          {props.discount} 
          <p></p>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <DropdownProductReview productName={props.header}/>
      </Accordion.Item>
    </Accordion>
  );//{/** defined from Accord.Model line 14 */}
};

export default SalesAccordianTemplate;
//exported to Sales