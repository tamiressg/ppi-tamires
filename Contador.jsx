import { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div style={{ margin: '10px 0' }}>
      <p>Valor atual: <strong>{numero}</strong></p>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
    </div>
  );
}

export default Contador;