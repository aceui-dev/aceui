# Accordion Component – TODO

Based on `docs/.feature`. Status: in progress.

## Tasks

### ✅ COMPLETED
- [x] Create Accordion + AccordionItem components with TypeScript interfaces
- [x] Implement controlled/uncontrolled state (expandedKeys, defaultExpandedKeys)
- [x] selectionMode (single/multiple)
- [x] defaultExpandedKeys, disabledKeys
- [x] Keyboard navigation (Tab, Enter, Space, Arrow Up/Down, Home, End)
- [x] Variants: light, bordered, splitted (shadow variant removed)
- [x] Expand/collapse animation (CSS grid transition)
- [x] renderStrategy (default/lazy)
- [x] Accordion.css with BEM and design tokens
- [x] Subtitle support (subtitle prop, .aceui-accordion__subtitle)
- [x] startContent support
- [x] Custom indicator (ReactNode or function with isOpen, isDisabled, defaultIndicator)
- [x] headingLevel prop
- [x] Demo: Default, Variants, Multiple, Disabled, Lazy render, Custom indicator, Subtitle & start content, Controlled

### ⏳ READY (can implement next)
- [ ] Unit tests
- [ ] Accessibility tests

### 📋 OPTIONAL / FUTURE
- [ ] disableAnimation prop (if needed)
- [ ] README.md in Accordion folder

## Note

- AccordionItem uses `itemKey` prop (not `key`) because `key` is reserved in React.
- Demo app route: `/accordion`
