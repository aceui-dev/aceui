# Accordion Component – TODO

Based on `docs/.feature`. Status: in progress.

## Tasks

### ✅ COMPLETED
- [x] Create Accordion + AccordionItem components with TypeScript interfaces
- [x] Implement controlled/uncontrolled state (expandedKeys, defaultExpandedKeys)
- [x] selectionMode (single/multiple)
- [x] defaultExpandedKeys, disabledKeys
- [x] Keyboard navigation (Tab, Enter, Space, Arrow Up/Down, Home, End)
- [x] Variants: light, shadow, bordered, splitted
- [x] framer-motion expand/collapse animation
- [x] renderStrategy (default/lazy)
- [x] Accordion.css with BEM and design tokens
- [x] Demo page with Default, Variants, Multiple, Disabled sections

### ⏳ READY (can implement next)
- [ ] Subtitle support (verified in component)
- [ ] startContent support (verified in component)
- [ ] Custom indicator support (verified in component)
- [ ] headingLevel prop (verified in component)
- [ ] disableAnimation prop (verified in component)

### 📋 OPTIONAL / FUTURE
- [ ] Unit tests
- [ ] Accessibility tests
- [ ] Additional demo sections (startContent, custom indicator, subtitle, controlled)

## Note

- AccordionItem uses `itemKey` prop (not `key`) because `key` is reserved in React.
- Demo app route: `/accordion`
