import React, { useState } from 'react';
import './Tabs.css';
 
const TABS = ['Overview', 'Work', 'Cost', 'Division'];
 
const ROOM = {
  name: 'Arora Room, Room No. 101',
  icon: '🍽️',
  description: 'Near Cooler',
};
 
const IMAGES = [
  {
    details: 'Unit 12, Level 3, Bristol Hub',
    image: '/images/floorplan1.png',
  },
  {
    details: 'Wing B, Dock 6, Close to Inventory Control',
    image: '/images/map1.png',
  },
];
 
export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);
 
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            {TABS.map((tab, idx) => (
              <li
                key={tab}
                className={activeTab === idx ? 'active' : ''}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {activeTab === 0 && (
        <section className="location-space">
          <h2>
            Location & space <span className="count">4</span>
            <button className="add-btn">+ Add</button>
          </h2>
          <div className="room-details">
            <h3>{ROOM.name} <span>{ROOM.icon}</span></h3>
            <p>{ROOM.description}</p>
          </div>
          <div className="image-container">
            <span
              className="arrow"
              onClick={() => setImageIdx((i) => Math.max(i - 1, 0))}
              style={{ opacity: imageIdx === 0 ? 0.4 : 1 }}
            >⬅️</span>
            <div className="image-box">
              <img
                src={IMAGES[imageIdx].image}
                alt={IMAGES[imageIdx].details}
                className="slide-image"
              />
              <p>{IMAGES[imageIdx].details}</p>
            </div>
            <span
              className="arrow"
              onClick={() => setImageIdx((i) => Math.min(i + 1, IMAGES.length - 1))}
              style={{ opacity: imageIdx === IMAGES.length - 1 ? 0.4 : 1 }}
            >➡️</span>
          </div>
        </section>
      )}
      {activeTab !== 0 && (
        <section className="tab-placeholder">
          {TABS[activeTab]} content goes here.
        </section>
      )}
    </div>
  );
};