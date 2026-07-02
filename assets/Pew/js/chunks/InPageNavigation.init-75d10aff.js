import { N as NavMenu } from "../index-generated.js";
import { p as purify } from "./vendor-531aba48.js";
function focusTrap(el) {
  if (!el)
    return;
  const focusableElements = el.querySelectorAll(
    'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];
  const handleKeyEvent = (event) => {
    if (event.key === "Escape") {
      unBindEvents();
    }
    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  };
  const bindEvents = () => {
    document.addEventListener("keydown", handleKeyEvent);
  };
  const unBindEvents = () => {
    document.removeEventListener("keydown", handleKeyEvent);
  };
  return {
    set: bindEvents,
    remove: unBindEvents
  };
}
function init(el) {
  initInPageNavigation(el);
}
const initInPageNavigation = (el) => {
  var _a;
  const navigationEl = el.querySelector(".js-in-page-navigation-nav");
  const sectionsEl = el.querySelector(".js-in-page-navigation-sections");
  const sectionsListEl = el.querySelector(
    ".js-in-page-navigation-sections-list"
  );
  const activeTextEl = el.querySelector(".js-in-page-navigation-active-text");
  const downloadsEl = el.querySelector(".js-in-page-navigation-downloads");
  const closeEl = el.querySelector(".js-in-page-navigation-close");
  const VISIBLE_CLASS = "in-page-navigation--visible";
  const BODY_CLASS = "has-navigation-open";
  let isVisible = false;
  let isDisabled = false;
  const headers = (_a = [
    ...document.querySelectorAll(".js-rich-text > h2:not(.no_nav)")
  ]) == null ? void 0 : _a.filter((x) => {
    x = x.textContent.replace(/\s+/g, "");
    return x || x !== "";
  });
  const getUpdatedHeaderHeight = () => {
    var _a2;
    return parseInt(
      (_a2 = document.documentElement) == null ? void 0 : _a2.style.getPropertyValue(
        "--global-header-height"
      )
    );
  };
  if (!(headers == null ? void 0 : headers.length) && !downloadsEl) {
    isDisabled = true;
    navigationEl == null ? void 0 : navigationEl.classList.add("in-page-navigation__nav--disabled");
  }
  const focusTrapController = focusTrap(navigationEl);
  const fixedOffset = el.getBoundingClientRect().top + window.scrollY - getUpdatedHeaderHeight();
  const { closeMenu } = NavMenu({
    menuButton: ".js-in-page-navigation-btn",
    menuContainer: ".js-in-page-navigation-menu",
    openClass: "in-page-navigation--open",
    parent: navigationEl,
    isDialog: true,
    isDisabled,
    onOpen: () => {
      document.body.classList.add(BODY_CLASS);
      document.documentElement.style.overflowX = "visible";
      if (focusTrapController) {
        focusTrapController.set();
      }
    },
    onClose: () => {
      document.body.classList.remove(BODY_CLASS);
      document.documentElement.style.overflowX = "hidden";
      if (focusTrapController) {
        focusTrapController.remove();
      }
    }
  }) ?? {};
  const calcNavOffset = () => {
    const globalHeaderHeight = getUpdatedHeaderHeight();
    const navigationHeight = el == null ? void 0 : el.clientHeight;
    return globalHeaderHeight + navigationHeight;
  };
  const toggleVisibility = (visible) => {
    isVisible = visible;
    el.classList.toggle(VISIBLE_CLASS, visible);
  };
  const checkScrollPosition = () => {
    toggleVisibility(window.scrollY >= fixedOffset);
  };
  const handleScroll = () => {
    checkScrollPosition();
    const navOffset = calcNavOffset();
    const scrolledHeaders = [];
    [
      ...sectionsListEl.querySelectorAll(
        ".js-in-page-navigation-sections-link"
      )
    ].forEach((el2) => el2.classList.remove("active"));
    [...headers].forEach((el2) => {
      if (navOffset - el2.getBoundingClientRect().top >= -20 && el2.offsetHeight > 0) {
        scrolledHeaders.push(el2);
      }
    });
    if (scrolledHeaders == null ? void 0 : scrolledHeaders.length) {
      if (Math.round(window.scrollY) + window.innerHeight === document.body.offsetHeight) {
        const lastHeader = headers[(headers == null ? void 0 : headers.length) - 1];
        setActiveHeader(lastHeader);
      } else {
        const activeHeader = scrolledHeaders == null ? void 0 : scrolledHeaders.reduce((a, b) => {
          return Math.max(
            a.getBoundingClientRect().top,
            b.getBoundingClientRect().top
          ) === a.getBoundingClientRect().top ? a : b;
        });
        setActiveHeader(activeHeader);
      }
    }
  };
  const setActiveHeader = (el2) => {
    const id = el2.id;
    const activeHeaderLink = sectionsListEl == null ? void 0 : sectionsListEl.querySelector(`[href='#${id}']`);
    activeHeaderLink.classList.add("active");
    if (activeTextEl) {
      activeTextEl.textContent = activeHeaderLink.textContent;
    }
  };
  const slugify = (text) => {
    if (!text)
      return;
    return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "").substring(0, 30);
  };
  const handleNavigateSection = (e) => {
    var _a2;
    e.preventDefault();
    const navOffset = calcNavOffset();
    const targetId = (_a2 = e.target.getAttribute("href")) == null ? void 0 : _a2.substring(1);
    const targetElement = document.querySelector(`[id="${targetId}"]`);
    closeMenu(false);
    targetElement == null ? void 0 : targetElement.focus();
    window.scrollTo({
      top: targetElement.getBoundingClientRect().top + window.scrollY - navOffset - 10,
      behavior: "smooth"
    });
    setActiveHeader(targetElement);
  };
  const buildLocalNav = () => {
    var _a2;
    if (!(headers == null ? void 0 : headers.length)) {
      sectionsEl.style.display = "none";
    }
    (_a2 = [...headers]) == null ? void 0 : _a2.forEach((header, index) => {
      let headerText = header.textContent;
      header.setAttribute("tabindex", "-1");
      if ((header == null ? void 0 : header.hasAttribute("data-short-text")) && (header == null ? void 0 : header.getAttribute("data-short-text")) !== "-SHORTTEXT-") {
        headerText = header == null ? void 0 : header.getAttribute("data-short-text");
      }
      const headerSlug = slugify(headerText);
      const headerAnchorId = (header == null ? void 0 : header.getAttribute("id")) ?? headerSlug;
      const listItem = document.createElement("li");
      const listItemAnchor = document.createElement("a");
      listItemAnchor.classList.add(
        "in-page-navigation__sections-link",
        "js-in-page-navigation-sections-link",
        "text-body-sm",
        "link-without-underline"
      );
      listItemAnchor.innerHTML = purify.sanitize(headerText);
      listItemAnchor.setAttribute("href", `#${headerAnchorId}`);
      listItemAnchor.addEventListener("click", handleNavigateSection);
      listItem.appendChild(listItemAnchor);
      sectionsListEl == null ? void 0 : sectionsListEl.appendChild(listItem);
      if (!header.hasAttribute("id")) {
        header.setAttribute("id", headerAnchorId);
      }
      if (index === 0)
        setActiveHeader(header);
    });
  };
  const bindEvents = () => {
    checkScrollPosition();
    const globalHeaderHeight = getUpdatedHeaderHeight();
    window.addEventListener("scroll", handleScroll);
    closeEl == null ? void 0 : closeEl.addEventListener("click", closeMenu);
    el.addEventListener("focusin", () => {
      if (!isVisible && el.getBoundingClientRect().top !== globalHeaderHeight) {
        setTimeout(
          () => window.scrollTo({
            top: el.getBoundingClientRect().top - globalHeaderHeight + 50,
            behavior: "smooth"
          }),
          300
        );
      }
    });
    const resizeObserver = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty(
        "--in-page-navigation-height",
        `${entry.target.clientHeight}px`
      );
    });
    resizeObserver.observe(el);
  };
  bindEvents();
  !isDisabled && buildLocalNav();
};
export {
  init as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5QYWdlTmF2aWdhdGlvbi5pbml0LTc1ZDEwYWZmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9qcy9jb21tb24vZm9jdXNUcmFwLmpzIiwiLi4vLi4vLi4vZnJvbnRlbmQvanMvY29tcG9uZW50cy9JblBhZ2VOYXZpZ2F0aW9uL0luUGFnZU5hdmlnYXRpb24uaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWwpIHtcclxuICBpZiAoIWVsKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gZWwucXVlcnlTZWxlY3RvckFsbChcclxuICAgICdhW2hyZWZdLCBidXR0b24sIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBkZXRhaWxzLFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XHJcbiAgY29uc3QgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdW5CaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xyXG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmluZEV2ZW50cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleUV2ZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1bkJpbmRFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlFdmVudCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldDogYmluZEV2ZW50cyxcclxuICAgIHJlbW92ZTogdW5CaW5kRXZlbnRzLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IGZvY3VzVHJhcCBmcm9tIFwiQGNvbW1vbi9mb2N1c1RyYXBcIjtcclxuaW1wb3J0IE5hdk1lbnUgZnJvbSBcIkBjb21tb24vTmF2TWVudVwiO1xyXG5cclxuaW1wb3J0IERPTVB1cmlmeSBmcm9tIFwiZG9tcHVyaWZ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KGVsKSB7XHJcbiAgaW5pdEluUGFnZU5hdmlnYXRpb24oZWwpO1xyXG59XHJcblxyXG5jb25zdCBpbml0SW5QYWdlTmF2aWdhdGlvbiA9IChlbCkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRpb25FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuanMtaW4tcGFnZS1uYXZpZ2F0aW9uLW5hdlwiKTtcclxuICBjb25zdCBzZWN0aW9uc0VsID0gZWwucXVlcnlTZWxlY3RvcihcIi5qcy1pbi1wYWdlLW5hdmlnYXRpb24tc2VjdGlvbnNcIik7XHJcbiAgY29uc3Qgc2VjdGlvbnNMaXN0RWwgPSBlbC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuanMtaW4tcGFnZS1uYXZpZ2F0aW9uLXNlY3Rpb25zLWxpc3RcIixcclxuICApO1xyXG4gIGNvbnN0IGFjdGl2ZVRleHRFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIuanMtaW4tcGFnZS1uYXZpZ2F0aW9uLWFjdGl2ZS10ZXh0XCIpO1xyXG4gIGNvbnN0IGRvd25sb2Fkc0VsID0gZWwucXVlcnlTZWxlY3RvcihcIi5qcy1pbi1wYWdlLW5hdmlnYXRpb24tZG93bmxvYWRzXCIpO1xyXG4gIGNvbnN0IGNsb3NlRWwgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLmpzLWluLXBhZ2UtbmF2aWdhdGlvbi1jbG9zZVwiKTtcclxuXHJcbiAgY29uc3QgVklTSUJMRV9DTEFTUyA9IFwiaW4tcGFnZS1uYXZpZ2F0aW9uLS12aXNpYmxlXCI7XHJcbiAgY29uc3QgQk9EWV9DTEFTUyA9IFwiaGFzLW5hdmlnYXRpb24tb3BlblwiO1xyXG5cclxuICBsZXQgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgbGV0IGlzRGlzYWJsZWQgPSBmYWxzZTsgLy8gV2hlbiB0aGVyZSBhcmUgbm8gc2VjdGlvbnMgb3IgZG93bmxvYWRzLCBkaXNhYmxlIG5hdiBkcm9wZG93blxyXG5cclxuICBjb25zdCBoZWFkZXJzID0gW1xyXG4gICAgLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1yaWNoLXRleHQgPiBoMjpub3QoLm5vX25hdilcIiksXHJcbiAgXT8uZmlsdGVyKCh4KSA9PiB7XHJcbiAgICAvLyBGaWx0ZXIgb3V0IGVtcHR5IGhlYWRlcnNcclxuICAgIHggPSB4LnRleHRDb250ZW50LnJlcGxhY2UoL1xccysvZywgXCJcIik7XHJcbiAgICByZXR1cm4geCB8fCB4ICE9PSBcIlwiO1xyXG4gIH0pO1xyXG5cclxuICAvLyBIZWlnaHQgb2YgaGVhZGVyIG1heSBjaGFuZ2UgZHVlIHRvIFNraXAgTGluaywgQWxlcnQgQmFubmVycywgZXRjLlxyXG4gIGNvbnN0IGdldFVwZGF0ZWRIZWFkZXJIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudD8uc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcclxuICAgICAgICBcIi0tZ2xvYmFsLWhlYWRlci1oZWlnaHRcIixcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gSWYgbm8gbG9jYWwgbmF2IGFuZCBkb3dubG9hZHMgc2VjdGlvbiwgaGlkZSBjb21wb25lbnRcclxuICBpZiAoIWhlYWRlcnM/Lmxlbmd0aCAmJiAhZG93bmxvYWRzRWwpIHtcclxuICAgIGlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgbmF2aWdhdGlvbkVsPy5jbGFzc0xpc3QuYWRkKFwiaW4tcGFnZS1uYXZpZ2F0aW9uX19uYXYtLWRpc2FibGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBmb2N1cyB0cmFwXHJcbiAgY29uc3QgZm9jdXNUcmFwQ29udHJvbGxlciA9IGZvY3VzVHJhcChuYXZpZ2F0aW9uRWwpO1xyXG5cclxuICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgY2hhbmdlcyBkZXBlbmRpbmcgb24gdXNlcidzIHNjcm9sbCBwb3NpdGlvbiwgc28gYWRkaW5nIHdpbmRvdy5zY3JvbGxZIHdpbGwgYWNjb3VudCBmb3IgdGhhdCBwb3NpdGlvblxyXG4gIGNvbnN0IGZpeGVkT2Zmc2V0ID1cclxuICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZIC0gZ2V0VXBkYXRlZEhlYWRlckhlaWdodCgpO1xyXG5cclxuICBjb25zdCB7IGNsb3NlTWVudSB9ID1cclxuICAgIE5hdk1lbnUoe1xyXG4gICAgICBtZW51QnV0dG9uOiBcIi5qcy1pbi1wYWdlLW5hdmlnYXRpb24tYnRuXCIsXHJcbiAgICAgIG1lbnVDb250YWluZXI6IFwiLmpzLWluLXBhZ2UtbmF2aWdhdGlvbi1tZW51XCIsXHJcbiAgICAgIG9wZW5DbGFzczogXCJpbi1wYWdlLW5hdmlnYXRpb24tLW9wZW5cIixcclxuICAgICAgcGFyZW50OiBuYXZpZ2F0aW9uRWwsXHJcbiAgICAgIGlzRGlhbG9nOiB0cnVlLFxyXG4gICAgICBpc0Rpc2FibGVkLFxyXG4gICAgICBvbk9wZW46ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQk9EWV9DTEFTUyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WCA9IFwidmlzaWJsZVwiO1xyXG5cclxuICAgICAgICBpZiAoZm9jdXNUcmFwQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgZm9jdXNUcmFwQ29udHJvbGxlci5zZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2xvc2U6ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQk9EWV9DTEFTUyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WCA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgICAgIGlmIChmb2N1c1RyYXBDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICBmb2N1c1RyYXBDb250cm9sbGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pID8/IHt9O1xyXG5cclxuICBjb25zdCBjYWxjTmF2T2Zmc2V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2xvYmFsSGVhZGVySGVpZ2h0ID0gZ2V0VXBkYXRlZEhlYWRlckhlaWdodCgpO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbkhlaWdodCA9IGVsPy5jbGllbnRIZWlnaHQ7XHJcbiAgICByZXR1cm4gZ2xvYmFsSGVhZGVySGVpZ2h0ICsgbmF2aWdhdGlvbkhlaWdodDtcclxuICB9O1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IGNhbiBiZSB0b2dnbGVkIHZpYSBzY3JvbGwgb3IgZm9jdXNcclxuICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKHZpc2libGUpID0+IHtcclxuICAgIGlzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFZJU0lCTEVfQ0xBU1MsIHZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIC8vIE5hdiBpbml0aWFsIHN0YXRlIGlzIGhpZGRlbiB1bnRpbCB1c2VyIHNjcm9sbHMgdG8gaXRcclxuICBjb25zdCBjaGVja1Njcm9sbFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coeyBzY3JvbGxZOiB3aW5kb3cuc2Nyb2xsWSwgZml4ZWRPZmZzZXQgfSk7XHJcbiAgICB0b2dnbGVWaXNpYmlsaXR5KHdpbmRvdy5zY3JvbGxZID49IGZpeGVkT2Zmc2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiBjb21wb25lbnQgc2hvdWxkIGJlIHZpc2libGUgYmFzZWQgb24gc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICBjaGVja1Njcm9sbFBvc2l0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgbmF2T2Zmc2V0ID0gY2FsY05hdk9mZnNldCgpO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbGVkSGVhZGVycyA9IFtdO1xyXG5cclxuICAgIFtcclxuICAgICAgLi4uc2VjdGlvbnNMaXN0RWwucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIi5qcy1pbi1wYWdlLW5hdmlnYXRpb24tc2VjdGlvbnMtbGlua1wiLFxyXG4gICAgICApLFxyXG4gICAgXS5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XHJcblxyXG4gICAgLy8gT25seSBjaGVjayB2aXNpYmxlIGVsZW1lbnRzXHJcbiAgICBbLi4uaGVhZGVyc10uZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG5hdk9mZnNldCAtIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+PSAtMjAgJiZcclxuICAgICAgICBlbC5vZmZzZXRIZWlnaHQgPiAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNjcm9sbGVkSGVhZGVycy5wdXNoKGVsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNjcm9sbGVkSGVhZGVycz8ubGVuZ3RoKSB7XHJcbiAgICAgIC8vIElmIHVzZXIgaGFzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20sIHNlbGVjdCB0aGUgbGFzdCBoZWFkZXIgbm8gbWF0dGVyIHdoYXRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIE1hdGgucm91bmQod2luZG93LnNjcm9sbFkpICsgd2luZG93LmlubmVySGVpZ2h0ID09PVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IGxhc3RIZWFkZXIgPSBoZWFkZXJzW2hlYWRlcnM/Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHNldEFjdGl2ZUhlYWRlcihsYXN0SGVhZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVIZWFkZXIgPSBzY3JvbGxlZEhlYWRlcnM/LnJlZHVjZSgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KFxyXG4gICAgICAgICAgICBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcclxuICAgICAgICAgICAgYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXHJcbiAgICAgICAgICApID09PSBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG4gICAgICAgICAgICA/IGFcclxuICAgICAgICAgICAgOiBiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVIZWFkZXIoYWN0aXZlSGVhZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEFjdGl2ZUhlYWRlciA9IChlbCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBlbC5pZDtcclxuICAgIGNvbnN0IGFjdGl2ZUhlYWRlckxpbmsgPSBzZWN0aW9uc0xpc3RFbD8ucXVlcnlTZWxlY3RvcihgW2hyZWY9JyMke2lkfSddYCk7XHJcblxyXG4gICAgYWN0aXZlSGVhZGVyTGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGlmIChhY3RpdmVUZXh0RWwpIHtcclxuICAgICAgYWN0aXZlVGV4dEVsLnRleHRDb250ZW50ID0gYWN0aXZlSGVhZGVyTGluay50ZXh0Q29udGVudDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzbHVnaWZ5ID0gKHRleHQpID0+IHtcclxuICAgIGlmICghdGV4dCkgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiB0ZXh0XHJcbiAgICAgIC50b1N0cmluZygpXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKSAvLyBSZXBsYWNlIHNwYWNlcyB3aXRoIC1cclxuICAgICAgLnJlcGxhY2UoL1teXFx3LV0rL2csIFwiXCIpIC8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcnNcclxuICAgICAgLnJlcGxhY2UoLy0tKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cclxuICAgICAgLnJlcGxhY2UoL14tKy8sIFwiXCIpIC8vIFRyaW0gLSBmcm9tIHN0YXJ0IG9mIHRleHRcclxuICAgICAgLnJlcGxhY2UoLy0rJC8sIFwiXCIpIC8vIFRyaW0gLSBmcm9tIGVuZCBvZiB0ZXh0XHJcbiAgICAgIC5zdWJzdHJpbmcoMCwgMzApOyAvLyBvbmx5IHJldHVybiAzMCBjaGFycyBpbiBjYXNlIGEgaGVhZGVyIGlzIGV4dHJhIGxvbmdcclxuICB9O1xyXG5cclxuICAvLyBXaGVuIHVzZXIgY2xpY2tzIG9uIGFuY2hvciBsaW5rIGluIGRpYWxvZ1xyXG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlU2VjdGlvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmF2T2Zmc2V0ID0gY2FsY05hdk9mZnNldCgpO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKT8uc3Vic3RyaW5nKDEpO1xyXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7dGFyZ2V0SWR9XCJdYCk7XHJcblxyXG4gICAgY2xvc2VNZW51KGZhbHNlKTtcclxuXHJcbiAgICB0YXJnZXRFbGVtZW50Py5mb2N1cygpO1xyXG5cclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgIHRvcDpcclxuICAgICAgICB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFkgLVxyXG4gICAgICAgIG5hdk9mZnNldCAtXHJcbiAgICAgICAgMTAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0QWN0aXZlSGVhZGVyKHRhcmdldEVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJ1aWxkTG9jYWxOYXYgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWhlYWRlcnM/Lmxlbmd0aCkge1xyXG4gICAgICBzZWN0aW9uc0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBbLi4uaGVhZGVyc10/LmZvckVhY2goKGhlYWRlciwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IGhlYWRlclRleHQgPSBoZWFkZXIudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuXHJcbiAgICAgIC8vIFVzZSBzaG9ydCB0ZXh0IGlmIGF2YWlsYWJsZVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaGVhZGVyPy5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNob3J0LXRleHRcIikgJiZcclxuICAgICAgICBoZWFkZXI/LmdldEF0dHJpYnV0ZShcImRhdGEtc2hvcnQtdGV4dFwiKSAhPT0gXCItU0hPUlRURVhULVwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGhlYWRlclRleHQgPSBoZWFkZXI/LmdldEF0dHJpYnV0ZShcImRhdGEtc2hvcnQtdGV4dFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2l2ZSBlYWNoIHRhZyBhbiBJRCBzbyB3ZSBjYW4gZmF1eC1hbmNob3IgbGluayB0byBpdFxyXG4gICAgICBjb25zdCBoZWFkZXJTbHVnID0gc2x1Z2lmeShoZWFkZXJUZXh0KTtcclxuICAgICAgY29uc3QgaGVhZGVyQW5jaG9ySWQgPSBoZWFkZXI/LmdldEF0dHJpYnV0ZShcImlkXCIpID8/IGhlYWRlclNsdWc7XHJcblxyXG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgY29uc3QgbGlzdEl0ZW1BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgbGlzdEl0ZW1BbmNob3IuY2xhc3NMaXN0LmFkZChcclxuICAgICAgICBcImluLXBhZ2UtbmF2aWdhdGlvbl9fc2VjdGlvbnMtbGlua1wiLFxyXG4gICAgICAgIFwianMtaW4tcGFnZS1uYXZpZ2F0aW9uLXNlY3Rpb25zLWxpbmtcIixcclxuICAgICAgICBcInRleHQtYm9keS1zbVwiLFxyXG4gICAgICAgIFwibGluay13aXRob3V0LXVuZGVybGluZVwiLFxyXG4gICAgICApO1xyXG4gICAgICBsaXN0SXRlbUFuY2hvci5pbm5lckhUTUwgPSBET01QdXJpZnkuc2FuaXRpemUoaGVhZGVyVGV4dCk7XHJcbiAgICAgIGxpc3RJdGVtQW5jaG9yLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke2hlYWRlckFuY2hvcklkfWApO1xyXG4gICAgICBsaXN0SXRlbUFuY2hvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmF2aWdhdGVTZWN0aW9uKTtcclxuXHJcbiAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtQW5jaG9yKTtcclxuICAgICAgc2VjdGlvbnNMaXN0RWw/LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuXHJcbiAgICAgIGlmICghaGVhZGVyLmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XHJcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGhlYWRlckFuY2hvcklkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGluZGV4ID09PSAwKSBzZXRBY3RpdmVIZWFkZXIoaGVhZGVyKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJpbmRFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBjaGVja1Njcm9sbFBvc2l0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgZ2xvYmFsSGVhZGVySGVpZ2h0ID0gZ2V0VXBkYXRlZEhlYWRlckhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBjbG9zZUVsPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KTtcclxuXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCAoKSA9PiB7XHJcbiAgICAgIC8vIElmIHVzZXIgZm9jdXNlcyB0byB0aGUgY29tcG9uZW50IGFuZCBpdCdzIG5vdCBhdCB0aGUgdG9wLCBzY3JvbGwgdG8gaXRcclxuICAgICAgaWYgKCFpc1Zpc2libGUgJiYgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICE9PSBnbG9iYWxIZWFkZXJIZWlnaHQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgKCkgPT5cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICB0b3A6IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGdsb2JhbEhlYWRlckhlaWdodCArIDUwLFxyXG4gICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIDMwMCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoW2VudHJ5XSkgPT4ge1xyXG4gICAgICAvLyBTZXQgdGhlIHZhbHVlIG9mIGEgQ1NTIHZhcmlhYmxlXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcclxuICAgICAgICBcIi0taW4tcGFnZS1uYXZpZ2F0aW9uLWhlaWdodFwiLFxyXG4gICAgICAgIGAke2VudHJ5LnRhcmdldC5jbGllbnRIZWlnaHR9cHhgLFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XHJcbiAgfTtcclxuXHJcbiAgYmluZEV2ZW50cygpO1xyXG5cclxuICAhaXNEaXNhYmxlZCAmJiBidWlsZExvY2FsTmF2KCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJfYSIsImVsIiwiRE9NUHVyaWZ5Il0sIm1hcHBpbmdzIjoiOztBQUFlLFNBQVEsVUFBRSxJQUFJO0FBQzNCLE1BQUksQ0FBQztBQUFJO0FBRVQsUUFBTSxvQkFBb0IsR0FBRztBQUFBLElBQzNCO0FBQUEsRUFDSjtBQUVFLFFBQU0sd0JBQXdCLGtCQUFrQixDQUFDO0FBQ2pELFFBQU0sdUJBQXVCLGtCQUFrQixrQkFBa0IsU0FBUyxDQUFDO0FBRTNFLFFBQU0saUJBQWlC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
