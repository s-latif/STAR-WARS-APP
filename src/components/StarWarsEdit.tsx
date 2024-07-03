import React, { useState } from 'react';

const StarWarsEdit: React.FC<{ item: any, onSave: (item: any) => void }> = ({ item, onSave }) => {
  const [name, setName] = useState(item.name);
  const [role, setRole] = useState(item.role);

  const handleSave = () => {
    onSave({ ...item, name, role });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={role} onChange={(e) => setRole(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default StarWarsEdit;