import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class FAQ extends Component {
  render() {
    return (
      <>
       		<div className="breadcrumb-bar">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="breadcrumb-title">
							<h2>Faq</h2>
						</div>
					</div>
					<div className="col-auto float-right ml-auto breadcrumb-menu">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><Link to="/home">Home</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">Faq</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<section className="faq-section">
			<div className="content">
				<div className="container">
				
						<div className="faq-card">
							<div className="card">
								<div className="card-body">
									
								<Accordion defaultActiveKey="0">
  <>
    <>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
	  01. Parsnip lotus root celery?
      </Accordion.Toggle>
    </>
    <Accordion.Collapse eventKey="0">
	<><p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
										<p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p></>
    </Accordion.Collapse>
  </>
  <>
    <>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
	  02. Ad vegan excepteur butcher ?
      </Accordion.Toggle>
    </>
    <Accordion.Collapse eventKey="3">
      <>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</>
    </Accordion.Collapse>
  </>
  
  <>
    <>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
	  03. Ad vegan excepteur butcher vice lomo?
      </Accordion.Toggle>
    </>
    <Accordion.Collapse eventKey="4">
      <>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</>
    </Accordion.Collapse>
  </>

  <>
    <>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
	  04. Cupidatat skateboard dolor brunch?
      </Accordion.Toggle>
    </>
    <Accordion.Collapse eventKey="5">
      <>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.

      Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</>
    </Accordion.Collapse>
  </>
  
</Accordion>							

								</div>
							</div>
					</div>
					
				</div>
			</div>
		</section>
      </>
    );
  }
}
export default FAQ;