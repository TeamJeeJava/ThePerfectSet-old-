import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Accordion, Card, Image, Row } from 'react-bootstrap';
import { IoMdArrowBack } from 'react-icons/Io';
import { VscSettings } from 'react-icons/Vsc';

// query database and display artists from there
import fansearch from '../FaveArtComponent/fansearch.jpeg';
import artistData from '../FaveArtComponent/artist-test-data.js';

const ArtistSearch = () => {
  // const [searchResults, setSearchResults] = useState(artistData);
  const [input, setInput] = useState('');

  const handleSearch = (searchInput) => {
    searchInput.length > 0
      ? setInput(searchInput)
      : setInput('');
  };

	const handleFocus = (event) => {
    event.preventDefault();
    const { target } = event;
    target.setSelectionRange(0, target.value.length);
  };


  const fetchArtistData = () => {
    // TODO: rewrite to fetch from DB
    // input.length ?
    // setSearchResults()
  };

  return (
    <Container>
      <Row className='justify-content-between container-fluid'>
				{/* <Link to='/app' component={App}> */}
				<IoMdArrowBack style={{margin:'.5vh', fontSize: '3vh', color: 'white'}}/>
				{/* </Link> */}
				<VscSettings style={{margin:'.5vh', fontSize: '3vh', color: 'white'}}/>
			</Row>
      <Row>
				<div className='container-fluid'>
        <Image src={fansearch} width={'100%'} height={'auto'}></Image>
					<div className="input-group-prepend">
						<input type="text"
							className="form-control"
							placeholder="Search for Artists"
							aria-label="Search for Artists"
							onChange={event => handleSearch(event.target.value)}
							onFocus={handleFocus}>
						</input>
					</div>
				</div>
      </Row>
			{input.length
				? artistData.filter(art => {
					if (art.name.toLowerCase().includes(input.toLowerCase())) {
						return art;
					}
				})
				.map((artist, key) => (
					<Row>
						<div className='container-fluid'>
							<Accordion>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button}
										variant='link'
										eventKey='0'>
											{artist.name}
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey='0'>
										<Card.Body>
											<p>{artist.bio}</p>
											<h4>Tours</h4>
											<ul className='list-group'>
											{artist.tour.map(loc => (
												<li><a href={loc.url} target='_blank'>{loc.event}</a></li>
											))}
											</ul>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</div>
					</Row>
			)) : artistData.map((artist, key) => (
				<Row>
				<div className='container-fluid'>
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									{artist.name}
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey='0'>
								<Card.Body>
									<p>{artist.bio}</p>
									<h4>Tours</h4>
									<ul className='list-group'>
									{artist.tour.map(loc => (
										<li><a href={loc.url} target='_blank'>{loc.event}</a></li>
									))}
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</div>
			</Row>
			))}
		</Container>
  );
}

export default ArtistSearch;