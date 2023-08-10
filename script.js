/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  const stream = await navigator.mediaDevices.getDisplayMedia();
  videoElement.srcObject = stream;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
  }
}

function handleError(error) {
  console.log('ooops!!!')
  console.log(error)
}

async function handleButton() {
  // Disable Button
  button.disabled = true;
  //   Start picture
  await videoElement.requestPictureInPicture();
  //   Enable Button
  button.disabled = false;
}

// onload
selectMediaStream().catch(handleError)

// Event Listener
button.addEventListener('click', handleButton);
