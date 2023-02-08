console.log("LOADING GUEST!");
window.addEventListener('error', (error) => {
  console.log(error);
});
throw new Error('@@@ testing error from guest');
