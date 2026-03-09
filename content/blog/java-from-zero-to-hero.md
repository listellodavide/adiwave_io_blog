---
title: "Java from zero to hero"
author: "Davide Listello"
authorRole: "Senior Software Engineer"
date: "2026-02-15"
featuredImage: "/images/fromzerotohero.jpg"
categories:
  - "Java"
  - "A modern language"
tags:
  - "Java"
  - "OOP"
  - "Clean Code"
  - "SOLID"
readTime: "From zero to hero in Java"
---

## From zero to hero in Java

If I had to start all over again and pick a programming language. Will be again Java, it's simple, it's verbose but let you understand what you are doing in a obvious way.
It's very easy to pick up and learning when coming from other languages like C/C++ or Python/Ruby/Scala/Kotlin.
It use OOP and Functional programming so everybody feel at home right from the first hello world.02

## Data Types
Java has both Primitive Types like boolean, char, byte, short, int, long, float or double that Non-Primitive types.
Non Primitive types are Class like String, Enum, Interface, and Collections like ArrayList, HashMap, etc.

## Number in Java
In java a number can be written in may ways:

```java
Decimal     int num = 13;
Binary      int num = 0b1101; // equal to 13 in decimal
Octal       int num = 015;    // equal to 13 in decimal
Hexadecimal int num = 0x0D;   // equal to 13 in decimal
```

## Java comparison for Map

```java
public class Person {

   int age;
   String name;
   String email;


   @Override
   public boolean equals(Object obj) {
       if (this == obj) return true;
       if (obj == null || getClass() != obj.getClass()) return false;

       Person p = (Person) obj;
       return this.age == p.age && this.name.equals(p.name) && this.email.equal(p.email);
   }

    @Override
    public int hashCode() {
        int result = 17;                 // non-zero constant, x + 17 * 31 produce better distribution, So O(1) instead of O(n), fewer collisions
        result = 31 * result + age;      // 31 it is a prime number, so it reduces hash collisions.
        result = 31 * result + (name == null ? 0 : name.hashCode());
        result = 31 * result + (email == null ? 0 : email.hashCode());
        return result;
    }
}

```
Java defines an important rule:
### If two objects are equal according to equals(), they must return the same hashCode().
But the opposite is not required:
### Two objects can have the same hashCode but still be not equal.

How Hash-Based Collections Work

Hash-based collections like HashMap, HashSet, and Hashtable rely on a hashing mechanism to achieve near-instantaneous (O(1)) data retrieval. Instead of searching through every element, they use a "shortcut" to find exactly where the data lives.
1. The Core Logic Flow

The process follows a specific sequence of operations whenever you attempt to put or get an object:
Step 1: Compute hashCode()

The collection calls the object's hashCode() method to get an integer.

    The Contract: If two objects are equal (a.equals(b)), they must return the same hash code.

Step 2: Find the Bucket (The Index)

The collection performs a mathematical operation to map that large integer to a specific index in its internal array.
<center>**index** = *hashCode* % *n*</center>
(Where n is the current capacity of the array.)
Step 3: Use equals() for the Final Match

If multiple objects end up in the same bucket (a collision), they are stored in a list or a tree. The collection then calls equals() on each object in that specific bucket until it finds the exact match.

## Comparison of Java Hash-Based Classes
| Class Implementation | Data Stored | Thread Safety | Null Keys / Values |
|----------------------|--------------------|---------------|---------------------------------------------------------|
| HashMap | Key-Value Pairs | No | Allows one null key; multiple null values |
| HashSet | Unique Elements | No | Uses a HashMap internally to store values |
| Hashtable | Key-Value Pairs | Yes | Does not allow null keys or values (Legacy) |



