const bodyNode = document.querySelector('body')


const snippetMainContainer = document.createElement('div')
const snippetControlContainer = document.createElement('div')
const snippetPageView = document.createElement('iframe')




snippetPageView.setAttribute('src', 'https://dev-74941-petcare-purinattt-germany.pantheonsite.io/admin/content')

snippetMainContainer.append(snippetControlContainer)
snippetMainContainer.append(snippetPageView)

bodyNode.append(snippetMainContainer)