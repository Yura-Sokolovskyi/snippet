const bodyNode = document.querySelector('body')


const snippetMainContainer = document.createElement('div')
const snippetControlContainer = document.createElement('div')
const snippetPageView = document.createElement('iframe')


snippetMainContainer.id = 'snippetMainContainer'

snippetMainContainer.style.cssText = `position: fixed; display:flex; align-items: center;
											left: 0; top: 0; width:100%; height: 100%; flex-direction: column; z-index: 10000;
											background-color: #2b2c3f; border-radius:5px;`

snippetPageView.setAttribute('src', 'https://dev-74941-petcare-purinattt-germany.pantheonsite.io/admin/content')

snippetMainContainer.append(snippetControlContainer)
snippetMainContainer.append(snippetPageView)

bodyNode.append(snippetMainContainer)