import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContractList() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetch('/api/contracts')
      .then((res) => res.json())
      .then((data) => setContracts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Saved Contracts</h1>
      <Link to="/editor">
        <button>Create New Contract</button>
      </Link>
      <ul>
        {contracts.map((contract) => (
          <li key={contract._id}>{contract.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContractList;
