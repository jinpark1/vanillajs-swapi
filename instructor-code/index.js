const root = document.querySelector('#root')

async function render() {
  // makeApp().then(appContent => {
  //   root.appendChild(appContent)
  // })

  const appContent = await makeApp();
  root.appendChild(appContent);
}

window.onhashchange = render
