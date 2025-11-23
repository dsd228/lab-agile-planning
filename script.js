const nodes = document.querySelectorAll('.node');

nodes.forEach(node => {
  node.addEventListener('click', () => {
    toggleNode(node);
  });
});

function toggleNode(node){
  const isOpen = node.classList.contains('open');
  if(isOpen){
    node.classList.remove('open');
  } else {
    node.classList.add('open');
    // Abrir nodos conectados
    const connections = node.dataset.connections?.split(',');
    if(connections){
      connections.forEach(id=>{
        const connectedNode = document.querySelector(`.node[data-id="${id}"]`);
        if(connectedNode && !connectedNode.classList.contains('open')){
          connectedNode.classList.add('open');
        }
      });
    }
  }
}
