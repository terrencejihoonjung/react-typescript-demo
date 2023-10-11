# React + TypeScript Tutorial

## Typing Props

Specify a type alias that assigns types for each property in the prop being passed down. A general rule of thumb is to use type aliases for applications and interfaces for libraries. When using the props, you can either pass in the entire prop or destructure the prop. Regardless, you state that that prop object is of the same type as the implemented type alias.

Once your app gets larger, you'll want to move your type declarations into a separate file and import them into your component files. If there is an opportunity to create a new type alias, do so! The better you break types apart, the more reusable your code can be.

## Union Types

If you are trying to conditional render something based on a prop, and that prop can only be certain values, then using union types with string literals is useful. This forces react to only accepts the specified string literals when the prop gets passed down.

## Event Props

Passing event handlers as props is essentially the same, except that we specify these handlers as function types. If we want to use the event object, we specify that as React.MouseEvent<HTMLButtonElement> or React.ChangeEvent<HTMLInputElement> depending on an onClick or onChange event.

## useState Hook

Using useState with TypeScript is essentially the same as using JavaScript. The difference is when we don't know our initial value. This is when we use union types and angled brackets to specify that the initial value can be null or one of our custom types.
