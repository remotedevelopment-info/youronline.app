# youronline.app site

## development project

### a base set of components to render websites quickly

### with pages to make these services availble

## Services

- Done for you coding
  - hourly rate (support and training)
  - weekly rate (includes hosting)
  - monthly rate (large projects)

## Svelte 5 Migration TODO List

### Component Upgrades

- [ ] **State Management**
  - [ ] Replace `export let` with `let { prop } = $props()` for component props
  - [ ] Replace local reactive variables with `$state()`
  - [ ] Replace custom stores with `$derived` and `$state` where appropriate
  - [ ] Update instances of `$: calculation` to use `$derived` 

- [ ] **Component Structure**
  - [ ] Replace `<script context="module">` with proper imports/exports
  - [ ] Update lifecycle hooks (onMount, onDestroy) with `$effect`
  - [ ] Update event handlers to use `on:event` syntax

- [ ] **Specific Components to Check**
  - [ ] `Accordion.svelte` - Partially converted, needs completion
  - [ ] Check form components for reactive bindings
  - [ ] Check any components using stores
  - [ ] Review components with complex reactivity

### Testing Updates

- [ ] Update test files to support new reactivity model
- [ ] Test all components with regressions

### Documentation

- [ ] Update component documentation to reflect Svelte 5 patterns
- [ ] Document migration decisions and patterns

### Verification Steps

1. For each component:
   - [ ] Convert props to use `$props()`
   - [ ] Convert local state to `$state()`
   - [ ] Replace computed values with `$derived`
   - [ ] Replace reactive statements with `$effect`
   - [ ] Update event handlers
   - [ ] Test functionality after conversion

### References

- [Svelte 5 Migration Guide](https://svelte.dev/docs/runes)
- [Svelte 5 Runes API](https://svelte.dev/docs/runes-api)