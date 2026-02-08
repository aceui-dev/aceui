# Feature Requirements

## Version: 1.0.0
Last Updated: 2026-02-08

---

## Feature: Accordion Component
Priority: High
Status: Pending

### Overview
A flexible, accessible accordion component that allows users to expand and collapse content sections. Supports multiple variants, single/multiple expansion modes, custom indicators, subtitles, and configurable render strategy (default/lazy). Built using the project's design token system for consistent styling.

### Requirements

#### 1. Basic Accordion
- Render a collapsible content container
- Support multiple accordion items as children
- Use semantic HTML structure (can use native `<details>` with enhancements or custom div-based implementation)
- Apply base BEM class: `.aceui-accordion`
- Each item has BEM class: `.aceui-accordion__item`
- Header (trigger): `.aceui-accordion__header`
- Content area: `.aceui-accordion__content`
- Use design tokens from `design-tokens.css`
- Support keyboard navigation (Arrow Up/Down, Home/End)
- Add appropriate ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)

#### 2. Accordion Items
Each accordion item should support:

- **Title**: Main heading text
  - Element: `.aceui-accordion__title`
  - Use semantic heading level (h3 default, configurable)
  
- **Subtitle** (optional): Secondary descriptive text
  - Element: `.aceui-accordion__subtitle`
  - Displayed below title in muted color
  - Font size: `var(--aceui-font-size-small)`
  - Color: `var(--aceui-color-text-muted)`
  
- **Content**: Expandable body content
  - Element: `.aceui-accordion__content`
  - Smooth expand/collapse animation
  - Padding: `var(--aceui-spacing-medium)` (16px)
  
- **Indicator**: Visual expand/collapse icon
  - Element: `.aceui-accordion__indicator`
  - Default: chevron-right icon (rotates 90° when expanded)
  - Position: right side of header (default)
  - Animated rotation transition (200ms ease)

#### 3. Expansion Modes
Support different expansion behaviors via `selectionMode` prop:

- **Single** (default): `.aceui-accordion--single`
  - Only one item can be expanded at a time
  - Opening a new item automatically closes the currently open item
  - Use radio button-like behavior
  
- **Multiple**: `.aceui-accordion--multiple`
  - Multiple items can be expanded simultaneously
  - Each item toggles independently
  - Use checkbox-like behavior

#### 4. Variants
Support style variants via `variant` prop:

- **Light** (default): `.aceui-accordion--light`
  - Background: transparent
  - Border: None on container; bottom border between items
  - No inline padding on header/content (flush layout)
  - Clean, airy appearance
  
- **Bordered**: `.aceui-accordion--bordered`
  - Single bordered container
  - Border: `var(--aceui-border-width-medium)` solid `var(--aceui-color-border-default)`
  - Container padding: `var(--aceui-spacing-medium)` inline
  - Dividers between items
  
- **Splitted**: `.aceui-accordion--splitted`
  - Each item is a separate card
  - Gap between items: `var(--aceui-spacing-small)` (8px)
  - Border: `var(--aceui-border-width-medium)` solid `var(--aceui-color-border-default)` per item
  - Border radius: `var(--aceui-accordion-border-radius)`
  - Header and content have inline padding; individual item shadows

#### 5. Default Expanded Keys
- Support `defaultExpandedKeys` prop (array of strings/numbers)
- Specify which items are initially expanded
- Works with both single and multiple modes
- In single mode, only the first key in array is used
- Example: `defaultExpandedKeys={['item-1', 'item-3']}`

#### 6. Disabled Keys
- Support `disabledKeys` prop (array of strings/numbers)
- Disable specific accordion items from being interacted with
- Apply modifier class: `.aceui-accordion__item--disabled`
- Visual indication: reduced opacity `var(--aceui-disabled-opacity)`
- Prevent click/keyboard interaction
- Cursor: `not-allowed`
- Add `aria-disabled="true"` to disabled items
- Example: `disabledKeys={['item-2']}`

#### 7. Start Content
- Support `startContent` prop on accordion items
- Display custom content at the start of the header (before title)
- Element: `.aceui-accordion__start-content`
- Common use cases: avatar images, icons, status indicators
- Spacing from title: `var(--aceui-spacing-small)` (8px)
- Maintains alignment with indicator

