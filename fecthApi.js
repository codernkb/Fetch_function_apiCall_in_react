import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Optional if you want to use Axios

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Define the async function to call the API
    const fetchData = async () => {
      try {
        // Using fetch
        const response = await fetch('https://your-django-api-endpoint.com/api/data/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ key: 'value' }), // Adjust body as per API requirements
        });
        const data = await response.json();
        setTableData(data);

        // Or using Axios
        /*
        const response = await axios.post('https://your-django-api-endpoint.com/api/data/', {
          key: 'value', // Adjust payload as per API requirements
        });
        setTableData(response.data);
        */
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            {/* Adjust column headers based on your data structure */}
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              {/* Adjust keys to match your data structure */}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
