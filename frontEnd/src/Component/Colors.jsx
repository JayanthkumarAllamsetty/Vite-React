import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Colors() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/unknown');
        setColors(response.data.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h2>Color List</h2>
    <ol>
      {colors.map((color) => (
        <li key={color.id} style={{ color: color.color }}>
          {color.name}
        </li>
      ))}
    </ol>
  </div>
  );
}
