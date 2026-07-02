import { r as reactExports } from "./index-04976b1c.js";
import { p as propTypesExports, j as jsxDevRuntimeExports } from "./index-02304d6d.js";
import { S as StateManagedSelect$1, s as styles } from "./reactSelectStyles-4bcb4cf5.js";
const propTypes = {
  name: propTypesExports.string,
  label: propTypesExports.string,
  options: propTypesExports.arrayOf(
    propTypesExports.shape({
      value: propTypesExports.string,
      label: propTypesExports.string,
      selected: propTypesExports.bool
    })
  ),
  placeholder: propTypesExports.string,
  onChange: propTypesExports.func
};
const SelectApp = (props) => {
  const { options, name, label, onChange, placeholder } = props;
  const [selectId, setSelectId] = reactExports.useState("");
  const inputRef = reactExports.useRef();
  const selectRef = reactExports.useRef();
  const [selectValue, setSelectValue] = reactExports.useState(
    options.find((o) => o.selected)
  );
  reactExports.useEffect(() => {
    const handleExternalSelectChange = (e) => {
      var _a;
      const selectedValue = (_a = e == null ? void 0 : e.detail) == null ? void 0 : _a.value;
      const selectedOption = options.find(
        (option) => option.value === selectedValue
      );
      if (selectedOption) {
        setSelectValue(selectedOption);
        inputRef.current.value = selectedOption.value;
      }
    };
    window.addEventListener("select-change", handleExternalSelectChange);
    return () => {
      window.removeEventListener("select-change", handleExternalSelectChange);
    };
  }, [options]);
  styles.control = (baseStyles, state) => ({
    ...baseStyles,
    outline: state.isFocused && "1px solid var(--theme-color-focus-outline)",
    borderRadius: "4px",
    borderColor: "var(--theme-color-neutral-30)",
    paddingBlock: "9px",
    paddingInline: "4px 8px",
    fontFamily: "var(--font-primary)",
    "&:hover": "var(--theme-color-focus-outline)"
  });
  reactExports.useEffect(() => {
    var _a;
    const input = (_a = selectRef.current) == null ? void 0 : _a.querySelector("input");
    if (input == null ? void 0 : input.id) {
      setSelectId(input.id);
    }
  }, [selectRef]);
  const handleChange = (selectedOption) => {
    var _a;
    inputRef.current.value = selectedOption.value;
    if (onChange && typeof onChange === "function") {
      onChange(selectedOption.value);
    }
    setSelectValue(selectedOption);
    (_a = inputRef.current) == null ? void 0 : _a.dispatchEvent(
      new Event("change", {
        bubbles: true,
        cancelable: true
      })
    );
  };
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("label", { className: "select__label", htmlFor: selectId, children: label }, void 0, false, {
      fileName: "F:/wrkspc/CM-Prep-Refresh/frontend/js/components/Form/Select/SelectApp.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, globalThis),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "input",
      {
        ref: inputRef,
        name,
        type: "hidden",
        value: (selectValue == null ? void 0 : selectValue.value) ?? ""
      },
      void 0,
      false,
      {
        fileName: "F:/wrkspc/CM-Prep-Refresh/frontend/js/components/Form/Select/SelectApp.jsx",
        lineNumber: 94,
        columnNumber: 7
      },
      globalThis
    ),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "select__input", ref: selectRef, children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      StateManagedSelect$1,
      {
        styles,
        options,
        onChange: handleChange,
        placeholder,
        value: selectValue
      },
      void 0,
      false,
      {
        fileName: "F:/wrkspc/CM-Prep-Refresh/frontend/js/components/Form/Select/SelectApp.jsx",
        lineNumber: 101,
        columnNumber: 9
      },
      globalThis
    ) }, void 0, false, {
      fileName: "F:/wrkspc/CM-Prep-Refresh/frontend/js/components/Form/Select/SelectApp.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, globalThis)
  ] }, void 0, true, {
    fileName: "F:/wrkspc/CM-Prep-Refresh/frontend/js/components/Form/Select/SelectApp.jsx",
    lineNumber: 90,
    columnNumber: 5
  }, globalThis);
};
SelectApp.propTypes = propTypes;
const SelectApp$1 = SelectApp;
export {
  SelectApp$1 as S
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0QXBwLWMwMzEzYWJlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9qcy9jb21wb25lbnRzL0Zvcm0vU2VsZWN0L1NlbGVjdEFwcC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGJvb2wsIHN0cmluZywgYXJyYXlPZiwgc2hhcGUsIGZ1bmMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuXHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCJAY29tbW9uL3JlYWN0U2VsZWN0U3R5bGVzXCI7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGxhYmVsOiBzdHJpbmcsXHJcbiAgb3B0aW9uczogYXJyYXlPZihcclxuICAgIHNoYXBlKHtcclxuICAgICAgdmFsdWU6IHN0cmluZyxcclxuICAgICAgbGFiZWw6IHN0cmluZyxcclxuICAgICAgc2VsZWN0ZWQ6IGJvb2wsXHJcbiAgICB9KSxcclxuICApLFxyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcsXHJcbiAgb25DaGFuZ2U6IGZ1bmMsXHJcbn07XHJcblxyXG5jb25zdCBTZWxlY3RBcHAgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG9wdGlvbnMsIG5hbWUsIGxhYmVsLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RJZCwgc2V0U2VsZWN0SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBzZWxlY3RSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdFZhbHVlLCBzZXRTZWxlY3RWYWx1ZV0gPSB1c2VTdGF0ZShcclxuICAgIG9wdGlvbnMuZmluZCgobykgPT4gby5zZWxlY3RlZCksXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEFsbG93IHNlbGVjdCB2YWx1ZSB0byBjaGFuZ2UgZnJvbSBleHRlcm5hbCBldmVudCAoaS5lLiBXaGF0V2VEby5pbml0LmpzKVxyXG4gICAgY29uc3QgaGFuZGxlRXh0ZXJuYWxTZWxlY3RDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gZT8uZGV0YWlsPy52YWx1ZTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQoXHJcbiAgICAgICAgKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgc2V0U2VsZWN0VmFsdWUoc2VsZWN0ZWRPcHRpb24pO1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdC1jaGFuZ2VcIiwgaGFuZGxlRXh0ZXJuYWxTZWxlY3RDaGFuZ2UpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VsZWN0LWNoYW5nZVwiLCBoYW5kbGVFeHRlcm5hbFNlbGVjdENoYW5nZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtvcHRpb25zXSk7XHJcblxyXG4gIHN0eWxlcy5jb250cm9sID0gKGJhc2VTdHlsZXMsIHN0YXRlKSA9PiAoe1xyXG4gICAgLi4uYmFzZVN0eWxlcyxcclxuICAgIG91dGxpbmU6IHN0YXRlLmlzRm9jdXNlZCAmJiBcIjFweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvci1mb2N1cy1vdXRsaW5lKVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgYm9yZGVyQ29sb3I6IFwidmFyKC0tdGhlbWUtY29sb3ItbmV1dHJhbC0zMClcIixcclxuICAgIHBhZGRpbmdCbG9jazogXCI5cHhcIixcclxuICAgIHBhZGRpbmdJbmxpbmU6IFwiNHB4IDhweFwiLFxyXG4gICAgZm9udEZhbWlseTogXCJ2YXIoLS1mb250LXByaW1hcnkpXCIsXHJcbiAgICBcIiY6aG92ZXJcIjogXCJ2YXIoLS10aGVtZS1jb2xvci1mb2N1cy1vdXRsaW5lKVwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZ2V0IHRoZSBpZCBmcm9tIHRoZSByZWFjdC1zZWxlY3QgaW5wdXQgdG8gbWVldCBXQ0FHIHJlcXVpcmVtZW50cy5cclxuICAgIC8vIHdyYXBwaW5nIHJlYWN0LXNlbGVjdCBpbiBhIGxhYmVsIGJyb2tlIHRoZSBzY3JlZW4gcmVhZGVyLlxyXG4gICAgY29uc3QgaW5wdXQgPSBzZWxlY3RSZWYuY3VycmVudD8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgaWYgKGlucHV0Py5pZCkge1xyXG4gICAgICBzZXRTZWxlY3RJZChpbnB1dC5pZCk7XHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdFJlZl0pO1xyXG5cclxuICAvLyBzdG9yZSB0aGUgc2VsZWN0ZWQgdmFsdWUgaW4gYW4gaW5wdXQgc28gaXQgY2FuIGJlIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtLlxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZE9wdGlvbikgPT4ge1xyXG4gICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbHVlO1xyXG4gICAgaWYgKG9uQ2hhbmdlICYmIHR5cGVvZiBvbkNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RWYWx1ZShzZWxlY3RlZE9wdGlvbik7XHJcblxyXG4gICAgaW5wdXRSZWYuY3VycmVudD8uZGlzcGF0Y2hFdmVudChcclxuICAgICAgbmV3IEV2ZW50KFwiY2hhbmdlXCIsIHtcclxuICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlbGVjdF9fbGFiZWxcIiBodG1sRm9yPXtzZWxlY3RJZH0+XHJcbiAgICAgICAge2xhYmVsfVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgdmFsdWU9e3NlbGVjdFZhbHVlPy52YWx1ZSA/PyBcIlwifVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdF9faW5wdXRcIiByZWY9e3NlbGVjdFJlZn0+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RWYWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblNlbGVjdEFwcC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdEFwcDtcclxuIl0sIm5hbWVzIjpbInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImJvb2wiLCJmdW5jIiwidXNlU3RhdGUi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
