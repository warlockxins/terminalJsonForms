# JsonForms with Ink

A sample of interactive Terminal application with forms generated from JsonSchema in 'source/schema.json'.

Run by:
```
npm run start
```

## App structure
Folder `source/cliRenderers` is a copy of JsonForms Vanilla renderers. Slightly adjusted to use `Ink` components.

Currently (for test purposes) supporting only text input, vertical and horizontal layouts.

Once connected to `JsonForms` component in `source/ui.tsx`, whill display a basic form with working inputs.
