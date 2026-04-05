This plugin adds a new template in the `Modded Entity` model format called `Mojang`. This should work with any mod loader (Fabric, Forger, NeoForge, etc.)

After creating the model, you should go to `File -> Project` and edit the new settings for exporting the Java file:

- **Render State**: The RenderState class. Keep in mind it has to include the namespace as well (`com.example.mod.client.states.BobEntityRenderState`)
- **Namespace**: The namespace of the model class (`com.example.mod.client.models`)