#### 8. Custom Indicator
- Support `indicator` prop on accordion items: `ReactNode` or render function
- **ReactNode**: Custom element replaces default chevron; receives `.aceui-accordion__indicator--rotated` when expanded (CSS rotation).
- **Function**: `(params: { isOpen, isDisabled, defaultIndicator }) => ReactNode` for state-dependent icons (e.g. plus when closed, minus when open).
- Element: `.aceui-accordion__indicator--custom` when custom indicator is provided
- Common use cases: plus/minus icons, custom arrows, theme-specific icons

#### 9. Render Strategy
Support optimized rendering via `renderStrategy` prop:

- **default**: 
  - All accordion item bodies are rendered in the DOM regardless of expansion state
  - Content is always present but hidden with CSS
  - Best for: simple content, SEO requirements, instant expansion
  - Class: `.aceui-accordion--render-default`
  
- **lazy**: 
  - Accordion item body content is only rendered when the item is expanded
  - Once rendered, content persists in DOM (even when collapsed) until item is collapsed and re-expanded
  - Improves initial render performance for large accordions
  - Best for: complex content, performance optimization, large datasets
  - Class: `.aceui-accordion--render-lazy`
  - Implementation: conditional rendering based on expansion state + cache

#### 10. Animations
- Smooth expand/collapse transitions via CSS (grid-template-rows 0fr/1fr with transition)
- Duration: 300ms cubic-bezier for content height
- Indicator rotation: 200ms ease (CSS transform)
- No `disableAnimation` prop in current implementation

#### 11. Accessibility Features
- Keyboard navigation:
  - **Tab**: Focus on accordion headers
  - **Enter/Space**: Toggle expansion
  - **Arrow Down**: Move focus to next header
  - **Arrow Up**: Move focus to previous header
  - **Home**: Focus first header
  - **End**: Focus last header
  
- ARIA attributes:
  - `role="region"` on accordion container
  - `role="button"` on headers
  - `aria-expanded="true/false"` on headers
  - `aria-controls="{content-id}"` on headers
  - `aria-labelledby="{header-id}"` on content
  - `aria-disabled="true"` on disabled items
  
- Focus management:
  - Visible focus indicator using `var(--aceui-color-focus)`
  - Focus ring: 2px solid `var(--aceui-color-focus)`
  - Offset: 2px

### Component API

```typescript
type AccordionVariant = 'light' | 'bordered' | 'splitted';
type AccordionIndicatorRender = (params: {
  isOpen: boolean;
  isDisabled: boolean;
  defaultIndicator: ReactNode;
}) => ReactNode;

interface AccordionProps {
  children?: React.ReactNode;
  variant?: AccordionVariant;
  selectionMode?: 'single' | 'multiple';
  defaultExpandedKeys?: (string | number)[];
  expandedKeys?: (string | number)[];
  disabledKeys?: (string | number)[];
  renderStrategy?: 'default' | 'lazy';
  isDisabled?: boolean;
  onExpandedChange?: (keys: (string | number)[]) => void;
  className?: string;
  ariaLabel?: string;
  testId?: string;
}

interface AccordionItemProps {
  itemKey: string | number;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  startContent?: React.ReactNode;
  indicator?: React.ReactNode | AccordionIndicatorRender;
  isDisabled?: boolean;
  className?: string;
  ariaLabel?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  testId?: string;
}
```

### Technical Implementation Notes

#### State Management
- Use controlled or uncontrolled component pattern
- Internal state for uncontrolled mode
- Support both `expandedKeys` (controlled) and `defaultExpandedKeys` (uncontrolled)
- Manage expansion state in parent component
- Each item has unique key for identification

#### Animation Implementation
- Expand/collapse: CSS grid (grid-template-rows 0fr/1fr) with transition
- Indicator rotation: CSS transition 200ms ease

#### Render Strategy Implementation
For `renderStrategy="lazy"`:
```typescript
// Pseudo-code
const [renderedItems, setRenderedItems] = useState(new Set(defaultExpandedKeys));

const handleExpand = (key) => {
  setRenderedItems(prev => new Set([...prev, key]));
};

// In render
{renderedItems.has(item.itemKey) && (
  <div className="aceui-accordion__content">
    {item.children}
  </div>
)}
```

