// src/App.js
import React, { useState, useCallback } from 'react';
// import ReactFlow, { ReactFlowProvider, addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
import './App.css'; // Para estilizar los nodos

import Material from './components/Material'; // Tu componente adicional

// Definición de los nodos
// const initialNodes = [
//   { id: '1', data: { label: 'MATG1045\nCálculo de una Variable' }, position: { x: 50, y: 50 } },
//   { id: '2', data: { label: 'FISG1033\nAnálisis y Resolución de Problemas' }, position: { x: 200, y: 50 } },
//   { id: '3', data: { label: 'GEOG1041\nMineralogía' }, position: { x: 350, y: 50 } },
//   { id: '4', data: { label: 'GEOG1033\nGeología General' }, position: { x: 500, y: 50 } },
//   { id: '5', data: { label: 'IDIG1008\nInglés III' }, position: { x: 650, y: 50 } },
//   { id: '6', data: { label: 'FISG1005\nFísica: Mecánica' }, position: { x: 200, y: 150 } },
//   { id: '7', data: { label: 'QUIG1032\nQuímica General' }, position: { x: 200, y: 250 } },
//   { id: '8', data: { label: 'GEOG1042\nMineralogía Óptica' }, position: { x: 350, y: 150 } },
//   { id: '9', data: { label: 'GEOG1044\nPaleontología Aplicada' }, position: { x: 500, y: 150 } },
//   // Añadir más nodos según sea necesario
// ];

// // Definición de los enlaces entre nodos
// const initialEdges = [
//   { id: 'e1-2', source: '1', target: '2' },
//   { id: 'e2-3', source: '2', target: '3' },
//   { id: 'e3-4', source: '3', target: '4' },
//   { id: 'e4-5', source: '4', target: '5' },
//   { id: 'e1-6', source: '1', target: '6' },
//   { id: 'e2-7', source: '2', target: '7' },
//   { id: 'e2-8', source: '2', target: '8' },
//   { id: 'e3-9', source: '3', target: '9' },
//   // Añadir más enlaces según sea necesario
// ];

 const App = () => {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const onNodesChange = useCallback(
//     (changes) => {
//       setNodes((prevNodes) =>
//         changes.map((change) =>
//           change.type === 'add' ? change.node : prevNodes.find((n) => n.id === change.id)
//         )
//       );
//     },
//     [setNodes]
//   );
  
//   const onEdgesChange = useCallback(
//     (changes) => {
//       setEdges((prevEdges) =>
//         changes.map((change) =>
//           change.type === 'add' ? change.edge : prevEdges.find((e) => e.id === change.id)
//         )
//       );
//     },
//     [setEdges]
//   );
  
//   const onConnect = useCallback(
//     (connection) => setEdges((eds) => addEdge(connection, eds)),
//     [setEdges]
//   );

  return (
    <div className="App">
      <Material />
      {/* <div style={{ height: '100vh', width: '100%', background: '#f0f0f0', padding: '20px' }}>
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            style={{ background: '#f0f0f0' }}
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div> */}
    </div>
  );
};

export default App;
