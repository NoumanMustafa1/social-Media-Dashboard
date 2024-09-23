import FacebookChart from './FacebookChart';
import InstagramChart from './InstagramChart';
import YouTubeChart from './YoutubeChart'; 
import TwitterChart from './TwitterChart';
import TikTokChart from './TikTokChart';
import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import ExportButton from './ExportButton';
import './Dashboard.css'; 

const Dashboard = () => {
  const keywordData = [
    { keyword: 'Facebook', impressions: 1200, clicks: 300, ctr: '25%' },
    { keyword: 'Instagram', impressions: 900, clicks: 250, ctr: '27.8%' },
    { keyword: 'YouTube', impressions: 800, clicks: 200, ctr: '25%' },
    { keyword: 'Twitter', impressions: 700, clicks: 180, ctr: '25.7%' },
    { keyword: 'TikTok', impressions: 600, clicks: 150, ctr: '25%' },
  ];

  return (
    <Container fluid style={{ marginTop: '2rem', marginLeft: '250px', maxWidth: 'calc(100% - 250px)', backgroundColor: '#121212', color: '#ffffff', padding: '20px', borderRadius: '8px' }}>
      <h4 className="neon-text">Overview</h4>
      <div className="d-flex justify-content-end mb-3">
        <ExportButton />
      </div>
      <Row className="mb-4">
        <Col xs={12} md={4} className="mb-4">
          <div className="chart-container"><FacebookChart /></div>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <div className="chart-container"><InstagramChart /></div>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <div className="chart-container"><YouTubeChart /></div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} md={4} className="mb-4">
          <div className="chart-container"><TwitterChart /></div>
        </Col>
        <Col xs={12} md={4} className="mb-4">
          <div className="chart-container"><TikTokChart /></div>
        </Col>
      </Row>
      <h5 className="neon-text">Keyword Performance</h5>
      <Table striped bordered hover variant="dark" className="neon-table">
        <thead>
          <tr>
            <th>Keyword</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>CTR</th>
          </tr>
        </thead>
        <tbody>
          {keywordData.map((data, index) => (
            <tr key={index}>
              <td>{data.keyword}</td>
              <td>{data.impressions}</td>
              <td>{data.clicks}</td>
              <td>{data.ctr}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