#### Keyboard Navigation
- Implement roving tabindex pattern
- Track current focused item
- Handle arrow key navigation
- Home/End keys for first/last
- Enter/Space to toggle

### BEM Class Structure

```css
.aceui-accordion { }
  .aceui-accordion--light { }
  .aceui-accordion--bordered { }
  .aceui-accordion--splitted { }
  .aceui-accordion--single { }
  .aceui-accordion--multiple { }
  .aceui-accordion--render-default { }
  .aceui-accordion--render-lazy { }
  .aceui-accordion--disabled { }

.aceui-accordion__item { }
  .aceui-accordion__item--expanded { }
  .aceui-accordion__item--disabled { }
  .aceui-accordion__item--focused { }

.aceui-accordion__header { }
  .aceui-accordion__header:hover { }
  .aceui-accordion__header:focus { }

.aceui-accordion__start-content { }

.aceui-accordion__title { }

.aceui-accordion__subtitle { }

.aceui-accordion__indicator { }
  .aceui-accordion__indicator--custom { }
  .aceui-accordion__indicator--rotated { }

.aceui-accordion__content { }
  .aceui-accordion__content--expanded { }
  .aceui-accordion__content--collapsed { }
```

### Acceptance Criteria

#### Functionality
- [ ] Accordion renders with multiple items
- [ ] Items expand and collapse on click
- [ ] Single mode: only one item open at a time
- [ ] Multiple mode: multiple items can be open
- [ ] Default expanded keys work correctly
- [ ] Disabled keys prevent interaction
- [ ] Start content displays correctly
- [ ] Custom indicators render and animate
- [ ] Subtitles display below titles
- [ ] renderStrategy 'default' renders all content
- [ ] renderStrategy 'lazy' only renders expanded content
- [ ] Smooth expand/collapse animations
- [ ] Disabled state prevents interaction

#### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Space, Arrows, Home, End)
- [ ] ARIA attributes present and correct
- [ ] `aria-expanded` updates on state change
- [ ] `aria-disabled` on disabled items
- [ ] Focus visible with `var(--aceui-color-focus)`
- [ ] Screen reader announces expansion state
- [ ] Semantic heading structure maintained
- [ ] Role attributes correct

#### Styling
- [ ] BEM naming convention followed
- [ ] Regular CSS used (`.css` file)
- [ ] No style conflicts
- [ ] All variants render correctly
- [ ] Hover states work on headers
- [ ] Focus states visible
- [ ] Smooth transitions (200-300ms)
- [ ] Indicator rotates smoothly
- [ ] Design tokens used throughout

#### Variants
- [ ] Light variant displays correctly
- [ ] Bordered variant has borders, dividers, and container padding
- [ ] Splitted variant shows separated items with per-item padding

#### Combinations
- [ ] Single mode + default expanded works
- [ ] Multiple mode + default expanded works
- [ ] Disabled keys + single mode works
- [ ] Disabled keys + multiple mode works
- [ ] Custom indicators + all variants work
- [ ] Start content + subtitles work together
- [ ] All render strategies work with variants

#### Testing
- [ ] Unit tests for all props
- [ ] Tests for expansion behavior
- [ ] Tests for single/multiple modes
- [ ] Tests for disabled state
- [ ] Tests for keyboard navigation
- [ ] Tests for default expanded keys
- [ ] Tests for disabled keys
- [ ] Tests for render strategies
- [ ] Tests for all variants
- [ ] Tests for design token usage
- [ ] Accessibility tests pass
- [ ] Test coverage ≥ 80%

#### Documentation
- [ ] JSDoc comments on component
- [ ] JSDoc comments on all props
- [ ] Demo sections for all variants
- [ ] Demo sections for all features
- [ ] Demo showing single vs multiple modes
- [ ] Demo showing disabled items
- [ ] Demo showing custom indicators
- [ ] Demo showing render strategies
- [ ] Design token usage documented
- [ ] Usage examples in demo sections
- [ ] README.md in Accordion folder

