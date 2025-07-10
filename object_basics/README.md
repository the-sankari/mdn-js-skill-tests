# Object Basics - Test Your Skills

## 📋 Overview

This module contains exercises to test your understanding of JavaScript **Object Basics** concepts. The tasks are based on the [MDN Object Basics Skill Test](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Object_basics), designed to assess your knowledge of JavaScript object fundamentals.

## 🎯 Learning Objectives

By completing these tasks, you will demonstrate mastery of:

- **Object Literal Creation** - Creating objects with properties and methods
- **Property Access** - Using dot notation and bracket notation
- **Method Invocation** - Calling methods on objects
- **Object Manipulation** - Updating and modifying object properties
- **Constructor Functions** - Creating objects with constructors
- **DRY Principle** - Avoiding code duplication through better design
- **Object-Oriented Programming** - Understanding basic OOP concepts

## 📚 Prerequisites

Before attempting these tasks, ensure you understand:

- Basic JavaScript syntax and variables
- Functions and method definitions
- Arrays and data structures
- String manipulation and template literals
- The `this` keyword in JavaScript

## 🔧 Tasks Overview

### Task 1: Object Property Access and Manipulation

**File:** `obj1.js`

**Objective:** Work with an existing object literal to:

- Access properties using bracket notation
- Invoke methods using dot notation
- Update object properties

**Skills Tested:**

- Property access techniques
- Method invocation
- Object property modification

### Task 2: Creating Complex Object Literals

**File:** `obj2.js`

**Objective:** Create a comprehensive object representing a music band with:

- Basic string and number properties
- Nested array of objects (albums)
- Generate descriptive biography text

**Skills Tested:**

- Object literal creation
- Nested data structures
- Array of objects
- String interpolation and formatting

### Task 3: Object Methods and `this` Context

**File:** `obj3.js`

**Objective:** Enhance object methods to work dynamically with:

- Generic method that works across different object instances
- Proper use of `this` keyword
- Creating multiple objects with identical structure

**Skills Tested:**

- Method definition and context
- `this` keyword usage
- Object method reusability

### Task 4: Constructor Functions (DRY Principle)

**File:** `obj4.js`

**Objective:** Refactor code to eliminate duplication by:

- Creating a constructor function
- Instantiating objects with shared methods
- Implementing the DRY (Don't Repeat Yourself) principle

**Skills Tested:**

- Constructor function creation
- Object instantiation
- Method sharing and code reuse
- Object-oriented programming fundamentals

## 🚀 Getting Started

1. **Review the Object Basics Concepts:**

   - [MDN Object Basics Guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)
   - [JavaScript Object Fundamentals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

2. **Open the HTML file:**

   ```bash
   open object_basics/index.html
   ```

3. **Complete each task in order:**

   - Start with `obj1.js` and work through to `obj4.js`
   - Each task builds upon concepts from previous tasks
   - Test your solutions in the browser console

4. **Verify your solutions:**
   - Check browser console for expected output
   - Ensure all functionality works as described
   - Test edge cases and different scenarios

## 💡 Key Concepts Covered

### Object Creation Patterns

```javascript
// Object Literal
const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
};

// Constructor Function
function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}
```

### Property Access Methods

```javascript
// Dot notation
console.log(cat.name);

// Bracket notation
console.log(cat["name"]);

// Dynamic property access
const prop = "name";
console.log(cat[prop]);
```

### Method Definition and Context

```javascript
const cat = {
  name: "Bertie",
  greeting: function () {
    return `Hello, said ${this.name}`;
  },
};
```

### Constructor Pattern

```javascript
function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    return `Hello, said ${this.name} the ${this.breed}`;
  };
}

const cat1 = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Bessie", "Maine Coon", "orange");
```

## 🔍 Common Challenges and Solutions

### Challenge 1: Property Access

**Problem:** Understanding when to use dot vs bracket notation

**Solution:** Use bracket notation for:

- Dynamic property names
- Properties with special characters
- Properties stored in variables

### Challenge 2: Method Context

**Problem:** Methods not working across different objects

**Solution:** Use `this` keyword to refer to the current object instance

### Challenge 3: Code Duplication

**Problem:** Repeating method definitions across objects

**Solution:** Use constructor functions to share methods

### Challenge 4: Object Structure

**Problem:** Creating complex nested objects

**Solution:** Plan object structure and use consistent naming conventions

## 📊 Progress Tracking

Track your completion status:

- [ ] **Task 1:** Object property access and manipulation
- [ ] **Task 2:** Complex object literal creation
- [ ] **Task 3:** Method enhancement with `this` context
- [ ] **Task 4:** Constructor function implementation

## 🎯 Success Criteria

Your implementation should:

1. **Functionality:** All tasks work as specified
2. **Code Quality:** Clean, readable, and well-structured
3. **Best Practices:** Follows JavaScript conventions
4. **DRY Principle:** Eliminates unnecessary code duplication
5. **Object-Oriented:** Demonstrates understanding of OOP concepts

## 📚 Additional Resources

- [MDN Object Basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics)
- [JavaScript Object Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Constructor Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [The `this` Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

## 🔧 Testing Your Solutions

1. **Console Testing:** Use browser developer tools to test object properties and methods
2. **Output Verification:** Check that console.log outputs match expected results
3. **Method Testing:** Verify that methods work correctly across different object instances
4. **Edge Cases:** Test with different property values and object configurations

## 🎓 Learning Outcomes

After completing this module, you will:

- ✅ Understand object creation patterns in JavaScript
- ✅ Master property access techniques
- ✅ Know how to define and invoke object methods
- ✅ Understand the `this` keyword in object context
- ✅ Apply the DRY principle to eliminate code duplication
- ✅ Create objects using constructor functions
- ✅ Implement basic object-oriented programming concepts

---

**Happy Coding!** 🚀 Remember: Objects are the foundation of JavaScript programming - mastering them opens the door to advanced concepts like classes, prototypes, and modern JavaScript frameworks.
