import styled from '/javascripts/styled.js';


const Title = styled.h4`
  color: purple;
  font-family: system-ui;
`;

const render = (component, container) => {
  container.innerHTML = component;
};

render(Title('Holi Arapaui!'), window.container);