#### Code Quality
- [ ] TypeScript strict mode passes
- [ ] No console errors or warnings
- [ ] ESLint passes
- [ ] Prettier formatted
- [ ] No TODO comments
- [ ] Proper prop destructuring
- [ ] Default props set appropriately
- [ ] Design token imports correct

### Examples

```tsx
// Basic accordion (defaults: light variant, single mode)
<Accordion>
  <AccordionItem itemKey="1" title="Accordion 1">
    Content for accordion 1
  </AccordionItem>
  <AccordionItem itemKey="2" title="Accordion 2">
    Content for accordion 2
  </AccordionItem>
  <AccordionItem itemKey="3" title="Accordion 3">
    Content for accordion 3
  </AccordionItem>
</Accordion>

// With subtitle
<Accordion>
  <AccordionItem 
    itemKey="1" 
    title="Accordion 1"
    subtitle="Press to expand"
  >
    Content here
  </AccordionItem>
  <AccordionItem 
    itemKey="2" 
    title="Accordion 2"
    subtitle="Press to expand key 2"
  >
    More content
  </AccordionItem>
</Accordion>

// Multiple expansion mode
<Accordion selectionMode="multiple">
  <AccordionItem itemKey="1" title="Item 1">Content 1</AccordionItem>
  <AccordionItem itemKey="2" title="Item 2">Content 2</AccordionItem>
  <AccordionItem itemKey="3" title="Item 3">Content 3</AccordionItem>
</Accordion>

// Light variant (default)
<Accordion variant="light">
  <AccordionItem itemKey="1" title="Light Item 1">Content</AccordionItem>
  <AccordionItem itemKey="2" title="Light Item 2">Content</AccordionItem>
  <AccordionItem itemKey="3" title="Light Item 3">Content</AccordionItem>
</Accordion>

// Bordered variant
<Accordion variant="bordered">
  <AccordionItem itemKey="1" title="Bordered Item 1">Content</AccordionItem>
  <AccordionItem itemKey="2" title="Bordered Item 2">Content</AccordionItem>
  <AccordionItem itemKey="3" title="Bordered Item 3">Content</AccordionItem>
</Accordion>

// Splitted variant
<Accordion variant="splitted">
  <AccordionItem itemKey="1" title="Splitted Item 1">Content</AccordionItem>
  <AccordionItem itemKey="2" title="Splitted Item 2">Content</AccordionItem>
  <AccordionItem itemKey="3" title="Splitted Item 3">Content</AccordionItem>
</Accordion>

// Default expanded keys
<Accordion defaultExpandedKeys={['1', '3']}>
  <AccordionItem itemKey="1" title="Initially Open">This is expanded</AccordionItem>
  <AccordionItem itemKey="2" title="Initially Closed">This is collapsed</AccordionItem>
  <AccordionItem itemKey="3" title="Also Open">This is expanded</AccordionItem>
</Accordion>

// Disabled keys
<Accordion disabledKeys={['2']}>
  <AccordionItem itemKey="1" title="Enabled Item">You can click this</AccordionItem>
  <AccordionItem itemKey="2" title="Disabled Item">You cannot interact with this</AccordionItem>
  <AccordionItem itemKey="3" title="Enabled Item">You can click this too</AccordionItem>
</Accordion>

// With start content (icons, avatars, etc.)
<Accordion variant="splitted">
  <AccordionItem 
    itemKey="1" 
    title="Chung Miller"
    subtitle="4 unread messages"
    startContent={<Avatar src="/avatar1.jpg" />}
  >
    Message content here
  </AccordionItem>
  <AccordionItem 
    itemKey="2" 
    title="Janelle Lenard"
    subtitle="3 incompleted steps"
    startContent={<Avatar src="/avatar2.jpg" />}
  >
    Steps content here
  </AccordionItem>
  <AccordionItem 
    itemKey="3" 
    title="Zoey Lang"
    subtitle="2 issues to fix now"
    startContent={<Avatar src="/avatar3.jpg" />}
  >
    Issues content here
  </AccordionItem>
</Accordion>

// Custom indicator (ReactNode)
<Accordion>
  <AccordionItem itemKey="1" title="Anchor" indicator={<AnchorIcon />}>
    Content with anchor icon
  </AccordionItem>
  <AccordionItem itemKey="2" title="Moon" indicator={<MoonIcon />}>
    Content with moon icon
  </AccordionItem>
</Accordion>

// Custom indicator (function: isOpen, isDisabled, defaultIndicator)
<Accordion disabledKeys={['2']}>
  <AccordionItem
    itemKey="1"
    title="Expandable"
    indicator={({ isOpen, isDisabled, defaultIndicator }) =>
      isDisabled ? defaultIndicator : isOpen ? <MinusIcon /> : <PlusIcon />
    }
  >
    Content
  </AccordionItem>
  <AccordionItem itemKey="2" title="Disabled" indicator={({ isDisabled, defaultIndicator }) => isDisabled ? defaultIndicator : <PlusIcon />}>
    Content
  </AccordionItem>
</Accordion>

// Lazy render strategy (performance optimization)
<Accordion renderStrategy="lazy">
  <AccordionItem itemKey="1" title="Large Content 1">
    <ExpensiveComponent />
  </AccordionItem>
  <AccordionItem itemKey="2" title="Large Content 2">
    <ExpensiveComponent />
  </AccordionItem>
  <AccordionItem itemKey="3" title="Large Content 3">
    <ExpensiveComponent />
  </AccordionItem>
</Accordion>

// Controlled accordion
const [expandedKeys, setExpandedKeys] = useState(['1']);

<Accordion 
  expandedKeys={expandedKeys}
  onExpandedChange={setExpandedKeys}
>
  <AccordionItem itemKey="1" title="Controlled Item 1">Content</AccordionItem>
  <AccordionItem itemKey="2" title="Controlled Item 2">Content</AccordionItem>
</Accordion>

// Complete example with all features
<Accordion
  variant="splitted"
  selectionMode="multiple"
  defaultExpandedKeys={['1']}
  disabledKeys={['3']}
  renderStrategy="lazy"
  onExpandedChange={(keys) => console.log('Expanded:', keys)}
>
  <AccordionItem 
    itemKey="1" 
    title="User Profile"
    subtitle="Manage your account"
    startContent={<UserIcon />}
    indicator={<ChevronIcon />}
  >
    <UserProfileForm />
  </AccordionItem>
  
  <AccordionItem 
    itemKey="2" 
    title="Notification Settings"
    subtitle="Configure alerts"
    startContent={<BellIcon />}
  >
    <NotificationSettings />
  </AccordionItem>
  
  <AccordionItem 
    itemKey="3" 
    title="Billing Information"
    subtitle="View your plan"
    startContent={<CreditCardIcon />}
  >
    <BillingDetails />
  </AccordionItem>
</Accordion>
```

