import './App.css';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function News() {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://192.168.1.6:3001/')
      .then(response => response.json())
      .then(data => setNewsList(data))
      .catch(error => {
        console.error('Error: ', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error loading news.</div>;
  }

  return (
    <>
      <section className='articles'>
      {newsList.map(news => {
        // Create a variable to hold the formatted date
        const formattedDate = new Date(news.Published).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        return (
          <>
              <Card bg="dark" border="light" text="white" style={{ width: '18rem', height: '240px', display: 'flex', justifyContent: 'center' }}>
                <Card.Header>
                  <Card.Title>{news.Author} &bull; {formattedDate}</Card.Title>  
                </Card.Header>
                <Card.Body style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start', flexDirection: 'column' }}>
                  <Card.Text>
                    {news.Content}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Title>Title: {news.Title}</Card.Title>
                  <span className='categoryTag'>{news.CategoryTags}</span>
                </Card.Footer>
              </Card>
          </>
        );
      })}
      </section>
    </>
  );
}

export default News;