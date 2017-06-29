# Phae Kit #

This is a component and pattern library in development for React front-end projects.

During development, this was seeded directly from the in-progress Novum-Sidus project with some aspects taken from the deprecated front-end of the Plinth project.

Where possible, the design intention and understandings will be communicated in documentation within the code while more lengthy explanations about large reaching subjects will be explained in specific docuemnts that may be referenced in code comments.

## Architecture ##
First, terminology.

In React, everything is a component, so a collection of 'components' without explanation is rather ambiguous. So, for our purposes, a component is as follows:

###### A small piece of a larger thing that operates without any explicitly provided directly to it. ######

This self imposed restriction is intended to reduce internal complexity of individual components by concentrating that level of logic into the view or partial layers that are application or use specific.

Most components will wrap a base component. The base component is intended to offer universal functionality across a collection of similar components and should never be instantiated directly in a view or partial.

### Folder Structure ###
- `components`: contains all the generic UI elements.
- `partials`: expresses higher level interactive components that may be use-case specific.
- `services`: These are standard JS files that provide some processing assistance or access into external systems like HTTP request and local browser storage.
- `styles`: contains all of the SCSS style information required by the application and components.
- `views`: represents the complete pages. This is the highest level within the application and uses URI based routing over state based routing.
