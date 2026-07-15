
export default Perfil;import { useState } from 'react';

function Interruptor() {
  const [ligado, setLigado] = useState(false);

  return (
    <div style={{ margin: '10px 0' }}>
      <p>O interruptor está: <strong>{ligado ? 'Ligado' : 'Desligado'}</strong></p>
      <button onClick={() => setLigado(!ligado)}>Alternar</button>
    </div>
  );
}

export default Interruptor;