### Design Token Reference

The accordion component should import and use tokens from `design-tokens.css`. All design tokens use the `--aceui` prefix.

**Colors**: `--aceui-color-text-default`, `--aceui-color-text-muted`, `--aceui-color-border-default`, `--aceui-color-default-{shade}` where needed
**Font Sizes**: `--aceui-font-size-{size}` (small, medium, large)
**Line Heights**: `--aceui-line-height-{size}`
**Spacing**: `--aceui-spacing-{size}` (small, medium, large)
**Radius**: `--aceui-radius-{size}` (small, medium, large); **Accordion**: `--aceui-accordion-border-radius`
**Border Width**: `--aceui-border-width-{size}` (small, medium)
**Opacity**: `--aceui-disabled-opacity`, `--aceui-hover-opacity`
**Focus**: `--aceui-color-focus`

### Notes
- All colors must use design token CSS variables
- No hardcoded color values allowed
- Ensure color contrast meets WCAG AA standards
- Test with keyboard navigation thoroughly
- Ensure focus states use `--aceui-color-focus` token
- Expansion animations should be smooth (300ms)
- Consider performance for accordions with many items
- renderStrategy 'lazy' improves performance for complex content
- Support both controlled and uncontrolled modes
- Each accordion item must have a unique `itemKey` (prop name is `itemKey`, not `key`, because `key` is reserved in React)
- Consider implementing with native `<details>` element for progressive enhancement
- Ensure proper ARIA labeling for screen readers
- Test with various content types (text, images, forms, etc.)

