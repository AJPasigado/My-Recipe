var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My Recipe',
    // App id
    id: 'com.ajpasigado.myrecipe',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/adobo/',
        url: 'adobo.html',
      },
      {
        path: '/afritada/',
        url: 'afritada.html',
      },
      {
        path: '/bulalo/',
        url: 'bulalo.html',
      },
      {
        path: '/kinilaw/',
        url: 'kinilaw.html',
      },
      {
        path: '/sisig/',
        url: 'sisig.html',
      },
      {
        path: '/tinola/',
        url: 'tinola.html',
      },
      {
        path: '/home/',
        url: 'index.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');