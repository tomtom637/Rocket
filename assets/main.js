const app = document.getElementById('app');
let addedWord = '';

const renderHtml = () => {
  app.innerHTML = /*html*/ `
    <div class="container" style="cursor:pointer;background:#444;padding:1.2rem;">
      <p style="font-size:1.2rem;">Hello from the front end JavaScript<span style="color:#eec40b">${addedWord}</span></p>
    </div>
  `;
};

const handleClick = () => {
  addedWord += addedWord.length > 5 ? ' and again' : ' again';
  renderHtml();
};

app.addEventListener('click', handleClick);

renderHtml();
