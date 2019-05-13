const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  },

  // Stretch
  updateCta: {
    h1: 'Hey There, We are Started now',
    btn: 'You\'ve Started'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// selectors
let nav = document.querySelector('nav');
let ctaTextElements = document.querySelector('.cta-text').children;
let ctaImage = document.querySelector('#cta-img');
let topContentElemements = document.querySelector('.top-content').children;
let bottomContentElements = document.querySelector('.bottom-content').children;
let contactElements = document.querySelector('.contact').children;
let footerPtag = document.querySelector('footer p');


// NavBar
nav.children[0].textContent = siteContent['nav']['nav-item-1'];
nav.children[1].textContent = siteContent['nav']['nav-item-2'];
nav.children[2].textContent = siteContent['nav']['nav-item-3'];
nav.children[3].textContent = siteContent['nav']['nav-item-4'];
nav.children[4].textContent = siteContent['nav']['nav-item-5'];
nav.children[5].textContent = siteContent['nav']['nav-item-6'];

// appendChild() items to nav
const blogElement = document.createElement('a');
blogElement.textContent = 'Blog';
blogElement.setAttribute('href', '#');
nav.appendChild(blogElement);

// Prepend() items to nav
const homeElement = document.createElement('a');
homeElement.textContent = 'Home';
homeElement.setAttribute('href', '#');
nav.prepend(homeElement);

// change navigation text color to green
Array.from(nav.children).forEach(element => {
  element.setAttribute('style', 'color:green')
})

// cta-text div
ctaTextElements[0].textContent = siteContent['cta']['h1'];
ctaTextElements[1].textContent = siteContent['cta']['button'];

// cta image
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// top content
topContentElemements[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContentElemements[0].children[1].textContent = siteContent['main-content']['features-content'];

topContentElemements[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContentElemements[1].children[1].textContent = siteContent['main-content']['about-content'];

// middle image
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// bottom content
bottomContentElements[0].children[0].textContent = siteContent['main-content']['services-h4'];
bottomContentElements[0].children[1].textContent = siteContent['main-content']['services-content'];

bottomContentElements[1].children[0].textContent = siteContent['main-content']['product-h4'];
bottomContentElements[1].children[1].textContent = siteContent['main-content']['product-content'];

bottomContentElements[2].children[0].textContent = siteContent['main-content']['vision-h4'];
bottomContentElements[2].children[1].textContent = siteContent['main-content']['vision-content'];

// contact
contactElements[0].textContent = siteContent['contact']['contact-h4'];
contactElements[1].textContent = siteContent['contact']['address'];
contactElements[2].textContent = siteContent['contact']['phone'];
contactElements[3].textContent = siteContent['contact']['email'];

// footer
footerPtag.textContent = siteContent['footer']['copyright'];

// Stretch: Implement Event
let getStartedBtn = document.querySelector('.cta-text button')
// add event listener
let status = false;
getStartedBtn.addEventListener('click', () => {
  if (status) {
    ctaTextElements[0].textContent = siteContent['cta']['h1'];
    ctaTextElements[1].textContent = siteContent['cta']['button'];
  } else {
    ctaTextElements[0].textContent = siteContent['updateCta']['h1'];
    ctaTextElements[1].textContent = siteContent['updateCta']['btn'];
  }
  status = !status;
})