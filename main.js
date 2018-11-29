fetch('https://api.unsplash.com/photos/random/?query=coding&client_id=2df3be50a74f12aa1e31fd6ad25cf7de276d378aded78e0cb892f767a2e1dbfa')
.then(response => (response.json()))
.then(response => {
    console.log(response);
    const imgEl = document.querySelector('img');
    imgEl.setAttribute("src", response.urls.regular);
});