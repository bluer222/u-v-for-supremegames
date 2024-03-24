"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Please wait, registering service worker";
}

setTimeout(() => {
  register();
}, 500);

async function register(){
    try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
}
