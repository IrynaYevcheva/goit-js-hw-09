import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),s="feedback-form-state";document.addEventListener("DOMContentLoaded",m);e.addEventListener("input",l);e.addEventListener("submit",i);let o={};function l(t){const a=e.email.value.trim(),n=e.message.value.trim();o={email:a,message:n},localStorage.setItem(s,JSON.stringify(o))}function m(){const t=localStorage.getItem(s);if(t){const{email:a,message:n}=JSON.parse(t);e.email.value=a,e.message.value=n}}function i(t){t.preventDefault(),e.email.value===""||e.message.value===""?alert("All form fields must be filled in"):(e.reset(),localStorage.removeItem("feedback-form-state"),console.log(o))}
//# sourceMappingURL=commonHelpers2.js.map