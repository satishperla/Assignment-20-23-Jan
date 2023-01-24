import Accordion from 'react-bootstrap/Accordion';

function AccordionDemo({myarr}) {
  return (
    <>
    <h2>Employee Details:</h2>
    {
      myarr.map((i)=> (
        <Accordion defaultActiveKey="" key={i.id} className="mb-3">
        <Accordion.Item eventKey = {i.eventKey} >
          <Accordion.Header>{i.name}</Accordion.Header>
          <Accordion.Body>
            <ul>
            <img src={i.profile} width="20%" alt='profile'/>
              <li> Employee ID : {i.id}</li>
              <li> Employee Name: {i.name}</li>
              <li>Email :{i.email}</li>
              <li>Phone: {i.phone}</li>
              <li>Employee Address: {i.city}</li>

            </ul>
      </Accordion.Body>
        </Accordion.Item>
        </Accordion>
  
  )
  )}
</>
)
}

export default AccordionDemo;