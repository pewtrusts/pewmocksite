import { d as debounce, p as purify } from "./chunks/vendor-531aba48.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/assets/Pew/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const createInit = async (selector, name, modules, importOnly) => {
  const selectors = [...document.querySelectorAll(selector)];
  if (selectors.length <= 0)
    return;
  modules[`../${name}`]().then((module) => {
    if (importOnly) {
      return;
    }
    const { default: initialize } = module;
    selectors.forEach((element, i) => {
      initialize(element, i);
    });
  });
};
const dynamicRenderer = (c = []) => {
  const components = [...c];
  const modules = /* @__PURE__ */ Object.assign({ "../common/clickableCard.init.js": () => __vitePreload(() => import("./chunks/clickableCard.init-39b3fe4d.js"), true ? [] : void 0), "../common/scrollIntoView.init.js": () => __vitePreload(() => import("./chunks/scrollIntoView.init-c1354229.js"), true ? [] : void 0), "../common/tabs.init.js": () => __vitePreload(() => import("./chunks/tabs.init-963304c6.js"), true ? [] : void 0), "../components/AnimatedHero/AnimatedHero.init.js": () => __vitePreload(() => import("./chunks/AnimatedHero.init-2338596c.js"), true ? [] : void 0), "../components/CodeEmbedDropdown/CodeEmbedDropdown.init.js": () => __vitePreload(() => import("./chunks/CodeEmbedDropdown.init-4bc169e1.js"), true ? ["js/chunks/CodeEmbedDropdown.init-4bc169e1.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/DetailsAccordion/DetailsAccordion.init.js": () => __vitePreload(() => import("./chunks/DetailsAccordion.init-50422ca2.js"), true ? ["js/chunks/DetailsAccordion.init-50422ca2.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/DetailsElement/DetailsElement.init.js": () => __vitePreload(() => import("./chunks/DetailsElement.init-032bf1e4.js"), true ? [] : void 0), "../components/DialogElement/DialogElement.init.js": () => __vitePreload(() => import("./chunks/DialogElement.init-89d9cfca.js"), true ? [] : void 0), "../components/Dropdown/Dropdown.init.js": () => __vitePreload(() => import("./chunks/Dropdown.init-aee4cc5c.js"), true ? ["js/chunks/Dropdown.init-aee4cc5c.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/DynamicContentListing/DynamicContentListing.render.jsx": () => __vitePreload(() => import("./chunks/DynamicContentListing.render-8b227dc5.js"), true ? ["js/chunks/DynamicContentListing.render-8b227dc5.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/useClickableCard-5aaa4317.js","js/chunks/index-64a296f6.js","js/chunks/Icon-40ff6fe8.js","js/chunks/useClickAway-cff34f5c.js","js/chunks/Button-4da14266.js","js/chunks/clickableCard.init-39b3fe4d.js","js/chunks/PromoCard-6f96e3c6.js","js/chunks/Link-31d5e1ac.js","js/chunks/Skeleton-70d6546f.js"] : void 0), "../components/FactSlider/FactSlider.init.js": () => __vitePreload(() => import("./chunks/FactSlider.init-c1bc8488.js"), true ? ["js/chunks/FactSlider.init-c1bc8488.js","js/chunks/a11y-e0517932.js"] : void 0), "../components/FlipBanner/FlipBanner.init.js": () => __vitePreload(() => import("./chunks/FlipBanner.init-44ba5fcc.js"), true ? [] : void 0), "../components/FlipTile/FlipTile.init.js": () => __vitePreload(() => import("./chunks/FlipTile.init-67ea4fdc.js"), true ? [] : void 0), "../components/Form/Select/Select.render.jsx": () => __vitePreload(() => import("./chunks/Select.render-977827fc.js"), true ? ["js/chunks/Select.render-977827fc.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/SelectApp-9009debe.js","js/chunks/reactSelectStyles-f9629dbe.js"] : void 0), "../components/GlobalHeader/GlobalHeader.init.js": () => __vitePreload(() => Promise.resolve().then(() => GlobalHeader_init), true ? void 0 : void 0), "../components/GlobalHeader/SearchMenu/QuickSearch/QuickSearch.init.js": () => __vitePreload(() => Promise.resolve().then(() => QuickSearch_init), true ? void 0 : void 0), "../components/InPageNavigation/InPageNavigation.init.js": () => __vitePreload(() => import("./chunks/InPageNavigation.init-75d10aff.js"), true ? ["js/chunks/InPageNavigation.init-75d10aff.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/InterstitialPopup/InterstitialPopup.init.js": () => __vitePreload(() => import("./chunks/InterstitialPopup.init-378d2744.js"), true ? ["js/chunks/InterstitialPopup.init-378d2744.js","js/chunks/DialogElement.init-89d9cfca.js"] : void 0), "../components/LanguageSelector/LanguageSelector.init.js": () => __vitePreload(() => import("./chunks/LanguageSelector.init-dd47a39c.js"), true ? ["js/chunks/LanguageSelector.init-dd47a39c.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/LinkNavigation/LinkNavigation.init.js": () => __vitePreload(() => import("./chunks/LinkNavigation.init-53c05e7d.js"), true ? ["js/chunks/LinkNavigation.init-53c05e7d.js","js/chunks/debounce-8ca6b7e5.js"] : void 0), "../components/MapTool/MapTool.render.jsx": () => __vitePreload(() => import("./chunks/MapTool.render-f72d2406.js"), true ? ["js/chunks/MapTool.render-f72d2406.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/cleanCreateRoot-b44e97d0.js","js/chunks/reactSelectStyles-f9629dbe.js","js/chunks/index-64a296f6.js","js/chunks/Button-4da14266.js","js/chunks/Icon-40ff6fe8.js","js/chunks/useClickAway-cff34f5c.js","js/chunks/v4-67bd7654.js"] : void 0), "../components/MediaGallery/MediaGallery.init.js": () => __vitePreload(() => import("./chunks/MediaGallery.init-1d067ece.js"), true ? ["js/chunks/MediaGallery.init-1d067ece.js","js/chunks/a11y-e0517932.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/MultipleFlipTileContainer/MultipleFlipTileContainer.init.js": () => __vitePreload(() => import("./chunks/MultipleFlipTileContainer.init-fecf4a56.js"), true ? ["js/chunks/MultipleFlipTileContainer.init-fecf4a56.js","js/chunks/a11y-e0517932.js"] : void 0), "../components/NewsletterSignup/NewsletterSignup.init.js": () => __vitePreload(() => import("./chunks/NewsletterSignup.init-d511abb9.js"), true ? ["js/chunks/NewsletterSignup.init-d511abb9.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/PageHeader/PageHeader.init.js": () => __vitePreload(() => import("./chunks/PageHeader.init-e17f8b45.js"), true ? [] : void 0), "../components/PageMetadata/PageMetadata.init.js": () => __vitePreload(() => import("./chunks/PageMetadata.init-20bae91b.js"), true ? ["js/chunks/PageMetadata.init-20bae91b.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/PeopleListing/PeopleListing.render.jsx": () => __vitePreload(() => import("./chunks/PeopleListing.render-ffd311cc.js"), true ? ["js/chunks/PeopleListing.render-ffd311cc.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/useClickableCard-5aaa4317.js","js/chunks/index-64a296f6.js","js/chunks/Icon-40ff6fe8.js","js/chunks/useClickAway-cff34f5c.js","js/chunks/Button-4da14266.js","js/chunks/clickableCard.init-39b3fe4d.js","js/chunks/Link-31d5e1ac.js"] : void 0), "../components/ProductNavigation/ProductNavigation.init.js": () => __vitePreload(() => import("./chunks/ProductNavigation.init-30926540.js"), true ? ["js/chunks/ProductNavigation.init-30926540.js","js/chunks/a11y-e0517932.js"] : void 0), "../components/RichText/RichTextField.init.js": () => __vitePreload(() => import("./chunks/RichTextField.init-68dbc02f.js"), true ? ["js/chunks/RichTextField.init-68dbc02f.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/ScholarDirectory/ScholarDirectory.render.jsx": () => __vitePreload(() => import("./chunks/ScholarDirectory.render-43917517.js"), true ? ["js/chunks/ScholarDirectory.render-43917517.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/index-64a296f6.js","js/chunks/SelectApp-9009debe.js","js/chunks/reactSelectStyles-f9629dbe.js","js/chunks/Skeleton-70d6546f.js"] : void 0), "../components/ScholarSearchResults/ScholarSearchResults.render.jsx": () => __vitePreload(() => import("./chunks/ScholarSearchResults.render-8411f88e.js"), true ? ["js/chunks/ScholarSearchResults.render-8411f88e.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/index-64a296f6.js","js/chunks/Link-31d5e1ac.js","js/chunks/Icon-40ff6fe8.js"] : void 0), "../components/Search/Search.render.jsx": () => __vitePreload(() => import("./chunks/Search.render-eb106300.js"), true ? ["js/chunks/Search.render-eb106300.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/useClickableCard-5aaa4317.js","js/chunks/index-64a296f6.js","js/chunks/Icon-40ff6fe8.js","js/chunks/useClickAway-cff34f5c.js","js/chunks/Button-4da14266.js","js/chunks/clickableCard.init-39b3fe4d.js","js/chunks/PromoCard-6f96e3c6.js","js/chunks/Link-31d5e1ac.js","js/chunks/Skeleton-70d6546f.js"] : void 0), "../components/SectionNavigation/NavigationApp/SectionNav.render.jsx": () => __vitePreload(() => import("./chunks/SectionNav.render-feb6cdb8.js"), true ? ["js/chunks/SectionNav.render-feb6cdb8.js","js/chunks/index-bc763688.js","js/chunks/vendor-531aba48.js","js/chunks/cleanCreateRoot-b44e97d0.js","js/chunks/index-64a296f6.js","js/chunks/useClickAway-cff34f5c.js","js/chunks/Link-31d5e1ac.js","js/chunks/Icon-40ff6fe8.js"] : void 0), "../components/SectionNavigation/SectionNavigation.init.js": () => __vitePreload(() => import("./chunks/SectionNavigation.init-1c3a95e0.js"), true ? ["js/chunks/SectionNavigation.init-1c3a95e0.js","js/chunks/debounce-8ca6b7e5.js"] : void 0), "../components/SelectionShare/SelectionShare.init.js": () => __vitePreload(() => import("./chunks/SelectionShare.init-d3ccf6fb.js"), true ? ["js/chunks/SelectionShare.init-d3ccf6fb.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/ShareBar/ShareBar.init.js": () => __vitePreload(() => import("./chunks/ShareBar.init-4f778226.js"), true ? [] : void 0), "../components/ShareButton/ShareButton.init.js": () => __vitePreload(() => import("./chunks/ShareButton.init-5d076c15.js"), true ? ["js/chunks/ShareButton.init-5d076c15.js","js/chunks/v4-67bd7654.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/ShareDropdown/ShareDropdown.init.js": () => __vitePreload(() => import("./chunks/ShareDropdown.init-6c63a6fd.js"), true ? ["js/chunks/ShareDropdown.init-6c63a6fd.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/SkipLink/SkipLink.init.js": () => __vitePreload(() => import("./chunks/SkipLink.init-e7744f11.js"), true ? [] : void 0), "../components/Table/Table.init.js": () => __vitePreload(() => import("./chunks/Table.init-768b2703.js"), true ? ["js/chunks/Table.init-768b2703.js","js/chunks/debounce-8ca6b7e5.js"] : void 0), "../components/VideoElement/VideoElement.init.js": () => __vitePreload(() => import("./chunks/VideoElement.init-13514e47.js"), true ? [] : void 0), "../components/WhatWeDo/WhatWeDo.init.js": () => __vitePreload(() => import("./chunks/WhatWeDo.init-b9f4f610.js"), true ? ["js/chunks/WhatWeDo.init-b9f4f610.js","js/chunks/vendor-531aba48.js"] : void 0), "../components/YouTubeVideo/YouTubeVideo.init.js": () => __vitePreload(() => import("./chunks/YouTubeVideo.init-5ddfb1d8.js"), true ? ["js/chunks/YouTubeVideo.init-5ddfb1d8.js","js/chunks/vendor-531aba48.js"] : void 0) });
  return components.map(({ selector, name, importOnly = false }) => {
    if (typeof selector === "object") {
      selector.map((s) => createInit(s, name, modules, importOnly));
    } else {
      return createInit(selector, name, modules, importOnly);
    }
  });
};
const ONE_PIXEL_REM = 0.0625;
const BREAKPOINTS_REMS = {
  EXTRA_SMALL: 29.375,
  SMALL: 42.5,
  MEDIUM: 48.75,
  LARGE: 56.875,
  EXTRA_LARGE: 73.125,
  GLOBAL_HEADER: 67.5,
  CONTENT_WIDTH: 76.5,
  FILTER_BAR_STANDARD: 36.875,
  FILTER_BAR_EARLY: 48.75
  // matches MEDIUM
};
const BREAKPOINTS_PIXELS = {
  EXTRA_SMALL: 470,
  SMALL: 680,
  MEDIUM: 780,
  LARGE: 910,
  EXTRA_LARGE: 1170,
  GLOBAL_HEADER: 1080,
  CONTENT_WIDTH: 1224,
  FILTER_BAR_STANDARD: 590,
  FILTER_BAR_EARLY: 780
  // matches MEDIUM
};
const MEDIA_QUERIES = {
  EXTRA_SMALL_MIN: `(min-width: ${BREAKPOINTS_REMS.EXTRA_SMALL + ONE_PIXEL_REM}rem)`,
  EXTRA_SMALL_MAX: `(max-width: ${BREAKPOINTS_REMS.EXTRA_SMALL}rem)`,
  SMALL_MIN: `(min-width: ${BREAKPOINTS_REMS.SMALL + ONE_PIXEL_REM}rem)`,
  SMALL_MAX: `(max-width: ${BREAKPOINTS_REMS.SMALL}rem)`,
  MEDIUM_MIN: `(min-width: ${BREAKPOINTS_REMS.MEDIUM + ONE_PIXEL_REM}rem)`,
  MEDIUM_MAX: `(max-width: ${BREAKPOINTS_REMS.MEDIUM}rem)`,
  LARGE_MIN: `(min-width: ${BREAKPOINTS_REMS.LARGE + ONE_PIXEL_REM}rem)`,
  LARGE_MAX: `(max-width: ${BREAKPOINTS_REMS.LARGE}rem)`,
  EXTRA_LARGE_MIN: `(min-width: ${BREAKPOINTS_REMS.EXTRA_LARGE + ONE_PIXEL_REM}rem)`,
  EXTRA_LARGE_MAX: `(max-width: ${BREAKPOINTS_REMS.EXTRA_LARGE}rem)`,
  GLOBAL_HEADER_MIN: `(min-width: ${BREAKPOINTS_REMS.GLOBAL_HEADER + ONE_PIXEL_REM}rem)`,
  GLOBAL_HEADER_MAX: `(max-width: ${BREAKPOINTS_REMS.GLOBAL_HEADER}rem)`,
  CONTENT_WIDTH_MIN: `(min-width: ${BREAKPOINTS_REMS.CONTENT_WIDTH}rem)`,
  FILTER_BAR_STANDARD_MIN: `(min-width: ${BREAKPOINTS_REMS.FILTER_BAR_STANDARD + ONE_PIXEL_REM}rem)`,
  FILTER_BAR_EARLY_MIN: `(min-width: ${BREAKPOINTS_REMS.FILTER_BAR_EARLY + ONE_PIXEL_REM}rem)`
};
const counters = /* @__PURE__ */ new Map();
function uniqueId(prefix = "id") {
  const count = counters.get(prefix) || 0;
  counters.set(prefix, count + 1);
  return `${prefix}-${count + 1}`;
}
const clickAway = (el, callback) => {
  const handleKeyEvent = (event) => {
    if (event.key === "Escape") {
      const shouldMoveFocus = el.contains(document.activeElement) || el === document.activeElement;
      unBindEvents();
      callback(shouldMoveFocus);
    }
  };
  const handleClickEvent = (event) => {
    if (!el.contains(event.target) && el !== event.target) {
      unBindEvents();
      callback(false, event);
    }
  };
  const bindEvents = () => {
    document.addEventListener("keydown", handleKeyEvent);
    document.addEventListener("click", handleClickEvent);
  };
  const unBindEvents = () => {
    document.removeEventListener("keydown", handleKeyEvent);
    document.removeEventListener("click", handleClickEvent);
  };
  return {
    set: bindEvents,
    remove: unBindEvents
  };
};
window.setTimeout(() => {
}, 0);
function NavMenu(initProps) {
  let propsFail = false;
  if (!initProps.menuButton || initProps.menuButton.length === 0) {
    console.error("'menuButton' selector is required");
    propsFail = true;
  }
  if (!initProps.menuContainer || initProps.menuContainer.length === 0) {
    console.error("'menuContainer' selector is required");
    propsFail = true;
  }
  if (!initProps.parent) {
    console.error("'parent' node element is required");
    propsFail = true;
  }
  if (propsFail) {
    return;
  }
  const defaultProps = {
    animationDelay: 600,
    closed: true,
    direction: "vertical",
    openClass: "is-open",
    hoverMenu: false,
    disableClickAway: false,
    isDialog: false,
    isDisabled: false
  };
  const props = Object.assign({}, defaultProps, initProps);
  if (props.isDisabled)
    return;
  let closedState = props.closed;
  let animationDelay = props.animationDelay;
  let initialized = false;
  const elParent = props.parent;
  const elMenuButton = elParent.querySelector(props.menuButton);
  if (!elMenuButton) {
    return;
  }
  const elCloseButton = elParent.querySelector(props.closeButton);
  const elMenuContainer = elParent.querySelector(props.menuContainer);
  const mediaQueryList = props.mediaQueryCondition ? matchMedia(props.mediaQueryCondition) : null;
  let clickAwayController;
  if (!props.disableClickAway) {
    clickAwayController = clickAway(elParent, closeMenu);
  }
  if (!props.mediaQueryCondition || (mediaQueryList == null ? void 0 : mediaQueryList.matches))
    init();
  mediaQueryList == null ? void 0 : mediaQueryList.addEventListener("change", (event) => {
    event.matches ? init() : unmount();
  });
  let prevWindowWidth = window.innerWidth;
  function closeMenuMaybe() {
    if (prevWindowWidth !== window.innerWidth) {
      prevWindowWidth = window.innerWidth;
      closeMenu();
    }
  }
  function handleCloseClick(e) {
    closeMenu(true);
  }
  function handleMenuButtonClick(e) {
    toggleMenu();
  }
  function handleMouseEnter(e) {
    elParent.classList.add(props.openClass);
  }
  function handleMouseLeave(e) {
    if (!closedState) {
      return;
    }
    elParent.classList.remove(props.openClass);
  }
  function bindEvents() {
    if (elCloseButton) {
      elCloseButton.addEventListener("click", handleCloseClick);
    }
    elMenuButton.addEventListener("click", handleMenuButtonClick);
    if (props.hoverMenu) {
      elMenuButton.addEventListener("mouseenter", handleMouseEnter);
      elParent.addEventListener("mouseleave", handleMouseLeave);
    }
  }
  function unbindEvents() {
    if (elCloseButton) {
      elCloseButton.removeEventListener("click", handleCloseClick);
    }
    elMenuButton.removeEventListener("click", handleMenuButtonClick);
    if (props.hoverMenu) {
      elMenuButton.removeEventListener("mouseenter", handleMouseEnter);
      elParent.removeEventListener("mouseleave", handleMouseLeave);
    }
  }
  function toggleMenu(moveFocus) {
    if (closedState) {
      openMenu();
    } else {
      closeMenu(moveFocus);
    }
  }
  function openMenu() {
    closedState = false;
    elMenuButton.setAttribute("aria-expanded", true);
    elParent.classList.add(props.openClass);
    elMenuContainer.removeAttribute("aria-hidden");
    if (props.onOpen) {
      props.onOpen();
    }
    if (props.isDialog) {
      elMenuButton.setAttribute("aria-haspopup", "dialog");
      elMenuContainer.setAttribute("role", "dialog");
    }
    if (clickAwayController) {
      clickAwayController.set();
    }
    prevWindowWidth = window.innerWidth;
    window.addEventListener("resize", closeMenuMaybe);
    if (initialized) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        type: "Menu Opened",
        event: "dropdownClick",
        dropdownSelection: elMenuButton.innerText
      });
    }
  }
  function closeMenu(moveFocus = true) {
    if (clickAwayController) {
      clickAwayController.remove();
    }
    closedState = true;
    if (moveFocus && elMenuButton) {
      setTimeout(() => {
        if (elMenuButton.offsetParent !== null) {
          elMenuButton.focus();
        }
      }, animationDelay);
    }
    elMenuButton.setAttribute("aria-expanded", false);
    elParent.classList.remove(props.openClass);
    elMenuContainer.setAttribute("aria-hidden", true);
    if (props.onClose) {
      props.onClose();
    }
    window.removeEventListener("resize", closeMenuMaybe);
    if (initialized) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        type: "Menu Closed",
        event: "dropdownClick",
        dropdownSelection: elMenuButton.innerText
      });
    }
  }
  function init() {
    bindEvents();
    const controlId = elMenuContainer.id || uniqueId("menu");
    const buttonId = elMenuButton.id || uniqueId("menu");
    elMenuButton.id = buttonId;
    elMenuButton.setAttribute("aria-controls", controlId);
    elMenuContainer.id = controlId;
    elMenuContainer.setAttribute("aria-labelledby", buttonId);
    if (closedState) {
      closeMenu(false);
    } else {
      openMenu();
    }
    initialized = true;
  }
  function unmount() {
    elMenuButton.removeAttribute("aria-expanded");
    elMenuButton.removeAttribute("aria-controls");
    elMenuContainer.removeAttribute("aria-labelledby");
    elMenuContainer.removeAttribute("aria-hidden");
    unbindEvents();
  }
  function isClosed() {
    return closedState;
  }
  return {
    init,
    toggleMenu,
    openMenu,
    closeMenu,
    isClosed
  };
}
function initQuickSearch(menu, el) {
  var _a, _b;
  const searchInput = el;
  if (!el)
    return;
  const quickSearchBox = el.closest(".quick-search-box");
  const quickSearchBoxWrapper = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(
    ".quick-search-box__wrapper"
  );
  const closeButtonEl = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(
    ".js-quick-search-clear-and-close"
  );
  const searchForLabel = ((_b = (_a = el == null ? void 0 : el.closest("[data-search-for-label]")) == null ? void 0 : _a.dataset) == null ? void 0 : _b.searchForLabel) || "Search for";
  let activeIndex = -1;
  const init = () => {
    searchInput.setAttribute("role", "combobox");
    searchInput.setAttribute("aria-haspopup", "listbox");
    searchInput.setAttribute("aria-controls", "quick-search-suggestions");
    bindEvents();
  };
  const bindEvents = () => {
    searchInput.addEventListener("input", (e) => {
      handleType(e);
    });
    quickSearchBox == null ? void 0 : quickSearchBox.addEventListener("keydown", handleKeyboard);
    closeButtonEl == null ? void 0 : closeButtonEl.addEventListener("click", clear);
  };
  const handleClickItem = (e, index) => {
    e.preventDefault();
    if (index === 0) {
      quickSearchBox.submit();
    }
    searchInput.value = e.target.innerText;
  };
  const clear = () => {
    searchInput.value = "";
    closeSuggestions();
    searchInput.focus();
  };
  const closeSuggestions = () => {
    const srText = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(".js-search-box-sr-text");
    const suggestionEl = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(
      ".search-box__suggestion-box"
    );
    srText.innerHTML = "";
    suggestionEl == null ? void 0 : suggestionEl.remove();
    activeIndex = -1;
    searchInput.setAttribute("aria-expanded", false);
    searchInput.setAttribute("aria-activedescendant", "");
  };
  const handleType = debounce(async (e) => {
    var _a2;
    const input = e.target.value;
    const suggestionBoxEl = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(
      ".search-box__suggestion-box"
    );
    if ((input == null ? void 0 : input.length) >= 3) {
      const url = ((_a2 = { "VITE_SITE": "frontend", "BASE_URL": "/assets/Pew", "MODE": "production", "DEV": true, "PROD": false, "SSR": false }) == null ? void 0 : _a2.STORYBOOK) === "true" || window.location.hostname === "localhost" ? `https://dev.pew.velir.net/api/SearchSuggestApi/GetSuggestions?term=${input}&url=https://dev.pew.velir.net` : `${window.location.origin}/api/SearchSuggestApi/GetSuggestions?term=${input}&url=${window.location.origin}`;
      const response = await fetch(url, { method: "get" });
      const data = await response.json();
      const suggestionBox = suggestionBoxEl ? suggestionBoxEl : document.createElement("ul");
      if (!suggestionBoxEl) {
        suggestionBox.classList.add("search-box__suggestion-box");
        suggestionBox.setAttribute("id", "quick-search-suggestions");
        suggestionBox.setAttribute("role", "listbox");
      }
      const strRegExp = new RegExp(input, "gi");
      if ((data == null ? void 0 : data.length) > 0) {
        suggestionBox.innerHTML = purify.sanitize(`
            <ul class="search-box__suggestion-list" role="listbox">
              <li class="search-box__suggestion-item search-box__user-input">
                <span class="search-box__suggestion-label">${searchForLabel}:</span>
                <button class="search-box__suggestion" type="button" id="quick-search-item-0">${input.replace(
          strRegExp,
          (match) => `<strong class="search-box__matched-text">${match}</strong>`
        )}</button>
              </li>
              ${data == null ? void 0 : data.map(
          (d, index) => `
                <li class="search-box__suggestion-item" role="option" id="quick-search-item-${index + 1}">
                  <button class="search-box__suggestion" type="button">
                    ${d.replace(
            strRegExp,
            (match) => `<strong class="search-box__matched-text">${match}</strong>`
          )}
                  </button>
                </li>
              `
        ).join("")}
            </ul>
          `);
        quickSearchBoxWrapper == null ? void 0 : quickSearchBoxWrapper.append(suggestionBox);
        [...quickSearchBox.querySelectorAll(".search-box__suggestion")].forEach(
          (suggestion, index) => {
            suggestion.addEventListener(
              "click",
              (e2) => handleClickItem(e2, index)
            );
          }
        );
        searchInput.setAttribute("aria-expanded", true);
        setTimeout(() => {
          const srText = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(
            ".js-search-box-sr-text"
          );
          if (srText) {
            srText.innerHTML = purify.sanitize(
              `There are currently ${data == null ? void 0 : data.length} options starting with ${input}. Press down arrow for options`
            );
          }
        }, 1200);
      }
    }
    if (input === "") {
      clear();
    }
  }, 500);
  const handleKeyboard = async (e) => {
    let prevActiveIndex = activeIndex;
    const suggestions = quickSearchBox == null ? void 0 : quickSearchBox.querySelectorAll(
      ".search-box__suggestion"
    );
    const suggestionEl = quickSearchBox == null ? void 0 : quickSearchBox.querySelector(
      ".search-box__suggestion-box"
    );
    if (!suggestionEl)
      return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (activeIndex === -1 || activeIndex >= (suggestions == null ? void 0 : suggestions.length) - 1) {
          activeIndex = 0;
        } else {
          activeIndex++;
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (activeIndex <= 0) {
          activeIndex = (suggestions == null ? void 0 : suggestions.length) - 1;
        } else {
          activeIndex--;
        }
        break;
      case "Escape":
        e.preventDefault();
        closeSuggestions();
        break;
      case "Enter":
        e.preventDefault();
        quickSearchBox.submit();
        break;
    }
    const prevActive = quickSearchBox.querySelector(
      `#quick-search-item-${prevActiveIndex}`
    );
    const activeItem = quickSearchBox.querySelector(
      `#quick-search-item-${activeIndex}`
    );
    if (prevActive) {
      prevActive.setAttribute("aria-selected", "false");
    }
    if (activeItem) {
      activeItem.setAttribute("aria-selected", true);
      searchInput == null ? void 0 : searchInput.setAttribute(
        "aria-activedescendant",
        `quick-search-item-${activeIndex}`
      );
      searchInput.value = activeItem.innerText;
    } else {
      searchInput.setAttribute("aria-activedescendant", "");
    }
  };
  init();
  const { closeMenu: closeSearchMenu, isClosed } = NavMenu({
    menuButton: ".js-search-menu-button",
    menuContainer: ".js-search-menu-dropdown",
    openClass: "search-menu--open",
    onOpen: () => {
      setTimeout(() => el.focus(), 200);
    },
    parent: menu
  });
  return {
    closeSearchMenu,
    isClosed
  };
}
const QuickSearch_init = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: initQuickSearch
}, Symbol.toStringTag, { value: "Module" }));
function bindNavEvents(globalHeader, navItems, container) {
  const searchMenu = globalHeader == null ? void 0 : globalHeader.querySelector(".js-search-menu");
  const quickSearchEl = globalHeader == null ? void 0 : globalHeader.querySelector(
    ".js-quick-search-input input"
  );
  const quickSearch = initQuickSearch(searchMenu, quickSearchEl);
  NavMenu({
    menuButton: ".js-nav-menu-button",
    menuContainer: ".js-primary-nav",
    openClass: "primary-nav--open",
    onOpen() {
      document.documentElement.classList.add("mobile-nav-open");
    },
    onClose() {
      document.documentElement.classList.remove("mobile-nav-open");
    },
    mediaQueryCondition: MEDIA_QUERIES.GLOBAL_HEADER_MAX,
    parent: container
  });
  navItems.forEach((el, index) => {
    NavMenu({
      menuButton: ".js-primary-nav-button",
      menuContainer: ".js-primary-nav-dropdown",
      onOpen() {
        if (!quickSearch.isClosed()) {
          quickSearch == null ? void 0 : quickSearch.closeSearchMenu(false);
        }
      },
      parent: el,
      mediaQueryCondition: MEDIA_QUERIES.GLOBAL_HEADER_MIN
    });
    NavMenu({
      menuButton: ".js-primary-nav-button",
      menuContainer: ".js-primary-nav-dropdown",
      mediaQueryCondition: MEDIA_QUERIES.GLOBAL_HEADER_MAX,
      parent: el,
      disableClickAway: true
    });
  });
}
function initGlobalHeader() {
  const globalHeader = document.querySelector(".js-global-header");
  if (!globalHeader) {
    return;
  }
  const headerWrapper = globalHeader.closest("header");
  const globalHeaderHeight = globalHeader.offsetHeight;
  const primaryNavContainer = document.querySelector(
    ".js-primary-nav-container"
  );
  const navItems = Array.from(
    globalHeader.querySelectorAll(".js-primary-nav-item")
  );
  const updateCSSVar = (height) => {
    document.documentElement.style.setProperty(
      "--global-header-height",
      `${height}px`
    );
  };
  updateCSSVar(globalHeaderHeight);
  const resizeObserver = new ResizeObserver(([entry]) => {
    updateCSSVar(entry.target.getBoundingClientRect().height - 1);
  });
  const stickyObserver = new IntersectionObserver(
    ([e]) => {
      e.target.classList.toggle("is-sticky", e.intersectionRatio < 1);
    },
    { threshold: [1] }
  );
  if (headerWrapper) {
    resizeObserver.observe(headerWrapper);
    stickyObserver.observe(headerWrapper);
  }
  bindNavEvents(globalHeader, navItems, primaryNavContainer);
}
const GlobalHeader_init = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: initGlobalHeader
}, Symbol.toStringTag, { value: "Module" }));
function getElementWordCount(el) {
  const text = el.innerText;
  const wordCount = text.trim().split(/\s+/).length;
  return wordCount;
}
function getWordCount(target) {
  if (target instanceof Element) {
    return getElementWordCount(target);
  }
  return Array.from(target).reduce(
    (total, el) => total + getElementWordCount(el),
    0
  );
}
function setCookie(name, value, options = {}) {
  if (!name || !value) {
    console.warn(
      "setCookie: Cookie name and value are required. Cookie could not be set."
    );
    return;
  }
  const { path = "/", sameSite = "Strict", secure = true } = options;
  let cookie = `${name}=${encodeURIComponent(
    value
  )}; path=${path}; SameSite=${sameSite}`;
  if (secure)
    cookie += "; Secure";
  document.cookie = cookie;
}
async function registerXDBEvent(eventId, componentName, newsletterId) {
  var _a;
  const goal = {
    id: eventId,
    componentName,
    newsletterId
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(goal)
  };
  if (((_a = { "VITE_SITE": "frontend", "BASE_URL": "/assets/Pew", "MODE": "production", "DEV": true, "PROD": false, "SSR": false }) == null ? void 0 : _a.STORYBOOK) === "true") {
    console.log(goal);
    return;
  }
  try {
    const response = await fetch("/api/goals/registerevent", options);
    if (!response.ok) {
      throw new Error(`HTTP Status Error: ${response.status}`);
    }
  } catch (err) {
    console.error("Encountered error registering xDB goal", err);
  }
}
function initXDBGoalTracking() {
  const els = document.querySelectorAll(".xdbpe");
  els.forEach((el) => {
    el.addEventListener("click", (e) => {
      var _a;
      const eventId = el.dataset.xdbpe;
      const componentName = el.dataset.sitecoreComponentName || ((_a = el.closest("[data-sitecore-component-name]")) == null ? void 0 : _a.dataset.sitecoreComponentName);
      registerXDBEvent(eventId, componentName);
    });
  });
  const firstVisitEl = document.querySelector(".xdbpe-project, .xdbpe-topic");
  if (firstVisitEl) {
    registerXDBEvent(firstVisitEl == null ? void 0 : firstVisitEl.dataset.xdbpe);
  }
}
const storeSearchParams = () => {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of params.entries()) {
    if (sessionStorage.getItem(key) === null) {
      sessionStorage.setItem(key, decodeURIComponent(value));
    }
  }
};
function setSubscriberKeyCookie() {
  var _a;
  const params = new URLSearchParams(window.location.search);
  const subscriberKey = params.get("subscriberkey");
  if (subscriberKey) {
    const isStorybook = ((_a = { "VITE_SITE": "frontend", "BASE_URL": "/assets/Pew", "MODE": "production", "DEV": true, "PROD": false, "SSR": false }) == null ? void 0 : _a.STORYBOOK) === "true";
    const ONE_TRUST_MARKETING_COOKIES_ID = "C0004";
    if (window.OnetrustActiveGroups && window.OnetrustActiveGroups.includes(ONE_TRUST_MARKETING_COOKIES_ID) || isStorybook) {
      setCookie("subscriberkey", subscriberKey);
    } else {
      window.OptanonWrapper = function() {
        if (window.OnetrustActiveGroups.includes(ONE_TRUST_MARKETING_COOKIES_ID)) {
          setCookie("subscriberkey", subscriberKey);
        }
      };
    }
  }
}
document.addEventListener(
  "DOMContentLoaded",
  function() {
    var _a;
    initGlobalHeader();
    storeSearchParams();
    setSubscriberKeyCookie();
    dynamicRenderer([
      {
        selector: ".js-scroll-animation",
        name: "common/scrollIntoView.init.js"
      },
      {
        selector: ".js-clickable-card",
        name: "common/clickableCard.init.js"
      },
      {
        selector: ".js-newsletter-signup-form",
        name: "components/NewsletterSignup/NewsletterSignup.init.js"
      },
      {
        selector: ".js-details-element",
        name: "components/DetailsElement/DetailsElement.init.js"
      },
      {
        selector: ".js-details-accordion",
        name: "components/DetailsAccordion/DetailsAccordion.init.js"
      },
      {
        selector: ".js-share-btn-root",
        name: "components/ShareButton/ShareButton.init.js"
      },
      {
        selector: ".js-related-content-item",
        name: "components/RelatedContent/relatedContentItem.init.js"
      },
      {
        selector: ".js-page-metadata",
        name: "components/PageMetadata/PageMetadata.init.js"
      },
      {
        selector: ".js-dropdown",
        name: "components/Dropdown/Dropdown.init.js"
      },
      {
        selector: ".js-language-selector",
        name: "components/LanguageSelector/LanguageSelector.init.js"
      },
      {
        selector: ".js-rich-text table",
        name: "components/Table/Table.init.js"
      },
      {
        selector: ".js-share-bar",
        name: "components/ShareBar/ShareBar.init.js"
      },
      {
        selector: ".js-share-dropdown",
        name: "components/ShareDropdown/ShareDropdown.init.js"
      },
      {
        selector: ".js-in-page-navigation",
        name: "components/InPageNavigation/InPageNavigation.init.js"
      },
      {
        selector: ".js-page-header-expand",
        name: "components/PageHeader/PageHeader.init.js"
      },
      {
        selector: ".js-video-element",
        name: "components/VideoElement/VideoElement.init.js"
      },
      {
        selector: ".js-code-embed",
        name: "components/CodeEmbedDropdown/CodeEmbedDropdown.init.js"
      },
      {
        selector: ".js-section-navigation",
        name: "components/SectionNavigation/SectionNavigation.init.js",
        importOnly: true
      },
      {
        selector: ".js-link-navigation",
        name: "components/LinkNavigation/LinkNavigation.init.js",
        importOnly: true
      },
      {
        selector: ".js-rich-text",
        name: "components/SelectionShare/SelectionShare.init.js",
        importOnly: true
      },
      {
        selector: ".js-youtube-video",
        name: "components/YouTubeVideo/YouTubeVideo.init.js",
        importOnly: true
      },
      {
        selector: ".js-tabs",
        name: "common/tabs.init.js"
      },
      {
        selector: ".js-rich-text-field",
        name: "components/RichText/RichTextField.init.js"
      },
      {
        selector: ".js-skip-link",
        name: "components/SkipLink/SkipLink.init.js"
      },
      {
        selector: ".js-media-gallery",
        name: "components/MediaGallery/MediaGallery.init.js"
      },
      {
        selector: ".js-product-navigation",
        name: "components/ProductNavigation/ProductNavigation.init.js"
      },
      {
        selector: ".js-animated-hero",
        name: "components/AnimatedHero/AnimatedHero.init.js"
      },
      {
        selector: ".js-dialog-component",
        name: "components/DialogElement/DialogElement.init.js"
      },
      {
        selector: ".js-interstitial-popup",
        name: "components/InterstitialPopup/InterstitialPopup.init.js"
      },
      {
        selector: ".js-flip-tile",
        name: "components/FlipTile/FlipTile.init.js"
      },
      {
        selector: ".js-multiple-flip-tile-container",
        name: "components/MultipleFlipTileContainer/MultipleFlipTileContainer.init.js"
      },
      {
        selector: ".js-flip-banner",
        name: "components/FlipBanner/FlipBanner.init.js"
      },
      {
        selector: ".js-fact-slider",
        name: "components/FactSlider/FactSlider.init.js"
      },
      {
        selector: ".js-what-we-do",
        name: "components/WhatWeDo/WhatWeDo.init.js"
      },
      // React components
      {
        selector: ".js-dynamic-content-listing-mount",
        name: "components/DynamicContentListing/DynamicContentListing.render.jsx"
      },
      {
        selector: ".js-people-listing-mount",
        name: "components/PeopleListing/PeopleListing.render.jsx"
      },
      {
        selector: ".js-search-mount",
        name: "components/Search/Search.render.jsx"
      },
      {
        selector: ".js-choropleth-mount",
        name: "components/MapTool/MapTool.render.jsx"
      },
      {
        selector: ".js-section-nav-app",
        name: "components/SectionNavigation/NavigationApp/SectionNav.render.jsx"
      },
      {
        selector: ".js-form-select",
        name: "components/Form/Select/Select.render.jsx"
      },
      {
        selector: ".js-scholar-directory-mount",
        name: "components/ScholarDirectory/ScholarDirectory.render.jsx"
      },
      {
        selector: ".js-scholar-pagination-mount",
        name: "components/ScholarSearchResults/ScholarSearchResults.render.jsx"
      }
    ]);
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      const imgCount = mainContent.querySelectorAll("img").length;
      const imgCountGroup = imgCount <= 9 ? imgCount.toString() : "10+";
      const wordCount = getWordCount(mainContent);
      const engagementOptions = [];
      if (document.querySelector("iframe[src*=youtube]") !== null) {
        engagementOptions.push("YouTube");
      }
      if (document.querySelector(".pct-expand-more") !== null) {
        engagementOptions.push("More Toggle");
      }
      if (document.querySelector('.downloads-dropdown, a[type="download"') !== null) {
        engagementOptions.push("Download");
      }
      const dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "pageVarPush",
        engagementOptions,
        wordCount,
        imgCount,
        imgCountGroup
      });
    }
    initXDBGoalTracking();
    window.assetsFolder = ((_a = { "VITE_SITE": "frontend", "BASE_URL": "/assets/Pew", "MODE": "production", "DEV": true, "PROD": false, "SSR": false }) == null ? void 0 : _a.STORYBOOK) === "true" ? "/img" : "/assets/Pew/assets/images";
  },
  false
);
export {
  BREAKPOINTS_PIXELS as B,
  MEDIA_QUERIES as M,
  NavMenu as N,
  clickAway as c,
  getWordCount as g,
  registerXDBEvent as r,
  uniqueId as u
};


//# sourceMappingURL=data:application/json;base64,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QUVBO0FBQ0E7QUFFQSxvQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2I7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDYjtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxNQUNiO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2I7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBO0FBQUEsTUFFRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BQ0Q7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFDRDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLE1BQ1A7QUFBQSxNQUNEO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsTUFDUDtBQUFBLElBQ1AsQ0FBSztBQUdELFVBQU0sY0FBYyxTQUFTLGVBQWUsY0FBYztBQUMxRCxRQUFJLGFBQWE7QUFDZixZQUFNLFdBQVcsWUFBWSxpQkFBaUIsS0FBSyxFQUFFO0FBQ3JELFlBQU0sZ0JBQWdCLFlBQVksSUFBSSxTQUFTLFNBQVUsSUFBRztBQUM1RCxZQUFNLFlBQVksYUFBYSxXQUFXO0FBRTFDLFlBQU0sb0JBQW9CO0FBQzFCLFVBQUksU0FBUyxjQUFjLHNCQUFzQixNQUFNLE1BQU07QUFDM0QsMEJBQWtCLEtBQUssU0FBUztBQUFBLE1BQ2pDO0FBRUQsVUFBSSxTQUFTLGNBQWMsa0JBQWtCLE1BQU0sTUFBTTtBQUN2RCwwQkFBa0IsS0FBSyxhQUFhO0FBQUEsTUFDckM7QUFFRCxVQUNFLFNBQVMsY0FBYyx3Q0FBd0MsTUFDL0QsTUFDQTtBQUNBLDBCQUFrQixLQUFLLFVBQVU7QUFBQSxNQUNsQztBQUVELFlBQU0sWUFBWSxPQUFPLGFBQWE7QUFDdEMsZ0JBQVUsS0FBSztBQUFBLFFBQ2IsT0FBTztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNSLENBQU87QUFBQSxJQUNGO0FBRUQ7QUFNQSxXQUFPLGlCQUNMLG1KQUFpQixlQUFjLFNBQzNCLFNBQ0E7QUFBQSxFQUNQO0FBQUEsRUFDRDtBQUNGIiwibmFtZXMiOlsiX2EiLCJET01QdXJpZnkiLCJlIiwiUXVpY2tTZWFyY2giXSwic291cmNlcyI6WyIuLi8uLi9mcm9udGVuZC9qcy91dGlscy9keW5hbWljUmVuZGVyZXIuanMiLCIuLi8uLi9mcm9udGVuZC9qcy9jb21tb24vY29uc3RhbnRzL2JyZWFrcG9pbnRzLmpzIiwiLi4vLi4vZnJvbnRlbmQvanMvY29tbW9uL3VuaXF1ZUlkLmpzIiwiLi4vLi4vZnJvbnRlbmQvanMvY29tbW9uL2NsaWNrQXdheS5qcyIsIi4uLy4uL2Zyb250ZW5kL2pzL2NvbW1vbi9OYXZNZW51LmpzIiwiLi4vLi4vZnJvbnRlbmQvanMvY29tcG9uZW50cy9HbG9iYWxIZWFkZXIvU2VhcmNoTWVudS9RdWlja1NlYXJjaC9RdWlja1NlYXJjaC5pbml0LmpzIiwiLi4vLi4vZnJvbnRlbmQvanMvY29tcG9uZW50cy9HbG9iYWxIZWFkZXIvR2xvYmFsSGVhZGVyLmluaXQuanMiLCIuLi8uLi9mcm9udGVuZC9qcy9jb21tb24vZ2V0V29yZENvdW50LmpzIiwiLi4vLi4vZnJvbnRlbmQvanMvY29tbW9uL2Nvb2tpZXMuanMiLCIuLi8uLi9mcm9udGVuZC9qcy9jb21tb24veERCLmpzIiwiLi4vLi4vZnJvbnRlbmQvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNvbXBvbmVudExpc3QgaXMgYW4gYXJyYXkgb2YgZXZlcnkgY29tcG9uZW50IGluIHRocmVhZFxyXG4gKiB0aGlzIHdpbGwgYmUgdXNlZCB0byBkeW5hbWljYWxseSBpbXBvcnQganMgZm9yIGVhY2ggY29tcG9uZW50XHJcbiAqIHVzaW5nIHRoZSByZW5kZXJlciBmdW5jdGlvbi5cclxuICpcclxuICogSWYgaW1wb3J0T25seSBpcyB0cnVlLCBkeW5hbWljYWxseSBpbXBvcnQgbW9kdWxlIHdpdGhvdXQgcnVubmluZ1xyXG4gKiBydW5uaW5nIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9lbmVudCBpbnN0YW5jZVxyXG4gKlxyXG4gKiBUbyBhZGQgbmV3IGNvbXBvbmVudHMgb3IgY2hhbmdlIHNlbGVjdG9ycyBlZGl0IHRoZVxyXG4gKiBpbmRleC5qcyBmaWxlIGluIC9qcy9tb2R1bGVzLlxyXG4gKlxyXG4gKi9cclxuXHJcbmNvbnN0IGNyZWF0ZUluaXQgPSBhc3luYyAoc2VsZWN0b3IsIG5hbWUsIG1vZHVsZXMsIGltcG9ydE9ubHkpID0+IHtcclxuICBjb25zdCBzZWxlY3RvcnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildO1xyXG4gIGlmIChzZWxlY3RvcnMubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICBtb2R1bGVzW2AuLi8ke25hbWV9YF0oKS50aGVuKChtb2R1bGUpID0+IHtcclxuICAgIGlmIChpbXBvcnRPbmx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRlZmF1bHQ6IGluaXRpYWxpemUgfSA9IG1vZHVsZTtcclxuICAgIHNlbGVjdG9ycy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgIGluaXRpYWxpemUoZWxlbWVudCwgaSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBEeW5hbWljIFJlbmRlcmVyXHJcbiAqIEBtb2R1bGUgZHluYW1pY1JlbmRlcmVyXHJcbiAqXHJcbiAqIEFjY2VwdHMgYW4gYXJyYXkgb2YgY29tcG9uZW50cyBhbmQgY3JlYXRlcyBpbXBvcnRzLlxyXG4gKiBFeGVjdXRlcyB0aGUgZGVmYXVsdCBleHBvcnQgZm9yIHRob3NlIGltcG9ydHMgcGFzc2luZyBzdXBwbGllZCBzZWxlY3RvciBhbmQgYW4gaW5kZXhcclxuICogQHBhcmFtIHthcnJheX0gYyAtIGxpc3Qgb2YgY29tcG9uZW50cyBpbiBjb21wb25lbnRMaXN0IGZvcm1hdFxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGMgPSBbXSkgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbLi4uY107XHJcblxyXG4gIGNvbnN0IG1vZHVsZXMgPSBpbXBvcnQubWV0YS5nbG9iKFtcIi4uLyoqLyoucmVuZGVyLipcIiwgXCIuLi8qKi8qLmluaXQuKlwiXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudHMubWFwKCh7IHNlbGVjdG9yLCBuYW1lLCBpbXBvcnRPbmx5ID0gZmFsc2UgfSkgPT4ge1xyXG4gICAgLy9pZiB0aGUgc2VsZWN0b3IgY29udGFpbnMgbXVsdGlwbGUgY2xhc3NlcyB3ZSB3YW50IHRvIGNyZWF0IGluaXRzIGZvciBhbGwgY2xhc3Nlcy5cclxuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgc2VsZWN0b3IubWFwKChzKSA9PiBjcmVhdGVJbml0KHMsIG5hbWUsIG1vZHVsZXMsIGltcG9ydE9ubHkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVJbml0KHNlbGVjdG9yLCBuYW1lLCBtb2R1bGVzLCBpbXBvcnRPbmx5KTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiY29uc3QgT05FX1BJWEVMX1JFTSA9IDAuMDYyNTtcclxuLyoqXHJcbiAqIFdoZW4gY2hhbmdpbmcgdGhlc2UsIG1ha2Ugc3VyZSB0byB1cGRhdGUgdGhlIGNvcnJlc3BvbmRpbmcgc2FzcyB2YXJpYWJsZXNcclxuICogaW4gL2Zyb250ZW5kL3NyYy9zY3NzL2Fic3RyYWN0cy9fYnJlYWtwb2ludHMuc2Nzc1xyXG4gKi9cclxuY29uc3QgQlJFQUtQT0lOVFNfUkVNUyA9IHtcclxuICBFWFRSQV9TTUFMTDogMjkuMzc1LFxyXG4gIFNNQUxMOiA0Mi41LFxyXG4gIE1FRElVTTogNDguNzUsXHJcbiAgTEFSR0U6IDU2Ljg3NSxcclxuICBFWFRSQV9MQVJHRTogNzMuMTI1LFxyXG4gIEdMT0JBTF9IRUFERVI6IDY3LjUsXHJcbiAgQ09OVEVOVF9XSURUSDogNzYuNSxcclxuICBGSUxURVJfQkFSX1NUQU5EQVJEOiAzNi44NzUsXHJcbiAgRklMVEVSX0JBUl9FQVJMWTogNDguNzUsIC8vIG1hdGNoZXMgTUVESVVNXHJcbn07XHJcblxyXG5jb25zdCBCUkVBS1BPSU5UU19QSVhFTFMgPSB7XHJcbiAgRVhUUkFfU01BTEw6IDQ3MCxcclxuICBTTUFMTDogNjgwLFxyXG4gIE1FRElVTTogNzgwLFxyXG4gIExBUkdFOiA5MTAsXHJcbiAgRVhUUkFfTEFSR0U6IDExNzAsXHJcbiAgR0xPQkFMX0hFQURFUjogMTA4MCxcclxuICBDT05URU5UX1dJRFRIOiAxMjI0LFxyXG4gIEZJTFRFUl9CQVJfU1RBTkRBUkQ6IDU5MCxcclxuICBGSUxURVJfQkFSX0VBUkxZOiA3ODAsIC8vIG1hdGNoZXMgTUVESVVNXHJcbn07XHJcblxyXG5jb25zdCBNRURJQV9RVUVSSUVTID0ge1xyXG4gIEVYVFJBX1NNQUxMX01JTjogYChtaW4td2lkdGg6ICR7XHJcbiAgICBCUkVBS1BPSU5UU19SRU1TLkVYVFJBX1NNQUxMICsgT05FX1BJWEVMX1JFTVxyXG4gIH1yZW0pYCxcclxuICBFWFRSQV9TTUFMTF9NQVg6IGAobWF4LXdpZHRoOiAke0JSRUFLUE9JTlRTX1JFTVMuRVhUUkFfU01BTEx9cmVtKWAsXHJcbiAgU01BTExfTUlOOiBgKG1pbi13aWR0aDogJHtCUkVBS1BPSU5UU19SRU1TLlNNQUxMICsgT05FX1BJWEVMX1JFTX1yZW0pYCxcclxuICBTTUFMTF9NQVg6IGAobWF4LXdpZHRoOiAke0JSRUFLUE9JTlRTX1JFTVMuU01BTEx9cmVtKWAsXHJcbiAgTUVESVVNX01JTjogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFNfUkVNUy5NRURJVU0gKyBPTkVfUElYRUxfUkVNfXJlbSlgLFxyXG4gIE1FRElVTV9NQVg6IGAobWF4LXdpZHRoOiAke0JSRUFLUE9JTlRTX1JFTVMuTUVESVVNfXJlbSlgLFxyXG4gIExBUkdFX01JTjogYChtaW4td2lkdGg6ICR7QlJFQUtQT0lOVFNfUkVNUy5MQVJHRSArIE9ORV9QSVhFTF9SRU19cmVtKWAsXHJcbiAgTEFSR0VfTUFYOiBgKG1heC13aWR0aDogJHtCUkVBS1BPSU5UU19SRU1TLkxBUkdFfXJlbSlgLFxyXG4gIEVYVFJBX0xBUkdFX01JTjogYChtaW4td2lkdGg6ICR7XHJcbiAgICBCUkVBS1BPSU5UU19SRU1TLkVYVFJBX0xBUkdFICsgT05FX1BJWEVMX1JFTVxyXG4gIH1yZW0pYCxcclxuICBFWFRSQV9MQVJHRV9NQVg6IGAobWF4LXdpZHRoOiAke0JSRUFLUE9JTlRTX1JFTVMuRVhUUkFfTEFSR0V9cmVtKWAsXHJcbiAgR0xPQkFMX0hFQURFUl9NSU46IGAobWluLXdpZHRoOiAke1xyXG4gICAgQlJFQUtQT0lOVFNfUkVNUy5HTE9CQUxfSEVBREVSICsgT05FX1BJWEVMX1JFTVxyXG4gIH1yZW0pYCxcclxuICBHTE9CQUxfSEVBREVSX01BWDogYChtYXgtd2lkdGg6ICR7QlJFQUtQT0lOVFNfUkVNUy5HTE9CQUxfSEVBREVSfXJlbSlgLFxyXG4gIENPTlRFTlRfV0lEVEhfTUlOOiBgKG1pbi13aWR0aDogJHtCUkVBS1BPSU5UU19SRU1TLkNPTlRFTlRfV0lEVEh9cmVtKWAsXHJcbiAgRklMVEVSX0JBUl9TVEFOREFSRF9NSU46IGAobWluLXdpZHRoOiAke1xyXG4gICAgQlJFQUtQT0lOVFNfUkVNUy5GSUxURVJfQkFSX1NUQU5EQVJEICsgT05FX1BJWEVMX1JFTVxyXG4gIH1yZW0pYCxcclxuICBGSUxURVJfQkFSX0VBUkxZX01JTjogYChtaW4td2lkdGg6ICR7XHJcbiAgICBCUkVBS1BPSU5UU19SRU1TLkZJTFRFUl9CQVJfRUFSTFkgKyBPTkVfUElYRUxfUkVNXHJcbiAgfXJlbSlgLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgQlJFQUtQT0lOVFNfUkVNUywgQlJFQUtQT0lOVFNfUElYRUxTLCBNRURJQV9RVUVSSUVTIH07XHJcbiIsImNvbnN0IGNvdW50ZXJzID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4ID0gXCJpZFwiKSB7XHJcbiAgY29uc3QgY291bnQgPSBjb3VudGVycy5nZXQocHJlZml4KSB8fCAwO1xyXG4gIGNvdW50ZXJzLnNldChwcmVmaXgsIGNvdW50ICsgMSk7XHJcbiAgcmV0dXJuIGAke3ByZWZpeH0tJHtjb3VudCArIDF9YDtcclxufVxyXG4iLCIvKipcclxuICogR2l2ZW4gYW4gZWxlbWVudCBhbmQgYSBjYWxsYmFjaywgcnVuIHRoZSBjYWxsYmFjayB3aGVuIGEgY2xpY2sgZXZlbnRzIGhhcHBlbnNcclxuICogb3V0c2lkZSBvZiB0aGUgZWxlbWVudCBwcm92aWRlZCBvciB0aGUgXCJFc2NcIiBrZXkgaGFzIGJlZW4gcHJlc3NlZC5cclxuICogQWxzbyBpZiB0aGUgRXNjIGtleSBpcyBwcmVzc2VkIHdoaWxlIHRoZSB1c2VyIGlzIHdpdGhpbiB0aGUgZWxlbWVudCBwcm92aWRlZFxyXG4gKiBzaWduYWwgYSBmb2N1cyBzdGF0ZSBtb3ZlIHRvIHRoZSBjYWxsYmFjay5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwg4oCTIEhUTUwgZWxlbWVudCB0byBhcHBseSBjbGljayBhd2F5IGZ1bmN0aW9uYWxpdHkgdG9cclxuICogQHBhcmFtIHsobW92ZUZvY3VzOiBib29sZWFuKSA9PiB2b2lkfSBjYWxsYmFjayDigJMgQSBmdW5jdGlvbiB0byBjYWxsIG9uIGEgc3VjY2Vzc2Z1bCBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgKGVsLCBjYWxsYmFjaykgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUtleUV2ZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIGNvbnN0IHNob3VsZE1vdmVGb2N1cyA9XHJcbiAgICAgICAgZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgfHwgZWwgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIHVuQmluZEV2ZW50cygpO1xyXG4gICAgICBjYWxsYmFjayhzaG91bGRNb3ZlRm9jdXMpOyAvLyB0cnVlID0+IGZvY3VzIG5lZWRzIHRvIGJlIG1vdmVkXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tFdmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKCFlbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIGVsICE9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgdW5CaW5kRXZlbnRzKCk7XHJcbiAgICAgIGNhbGxiYWNrKGZhbHNlLCBldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmluZEV2ZW50cyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleUV2ZW50KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja0V2ZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1bkJpbmRFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlFdmVudCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tFdmVudCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNldDogYmluZEV2ZW50cyxcclxuICAgIHJlbW92ZTogdW5CaW5kRXZlbnRzLFxyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB1bmlxdWVJZCBmcm9tIFwiLi91bmlxdWVJZFwiO1xyXG5cclxuLy8gVmVyc2lvbiAxLjJcclxuLy9cclxuLy8gVXBkYXRlZCB0byB0aGUgY29ycmVjdCBXQ0FHIHJlcXVpcmVtZW50cyAtIEpvbmF0aGFuIERhbGxhc1xyXG4vLyAxLiBSZW1vdmVkIGFycm93IGtleSBuYXZpZ2F0aW9uXHJcbi8vIDIuIFJlbW92ZWQgVGFiIGtleSBvdmVycmlkZXNcclxuLy8gMy4gUmVtb3ZlZCBhcmlhLWhhc3BvcHVwIHdoaWNoIGlzIGp1c3QgZm9yIG1vZGFsc1xyXG4vLyA0LiBTaW1wbGVyIENsaWNrIEF3YXkgY29kZS5cclxuLy9cclxuLy8gY2xvc2VCdXR0b24gYWRkZWQgZm9yIDEuMWFcclxuLy9cclxuLy8gYXV0aG9yOiBKb250aGFuIERhbGxhc1xyXG4vLyBkYXRlOiBOb3ZlbWJlciAyMDIwXHJcbi8vXHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6YXRpb24gcHJvcHNcclxuICogQHR5cGVkZWYge09iamVjdH0gSW5pdFByb3BzXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtZW51QnV0dG9uIC0gY2xhc3Mgb3IgaWQgc2VsZWN0b3JcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsb3NlQnV0dG9uIC0gY2xhc3Mgb3IgaWQgc2VsZWN0b3JcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lbnVDb250YWluZXIgLSBjbGFzcyBvciBpZCBzZWxlY3RvclxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmF2aWdhdGlvbkxpbmsgLSBjbGFzcyBzZWxlY3RvclxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3BlbkNsYXNzIC0gY2xhc3MgbmFtZVxyXG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IG9uQ2xvc2UgLSBjYWxsYmFjayB3aGVuIG1lbnUgY2xvc2VzXHJcbiAqIEBwcm9wZXJ0eSB7KCkgPT4gdm9pZH0gb25PcGVuIC0gY2FsbGJhY2sgd2hlbiBtZW51IG9wZW5zXHJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHBhcmVudFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW21lZGlhUXVlcnlDb25kaXRpb25dIC0gbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYW5pbWF0aW9uRGVsYXk9NjAwXVxyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtob3Zlck1lbnU9ZmFsc2VdIC0gTWVudSBpcyBob3ZlcmFibGVcclxuICogQHByb3BlcnR5IHtib29sZWFufSBbZGlzYWJsZUNsaWNrQXdheT1mYWxzZV1cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge09iamVjdH0gTmF2TWVudUZ1bmN0aW9uc1xyXG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IGluaXQgLSBJbml0aWFsaXplIE5hdk1lbnVcclxuICogQHByb3BlcnR5IHsobW92ZUZvY3VzOiBib29sZWFuKSA9PiB2b2lkfSB0b2dnbGVNZW51XHJcbiAqIEBwcm9wZXJ0eSB7KCkgPT4gdm9pZH0gY2xvc2VNZW51XHJcbiAqIEBwcm9wZXJ0eSB7KG1vdmVGb2N1czogYm9vbGVhbikgPT4gdm9pZH0gb3Blbk1lbnVcclxuICovXHJcblxyXG5pbXBvcnQgY2xpY2tBd2F5IGZyb20gXCJAY29tbW9uL2NsaWNrQXdheS5qc1wiO1xyXG5cclxubGV0IHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHt9LCAwKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAYXV0aG9yIFNlcmVuaXR5IERhbGxhc1xyXG4gKiBAdmVyc2lvbiAxLjJcclxuICogQHBhcmFtIHtJbml0UHJvcHN9IGluaXRQcm9wc1xyXG4gKiBAcmV0dXJucyB7TmF2TWVudUZ1bmN0aW9uc31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdk1lbnUoaW5pdFByb3BzKSB7XHJcbiAgbGV0IHByb3BzRmFpbCA9IGZhbHNlO1xyXG5cclxuICBpZiAoIWluaXRQcm9wcy5tZW51QnV0dG9uIHx8IGluaXRQcm9wcy5tZW51QnV0dG9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIidtZW51QnV0dG9uJyBzZWxlY3RvciBpcyByZXF1aXJlZFwiKTtcclxuICAgIHByb3BzRmFpbCA9IHRydWU7XHJcbiAgfVxyXG4gIGlmICghaW5pdFByb3BzLm1lbnVDb250YWluZXIgfHwgaW5pdFByb3BzLm1lbnVDb250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiJ21lbnVDb250YWluZXInIHNlbGVjdG9yIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgcHJvcHNGYWlsID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKCFpbml0UHJvcHMucGFyZW50KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiJ3BhcmVudCcgbm9kZSBlbGVtZW50IGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgcHJvcHNGYWlsID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChwcm9wc0ZhaWwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGFuaW1hdGlvbkRlbGF5OiA2MDAsXHJcbiAgICBjbG9zZWQ6IHRydWUsXHJcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcclxuICAgIG9wZW5DbGFzczogXCJpcy1vcGVuXCIsXHJcbiAgICBob3Zlck1lbnU6IGZhbHNlLFxyXG4gICAgZGlzYWJsZUNsaWNrQXdheTogZmFsc2UsXHJcbiAgICBpc0RpYWxvZzogZmFsc2UsXHJcbiAgICBpc0Rpc2FibGVkOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQcm9wcywgaW5pdFByb3BzKTtcclxuXHJcbiAgaWYgKHByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcclxuXHJcbiAgbGV0IGNsb3NlZFN0YXRlID0gcHJvcHMuY2xvc2VkO1xyXG4gIGxldCBhbmltYXRpb25EZWxheSA9IHByb3BzLmFuaW1hdGlvbkRlbGF5O1xyXG4gIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBlbFBhcmVudCA9IHByb3BzLnBhcmVudDtcclxuXHJcbiAgY29uc3QgZWxNZW51QnV0dG9uID0gZWxQYXJlbnQucXVlcnlTZWxlY3Rvcihwcm9wcy5tZW51QnV0dG9uKTtcclxuICBpZiAoIWVsTWVudUJ1dHRvbikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBlbENsb3NlQnV0dG9uID0gZWxQYXJlbnQucXVlcnlTZWxlY3Rvcihwcm9wcy5jbG9zZUJ1dHRvbik7XHJcbiAgY29uc3QgZWxNZW51Q29udGFpbmVyID0gZWxQYXJlbnQucXVlcnlTZWxlY3Rvcihwcm9wcy5tZW51Q29udGFpbmVyKTtcclxuICBjb25zdCBtZWRpYVF1ZXJ5TGlzdCA9IHByb3BzLm1lZGlhUXVlcnlDb25kaXRpb25cclxuICAgID8gbWF0Y2hNZWRpYShwcm9wcy5tZWRpYVF1ZXJ5Q29uZGl0aW9uKVxyXG4gICAgOiBudWxsO1xyXG4gIGxldCBjbGlja0F3YXlDb250cm9sbGVyO1xyXG4gIGlmICghcHJvcHMuZGlzYWJsZUNsaWNrQXdheSkge1xyXG4gICAgY2xpY2tBd2F5Q29udHJvbGxlciA9IGNsaWNrQXdheShlbFBhcmVudCwgY2xvc2VNZW51KTtcclxuICB9XHJcblxyXG4gIGlmICghcHJvcHMubWVkaWFRdWVyeUNvbmRpdGlvbiB8fCBtZWRpYVF1ZXJ5TGlzdD8ubWF0Y2hlcykgaW5pdCgpO1xyXG5cclxuICBtZWRpYVF1ZXJ5TGlzdD8uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50Lm1hdGNoZXMgPyBpbml0KCkgOiB1bm1vdW50KCk7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBwcmV2V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBmdW5jdGlvbiBjbG9zZU1lbnVNYXliZSgpIHtcclxuICAgIC8vIGlnbm9yZSBicm93c2VycyB3aXRoIGhlYWRlcnMgdGhhdCBzaG93L2hpZGUgb24gc2Nyb2xsXHJcbiAgICAvLyBlLmcuLCBtb2JpbGUgU2FmYXJpIFVSTCBiYXIgc2hyaW5rcyBhbmQgZXhwYW5kcyBvbiBzY3JvbGwsIGNhdXNpbmcgdmVydGljYWwgcmVzaXplXHJcbiAgICBpZiAocHJldldpbmRvd1dpZHRoICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICBwcmV2V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgY2xvc2VNZW51KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZUNsaWNrKGUpIHtcclxuICAgIGNsb3NlTWVudSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU1lbnVCdXR0b25DbGljayhlKSB7XHJcbiAgICB0b2dnbGVNZW51KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKGUpIHtcclxuICAgIGVsUGFyZW50LmNsYXNzTGlzdC5hZGQocHJvcHMub3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoZSkge1xyXG4gICAgLy8gbWVudSBoYXMgYmVlbiBvcGVuZWQgd2l0aCBhIGNsaWNrIG9yIGtleWJvYXJkXHJcbiAgICBpZiAoIWNsb3NlZFN0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHByb3BzLm9wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgaWYgKGVsQ2xvc2VCdXR0b24pIHtcclxuICAgICAgZWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xvc2VDbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVNZW51QnV0dG9uQ2xpY2spO1xyXG5cclxuICAgIGlmIChwcm9wcy5ob3Zlck1lbnUpIHtcclxuICAgICAgZWxNZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhhbmRsZU1vdXNlRW50ZXIpO1xyXG4gICAgICBlbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVNb3VzZUxlYXZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcclxuICAgIGlmIChlbENsb3NlQnV0dG9uKSB7XHJcbiAgICAgIGVsQ2xvc2VCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsb3NlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGVsTWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTWVudUJ1dHRvbkNsaWNrKTtcclxuXHJcbiAgICBpZiAocHJvcHMuaG92ZXJNZW51KSB7XHJcbiAgICAgIGVsTWVudUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgZWxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVNZW51KG1vdmVGb2N1cykge1xyXG4gICAgaWYgKGNsb3NlZFN0YXRlKSB7XHJcbiAgICAgIG9wZW5NZW51KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbG9zZU1lbnUobW92ZUZvY3VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgY2xvc2VkU3RhdGUgPSBmYWxzZTtcclxuICAgIGVsTWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xyXG4gICAgZWxQYXJlbnQuY2xhc3NMaXN0LmFkZChwcm9wcy5vcGVuQ2xhc3MpO1xyXG4gICAgZWxNZW51Q29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xyXG5cclxuICAgIGlmIChwcm9wcy5vbk9wZW4pIHtcclxuICAgICAgcHJvcHMub25PcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmlzRGlhbG9nKSB7XHJcbiAgICAgIGVsTWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhhc3BvcHVwXCIsIFwiZGlhbG9nXCIpO1xyXG4gICAgICBlbE1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRpYWxvZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xpY2tBd2F5Q29udHJvbGxlcikge1xyXG4gICAgICBjbGlja0F3YXlDb250cm9sbGVyLnNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2xvc2VNZW51TWF5YmUpO1xyXG5cclxuICAgIGlmIChpbml0aWFsaXplZCkge1xyXG4gICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICB0eXBlOiBcIk1lbnUgT3BlbmVkXCIsXHJcbiAgICAgICAgZXZlbnQ6IFwiZHJvcGRvd25DbGlja1wiLFxyXG4gICAgICAgIGRyb3Bkb3duU2VsZWN0aW9uOiBlbE1lbnVCdXR0b24uaW5uZXJUZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTWVudShtb3ZlRm9jdXMgPSB0cnVlKSB7XHJcbiAgICBpZiAoY2xpY2tBd2F5Q29udHJvbGxlcikge1xyXG4gICAgICBjbGlja0F3YXlDb250cm9sbGVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlZFN0YXRlID0gdHJ1ZTtcclxuICAgIGlmIChtb3ZlRm9jdXMgJiYgZWxNZW51QnV0dG9uKSB7XHJcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGlzIHRoZSBidXR0b24gdmlzaWJsZVxyXG4gICAgICAgIGlmIChlbE1lbnVCdXR0b24ub2Zmc2V0UGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBlbE1lbnVCdXR0b24uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGFuaW1hdGlvbkRlbGF5KTtcclxuICAgIH1cclxuICAgIGVsTWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcclxuICAgIGVsUGFyZW50LmNsYXNzTGlzdC5yZW1vdmUocHJvcHMub3BlbkNsYXNzKTtcclxuICAgIGVsTWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCB0cnVlKTtcclxuXHJcbiAgICBpZiAocHJvcHMub25DbG9zZSkge1xyXG4gICAgICBwcm9wcy5vbkNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2xvc2VNZW51TWF5YmUpO1xyXG5cclxuICAgIGlmIChpbml0aWFsaXplZCkge1xyXG4gICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICB0eXBlOiBcIk1lbnUgQ2xvc2VkXCIsXHJcbiAgICAgICAgZXZlbnQ6IFwiZHJvcGRvd25DbGlja1wiLFxyXG4gICAgICAgIGRyb3Bkb3duU2VsZWN0aW9uOiBlbE1lbnVCdXR0b24uaW5uZXJUZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBiaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgY29uc3QgY29udHJvbElkID0gZWxNZW51Q29udGFpbmVyLmlkIHx8IHVuaXF1ZUlkKFwibWVudVwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbklkID0gZWxNZW51QnV0dG9uLmlkIHx8IHVuaXF1ZUlkKFwibWVudVwiKTtcclxuXHJcbiAgICBlbE1lbnVCdXR0b24uaWQgPSBidXR0b25JZDtcclxuICAgIGVsTWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIGNvbnRyb2xJZCk7XHJcblxyXG4gICAgZWxNZW51Q29udGFpbmVyLmlkID0gY29udHJvbElkO1xyXG4gICAgZWxNZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBidXR0b25JZCk7XHJcblxyXG4gICAgaWYgKGNsb3NlZFN0YXRlKSB7XHJcbiAgICAgIGNsb3NlTWVudShmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcGVuTWVudShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdW5tb3VudCgpIHtcclxuICAgIGVsTWVudUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpO1xyXG4gICAgZWxNZW51QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XHJcbiAgICBlbE1lbnVDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpO1xyXG4gICAgZWxNZW51Q29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xyXG4gICAgdW5iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc0Nsb3NlZCgpIHtcclxuICAgIHJldHVybiBjbG9zZWRTdGF0ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0LFxyXG4gICAgdG9nZ2xlTWVudSxcclxuICAgIG9wZW5NZW51LFxyXG4gICAgY2xvc2VNZW51LFxyXG4gICAgaXNDbG9zZWQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgTmF2TWVudSBmcm9tIFwiQGNvbW1vbi9OYXZNZW51XCI7XHJcbmltcG9ydCBET01QdXJpZnkgZnJvbSBcImRvbXB1cmlmeVwiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFBDVERSLTU2IC0gUXVpY2sgU2VhcmNoXHJcbiAqIEBwYXJhbSB7bm9kZX0gZWwgLSBlaXRoZXIgZGVza3RvcCBvciBtb2JpbGUgc2VhcmNoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UXVpY2tTZWFyY2gobWVudSwgZWwpIHtcclxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGVsO1xyXG5cclxuICBpZiAoIWVsKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHF1aWNrU2VhcmNoQm94ID0gZWwuY2xvc2VzdChcIi5xdWljay1zZWFyY2gtYm94XCIpOyAvLyBQYXJlbnQgZWxcclxuXHJcbiAgY29uc3QgcXVpY2tTZWFyY2hCb3hXcmFwcGVyID0gcXVpY2tTZWFyY2hCb3g/LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5xdWljay1zZWFyY2gtYm94X193cmFwcGVyXCIsXHJcbiAgKTtcclxuICBjb25zdCBjbG9zZUJ1dHRvbkVsID0gcXVpY2tTZWFyY2hCb3g/LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5qcy1xdWljay1zZWFyY2gtY2xlYXItYW5kLWNsb3NlXCIsXHJcbiAgKTtcclxuICBjb25zdCBzZWFyY2hGb3JMYWJlbCA9XHJcbiAgICBlbD8uY2xvc2VzdChcIltkYXRhLXNlYXJjaC1mb3ItbGFiZWxdXCIpPy5kYXRhc2V0Py5zZWFyY2hGb3JMYWJlbCB8fFxyXG4gICAgXCJTZWFyY2ggZm9yXCI7XHJcblxyXG4gIC8vIFRyYWNrIGNvbWJvLWJveCBhY3RpdmUgaXRlbVxyXG4gIGxldCBhY3RpdmVJbmRleCA9IC0xO1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImNvbWJvYm94XCIpO1xyXG4gICAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiLCBcImxpc3Rib3hcIik7XHJcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIFwicXVpY2stc2VhcmNoLXN1Z2dlc3Rpb25zXCIpO1xyXG5cclxuICAgIGJpbmRFdmVudHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBiaW5kRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVR5cGUoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBxdWlja1NlYXJjaEJveD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5Ym9hcmQpO1xyXG4gICAgY2xvc2VCdXR0b25FbD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0l0ZW0gPSAoZSwgaW5kZXgpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgcXVpY2tTZWFyY2hCb3guc3VibWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSBlLnRhcmdldC5pbm5lclRleHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XHJcblxyXG4gICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICB9O1xyXG5cclxuICAvLyBSZXNldCBwcmV2aW91cyByZXN1bHQocylcclxuICBjb25zdCBjbG9zZVN1Z2dlc3Rpb25zID0gKCkgPT4ge1xyXG4gICAgLy8gVGhlIGxpc3Qgb2Ygb3B0aW9ucyBpcyBhbm5vdW5jZWQgdG8gc2NyZWVuIHJlYWRlciB1c2Vyc1xyXG4gICAgY29uc3Qgc3JUZXh0ID0gcXVpY2tTZWFyY2hCb3g/LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWJveC1zci10ZXh0XCIpO1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbkVsID0gcXVpY2tTZWFyY2hCb3g/LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLnNlYXJjaC1ib3hfX3N1Z2dlc3Rpb24tYm94XCIsXHJcbiAgICApO1xyXG5cclxuICAgIHNyVGV4dC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIHN1Z2dlc3Rpb25FbD8ucmVtb3ZlKCk7XHJcblxyXG4gICAgYWN0aXZlSW5kZXggPSAtMTtcclxuXHJcbiAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIGZhbHNlKTtcclxuICAgIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLCBcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUeXBlID0gZGVib3VuY2UoYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBzdWdnZXN0aW9uQm94RWwgPSBxdWlja1NlYXJjaEJveD8ucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuc2VhcmNoLWJveF9fc3VnZ2VzdGlvbi1ib3hcIixcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGlucHV0Py5sZW5ndGggPj0gMykge1xyXG4gICAgICBjb25zdCB1cmwgPVxyXG4gICAgICAgIGltcG9ydC5tZXRhLmVudj8uU1RPUllCT09LID09PSBcInRydWVcIiB8fFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gXCJsb2NhbGhvc3RcIlxyXG4gICAgICAgICAgPyBgaHR0cHM6Ly9kZXYucGV3LnZlbGlyLm5ldC9hcGkvU2VhcmNoU3VnZ2VzdEFwaS9HZXRTdWdnZXN0aW9ucz90ZXJtPSR7aW5wdXR9JnVybD1odHRwczovL2Rldi5wZXcudmVsaXIubmV0YFxyXG4gICAgICAgICAgOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvU2VhcmNoU3VnZ2VzdEFwaS9HZXRTdWdnZXN0aW9ucz90ZXJtPSR7aW5wdXR9JnVybD0ke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59YDtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogXCJnZXRcIiB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBjb25zdCBzdWdnZXN0aW9uQm94ID0gc3VnZ2VzdGlvbkJveEVsXHJcbiAgICAgICAgPyBzdWdnZXN0aW9uQm94RWxcclxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICAgIGlmICghc3VnZ2VzdGlvbkJveEVsKSB7XHJcbiAgICAgICAgc3VnZ2VzdGlvbkJveC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWJveF9fc3VnZ2VzdGlvbi1ib3hcIik7XHJcbiAgICAgICAgc3VnZ2VzdGlvbkJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInF1aWNrLXNlYXJjaC1zdWdnZXN0aW9uc1wiKTtcclxuICAgICAgICBzdWdnZXN0aW9uQm94LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJsaXN0Ym94XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzdHJSZWdFeHAgPSBuZXcgUmVnRXhwKGlucHV0LCBcImdpXCIpO1xyXG5cclxuICAgICAgaWYgKGRhdGE/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBCdWlsZCBzdWdnZXN0aW9uIGxpc3RcclxuICAgICAgICBzdWdnZXN0aW9uQm94LmlubmVySFRNTCA9IERPTVB1cmlmeS5zYW5pdGl6ZShgXHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlYXJjaC1ib3hfX3N1Z2dlc3Rpb24tbGlzdFwiIHJvbGU9XCJsaXN0Ym94XCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VhcmNoLWJveF9fc3VnZ2VzdGlvbi1pdGVtIHNlYXJjaC1ib3hfX3VzZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VhcmNoLWJveF9fc3VnZ2VzdGlvbi1sYWJlbFwiPiR7c2VhcmNoRm9yTGFiZWx9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWFyY2gtYm94X19zdWdnZXN0aW9uXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwicXVpY2stc2VhcmNoLWl0ZW0tMFwiPiR7aW5wdXQucmVwbGFjZShcclxuICAgICAgICAgICAgICAgICAgc3RyUmVnRXhwLFxyXG4gICAgICAgICAgICAgICAgICAobWF0Y2gpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYDxzdHJvbmcgY2xhc3M9XCJzZWFyY2gtYm94X19tYXRjaGVkLXRleHRcIj4ke21hdGNofTwvc3Ryb25nPmAsXHJcbiAgICAgICAgICAgICAgICApfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgJHtkYXRhXHJcbiAgICAgICAgICAgICAgICA/Lm1hcChcclxuICAgICAgICAgICAgICAgICAgKGQsIGluZGV4KSA9PiBgXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWFyY2gtYm94X19zdWdnZXN0aW9uLWl0ZW1cIiByb2xlPVwib3B0aW9uXCIgaWQ9XCJxdWljay1zZWFyY2gtaXRlbS0ke1xyXG4gICAgICAgICAgICAgICAgICBpbmRleCArIDFcclxuICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaC1ib3hfX3N1Z2dlc3Rpb25cIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtkLnJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJSZWdFeHAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAobWF0Y2gpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8c3Ryb25nIGNsYXNzPVwic2VhcmNoLWJveF9fbWF0Y2hlZC10ZXh0XCI+JHttYXRjaH08L3N0cm9uZz5gLFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICBgKTtcclxuXHJcbiAgICAgICAgcXVpY2tTZWFyY2hCb3hXcmFwcGVyPy5hcHBlbmQoc3VnZ2VzdGlvbkJveCk7XHJcblxyXG4gICAgICAgIFsuLi5xdWlja1NlYXJjaEJveC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlYXJjaC1ib3hfX3N1Z2dlc3Rpb25cIildLmZvckVhY2goXHJcbiAgICAgICAgICAoc3VnZ2VzdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc3VnZ2VzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tJdGVtKGUsIGluZGV4KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gUG9wdWxhdGUgbGl2ZSBhbm5vdW5jZW1lbnQgd2l0aCByZXN1bHQgdGV4dFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3JUZXh0ID0gcXVpY2tTZWFyY2hCb3g/LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIFwiLmpzLXNlYXJjaC1ib3gtc3ItdGV4dFwiLFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoc3JUZXh0KSB7XHJcbiAgICAgICAgICAgIHNyVGV4dC5pbm5lckhUTUwgPSBET01QdXJpZnkuc2FuaXRpemUoXHJcbiAgICAgICAgICAgICAgYFRoZXJlIGFyZSBjdXJyZW50bHkgJHtkYXRhPy5sZW5ndGh9IG9wdGlvbnMgc3RhcnRpbmcgd2l0aCAke2lucHV0fS4gUHJlc3MgZG93biBhcnJvdyBmb3Igb3B0aW9uc2AsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wdXQgPT09IFwiXCIpIHtcclxuICAgICAgY2xlYXIoKTtcclxuICAgIH1cclxuICB9LCA1MDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVLZXlib2FyZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBsZXQgcHJldkFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XHJcblxyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBxdWlja1NlYXJjaEJveD8ucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuc2VhcmNoLWJveF9fc3VnZ2VzdGlvblwiLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25FbCA9IHF1aWNrU2VhcmNoQm94Py5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5zZWFyY2gtYm94X19zdWdnZXN0aW9uLWJveFwiLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoIXN1Z2dlc3Rpb25FbCkgcmV0dXJuO1xyXG5cclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSAtMSB8fCBhY3RpdmVJbmRleCA+PSBzdWdnZXN0aW9ucz8ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVJbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPD0gMCkge1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBzdWdnZXN0aW9ucz8ubGVuZ3RoIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXgtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJFbnRlclwiOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBxdWlja1NlYXJjaEJveC5zdWJtaXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2QWN0aXZlID0gcXVpY2tTZWFyY2hCb3gucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCNxdWljay1zZWFyY2gtaXRlbS0ke3ByZXZBY3RpdmVJbmRleH1gLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSBxdWlja1NlYXJjaEJveC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgI3F1aWNrLXNlYXJjaC1pdGVtLSR7YWN0aXZlSW5kZXh9YCxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHByZXZBY3RpdmUpIHtcclxuICAgICAgcHJldkFjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGl2ZUl0ZW0pIHtcclxuICAgICAgYWN0aXZlSXRlbS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpO1xyXG4gICAgICBzZWFyY2hJbnB1dD8uc2V0QXR0cmlidXRlKFxyXG4gICAgICAgIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsXHJcbiAgICAgICAgYHF1aWNrLXNlYXJjaC1pdGVtLSR7YWN0aXZlSW5kZXh9YCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gYWN0aXZlSXRlbS5pbm5lclRleHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICBjb25zdCB7IGNsb3NlTWVudTogY2xvc2VTZWFyY2hNZW51LCBpc0Nsb3NlZCB9ID0gTmF2TWVudSh7XHJcbiAgICBtZW51QnV0dG9uOiBcIi5qcy1zZWFyY2gtbWVudS1idXR0b25cIixcclxuICAgIG1lbnVDb250YWluZXI6IFwiLmpzLXNlYXJjaC1tZW51LWRyb3Bkb3duXCIsXHJcbiAgICBvcGVuQ2xhc3M6IFwic2VhcmNoLW1lbnUtLW9wZW5cIixcclxuICAgIG9uT3BlbjogKCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGVsLmZvY3VzKCksIDIwMCk7XHJcbiAgICB9LFxyXG4gICAgcGFyZW50OiBtZW51LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2xvc2VTZWFyY2hNZW51LFxyXG4gICAgaXNDbG9zZWQsXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBNRURJQV9RVUVSSUVTIH0gZnJvbSBcIkBjb21tb24vY29uc3RhbnRzL2JyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCBOYXZNZW51IGZyb20gXCJAY29tbW9uL05hdk1lbnVcIjtcclxuaW1wb3J0IFF1aWNrU2VhcmNoIGZyb20gXCIuL1NlYXJjaE1lbnUvUXVpY2tTZWFyY2gvUXVpY2tTZWFyY2guaW5pdFwiO1xyXG5cclxuZnVuY3Rpb24gYmluZE5hdkV2ZW50cyhnbG9iYWxIZWFkZXIsIG5hdkl0ZW1zLCBjb250YWluZXIpIHtcclxuICBjb25zdCBzZWFyY2hNZW51ID0gZ2xvYmFsSGVhZGVyPy5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1tZW51XCIpO1xyXG5cclxuICBjb25zdCBxdWlja1NlYXJjaEVsID0gZ2xvYmFsSGVhZGVyPy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuanMtcXVpY2stc2VhcmNoLWlucHV0IGlucHV0XCIsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcXVpY2tTZWFyY2ggPSBRdWlja1NlYXJjaChzZWFyY2hNZW51LCBxdWlja1NlYXJjaEVsKTtcclxuXHJcbiAgLy8gTW9iaWxlIE1lbnVcclxuICBOYXZNZW51KHtcclxuICAgIG1lbnVCdXR0b246IFwiLmpzLW5hdi1tZW51LWJ1dHRvblwiLFxyXG4gICAgbWVudUNvbnRhaW5lcjogXCIuanMtcHJpbWFyeS1uYXZcIixcclxuICAgIG9wZW5DbGFzczogXCJwcmltYXJ5LW5hdi0tb3BlblwiLFxyXG4gICAgb25PcGVuKCkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1uYXYtb3BlblwiKTtcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1uYXYtb3BlblwiKTtcclxuICAgIH0sXHJcbiAgICBtZWRpYVF1ZXJ5Q29uZGl0aW9uOiBNRURJQV9RVUVSSUVTLkdMT0JBTF9IRUFERVJfTUFYLFxyXG4gICAgcGFyZW50OiBjb250YWluZXIsXHJcbiAgfSk7XHJcblxyXG4gIG5hdkl0ZW1zLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gV2UgbmVlZCB0d28gY2FsbHMgdG8gTmF2TWVudSwgYmVjYXVzZSBkZXNrdG9wIGlzIGEgaG92ZXIgbWVudVxyXG4gICAgLy8gYW5kIG1vYmlsZSBpcyBub3QuXHJcbiAgICAvLyBEZXNrdG9wIE5hdiBJdGVtIE1lbnVcclxuICAgIE5hdk1lbnUoe1xyXG4gICAgICBtZW51QnV0dG9uOiBcIi5qcy1wcmltYXJ5LW5hdi1idXR0b25cIixcclxuICAgICAgbWVudUNvbnRhaW5lcjogXCIuanMtcHJpbWFyeS1uYXYtZHJvcGRvd25cIixcclxuICAgICAgb25PcGVuKCkge1xyXG4gICAgICAgIGlmICghcXVpY2tTZWFyY2guaXNDbG9zZWQoKSkge1xyXG4gICAgICAgICAgcXVpY2tTZWFyY2g/LmNsb3NlU2VhcmNoTWVudShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBwYXJlbnQ6IGVsLFxyXG4gICAgICBtZWRpYVF1ZXJ5Q29uZGl0aW9uOiBNRURJQV9RVUVSSUVTLkdMT0JBTF9IRUFERVJfTUlOLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIE5hdiBJdGVtIE1lbnVcclxuICAgIE5hdk1lbnUoe1xyXG4gICAgICBtZW51QnV0dG9uOiBcIi5qcy1wcmltYXJ5LW5hdi1idXR0b25cIixcclxuICAgICAgbWVudUNvbnRhaW5lcjogXCIuanMtcHJpbWFyeS1uYXYtZHJvcGRvd25cIixcclxuICAgICAgbWVkaWFRdWVyeUNvbmRpdGlvbjogTUVESUFfUVVFUklFUy5HTE9CQUxfSEVBREVSX01BWCxcclxuICAgICAgcGFyZW50OiBlbCxcclxuICAgICAgZGlzYWJsZUNsaWNrQXdheTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0R2xvYmFsSGVhZGVyKCkge1xyXG4gIGNvbnN0IGdsb2JhbEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtZ2xvYmFsLWhlYWRlclwiKTtcclxuXHJcbiAgaWYgKCFnbG9iYWxIZWFkZXIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBnbG9iYWxIZWFkZXIuY2xvc2VzdChcImhlYWRlclwiKTtcclxuICBjb25zdCBnbG9iYWxIZWFkZXJIZWlnaHQgPSBnbG9iYWxIZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG4gIGNvbnN0IHByaW1hcnlOYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuanMtcHJpbWFyeS1uYXYtY29udGFpbmVyXCIsXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgbmF2SXRlbXMgPSBBcnJheS5mcm9tKFxyXG4gICAgZ2xvYmFsSGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcHJpbWFyeS1uYXYtaXRlbVwiKSxcclxuICApO1xyXG5cclxuICBjb25zdCB1cGRhdGVDU1NWYXIgPSAoaGVpZ2h0KSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbiAgICAgIFwiLS1nbG9iYWwtaGVhZGVyLWhlaWdodFwiLFxyXG4gICAgICBgJHtoZWlnaHR9cHhgLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVDU1NWYXIoZ2xvYmFsSGVhZGVySGVpZ2h0KTtcclxuXHJcbiAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKFtlbnRyeV0pID0+IHtcclxuICAgIHVwZGF0ZUNTU1ZhcihlbnRyeS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gMSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN0aWNreU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgKFtlXSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtc3RpY2t5XCIsIGUuaW50ZXJzZWN0aW9uUmF0aW8gPCAxKTtcclxuICAgIH0sXHJcbiAgICB7IHRocmVzaG9sZDogWzFdIH0sXHJcbiAgKTtcclxuXHJcbiAgaWYgKGhlYWRlcldyYXBwZXIpIHtcclxuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoaGVhZGVyV3JhcHBlcik7XHJcbiAgICBzdGlja3lPYnNlcnZlci5vYnNlcnZlKGhlYWRlcldyYXBwZXIpO1xyXG4gIH1cclxuXHJcbiAgYmluZE5hdkV2ZW50cyhnbG9iYWxIZWFkZXIsIG5hdkl0ZW1zLCBwcmltYXJ5TmF2Q29udGFpbmVyKTtcclxufVxyXG4iLCIvKipcclxuICogR2V0IHdvcmQgY291bnQgb2YgYSBzaW5nbGUgZWxlbWVudFxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFbGVtZW50V29yZENvdW50KGVsKSB7XHJcbiAgY29uc3QgdGV4dCA9IGVsLmlubmVyVGV4dDtcclxuICBjb25zdCB3b3JkQ291bnQgPSB0ZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmxlbmd0aDtcclxuICByZXR1cm4gd29yZENvdW50O1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHRvdGFsIHdvcmQgY291bnQgb2YgbXVsdGlwbGUgZWxlbWVudHNcclxuICogQHBhcmFtIHtFbGVtZW50IHwgTm9kZUxpc3RPZjxFbGVtZW50Pn0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXb3JkQ291bnQodGFyZ2V0KSB7XHJcbiAgLy8gU2luZ2xlIGVsZW1lbnQgcGFzc2VkXHJcbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBnZXRFbGVtZW50V29yZENvdW50KHRhcmdldCk7XHJcbiAgfVxyXG5cclxuICAvLyBNdWx0aXBsZSBlbGVtZW50cyBwYXNzZWRcclxuICByZXR1cm4gQXJyYXkuZnJvbSh0YXJnZXQpLnJlZHVjZShcclxuICAgICh0b3RhbCwgZWwpID0+IHRvdGFsICsgZ2V0RWxlbWVudFdvcmRDb3VudChlbCksXHJcbiAgICAwLFxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5jb29raWVcclxuICAgIC5zcGxpdChcIjsgXCIpXHJcbiAgICAuZmluZCgocm93KSA9PiByb3cuc3RhcnRzV2l0aChuYW1lICsgXCI9XCIpKTtcclxuICByZXR1cm4gdmFsdWUgPyBkZWNvZGVVUklDb21wb25lbnQodmFsdWUuc3BsaXQoXCI9XCIpWzFdKSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGlmICghbmFtZSB8fCAhdmFsdWUpIHtcclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgXCJzZXRDb29raWU6IENvb2tpZSBuYW1lIGFuZCB2YWx1ZSBhcmUgcmVxdWlyZWQuIENvb2tpZSBjb3VsZCBub3QgYmUgc2V0LlwiLFxyXG4gICAgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgcGF0aCA9IFwiL1wiLCBzYW1lU2l0ZSA9IFwiU3RyaWN0XCIsIHNlY3VyZSA9IHRydWUgfSA9IG9wdGlvbnM7XHJcblxyXG4gIGxldCBjb29raWUgPSBgJHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgIHZhbHVlLFxyXG4gICl9OyBwYXRoPSR7cGF0aH07IFNhbWVTaXRlPSR7c2FtZVNpdGV9YDtcclxuXHJcbiAgaWYgKHNlY3VyZSkgY29va2llICs9IFwiOyBTZWN1cmVcIjtcclxuXHJcbiAgZG9jdW1lbnQuY29va2llID0gY29va2llO1xyXG59XHJcbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclhEQkV2ZW50KGV2ZW50SWQsIGNvbXBvbmVudE5hbWUsIG5ld3NsZXR0ZXJJZCkge1xyXG4gIGNvbnN0IGdvYWwgPSB7XHJcbiAgICBpZDogZXZlbnRJZCxcclxuICAgIGNvbXBvbmVudE5hbWUsXHJcbiAgICBuZXdzbGV0dGVySWQsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGdvYWwpLFxyXG4gIH07XHJcblxyXG4gIGlmIChpbXBvcnQubWV0YS5lbnY/LlNUT1JZQk9PSyA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIC8vIERvbid0IHRyYWNrIGluIFN0b3J5Ym9va1xyXG4gICAgY29uc29sZS5sb2coZ29hbCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ29hbHMvcmVnaXN0ZXJldmVudFwiLCBvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBTdGF0dXMgRXJyb3I6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVuY291bnRlcmVkIGVycm9yIHJlZ2lzdGVyaW5nIHhEQiBnb2FsXCIsIGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFhEQkdvYWxUcmFja2luZygpIHtcclxuICBjb25zdCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnhkYnBlXCIpO1xyXG4gIGVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV2ZW50SWQgPSBlbC5kYXRhc2V0LnhkYnBlO1xyXG4gICAgICBjb25zdCBjb21wb25lbnROYW1lID1cclxuICAgICAgICBlbC5kYXRhc2V0LnNpdGVjb3JlQ29tcG9uZW50TmFtZSB8fFxyXG4gICAgICAgIGVsLmNsb3Nlc3QoXCJbZGF0YS1zaXRlY29yZS1jb21wb25lbnQtbmFtZV1cIik/LmRhdGFzZXRcclxuICAgICAgICAgIC5zaXRlY29yZUNvbXBvbmVudE5hbWU7XHJcbiAgICAgIHJlZ2lzdGVyWERCRXZlbnQoZXZlbnRJZCwgY29tcG9uZW50TmFtZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmlyc3RWaXNpdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi54ZGJwZS1wcm9qZWN0LCAueGRicGUtdG9waWNcIik7XHJcbiAgaWYgKGZpcnN0VmlzaXRFbCkge1xyXG4gICAgcmVnaXN0ZXJYREJFdmVudChmaXJzdFZpc2l0RWw/LmRhdGFzZXQueGRicGUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCJ2aXRlL21vZHVsZXByZWxvYWQtcG9seWZpbGxcIjsgLy8gVE9ETzogSXMgdGhpcyBuZWVkZWQ/IGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvYnVpbGQtb3B0aW9ucyNidWlsZC1tb2R1bGVwcmVsb2FkXHJcbi8vIGltcG9ydCB7IG9uTENQLCBvbkZJRCwgb25DTFMgfSBmcm9tIFwid2ViLXZpdGFscy9hdHRyaWJ1dGlvblwiO1xyXG5pbXBvcnQgZHluYW1pY1JlbmRlcmVyIGZyb20gXCIuL3V0aWxzL2R5bmFtaWNSZW5kZXJlclwiO1xyXG5pbXBvcnQgaW5pdEdsb2JhbEhlYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvR2xvYmFsSGVhZGVyL0dsb2JhbEhlYWRlci5pbml0XCI7XHJcbmltcG9ydCBnZXRXb3JkQ291bnQgZnJvbSBcIkBjb21tb24vZ2V0V29yZENvdW50XCI7XHJcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gXCJAY29tbW9uL2Nvb2tpZXNcIjtcclxuaW1wb3J0IHsgaW5pdFhEQkdvYWxUcmFja2luZyB9IGZyb20gXCJAY29tbW9uL3hEQlwiO1xyXG5cclxuLy8gUmVhZCBRdWVyeSBTdHJpbmdcclxuY29uc3Qgc3RvcmVTZWFyY2hQYXJhbXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgcGFyYW1zLmVudHJpZXMoKSkge1xyXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KSA9PT0gbnVsbCkge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0U3Vic2NyaWJlcktleUNvb2tpZSgpIHtcclxuICAvLyBJZiBzdWJzY3JpYmVya2V5IHF1ZXJ5IHBhcmFtIGV4aXN0cyBhbmQgbWFya2V0aW5nIGNvb2tpZXNcclxuICAvLyBhcmUgYWNjZXB0ZWQsIHNldCBzdWJzY3JpYmVya2V5IGNvb2tpZVxyXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3Qgc3Vic2NyaWJlcktleSA9IHBhcmFtcy5nZXQoXCJzdWJzY3JpYmVya2V5XCIpO1xyXG5cclxuICBpZiAoc3Vic2NyaWJlcktleSkge1xyXG4gICAgY29uc3QgaXNTdG9yeWJvb2sgPSBpbXBvcnQubWV0YS5lbnY/LlNUT1JZQk9PSyA9PT0gXCJ0cnVlXCI7XHJcbiAgICBjb25zdCBPTkVfVFJVU1RfTUFSS0VUSU5HX0NPT0tJRVNfSUQgPSBcIkMwMDA0XCI7XHJcbiAgICBpZiAoXHJcbiAgICAgICh3aW5kb3cuT25ldHJ1c3RBY3RpdmVHcm91cHMgJiZcclxuICAgICAgICB3aW5kb3cuT25ldHJ1c3RBY3RpdmVHcm91cHMuaW5jbHVkZXMoT05FX1RSVVNUX01BUktFVElOR19DT09LSUVTX0lEKSkgfHxcclxuICAgICAgaXNTdG9yeWJvb2tcclxuICAgICkge1xyXG4gICAgICBzZXRDb29raWUoXCJzdWJzY3JpYmVya2V5XCIsIHN1YnNjcmliZXJLZXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93Lk9wdGFub25XcmFwcGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHdpbmRvdy5PbmV0cnVzdEFjdGl2ZUdyb3Vwcy5pbmNsdWRlcyhPTkVfVFJVU1RfTUFSS0VUSU5HX0NPT0tJRVNfSUQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBzZXRDb29raWUoXCJzdWJzY3JpYmVya2V5XCIsIHN1YnNjcmliZXJLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgXCJET01Db250ZW50TG9hZGVkXCIsXHJcbiAgZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdEdsb2JhbEhlYWRlcigpO1xyXG4gICAgLy8gR2xvYmFsc1xyXG4gICAgc3RvcmVTZWFyY2hQYXJhbXMoKTtcclxuICAgIHNldFN1YnNjcmliZXJLZXlDb29raWUoKTtcclxuICAgIC8vIEpTIENvbXBvbmVudHNcclxuICAgIGR5bmFtaWNSZW5kZXJlcihbXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtc2Nyb2xsLWFuaW1hdGlvblwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tbW9uL3Njcm9sbEludG9WaWV3LmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1jbGlja2FibGUtY2FyZFwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tbW9uL2NsaWNrYWJsZUNhcmQuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLW5ld3NsZXR0ZXItc2lnbnVwLWZvcm1cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvTmV3c2xldHRlclNpZ251cC9OZXdzbGV0dGVyU2lnbnVwLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1kZXRhaWxzLWVsZW1lbnRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvRGV0YWlsc0VsZW1lbnQvRGV0YWlsc0VsZW1lbnQuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLWRldGFpbHMtYWNjb3JkaW9uXCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL0RldGFpbHNBY2NvcmRpb24vRGV0YWlsc0FjY29yZGlvbi5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtc2hhcmUtYnRuLXJvb3RcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvU2hhcmVCdXR0b24vU2hhcmVCdXR0b24uaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXJlbGF0ZWQtY29udGVudC1pdGVtXCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL1JlbGF0ZWRDb250ZW50L3JlbGF0ZWRDb250ZW50SXRlbS5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtcGFnZS1tZXRhZGF0YVwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9QYWdlTWV0YWRhdGEvUGFnZU1ldGFkYXRhLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1kcm9wZG93blwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtbGFuZ3VhZ2Utc2VsZWN0b3JcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvTGFuZ3VhZ2VTZWxlY3Rvci9MYW5ndWFnZVNlbGVjdG9yLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1yaWNoLXRleHQgdGFibGVcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvVGFibGUvVGFibGUuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXNoYXJlLWJhclwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9TaGFyZUJhci9TaGFyZUJhci5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtc2hhcmUtZHJvcGRvd25cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvU2hhcmVEcm9wZG93bi9TaGFyZURyb3Bkb3duLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1pbi1wYWdlLW5hdmlnYXRpb25cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvSW5QYWdlTmF2aWdhdGlvbi9JblBhZ2VOYXZpZ2F0aW9uLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1wYWdlLWhlYWRlci1leHBhbmRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvUGFnZUhlYWRlci9QYWdlSGVhZGVyLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy12aWRlby1lbGVtZW50XCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL1ZpZGVvRWxlbWVudC9WaWRlb0VsZW1lbnQuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLWNvZGUtZW1iZWRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvQ29kZUVtYmVkRHJvcGRvd24vQ29kZUVtYmVkRHJvcGRvd24uaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXNlY3Rpb24tbmF2aWdhdGlvblwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9TZWN0aW9uTmF2aWdhdGlvbi9TZWN0aW9uTmF2aWdhdGlvbi5pbml0LmpzXCIsXHJcbiAgICAgICAgaW1wb3J0T25seTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1saW5rLW5hdmlnYXRpb25cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvTGlua05hdmlnYXRpb24vTGlua05hdmlnYXRpb24uaW5pdC5qc1wiLFxyXG4gICAgICAgIGltcG9ydE9ubHk6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtcmljaC10ZXh0XCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL1NlbGVjdGlvblNoYXJlL1NlbGVjdGlvblNoYXJlLmluaXQuanNcIixcclxuICAgICAgICBpbXBvcnRPbmx5OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXlvdXR1YmUtdmlkZW9cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvWW91VHViZVZpZGVvL1lvdVR1YmVWaWRlby5pbml0LmpzXCIsXHJcbiAgICAgICAgaW1wb3J0T25seTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy10YWJzXCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21tb24vdGFicy5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtcmljaC10ZXh0LWZpZWxkXCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL1JpY2hUZXh0L1JpY2hUZXh0RmllbGQuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXNraXAtbGlua1wiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9Ta2lwTGluay9Ta2lwTGluay5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtbWVkaWEtZ2FsbGVyeVwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9NZWRpYUdhbGxlcnkvTWVkaWFHYWxsZXJ5LmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1wcm9kdWN0LW5hdmlnYXRpb25cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvUHJvZHVjdE5hdmlnYXRpb24vUHJvZHVjdE5hdmlnYXRpb24uaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLWFuaW1hdGVkLWhlcm9cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvQW5pbWF0ZWRIZXJvL0FuaW1hdGVkSGVyby5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtZGlhbG9nLWNvbXBvbmVudFwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9EaWFsb2dFbGVtZW50L0RpYWxvZ0VsZW1lbnQuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLWludGVyc3RpdGlhbC1wb3B1cFwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9JbnRlcnN0aXRpYWxQb3B1cC9JbnRlcnN0aXRpYWxQb3B1cC5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtZmxpcC10aWxlXCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL0ZsaXBUaWxlL0ZsaXBUaWxlLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1tdWx0aXBsZS1mbGlwLXRpbGUtY29udGFpbmVyXCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL011bHRpcGxlRmxpcFRpbGVDb250YWluZXIvTXVsdGlwbGVGbGlwVGlsZUNvbnRhaW5lci5pbml0LmpzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtZmxpcC1iYW5uZXJcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvRmxpcEJhbm5lci9GbGlwQmFubmVyLmluaXQuanNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1mYWN0LXNsaWRlclwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9GYWN0U2xpZGVyL0ZhY3RTbGlkZXIuaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXdoYXQtd2UtZG9cIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvV2hhdFdlRG8vV2hhdFdlRG8uaW5pdC5qc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBSZWFjdCBjb21wb25lbnRzXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtZHluYW1pYy1jb250ZW50LWxpc3RpbmctbW91bnRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvRHluYW1pY0NvbnRlbnRMaXN0aW5nL0R5bmFtaWNDb250ZW50TGlzdGluZy5yZW5kZXIuanN4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtcGVvcGxlLWxpc3RpbmctbW91bnRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvUGVvcGxlTGlzdGluZy9QZW9wbGVMaXN0aW5nLnJlbmRlci5qc3hcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1zZWFyY2gtbW91bnRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5yZW5kZXIuanN4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtY2hvcm9wbGV0aC1tb3VudFwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9NYXBUb29sL01hcFRvb2wucmVuZGVyLmpzeFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLXNlY3Rpb24tbmF2LWFwcFwiLFxyXG4gICAgICAgIG5hbWU6IFwiY29tcG9uZW50cy9TZWN0aW9uTmF2aWdhdGlvbi9OYXZpZ2F0aW9uQXBwL1NlY3Rpb25OYXYucmVuZGVyLmpzeFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0b3I6IFwiLmpzLWZvcm0tc2VsZWN0XCIsXHJcbiAgICAgICAgbmFtZTogXCJjb21wb25lbnRzL0Zvcm0vU2VsZWN0L1NlbGVjdC5yZW5kZXIuanN4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RvcjogXCIuanMtc2Nob2xhci1kaXJlY3RvcnktbW91bnRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvU2Nob2xhckRpcmVjdG9yeS9TY2hvbGFyRGlyZWN0b3J5LnJlbmRlci5qc3hcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdG9yOiBcIi5qcy1zY2hvbGFyLXBhZ2luYXRpb24tbW91bnRcIixcclxuICAgICAgICBuYW1lOiBcImNvbXBvbmVudHMvU2Nob2xhclNlYXJjaFJlc3VsdHMvU2Nob2xhclNlYXJjaFJlc3VsdHMucmVuZGVyLmpzeFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gUGFnZSBWYXJzIEdUTVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tY29udGVudFwiKTtcclxuICAgIGlmIChtYWluQ29udGVudCkge1xyXG4gICAgICBjb25zdCBpbWdDb3VudCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIikubGVuZ3RoO1xyXG4gICAgICBjb25zdCBpbWdDb3VudEdyb3VwID0gaW1nQ291bnQgPD0gOSA/IGltZ0NvdW50LnRvU3RyaW5nKCkgOiBcIjEwK1wiO1xyXG4gICAgICBjb25zdCB3b3JkQ291bnQgPSBnZXRXb3JkQ291bnQobWFpbkNvbnRlbnQpO1xyXG5cclxuICAgICAgY29uc3QgZW5nYWdlbWVudE9wdGlvbnMgPSBbXTtcclxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVbc3JjKj15b3V0dWJlXVwiKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGVuZ2FnZW1lbnRPcHRpb25zLnB1c2goXCJZb3VUdWJlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wY3QtZXhwYW5kLW1vcmVcIikgIT09IG51bGwpIHtcclxuICAgICAgICBlbmdhZ2VtZW50T3B0aW9ucy5wdXNoKFwiTW9yZSBUb2dnbGVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bmxvYWRzLWRyb3Bkb3duLCBhW3R5cGU9XCJkb3dubG9hZFwiJykgIT09XHJcbiAgICAgICAgbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBlbmdhZ2VtZW50T3B0aW9ucy5wdXNoKFwiRG93bmxvYWRcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbiAgICAgIGRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICBldmVudDogXCJwYWdlVmFyUHVzaFwiLFxyXG4gICAgICAgIGVuZ2FnZW1lbnRPcHRpb25zLFxyXG4gICAgICAgIHdvcmRDb3VudCxcclxuICAgICAgICBpbWdDb3VudCxcclxuICAgICAgICBpbWdDb3VudEdyb3VwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0WERCR29hbFRyYWNraW5nKCk7XHJcblxyXG4gICAgLy8gb25DTFMoY29uc29sZS5sb2cpO1xyXG4gICAgLy8gb25GSUQoY29uc29sZS5sb2cpO1xyXG4gICAgLy8gb25MQ1AoY29uc29sZS5sb2cpO1xyXG5cclxuICAgIHdpbmRvdy5hc3NldHNGb2xkZXIgPVxyXG4gICAgICBpbXBvcnQubWV0YS5lbnY/LlNUT1JZQk9PSyA9PT0gXCJ0cnVlXCJcclxuICAgICAgICA/IFwiL2ltZ1wiXHJcbiAgICAgICAgOiBcIi9hc3NldHMvUGV3L2Fzc2V0cy9pbWFnZXNcIjtcclxuICB9LFxyXG4gIGZhbHNlLFxyXG4pO1xyXG4iXSwiZmlsZSI6ImpzL2luZGV4LWdlbmVyYXRlZC5qcyJ9