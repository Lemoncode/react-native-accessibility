# react-native-accessibility

## Authors:

- [Víctor Borrego](https://github.com/v-borrego).
- [Juanjo Montiel](https://github.com/kastwey).

## Description

This project demonstrates how to improve screen reader accessibility in a mobile application built with React Native. It takes as an example an app that shows details of an organization and its repositories on GitHub. Initially, the app was not optimized for users with disabilities (in fact, custom components and inaccessible techniques were deliberately used to worsen the experience), but small adjustments were made to make it more accessible.

## Folder Structure

- 01-boilerplate: The folder with the initial app. If you run it, you'll see that the screen reader experience is awful (this was intentional, we’re not that mean!).
- 02-accessibility-improvements: This folder contains the improvements we detail in the next section.

## Improvements Made

### 1. Accessible Buttons

- `common/components/icon-button.component.tsx`

#### Changes

The `accessibilityLabel` property was added to the component (and made mandatory ;) ), and the `accessibilityRole="button"` property was added to the underlying `Pressable` component.

#### Why?

Buttons should have a descriptive label and be identified as such for screen readers. A `Pressable` component does not provide a default role, so screen readers won’t convey to users that this component is actionable.

### 2. Enhanced Headings

- `pods/contributors/contributors.component.tsx`
- `pods/organization/components/info-dialog.component.tsx`
- `pods/organization/components/organization.component.tsx`
- `pods/repository-detail/repository-detail.component.tsx`

#### Changes

Added the `accessibilityRole="header"` property to main titles within `Text` components.

#### Why?

Using headings helps screen reader users better understand the component structure. By adding headings, we clearly separate each section, enabling users to navigate between them easily with screen reader gestures.

### 3. Image Descriptions

- `pods/contributors/contributors.component.tsx`
- `pods/organization/organization.component.tsx`

#### Changes

Descriptions were added to the images of the organization logo and each user who contributed to a repository.

**Important!** For some reason, in *React Native 0.76.3*, the `accessibilityLabel` property does not work when applied directly to images. The only solution we found was to wrap the image in a `View`, add `accessibilityLabel` to that `View`, set `accessibilityRole="image"`, and add `accessible={true}` to make the `View` an atomic component (in the accessibility tree, the child components will not appear as separate entities but as part of the `View`). We plan to verify this in earlier versions and open an issue in *react-native* if necessary.

#### Why?

Images should be either descriptive or marked as decorative (if they have no functional purpose). In *react-native*, to mark an image as decorative and ensure it doesn't appear in the accessibility tree, you can add the property `accessibilityElementsHidden={true}`.

### 4. Dynamic Announcements

- `pods/repository-list/repository-list.component.tsx`

#### Changes

Used `AccessibilityInfo.announceForAccessibility` to inform users about the number of repositories found after filtering. A *timeout* of 500 milliseconds was used to enhance the experience, as announcing directly when the filter changes would make the screen reader constantly read the results while typing, which is extremely frustrating. Instead, we provide a reasonable delay before announcing the results, so it only triggers when the user pauses typing or stops completely.

#### Why?

Without announcing the number of results, screen reader users won't have this information until they navigate to the list, degrading the user experience. A sighted user can easily notice changes in the results, but screen reader users need this information explicitly announced. For usability, it might also be worth adding a visible text showing the number of results, but to respect the design, we opted for the announcement via the accessibility API.

### 5. Improvements in Input Fields

- `pods/repository-list/repository-list.component.tsx`

#### Changes

- Added `accessibilityLabel` to the search field to describe its purpose.
- Hid the search icon in the accessibility tree (`accessibilityElementsHidden={true}`) to simplify component navigation. This way, screen reader users only hear the label when focused on the input field, instead of hearing it twice — once for the icon and again for the input field.

#### Why?

Input fields should be clearly labeled for screen readers. Otherwise, users won’t know their purpose. Additionally, labels should indicate whether a field is mandatory. Unfortunately, in *react-native*, there is no direct property to add this semantic value to input fields.

### 6. Adjustments in List Components

- `pods/repository-list/components/item.component.tsx`

#### Changes

Added `accessibilityRole="button"` to the repository list items (`FlatList` component).

#### Why?

Interactive elements must be correctly identified for users navigating with screen readers. Otherwise, there will be no indication that these elements are actionable parts of the interface.

### 7. Hidden Elements for Accessibility

- `pods/repository-detail/components/stars.component.tsx`

#### Changes

Used `accessibilityElementsHidden={true}` to hide elements within the accessibility tree. For the component displaying stars, the text showing the star count was hidden since this information is included in the `accessibilityLabel` of the icon itself.

#### Why?

Hiding redundant elements prevents duplicate or irrelevant content from confusing the user.

### 8. Icon Descriptions

- `pods/organization/components/info-dialog.component.tsx`
- `pods/repository-detail/components/language.component.tsx`

#### Changes

Added `accessibilityLabel` to icons with functions like "Send email", "Visit GitHub", or "Primary language: X".

#### Why?

Icons should be descriptive for users who cannot see them. The label should explain the purpose of the icon, not its visual appearance. For example, an email icon should be labeled *Send email to the organization*, not *Closed envelope*.

### 9. Semantic Order

- `pods/organization/organization.component.tsx`

#### Changes

Used the `react-native-a11y-order` package to define the navigation order of elements. When using a `flexDirection: "row"` style, for some reason, *VoiceOver* read the organization description and the "more info" button in reverse order — reading the button first, followed by the description.

#### Why?

The visual order should always match the navigation order. In this case, the text is on the left, and the button is on the right, so the text should be read first, followed by the button. We used this library to explicitly set the navigation order in the accessibility tree.

### 10. Back Button

- `pods/repository-detail/repository-detail.component.tsx`

#### Changes

Added `accessibilityLabel="Repositories, back button"` to the icon used as the *back button*.

#### Why?

Navigation buttons must be clearly labeled so users know where the action will take them.

**Important!** The most accessible experience is to use the default back button provided by `react-navigation/native`. This button is detected by screen readers as a back button without needing to tweak the label for clarity. If for some reason, you cannot use this default button, make sure the label is appropriate.

## How Can I Ensure My App Is Accessible?

First, as always, check [the official *React Native* accessibility documentation](https://reactnative.dev/docs/accessibility).

There are also great community libraries, like the ones used in this project:

- [react-native-a11y](https://github.com/ArturKalach/react-native-a11y): A library that simplifies implementing accessibility improvements in your app: managing accessibility focus, reading order, etc. This library also includes features for reordering elements, like the [react-native-a11y-order](https://github.com/ArturKalach/react-native-a11y-order) library by the same author.
- Also by [Artur Kalach](https://github.com/ArturKalach/), [react-native-a11y-container](https://github.com/ArturKalach/react-native-a11y-container) allows you to add semantic groups to your app. For example, if you have a list of repositories, you can wrap it in an `A11yContainerView`, so that when users navigate there, the screen reader reads the associated `accessibilityLabel` for the group.

Finally, testing is crucial. Unfortunately, there aren’t any easy-to-use tools for evaluating accessibility in *React Native*, so the best approach is to get hands-on and use screen readers directly to ensure everything reads as it should. Using a screen reader may not be easy at first, but learning the basic commands allows you to navigate your app and ensure it provides a good experience. This is a straightforward way to catch accessibility issues.

## Benefits of the Improvements

- **Clearer navigation:** Screen reader users can easily navigate headings and buttons.
- **Real-time feedback:** Users are informed of interface changes.
- **Meaningful descriptions:** Visual elements are now described for blind users.
- **Logical flow:** Keyboard or screen reader navigation follows a consistent order.

## How to Contribute

If you have suggestions to further improve the app's accessibility, feel free to send a PR or open an issue!
```