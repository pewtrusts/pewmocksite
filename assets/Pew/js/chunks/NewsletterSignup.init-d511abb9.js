import { r as registerXDBEvent } from "../index-generated.js";
import "./vendor-531aba48.js";
function init(el) {
  el.addEventListener("submit", (e) => handleValidation(e, el));
}
const getNewsletterValues = (options) => {
  var _a, _b;
  const newsletterValues = (_b = (_a = [...options]) == null ? void 0 : _a.map((x) => x.value)) == null ? void 0 : _b.join("|");
  return newsletterValues ? `&guid=${newsletterValues}` : "";
};
const handleValidation = (e, el) => {
  var _a, _b, _c, _d;
  e.preventDefault();
  el.classList.remove("has-error");
  const emailField = el.querySelector(".js-newsletter-signup-input input");
  const newslettersOptions = el.querySelectorAll(
    '.js-newsletter-signup-item input[type="checkbox"]:checked'
  );
  const newsletterFieldset = el.querySelector(".newsletter-signup__fieldset");
  const errorField = el.querySelector(".js-newsletter-signup-validation-error");
  const selectionErrorField = el.querySelector(
    ".js-newsletter-signup-select-validation-error"
  );
  if (selectionErrorField) {
    selectionErrorField.textContent = "";
    selectionErrorField.setAttribute("aria-hidden", true);
  }
  if (errorField) {
    errorField.textContent = "";
    errorField.setAttribute("aria-hidden", true);
  }
  const email = emailField.value;
  const regex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const isValidEmail = regex.test(email);
  if (newsletterFieldset && !(newslettersOptions == null ? void 0 : newslettersOptions.length)) {
    selectionErrorField.textContent = selectionErrorField.getAttribute("data-error");
    newsletterFieldset == null ? void 0 : newsletterFieldset.focus();
    selectionErrorField.setAttribute("aria-hidden", false);
    return false;
  }
  if (!isValidEmail) {
    emailField.setAttribute("aria-invalid", true);
    errorField.textContent = errorField.getAttribute("data-error");
    errorField.setAttribute("aria-hidden", false);
    emailField == null ? void 0 : emailField.focus();
    return false;
  } else {
    const baseURL = (_a = el.querySelector(".js-newsletter-signup-baseUrl")) == null ? void 0 : _a.value;
    const landingGUID = ((_b = el.querySelector(".js-newsletter-signup-landingguid")) == null ? void 0 : _b.value) || "";
    emailField.setAttribute("aria-invalid", false);
    const encodedEmail = window.btoa(email);
    const utmString = function(utmType) {
      if (sessionStorage.getItem(`utm_${utmType}`) !== null) {
        return `&utm_${utmType}=` + sessionStorage.getItem(`utm_${utmType}`);
      } else {
        return "";
      }
    };
    const newsletters = getNewsletterValues(newslettersOptions);
    const emailAddressPrefix = landingGUID ? "&ea=" : "?ea=";
    const postURL = baseURL + landingGUID + emailAddressPrefix + encodedEmail + utmString("source") + utmString("medium") + utmString("campaign") + utmString("content") + utmString("term") + newsletters;
    el.setAttribute("action", postURL);
    const signupPromoRoot = el.closest(".newsletter-signup-promo");
    let description = ((_c = signupPromoRoot == null ? void 0 : signupPromoRoot.querySelector(".js-signup-promo-description")) == null ? void 0 : _c.innerText.trim()) || "";
    let rendering = "";
    const globalFooter = document.querySelector(".js-global-footer");
    if (globalFooter == null ? void 0 : globalFooter.contains(emailField)) {
      rendering = "Footer Newsletter Signup";
    } else {
      rendering = ((_d = el.closest("[data-sitecore-component-name]")) == null ? void 0 : _d.dataset.sitecoreComponentName) || "(rendering not found)";
    }
    if (newslettersOptions.length === 0) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        Category: "Signup",
        Action: `Newsletter Signup - ${rendering}`,
        Label: description
      });
    } else {
      [...newslettersOptions].map((newsletter) => {
        const label = newsletter.nextElementSibling;
        if (label && label.tagName === "LABEL") {
          return label.innerText.trim();
        } else {
          return description;
        }
      }, []).forEach((label) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          Category: "Signup",
          Action: `Newsletter Signup - ${rendering}`,
          Label: label
        });
      });
    }
    const eventId = el.dataset.xdbpe;
    registerXDBEvent(eventId, rendering, landingGUID);
    setTimeout(() => {
      el.reset();
      el.setAttribute("action", "");
    }, 0);
    el.submit();
  }
};
export {
  init as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3c2xldHRlclNpZ251cC5pbml0LWQ1MTFhYmI5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9qcy9jb21wb25lbnRzL05ld3NsZXR0ZXJTaWdudXAvTmV3c2xldHRlclNpZ251cC5pbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyWERCRXZlbnQgfSBmcm9tIFwiQGNvbW1vbi94REJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoZWwpIHtcclxuICBlbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBoYW5kbGVWYWxpZGF0aW9uKGUsIGVsKSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldE5ld3NsZXR0ZXJWYWx1ZXMgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IG5ld3NsZXR0ZXJWYWx1ZXMgPSBbLi4ub3B0aW9uc10/Lm1hcCgoeCkgPT4geC52YWx1ZSk/LmpvaW4oXCJ8XCIpO1xyXG5cclxuICByZXR1cm4gbmV3c2xldHRlclZhbHVlcyA/IGAmZ3VpZD0ke25ld3NsZXR0ZXJWYWx1ZXN9YCA6IFwiXCI7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVWYWxpZGF0aW9uID0gKGUsIGVsKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWVycm9yXCIpO1xyXG5cclxuICBjb25zdCBlbWFpbEZpZWxkID0gZWwucXVlcnlTZWxlY3RvcihcIi5qcy1uZXdzbGV0dGVyLXNpZ251cC1pbnB1dCBpbnB1dFwiKTtcclxuICBjb25zdCBuZXdzbGV0dGVyc09wdGlvbnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgJy5qcy1uZXdzbGV0dGVyLXNpZ251cC1pdGVtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyxcclxuICApO1xyXG4gIGNvbnN0IG5ld3NsZXR0ZXJGaWVsZHNldCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIubmV3c2xldHRlci1zaWdudXBfX2ZpZWxkc2V0XCIpO1xyXG4gIGNvbnN0IGVycm9yRmllbGQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmpzLW5ld3NsZXR0ZXItc2lnbnVwLXZhbGlkYXRpb24tZXJyb3JcIik7XHJcbiAgY29uc3Qgc2VsZWN0aW9uRXJyb3JGaWVsZCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5qcy1uZXdzbGV0dGVyLXNpZ251cC1zZWxlY3QtdmFsaWRhdGlvbi1lcnJvclwiLFxyXG4gICk7XHJcblxyXG4gIC8vIFJlc2V0IGZvcm0gdmFsaWRhdGlvblxyXG4gIGlmIChzZWxlY3Rpb25FcnJvckZpZWxkKSB7XHJcbiAgICBzZWxlY3Rpb25FcnJvckZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIHNlbGVjdGlvbkVycm9yRmllbGQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgfVxyXG4gIGlmIChlcnJvckZpZWxkKSB7XHJcbiAgICBlcnJvckZpZWxkLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yRmllbGQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbWFpbCA9IGVtYWlsRmllbGQudmFsdWU7XHJcblxyXG4gIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uLV0pK0AoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcblxyXG4gIGNvbnN0IGlzVmFsaWRFbWFpbCA9IHJlZ2V4LnRlc3QoZW1haWwpO1xyXG5cclxuICAvLyBWYWxpZGF0ZSBuZXdzbGV0dGVyIGNoZWNrYm94XHJcbiAgaWYgKG5ld3NsZXR0ZXJGaWVsZHNldCAmJiAhbmV3c2xldHRlcnNPcHRpb25zPy5sZW5ndGgpIHtcclxuICAgIHNlbGVjdGlvbkVycm9yRmllbGQudGV4dENvbnRlbnQgPVxyXG4gICAgICBzZWxlY3Rpb25FcnJvckZpZWxkLmdldEF0dHJpYnV0ZShcImRhdGEtZXJyb3JcIik7XHJcbiAgICBuZXdzbGV0dGVyRmllbGRzZXQ/LmZvY3VzKCk7XHJcbiAgICBzZWxlY3Rpb25FcnJvckZpZWxkLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzVmFsaWRFbWFpbCkge1xyXG4gICAgZW1haWxGaWVsZC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWludmFsaWRcIiwgdHJ1ZSk7XHJcbiAgICBlcnJvckZpZWxkLnRleHRDb250ZW50ID0gZXJyb3JGaWVsZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVycm9yXCIpO1xyXG4gICAgZXJyb3JGaWVsZC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBmYWxzZSk7XHJcbiAgICBlbWFpbEZpZWxkPy5mb2N1cygpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBiYXNlVVJMID0gZWwucXVlcnlTZWxlY3RvcihcIi5qcy1uZXdzbGV0dGVyLXNpZ251cC1iYXNlVXJsXCIpPy52YWx1ZTtcclxuICAgIGNvbnN0IGxhbmRpbmdHVUlEID1cclxuICAgICAgZWwucXVlcnlTZWxlY3RvcihcIi5qcy1uZXdzbGV0dGVyLXNpZ251cC1sYW5kaW5nZ3VpZFwiKT8udmFsdWUgfHwgXCJcIjtcclxuXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZShcImFyaWEtaW52YWxpZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZW5jb2RlZEVtYWlsID0gd2luZG93LmJ0b2EoZW1haWwpO1xyXG5cclxuICAgIGNvbnN0IHV0bVN0cmluZyA9IGZ1bmN0aW9uICh1dG1UeXBlKSB7XHJcbiAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGB1dG1fJHt1dG1UeXBlfWApICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGAmdXRtXyR7dXRtVHlwZX09YCArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHV0bV8ke3V0bVR5cGV9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV3c2xldHRlcnMgPSBnZXROZXdzbGV0dGVyVmFsdWVzKG5ld3NsZXR0ZXJzT3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxBZGRyZXNzUHJlZml4ID0gbGFuZGluZ0dVSUQgPyBcIiZlYT1cIiA6IFwiP2VhPVwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW4gb3JkZXIgZm9yIHRoaXMgdG8gYnVpbGQgYSB2YWxpZCBwb3N0VVJMLCBzaW5nbGUgbmV3c2xldHRlciBzaWdudXBzXHJcbiAgICAgKiBzaG91bGQgYmUgcGFzc2VkIGEgYmFzZVVSTCB3aXRoIFwiP2d1aWQ9XCIgYXBwZW5kZWQgYW5kIG11bHRpXHJcbiAgICAgKiBuZXdzbGV0dGVyIHNpZ251cHMgc2hvdWxkIG5vdFxyXG4gICAgICovXHJcbiAgICBjb25zdCBwb3N0VVJMID1cclxuICAgICAgYmFzZVVSTCArXHJcbiAgICAgIGxhbmRpbmdHVUlEICtcclxuICAgICAgZW1haWxBZGRyZXNzUHJlZml4ICtcclxuICAgICAgZW5jb2RlZEVtYWlsICtcclxuICAgICAgdXRtU3RyaW5nKFwic291cmNlXCIpICtcclxuICAgICAgdXRtU3RyaW5nKFwibWVkaXVtXCIpICtcclxuICAgICAgdXRtU3RyaW5nKFwiY2FtcGFpZ25cIikgK1xyXG4gICAgICB1dG1TdHJpbmcoXCJjb250ZW50XCIpICtcclxuICAgICAgdXRtU3RyaW5nKFwidGVybVwiKSArXHJcbiAgICAgIG5ld3NsZXR0ZXJzO1xyXG5cclxuICAgIGVsLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBwb3N0VVJMKTtcclxuXHJcbiAgICAvLyBHVE0gRXZlbnQgVHJhY2tpbmdcclxuICAgIGNvbnN0IHNpZ251cFByb21vUm9vdCA9IGVsLmNsb3Nlc3QoXCIubmV3c2xldHRlci1zaWdudXAtcHJvbW9cIik7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPVxyXG4gICAgICBzaWdudXBQcm9tb1Jvb3RcclxuICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2lnbnVwLXByb21vLWRlc2NyaXB0aW9uXCIpXHJcbiAgICAgICAgPy5pbm5lclRleHQudHJpbSgpIHx8IFwiXCI7XHJcbiAgICBsZXQgcmVuZGVyaW5nID0gXCJcIjtcclxuICAgIGNvbnN0IGdsb2JhbEZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZ2xvYmFsLWZvb3RlclwiKTtcclxuICAgIGlmIChnbG9iYWxGb290ZXI/LmNvbnRhaW5zKGVtYWlsRmllbGQpKSB7XHJcbiAgICAgIHJlbmRlcmluZyA9IFwiRm9vdGVyIE5ld3NsZXR0ZXIgU2lnbnVwXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW5kZXJpbmcgPVxyXG4gICAgICAgIGVsLmNsb3Nlc3QoXCJbZGF0YS1zaXRlY29yZS1jb21wb25lbnQtbmFtZV1cIik/LmRhdGFzZXRcclxuICAgICAgICAgIC5zaXRlY29yZUNvbXBvbmVudE5hbWUgfHwgXCIocmVuZGVyaW5nIG5vdCBmb3VuZClcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3c2xldHRlcnNPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAvLyBzaW5nbGUgbmV3c2xldHRlciBzaWdudXBcclxuICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7XHJcbiAgICAgICAgQ2F0ZWdvcnk6IFwiU2lnbnVwXCIsXHJcbiAgICAgICAgQWN0aW9uOiBgTmV3c2xldHRlciBTaWdudXAgLSAke3JlbmRlcmluZ31gLFxyXG4gICAgICAgIExhYmVsOiBkZXNjcmlwdGlvbixcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBtdWx0aSBuZXdzbGV0dGVyIHNpZ251cFxyXG4gICAgICBbLi4ubmV3c2xldHRlcnNPcHRpb25zXVxyXG4gICAgICAgIC5tYXAoKG5ld3NsZXR0ZXIpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGxhYmVsID0gbmV3c2xldHRlci5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgICAgaWYgKGxhYmVsICYmIGxhYmVsLnRhZ05hbWUgPT09IFwiTEFCRUxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbGFiZWwuaW5uZXJUZXh0LnRyaW0oKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSlcclxuICAgICAgICAuZm9yRWFjaCgobGFiZWwpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnk6IFwiU2lnbnVwXCIsXHJcbiAgICAgICAgICAgIEFjdGlvbjogYE5ld3NsZXR0ZXIgU2lnbnVwIC0gJHtyZW5kZXJpbmd9YCxcclxuICAgICAgICAgICAgTGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8geERCIEdvYWxzXHJcbiAgICBjb25zdCBldmVudElkID0gZWwuZGF0YXNldC54ZGJwZTtcclxuICAgIHJlZ2lzdGVyWERCRXZlbnQoZXZlbnRJZCwgcmVuZGVyaW5nLCBsYW5kaW5nR1VJRCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVsLnJlc2V0KCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIlwiKTsgLy9yZW1vdmUgYWN0aW9uIGFmdGVyIHZhbGlkYXRpb24gdG8gcHJldmVudCBkdXBsaWNhdGUgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICB9LCAwKTtcclxuXHJcbiAgICBlbC5zdWJtaXQoKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVlLFNBQVMsS0FBSyxJQUFJO0FBQy9CLEtBQUcsaUJBQWlCLFVBQVUsQ0FBQyxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUM5RDtBQUVBLE1BQU0sc0JBQXNCLENBQUMsWUFBWTs7QUFDdkMsUUFBTSxvQkFBbUIsWUFBQyxHQUFHLE9BQU8sTUFBWCxtQkFBYyxJQUFJLENBQUMsTUFBTSxFQUFFLFdBQTNCLG1CQUFtQyxLQUFLO0FBRWpFLFNBQU8sbUJBQW1CLFNBQVMsZ0JBQWdCLEtBQUs7QUFDMUQ7QUFFQSxNQUFNLG1CQUFtQixDQUFDLEdBQUcsT0FBTzs7QUFDbEMsSUFBRSxlQUFjO0FBRWhCLEtBQUcsVUFBVSxPQUFPLFdBQVc7QUFFL0IsUUFBTSxhQUFhLEdBQUcsY0FBYyxtQ0FBbUM7QUFDdkUsUUFBTSxxQkFBcUIsR0FBRztBQUFBLElBQzVCO0FBQUEsRUFDSjtBQUNFLFFBQU0scUJBQXFCLEdBQUcsY0FBYyw4QkFBOEI7QUFDMUUsUUFBTSxhQUFhLEdBQUcsY0FBYyx3Q0FBd0M7QUFDNUUsUUFBTSxzQkFBc0IsR0FBRztBQUFBLElBQzdCO0FBQUEsRUFDSjtBQUdFLE1BQUkscUJBQXFCO0FBQ3ZCLHdCQUFvQixjQUFjO0FBQ2xDLHdCQUFvQixhQUFhLGVBQWUsSUFBSTtBQUFBLEVBQ3JEO0FBQ0QsTUFBSSxZQUFZO0FBQ2QsZUFBVyxjQUFjO0FBQ3pCLGVBQVcsYUFBYSxlQUFlLElBQUk7QUFBQSxFQUM1QztBQUVELFFBQU0sUUFBUSxXQUFXO0FBRXpCLFFBQU0sUUFBUTtBQUVkLFFBQU0sZUFBZSxNQUFNLEtBQUssS0FBSztBQUdyQyxNQUFJLHNCQUFzQixFQUFDLHlEQUFvQixTQUFRO0FBQ3JELHdCQUFvQixjQUNsQixvQkFBb0IsYUFBYSxZQUFZO0FBQy9DLDZEQUFvQjtB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
