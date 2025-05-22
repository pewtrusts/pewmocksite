import { d as debounce } from "./vendor-531aba48.js";
const initSelectionShare = () => {
  var _a, _b, _c, _d, _e, _f, _g;
  let tooltip = document.querySelector(".js-selection-share");
  let isMounted = false;
  const imgPath = ((_a = { "VITE_SITE": "frontend", "BASE_URL": "/assets/Pew", "MODE": "production", "DEV": true, "PROD": false, "SSR": false }) == null ? void 0 : _a.STORYBOOK) === "true" ? "/img" : "/assets/Pew/assets/images";
  const render = () => {
    tooltip.innerHTML = `
      <ul class="selection-share__inner">
        <a href="/" class="selection-share__link tweet" title="Share this selection on X">
          <svg class="pew-icon pew-icon--sm" xmlns="http://www.w3.org/2000/svg">
            <use aria-hidden="true" xlink:href="${imgPath}/svg-sprite.svg#twitterx"></use>
          </svg>
        </a>
        <a href="/" class="selection-share__link email" title="Share this selection by email">
          <svg class="pew-icon pew-icon--sm" xmlns="http://www.w3.org/2000/svg">
            <use aria-hidden="true" xlink:href="${imgPath}/svg-sprite.svg#email"></use>
          </svg>
        </a>
      </ul>
      <div class="selection-share__clip">
        <span class="selection-share__arrow"/>
      </div>
    `;
    document.body.appendChild(tooltip);
  };
  if (!isMounted && !tooltip) {
    tooltip = document.createElement("div");
    tooltip.classList.add("selection-share", "js-selection-share");
    tooltip.setAttribute("role", "tooltip");
    isMounted = true;
    render();
  } else {
    return;
  }
  let textSelection = "";
  const url2Share = ((_b = document.querySelector("meta[property='og:url']")) == null ? void 0 : _b.getAttribute("content")) || ((_c = document.querySelector("meta[property='og:url']")) == null ? void 0 : _c.getAttribute("value")) || window.location.href;
  const subjectSuffix = document.querySelector(
    "meta[name='selshare:subject-suffix']"
  );
  const viaTwitterAccount = ((_d = document.querySelector('meta[name="selshare:viatwitter"]')) == null ? void 0 : _d.getAttribute("content")) || ((_e = document.querySelector('meta[name="selshare:viatwitter"]')) == null ? void 0 : _e.getAttribute("value"));
  const viaTwitterAccountSansAt = viaTwitterAccount && viaTwitterAccount.replace(/@/g, "");
  const getSelectionText = (selection) => {
    let text = "";
    if (selection.rangeCount) {
      const container = document.createElement("div");
      for (let i = 0, len = selection.rangeCount; i < len; ++i) {
        container.appendChild(selection.getRangeAt(i).cloneContents());
      }
      text = container.textContent;
    }
    textSelection = text;
    return text;
  };
  const getPosition = () => {
    const supportPageOffset = window.scrollX !== void 0;
    const x = supportPageOffset ? window.scrollX : document.documentElement.scrollLeft;
    const y = supportPageOffset ? window.scrollY : document.documentElement.scrollTop;
    return { x, y };
  };
  const handleSelectionChange = () => {
    var _a2;
    const selection = window.getSelection();
    const textNode = (_a2 = selection.anchorNode) == null ? void 0 : _a2.parentElement.closest(".js-rich-text");
    if (!textNode) {
      hide();
      return;
    }
    const selectionText = getSelectionText(selection);
    if (!selection.isCollapsed && selectionText && (selectionText == null ? void 0 : selectionText.length) > 10 && selectionText.match(/ /)) {
      show(selection);
    } else {
      hide();
    }
  };
  const show = debounce((selection) => {
    const range = selection.getRangeAt(0);
    const rect = range.getClientRects()[0];
    const topOffset = rect.top - 40;
    const top = topOffset + getPosition().y;
    let left = rect.x;
    tooltip.classList.remove("enter");
    tooltip.style.display = "block";
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
    setTimeout(() => {
      tooltip.classList.add("enter");
    }, 0);
  }, 300);
  const hide = () => {
    tooltip.style.display = "none";
    tooltip.classList.remove("enter");
  };
  const truncateText = (str, n) => {
    if (!str || !str.length)
      return str;
    const tooLong = str.length > n;
    let s_ = tooLong ? str.substr(0, n - 1) : str;
    s_ = tooLong ? s_.substr(0, s_.lastIndexOf(" ")) : s_;
    return tooLong ? s_ + "..." : s_;
  };
  const shareTwitter = (e) => {
    e.preventDefault();
    const suffix = `${url2Share} via ${viaTwitterAccount}`;
    const text = `“${truncateText(
      textSelection.trim(),
      140 - (suffix.length + 2)
    )}”`;
    let url = `http://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&related=&url=${encodeURIComponent(url2Share)}`;
    if (viaTwitterAccount && text.length < 120 - 6 - viaTwitterAccount.length) {
      url += `&via=${viaTwitterAccountSansAt}`;
    }
    const w = 640, h = 440;
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2 - 100;
    window.open(
      url,
      "share_twitter",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`
    );
    hide();
  };
  const shareEmail = (e) => {
    const text = textSelection.replace(/<p[^>]*>/gi, "\n").replace(/<\/p>| {2}/gi, "").trim();
    const email = {};
    let suffix;
    if (subjectSuffix == null ? void 0 : subjectSuffix.length) {
      const suffixAttr = (subjectSuffix == null ? void 0 : subjectSuffix.getAttribute("content")) || (subjectSuffix == null ? void 0 : subjectSuffix.getAttribute("value"));
      const suffixArr = document.title.toLowerCase().split("|").map((x) => x.trim());
      if (!suffixArr.includes(suffixAttr.trim().toLowerCase())) {
        suffix = " | " + suffixAttr;
      } else {
        suffix = "";
      }
    } else {
      suffix = "";
    }
    email.subject = encodeURIComponent(
      `Quote from ${document.title} ${suffix}`
    );
    email.body = encodeURIComponent(`“${text}”`) + "%0D%0A%0D%0AFrom: " + encodeURIComponent(document.title) + "%0D%0A" + encodeURIComponent(url2Share);
    e.target.setAttribute(
      "href",
      `mailto:?subject=${email.subject}&body=${email.body}`
    );
    hide();
  };
  render();
  document.addEventListener("selectionchange", handleSelectionChange);
  (_f = tooltip.querySelector("a.tweet")) == null ? void 0 : _f.addEventListener("click", shareTwitter);
  (_g = tooltip.querySelector("a.email")) == null ? void 0 : _g.addEventListener("click", shareEmail);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hide();
    }
  });
};
initSelectionShare();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aW9uU2hhcmUuaW5pdC1kM2NjZjZmYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvanMvY29tcG9uZW50cy9TZWxlY3Rpb25TaGFyZS9TZWxlY3Rpb25TaGFyZS5pbml0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCI7XHJcblxyXG4vKipcclxuICogUG9wdXAgbWVudSB0byBzaGFyZSBvbiBYIG9yIGJ5IGVtYWlsIGFueSByaWNoIHRleHQgc2VsZWN0ZWQgb24gdGhlIHBhZ2VcclxuICovXHJcblxyXG5jb25zdCBpbml0U2VsZWN0aW9uU2hhcmUgPSAoKSA9PiB7XHJcbiAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlbGVjdGlvbi1zaGFyZVwiKTtcclxuICBsZXQgaXNNb3VudGVkID0gZmFsc2U7XHJcbiAgY29uc3QgY2VudGVyVG9vbHRpcCA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBpbWdQYXRoID1cclxuICAgIGltcG9ydC5tZXRhLmVudj8uU1RPUllCT09LID09PSBcInRydWVcIlxyXG4gICAgICA/IFwiL2ltZ1wiXHJcbiAgICAgIDogXCIvYXNzZXRzL1Bldy9hc3NldHMvaW1hZ2VzXCI7XHJcblxyXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8dWwgY2xhc3M9XCJzZWxlY3Rpb24tc2hhcmVfX2lubmVyXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cInNlbGVjdGlvbi1zaGFyZV9fbGluayB0d2VldFwiIHRpdGxlPVwiU2hhcmUgdGhpcyBzZWxlY3Rpb24gb24gWFwiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInBldy1pY29uIHBldy1pY29uLS1zbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgPHVzZSBhcmlhLWhpZGRlbj1cInRydWVcIiB4bGluazpocmVmPVwiJHtpbWdQYXRofS9zdmctc3ByaXRlLnN2ZyN0d2l0dGVyeFwiPjwvdXNlPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJzZWxlY3Rpb24tc2hhcmVfX2xpbmsgZW1haWxcIiB0aXRsZT1cIlNoYXJlIHRoaXMgc2VsZWN0aW9uIGJ5IGVtYWlsXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzPVwicGV3LWljb24gcGV3LWljb24tLXNtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICA8dXNlIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhsaW5rOmhyZWY9XCIke2ltZ1BhdGh9L3N2Zy1zcHJpdGUuc3ZnI2VtYWlsXCI+PC91c2U+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3Rpb24tc2hhcmVfX2NsaXBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdGlvbi1zaGFyZV9fYXJyb3dcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXApO1xyXG4gIH07XHJcblxyXG4gIGlmICghaXNNb3VudGVkICYmICF0b29sdGlwKSB7XHJcbiAgICB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvb2x0aXAuY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvbi1zaGFyZVwiLCBcImpzLXNlbGVjdGlvbi1zaGFyZVwiKTtcclxuICAgIHRvb2x0aXAuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInRvb2x0aXBcIik7XHJcbiAgICBpc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCB0ZXh0U2VsZWN0aW9uID0gXCJcIjtcclxuXHJcbiAgY29uc3QgdXJsMlNoYXJlID1cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwibWV0YVtwcm9wZXJ0eT0nb2c6dXJsJ11cIilcclxuICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpIHx8XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtwcm9wZXJ0eT0nb2c6dXJsJ11cIik/LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpIHx8XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHJcbiAgY29uc3Qgc3ViamVjdFN1ZmZpeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIm1ldGFbbmFtZT0nc2Vsc2hhcmU6c3ViamVjdC1zdWZmaXgnXVwiLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHZpYVR3aXR0ZXJBY2NvdW50ID1cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJzZWxzaGFyZTp2aWF0d2l0dGVyXCJdJylcclxuICAgICAgPy5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpIHx8XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwic2Vsc2hhcmU6dmlhdHdpdHRlclwiXScpXHJcbiAgICAgID8uZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcblxyXG4gIGNvbnN0IHZpYVR3aXR0ZXJBY2NvdW50U2Fuc0F0ID1cclxuICAgIHZpYVR3aXR0ZXJBY2NvdW50ICYmIHZpYVR3aXR0ZXJBY2NvdW50LnJlcGxhY2UoL0AvZywgXCJcIik7XHJcblxyXG4gIGNvbnN0IGdldFNlbGVjdGlvblRleHQgPSAoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICBsZXQgdGV4dCA9IFwiXCI7XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5yYW5nZUNvdW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzZWxlY3Rpb24ucmFuZ2VDb3VudDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGlvbi5nZXRSYW5nZUF0KGkpLmNsb25lQ29udGVudHMoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHQgPSBjb250YWluZXIudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dFNlbGVjdGlvbiA9IHRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5zY3JvbGxYICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3QgeCA9IHN1cHBvcnRQYWdlT2Zmc2V0XHJcbiAgICAgID8gd2luZG93LnNjcm9sbFhcclxuICAgICAgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuXHJcbiAgICBjb25zdCB5ID0gc3VwcG9ydFBhZ2VPZmZzZXRcclxuICAgICAgPyB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdGlvbkNoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIGNvbnN0IHRleHROb2RlID1cclxuICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGU/LnBhcmVudEVsZW1lbnQuY2xvc2VzdChcIi5qcy1yaWNoLXRleHRcIik7XHJcblxyXG4gICAgaWYgKCF0ZXh0Tm9kZSkge1xyXG4gICAgICBoaWRlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3Rpb25UZXh0ID0gZ2V0U2VsZWN0aW9uVGV4dChzZWxlY3Rpb24pO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgIXNlbGVjdGlvbi5pc0NvbGxhcHNlZCAmJlxyXG4gICAgICBzZWxlY3Rpb25UZXh0ICYmXHJcbiAgICAgIHNlbGVjdGlvblRleHQ/Lmxlbmd0aCA+IDEwICYmXHJcbiAgICAgIHNlbGVjdGlvblRleHQubWF0Y2goLyAvKVxyXG4gICAgKSB7XHJcbiAgICAgIHNob3coc2VsZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhpZGUoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93ID0gZGVib3VuY2UoKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcclxuICAgIGNvbnN0IHJlY3QgPSByYW5nZS5nZXRDbGllbnRSZWN0cygpWzBdO1xyXG4gICAgY29uc3QgdG9wT2Zmc2V0ID0gcmVjdC50b3AgLSA0MDtcclxuICAgIGNvbnN0IHRvcCA9IHRvcE9mZnNldCArIGdldFBvc2l0aW9uKCkueTtcclxuICAgIGxldCBsZWZ0ID0gcmVjdC54O1xyXG4gICAgdG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKFwiZW50ZXJcIik7XHJcblxyXG4gICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIGlmIChjZW50ZXJUb29sdGlwKSB7XHJcbiAgICAgIGxlZnQgKz0gcmVjdC53aWR0aCAvIDIgLSB0b29sdGlwLm9mZnNldFdpZHRoIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICB0b29sdGlwLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKFwiZW50ZXJcIik7XHJcbiAgICB9LCAwKTtcclxuICB9LCAzMDApO1xyXG5cclxuICBjb25zdCBoaWRlID0gKCkgPT4ge1xyXG4gICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB0b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJlbnRlclwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0cnVuY2F0ZVRleHQgPSAoc3RyLCBuKSA9PiB7XHJcbiAgICBpZiAoIXN0ciB8fCAhc3RyLmxlbmd0aCkgcmV0dXJuIHN0cjtcclxuICAgIGNvbnN0IHRvb0xvbmcgPSBzdHIubGVuZ3RoID4gbjtcclxuICAgIGxldCBzXyA9IHRvb0xvbmcgPyBzdHIuc3Vic3RyKDAsIG4gLSAxKSA6IHN0cjtcclxuICAgIHNfID0gdG9vTG9uZyA/IHNfLnN1YnN0cigwLCBzXy5sYXN0SW5kZXhPZihcIiBcIikpIDogc187XHJcbiAgICByZXR1cm4gdG9vTG9uZyA/IHNfICsgXCIuLi5cIiA6IHNfO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNoYXJlVHdpdHRlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3Qgc3VmZml4ID0gYCR7dXJsMlNoYXJlfSB2aWEgJHt2aWFUd2l0dGVyQWNjb3VudH1gO1xyXG5cclxuICAgIGNvbnN0IHRleHQgPSBg4oCcJHt0cnVuY2F0ZVRleHQoXHJcbiAgICAgIHRleHRTZWxlY3Rpb24udHJpbSgpLFxyXG4gICAgICAxNDAgLSAoc3VmZml4Lmxlbmd0aCArIDIpLFxyXG4gICAgKX3igJ1gO1xyXG5cclxuICAgIGxldCB1cmwgPSBgaHR0cDovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICB0ZXh0LFxyXG4gICAgKX0mcmVsYXRlZD0mdXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHVybDJTaGFyZSl9YDtcclxuXHJcbiAgICAvLyBXZSBvbmx5IHNob3cgdGhlIHZpYSBAdHdpdHRlcjpzaXRlIGlmIHdlIGhhdmUgZW5vdWdoIHJvb21cclxuICAgIGlmICh2aWFUd2l0dGVyQWNjb3VudCAmJiB0ZXh0Lmxlbmd0aCA8IDEyMCAtIDYgLSB2aWFUd2l0dGVyQWNjb3VudC5sZW5ndGgpIHtcclxuICAgICAgdXJsICs9IGAmdmlhPSR7dmlhVHdpdHRlckFjY291bnRTYW5zQXR9YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3ID0gNjQwLFxyXG4gICAgICBoID0gNDQwO1xyXG5cclxuICAgIGNvbnN0IGxlZnQgPSBzY3JlZW4ud2lkdGggLyAyIC0gdyAvIDI7XHJcbiAgICBjb25zdCB0b3AgPSBzY3JlZW4uaGVpZ2h0IC8gMiAtIGggLyAyIC0gMTAwO1xyXG5cclxuICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICB1cmwsXHJcbiAgICAgIFwic2hhcmVfdHdpdHRlclwiLFxyXG4gICAgICBgdG9vbGJhcj1ubywgbG9jYXRpb249bm8sIGRpcmVjdG9yaWVzPW5vLCBzdGF0dXM9bm8sIG1lbnViYXI9bm8sIHNjcm9sbGJhcnM9bm8sIHJlc2l6YWJsZT1ubywgY29weWhpc3Rvcnk9bm8sIHdpZHRoPSR7d30sIGhlaWdodD0ke2h9LCB0b3A9JHt0b3B9LCBsZWZ0PSR7bGVmdH1gLFxyXG4gICAgKTtcclxuXHJcbiAgICBoaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hhcmVFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGV4dFNlbGVjdGlvblxyXG4gICAgICAucmVwbGFjZSgvPHBbXj5dKj4vZ2ksIFwiXFxuXCIpXHJcbiAgICAgIC5yZXBsYWNlKC88XFwvcD58IHsyfS9naSwgXCJcIilcclxuICAgICAgLnRyaW0oKTtcclxuICAgIGNvbnN0IGVtYWlsID0ge307XHJcbiAgICBsZXQgc3VmZml4O1xyXG4gICAgaWYgKHN1YmplY3RTdWZmaXg/Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBzdWZmaXhBdHRyID1cclxuICAgICAgICBzdWJqZWN0U3VmZml4Py5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpIHx8XHJcbiAgICAgICAgc3ViamVjdFN1ZmZpeD8uZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcblxyXG4gICAgICBjb25zdCBzdWZmaXhBcnIgPSBkb2N1bWVudC50aXRsZVxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnNwbGl0KFwifFwiKVxyXG4gICAgICAgIC5tYXAoKHgpID0+IHgudHJpbSgpKTtcclxuXHJcbiAgICAgIGlmICghc3VmZml4QXJyLmluY2x1ZGVzKHN1ZmZpeEF0dHIudHJpbSgpLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgc3VmZml4ID0gXCIgfCBcIiArIHN1ZmZpeEF0dHI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3VmZml4ID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VmZml4ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBlbWFpbC5zdWJqZWN0ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICBgUXVvdGUgZnJvbSAke2RvY3VtZW50LnRpdGxlfSAke3N1ZmZpeH1gLFxyXG4gICAgKTtcclxuICAgIGVtYWlsLmJvZHkgPVxyXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoYOKAnCR7dGV4dH3igJ1gKSArXHJcbiAgICAgIFwiJTBEJTBBJTBEJTBBRnJvbTogXCIgK1xyXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpICtcclxuICAgICAgXCIlMEQlMEFcIiArXHJcbiAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh1cmwyU2hhcmUpO1xyXG5cclxuICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgIGBtYWlsdG86P3N1YmplY3Q9JHtlbWFpbC5zdWJqZWN0fSZib2R5PSR7ZW1haWwuYm9keX1gLFxyXG4gICAgKTtcclxuXHJcbiAgICBoaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3Rpb25jaGFuZ2VcIiwgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKTtcclxuXHJcbiAgdG9vbHRpcC5xdWVyeVNlbGVjdG9yKFwiYS50d2VldFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNoYXJlVHdpdHRlcik7XHJcbiAgdG9vbHRpcC5xdWVyeVNlbGVjdG9yKFwiYS5lbWFpbFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNoYXJlRW1haWwpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBoaWRlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5pbml0U2VsZWN0aW9uU2hhcmUoKTtcclxuIl0sIm5hbWVzIjpbIl9hIl0sIm1hcHBpbmdzIjoiO0FBTUEsTUFBTSxxQkFBcUIsTUFBTTs7QUFDL0IsTUFBSSxVQUFVLFNBQVMsY0FBYyxxQkFBcUI7QUFDMUQsTUFBSSxZQUFZO0FBR2hCLFFBQU0sWUFDSixPQUFBLGFBQUEsWUFBQSxZQUFBLGVBQUEsUUFBQSxjQUFBLE9BQUEsTUFBQSxRQUFBLE9BQUEsT0FBQSxNQUFBLE1BQUEsbUJBQWlCLGVBQWMsU0FDM0IsU0FDQTtBQUVOLFFBQU0sU0FBUyxNQUFNO0FBQ25CLFlBQVEsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQUkwQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFLUCxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTckQsYUFBUyxLQUFLLFlBQVksT0FBTztBQUFBLEVBQ3JDO0FBRUUsTUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTO0FBQzFCLGNBQVUsU0FBUyxjQUFjLEtBQUs7QUFDdEMsWUFBUSxVQUFVLElBQUksbUJBQW1CLG9CQUFvQjtBQUM3RCxZQUFRLGFBQWEsUUFBUSxTQUFTO0FBQ3RDLGdCQUFZO0FBQ1o7RUFDSixPQUFTO0FBQ0w7QUFBQSxFQUNEO0FBRUQsTUFBSSxnQkFBZ0I7QUFFcEIsUUFBTSxjQUNKLGNBQ0csY0FBYyx5QkFBeUIsTUFEMUMsbUJBRUksYUFBYSxpQkFDakIsY0FBUyxjQUFjLHlCQUF5QixNQUFoRCxtQkFBbUQsYUFBYSxhQUNoRSxPQUFPLFNBQVM7QUFFbEIsUUFBTSxnQkFBZ0IsU0FBUztBQUFBLElBQzdCO0FBQUEsRUFDSjtBQUVFLFFBQU0sc0JBQ0osY0FDRyxjQUFjLGtDQUFrQyxNQURuRCxtQkFFSSxhQUFhLGlCQUNqQixjQUNHLGNBQWMsa0NBQWtDLE1BRG5ELG1CQUVJLGFBQWE7QUFFbkIsUUFBTSwwQkFDSixxQkFBcUIsa0JBQWtCLFFBQVEsTUFBTSxFQUFFO0FBRXpELFFBQU0sbUJBQW1CLENBQUMsY0FBYztBQUN0QyxRQUFJLE9BQU87QUFFWCxRQUFJLFVBQVUsWUFBWTtBQUN4QixZQUFNLFlBQVksU0FBUyxjQUFjLEtBQUs7QUFDOUMsZUFBUyxJQUFJLEdBQUcsTUFBTSxVQUFVLFlBQVksSUFBSSxLQUFLLEVBQUUsR0FBRztBQUN4RCxrQkFBVSxZQUFZLFVBQVUsV0FBVyxDQUFDLEVBQUUsY0FBYSxDQUFFO0FBQUEsTUFDOUQ7QUFFRCxhQUFPLFVBQVU7QUFBQSxJQUNsQjtBQUVELG9CQUFnQjtBQUVoQixXQUFPO0FBQUEsRUFDWDtBQUVFLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLFVBQU0sb0JBQW9CLE9BQU8sWUFBWTtBQUU3QyxVQUFNLElBQUksb0JBQ04sT0FBTyxVQUNQLFNBQVMsZ0JBQWdCO0FBRTdCLFVBQU0sSUFBSSxvQkFDTixPQUFPLFVBQ1AsU0FBUyxnQkFBZ0I7QUFFN0IsV0FBTyxFQUFFLEdBQU0sRUFBSTtBQUFBLEVBQ3ZCO0FBRUUsUUFBTSx3QkFBd0IsTUFBTTs7QUFDbEMsVUFBTSxZQUFZLE9BQU87QUFDekIsVUFBTSxZQUNKQSxNQUFBLFVBQVUsZUFBVixnQkFBQUEsSUFBc0IsY0FBYyxRQUFRO0FBRTlDLFFBQUksQ0FBQyxVQUFVO0FBQ2I7QUFDQTtBQUFBLElBQ0Q7QUFFRCxVQUFNLGdCQUFnQixpQkFBaUIsU0FBUztBQUVoRCxRQUNFLENBQUMsVUFBVSxlQUNYLGtCQUNBLCtDQUFlLFVBQVMsTUFDeEIsY0FBYyxNQUFNLEdBQUcsR0FDdkI7QUFDQSxXQUFLLFNBQVM7QUFBQSxJQUNwQixPQUFXO0FBQ0w7SUFDRDtBQUFBLEVBQ0w7QUFFRSxRQUFNLE9BQU8sU0FBUyxDQUFDLGNBQWM7QUFDbkMsVUFBTSxRQUFRLFVBQVUsV0FBVyxDQUFDO0FBQ3BDLFVBQU0sT0FBTyxNQUFNLGVBQWdCLEVBQUMsQ0FBQztBQUNyQyxVQUFNLFlBQVksS0FBSyxNQUFNO0FBQzdCLFVBQU0sTUFBTSxZQUFZLFlBQVcsRUFBRztBQUN0QyxRQUFJLE9BQU8sS0FBSztBQUNoQixZQUFRLFVBQVUsT0FBTyxPQUFPO0FBRWhDLFlBQVEsTUFBTSxVQUFVO0FBTXhCLFlBQVEsTUFBTSxNQUFNLEdBQUcsR0FBRztBQUMxQixZQUFRLE1BQU0sT0FBTyxHQUFHLElBQUk7QUFFNUIsZUFBVyxNQUFNO0FBQ2YsY0FBUSxVQUFVLElBQUksT0FBTztBQUFBLElBQzlCLEdBQUUsQ0FBQztBQUFBLEVBQ0wsR0FBRSxHQUFHO0FBRU4sUUFBTSxPQUFPLE1BQU07QUFDakIsWUFBUSxNQUFNLFVBQVU7QUFDeEIsWUFBUSxVQUFVLE9BQU8sT0FBTztBQUFBLEVBQ3BDO0FBRUUsUUFBTSxlQUFlLENBQUMsS0FBSyxNQUFNO0FBQy9CLFFBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtBQUFRLGFBQU87QUFDaEMsVUFBTSxVQUFVLElBQUksU0FBUztBQUM3QixRQUFJLEtBQUssVUFBVSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSTtBQUMxQyxTQUFLLFVBQVUsR0FBRyxPQUFPLEdBQUcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJO0FBQ25ELFdBQU8sVUFBVSxLQUFLLFFBQVE7QUFBQSxFQUNsQztBQUVFLFFBQU0sZUFBZSxDQUFDLE1BQU07QUFDMUIsTUFBRSxlQUFjO0FBRWhCLFVBQU0sU0FBUyxHQUFHLFNBQVMsUUFBUSxpQkFBaUI7QUFFcEQsVUFBTSxPQUFPLElBQUk7QUFBQSxNQUNmLGNBQWMsS0FBTTtBQUFBLE1BQ3BCLE9BQU8sT0FBTyxTQUFTO0FBQUEsSUFDeEIsQ0FBQTtBQUVELFFBQUksTUFBTSx3Q0FBd0M7QUFBQSxNQUNoRDtBQUFBLElBQ0QsQ0FBQSxpQkFBaUIsbUJBQW1CLFNBQVMsQ0FBQztBQUcvQyxRQUFJLHFCQUFxQixLQUFLLFNBQVMsTUFBTSxJQUFJLGtCQUFrQixRQUFRO0FBQ3pFLGFBQU8sUUFBUSx1QkFBdUI7QUFBQSxJQUN2QztBQUVELFVBQU0sSUFBSSxLQUNSLElBQUk7QUFFTixVQUFNLE9BQU8sT0FBTyxRQUFRLElBQUksSUFBSTtBQUNwQyxVQUFNLE1BQU0sT0FBTyxTQUFTLElBQUksSUFBSSxJQUFJO0FBRXhDLFdBQU87QUFBQSxNQUNMO0FBQUEsTUFDQTtBQUFBLE1BQ0Esc0hBQXNILENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxVQUFVLElBQUk7QUFBQSxJQUNwSztBQUVJO0VBQ0o7QUFFRSxRQUFNLGFBQWEsQ0FBQyxNQUFNO0FBQ3hCLFVBQU0sT0FBTyxjQUNWLFFBQVEsY0FBYyxJQUFJLEVBQzFCLFFBQVEsZ0JBQWdCLEVBQUUsRUFDMUI7QUFDSCxVQUFNLFFBQVEsQ0FBQTtBQUNkLFFBQUk7QUFDSixRQUFJLCtDQUFlLFFBQVE7QUFDekIsWUFBTSxjQUNKLCtDQUFlLGFBQWEsZ0JBQzVCLCtDQUFlLGFBQWE7QUFFOUIsWUFBTSxZQUFZLFNBQVMsTUFDeEIsWUFBYSxFQUNiLE1BQU0sR0FBRyxFQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBTSxDQUFBO0FBRXRCLFVBQUksQ0FBQyxVQUFVLFNBQVMsV0FBVyxLQUFNLEVBQUMsWUFBVyxDQUFFLEdBQUc7QUFDeEQsaUJBQVMsUUFBUTtBQUFBLE1BQ3pCLE9BQWE7QUFDTCxpQkFBUztBQUFBLE1BQ1Y7QUFBQSxJQUNQLE9BQVc7QUFDTCxlQUFTO0FBQUEsSUFDVjtBQUVELFVBQU0sVUFBVTtBQUFBLE1BQ2QsY0FBYyxTQUFTLEtBQUssSUFBSSxNQUFNO0FBQUEsSUFDNUM7QUFDSSxVQUFNLE9BQ0osbUJBQW1CLElBQUksSUFBSSxHQUFHLElBQzlCLHVCQUNBLG1CQUFtQixTQUFTLEtBQUssSUFDakMsV0FDQSxtQkFBbUIsU0FBUztBQUU5QixNQUFFLE9BQU87QUFBQSxNQUNQO0FBQUEsTUFDQSxtQkFBbUIsTUFBTSxPQUFPLFNBQVMsTUFBTSxJQUFJO0FBQUEsSUFDekQ7QUFFSTtFQUNKO0FBRUU7QUFFQSxXQUFTLGlCQUFpQixtQkFBbUIscUJBQXFCO0FBRWxFLGdCQUFRLGNBQWMsU0FBUyxNQUEvQixtQkFBa0MsaUJBQWlCLFNBQVM7QUFDNUQsZ0JBQVEsY0FBYyxTQUFTLE1BQS9CLG1CQUFrQyxpQkFBaUIsU0FBUztBQUU1RCxTQUFPLGlCQUFpQixXQUFXLENBQUMsTUFBTTtBQUN4QyxRQUFJLEVBQUUsUUFBUSxVQUFVO0FBQ3RCO0lBQ0Q7QUFBQSxFQUNMLENBQUc7QUFDSDtBQUVBLG1CQUFvQjsifQ==
