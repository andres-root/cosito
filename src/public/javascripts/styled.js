import domElements from '/javascripts/domElements.js';


const styled = {};

domElements.forEach(domElement => {
  styled[domElement] = (styles) => {
    return (content) => {
      return `
        <${domElement} style="${styles}">
          ${content}
        </${domElement}>
      `;
    };
  };
});


export default styled;
