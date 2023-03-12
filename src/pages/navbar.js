import React, { useState,useEffect } from 'react';
import { Button, Form, Container, Header,Table,Image } from 'semantic-ui-react';
import axios from 'axios';


function App() {
	// const [name, setName] = useState('');
	// const [position, setposition] = useState('');
	// const [linkidin, setlinkidin] = useState('');
	// const [instagram, setinstagram] = useState('');
	// const [github, setgithub] = useState('');
	// const [image, setimage] = useState('');
const [teamData, setteamData] = useState([])
const [refresh, setrefresh] = useState([])
	// const handleSubmit = (e) => {
	// 	e.preventDefault();

		// const objt = { name, position, linkidin,instagram,github,image };

		// axios
		// 	.post(
		// 		'https://sheet.best/api/sheets/52b2c089-87d3-4b1d-9498-0f51eb8a835f',
		// 		objt
		// 	)
		// 	.then((response) => {
		// 		setrefresh(response);
		// 	});
            
            
	// };
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/52b2c089-87d3-4b1d-9498-0f51eb8a835f')
        .then((incomingData)=>{
          setteamData(incomingData.data);
        })

      
      }, [refresh])


	return (
		<Container fluid className="container bg-site text-accent">
			{/* <Header as="h2">React google sheet</Header>
			<Form className="form">
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>position</label>
					<input
						placeholder="Enter your position"
						onChange={(e) => setposition(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>linkidin</label>
					<input
						placeholder="Enter your linkidin"
						onChange={(e) => setlinkidin(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>instagram</label>
					<input
						placeholder="Enter your instagram"
						onChange={(e) => setinstagram(e.target.value)}
					/>
				</Form.Field>
                <Form.Field>
					<label>image</label>
					<input
						fileupload="Enter your instagram"
						onChange={(e) => setimage(e.target.value)}
					/>
				</Form.Field>
                <Form.Field>
					<label>github</label>
					<input
						placeholder="Enter your github"
						onChange={(e) => setgithub(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form> */}
          
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Employee</Table.HeaderCell>
        <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {teamData.map((data)=>{
            return(
                <div>
                  <div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={data.img} />
				<p className="text-xl font-semibold leading-tight">{data.name}</p>
				<p className="dark:text-gray-400">{data.position}</p>
			</div>
<Table.Row>
        <Table.Cell>
          <Header as='h4' >
            <Image src={data.img} rounded size='mini' />
            <Header.Content>
              {data.name}
              <Header.Subheader>{data.position}</Header.Subheader>
              <Header.Subheader>{data.LinkedIn}</Header.Subheader>
              <Header.Subheader>{data.Instagram}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{data.GitHub}</Table.Cell>
      </Table.Row>
                </div>
            )
        })}
      
      {/* <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row> */}
    </Table.Body>
  </Table>


		</Container>
	);
}

export default App;
