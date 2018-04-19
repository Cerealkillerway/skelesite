  ___________          .__                .__  __          
 /   _____/  | __ ____ |  |   ____   _____|__|/  |_  ____  
 \_____  \|  |/ // __ \|  | _/ __ \ /  ___/  \   __\/ __ \
 /        \    <\  ___/|  |_\  ___/ \___ \|  ||  | \  ___/
/_______  /__|_ \\___  >____/\___  >____  >__||__|  \___  >
        \/     \/    \/          \/     \/              \/


v1.0.0

#### INTRO
**Skelesite** package is part of the **Skeletor** project and is not meant be used alone.

Inside a Skeletor app this package is used to provide components to be used to build the UI.

#### PLACEHOLDER

In the **Skeletor** control panel every page can be assigned to a specific placeholder;
that used in combination with this component, will render the page in a specific position of the app.
If for example the app's template uses a placeholder called *footer-main* to render the content for its footer,
assigning *footer-main* as a placeholder for a page will make it render there;

inside the template the placeholder is placed with:

    {{> skelesitePagePlaceholder name="footer-main"}}

##### PLACEHOLDER OPTIONS

- **name**: *[string] (required)* the name of the placeholder that will be rendered here (page(s) assigned to it will rendere here);
- **contentOnly": *[boolean] (optional)* tells to the component to render only the content of assigned page(s);
- **titleOnly": *[boolean] (optional)* tells to the component to render only the title of assigned page(s);
