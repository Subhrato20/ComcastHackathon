import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  // Sample data - in a real implementation, this would come from your backend
  const [responseData] = useState({
    sources: [
      {
        id: 1,
        title: "How to Build a Recommendation System",
        url: "https://stratoflow.com/recommendation-system",
        domain: "stratoflow",
        logo: "/api/placeholder/24/24" // In production, use actual logo URLs
      },
      {
        id: 2,
        title: "Recommendation System Series Part 1: Architecture",
        url: "https://towardsdatascience.com/recommendation-system-series",
        domain: "towardsdatascience",
        logo: "/api/placeholder/24/24"
      },
      {
        id: 3,
        title: "How to approach Recommendation Systems",
        url: "https://reddit.com/r/machinelearning/recommendation",
        domain: "reddit",
        logo: "/api/placeholder/24/24"
      }
    ],
    additionalSources: 4
  });

  return (
    <div className="card-container">
      <div className="sources-section">
        <div className="sources-grid">
          {responseData.sources.map(source => (
            <div key={source.id} className="source-card">
              <div className="source-header">
                <h3 className="source-title">
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </h3>
              </div>
              <div className="source-footer">
                <div className="source-logo">
                  <img src={source.logo} alt={source.domain} />
                </div>
                <span className="source-domain">{source.domain}</span>
              </div>
            </div>
          ))}
          
          {responseData.additionalSources > 0 && (
            <div className="more-sources">
              <span>+{responseData.additionalSources} sources</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;