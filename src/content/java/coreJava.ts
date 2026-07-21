export const bookReference = {
  author: 'Cay S. Horstmann',
  note: 'These are short learning summaries written for interview preparation, not a replacement for the book.',
  title: 'Core Java for the Impatient, 3rd Edition',
} as const;

export const chapterOneTopics = [
  {
    answer:
      'Primitive data types are the smallest built-in values in Java. They are not objects, so they are fast, predictable, and stored directly as values. Use int for normal whole numbers, long when the number can become very large, double for most decimal calculations, boolean for true/false decisions, and char for one UTF-16 code unit. As you become more advanced, remember that primitives have fixed ranges, integer overflow does not throw an error, and decimal money calculations usually need BigDecimal instead of double.',
    code: `byte small = 120;
int salary = 250000;
long users = 9_000_000_000L;
double rate = 12.75;
boolean active = true;
char grade = 'A';`,
    question: 'Primitive data types',
  },
  {
    answer:
      'A variable is a named place where a value is stored while the program runs. Every Java variable has a type, and that type controls what values can be assigned and what operations are allowed. Beginners can think of int attempts = 0 as saying: create a number variable called attempts and start it at zero. The var keyword does not make Java dynamic; it only asks the compiler to infer the type from the value on the right side. Use final when a value should not be reassigned, which makes important code easier to trust and refactor.',
    code: `var name = "Nalin";
final int maxAttempts = 3;
int attempts = 0;
attempts++;`,
    question: 'Variables',
  },
  {
    answer:
      'Arithmetic in Java follows normal operator precedence: multiplication and division happen before addition and subtraction. The confusing part for new learners is integer division. When both sides are integers, Java returns an integer and removes the decimal part, so 17 / 5 becomes 3. Cast one side to double when the answer must include decimals. In real projects, use parentheses to show business meaning clearly, even when Java would calculate the same answer without them.',
    code: `int total = 17;
int pageSize = 5;
int pages = (total + pageSize - 1) / pageSize;
double average = total / (double) pageSize;`,
    question: 'Arithmetic operations',
  },
  {
    answer:
      'A String represents text. Unlike primitives, String is an object, but Java gives it special syntax with double quotes and the + operator. Strings are immutable, meaning methods do not change the original text; they return a new value or a result. Use equals to compare text content, not ==, because == checks whether two references point to the same object. For expert-level code, prefer StringBuilder when building text inside large loops and be careful with locale-sensitive operations such as case conversion.',
    code: `String first = "Nalin";
String last = "Padmasiri";
String fullName = first + " " + last;
boolean hasPrefix = fullName.startsWith("Nalin");`,
    question: 'Strings',
  },
  {
    answer:
      'Console input and output are useful while learning because they let you interact with a small program without building a UI. Scanner can read text from System.in, and System.out.print, println, and printf can display values. Use nextLine when you want a full line of text. Be careful when mixing nextInt or nextDouble with nextLine because the newline can remain in the input buffer. In production applications, input usually comes from APIs, files, databases, or forms, but the same idea remains: read data, validate it, process it, and return a result.',
    code: `Scanner in = new Scanner(System.in);
System.out.print("Name: ");
String name = in.nextLine();
System.out.printf("Hello, %s%n", name);`,
    question: 'Input output',
  },
  {
    answer:
      'Arrays and ArrayList both store multiple values, but they solve different problems. An array has a fixed length after creation, so it is simple and efficient when the size is known. ArrayList can grow and shrink, so it is usually better for application data such as users, orders, or search results. Arrays use length, while ArrayList uses size(). Arrays can store primitives directly, but ArrayList stores objects, so primitives are wrapped as Integer, Double, and similar wrapper types.',
    code: `int[] scores = {80, 90, 75};
ArrayList<String> names = new ArrayList<>();
names.add("Nalin");
names.add("Alex");`,
    question: 'Arrays & array lists',
  },
] as const;

export const chapterTwoTopics = [
  {
    answer:
      'Functional decomposition means breaking one large problem into smaller named methods. For a beginner, this simply means: do not place every line inside main. Move repeated or meaningful work into a method with a clear name. For an experienced developer, good decomposition improves testing, reuse, debugging, and readability. A method should usually do one clear job, receive the data it needs as parameters, and return a useful result instead of changing hidden state.',
    code: `static double monthlyPayment(double amount, double annualRate) {
    double monthlyRate = annualRate / 12 / 100;
    return amount * monthlyRate;
}`,
    question: 'Functional decomposition',
  },
  {
    answer:
      'A class is a blueprint for creating objects. Fields hold the object state, and methods describe what the object can do. For example, an Account object can have a balance field and a deposit method. Good object-oriented code does not expose fields directly when outside code should not change them freely. Instead, it protects state with private fields and provides methods that keep the object valid. This is the foundation of encapsulation.',
    code: `class Account {
    private double balance;

    void deposit(double amount) {
        balance += amount;
    }
}`,
    question: 'Implementing classes/objects',
  },
  {
    answer:
      'A constructor runs when a new object is created. Its main job is to put the object into a valid starting state. If a Customer must always have a name, the constructor should require that name instead of allowing an incomplete object. Constructors can validate arguments, assign fields, and make invalid states harder to create. Advanced code often combines constructors with static factory methods when object creation needs clearer names, caching, or different creation paths.',
    code: `class Customer {
    private final String name;

    Customer(String name) {
        this.name = name;
    }
}`,
    question: 'Object construction',
  },
  {
    answer:
      'A record is a compact way to create an immutable data carrier. If you only need to group values, such as a user name and login count, a record can replace a much longer class. Java automatically creates the constructor, accessor methods, equals, hashCode, and toString. Records are excellent for DTOs, API responses, query results, and value-style data. They are not a replacement for every class because their fields are final and their main purpose is to represent data, not complex mutable behavior.',
    code: `record UserSummary(String name, int loginCount) {}

UserSummary summary = new UserSummary("Nalin", 12);`,
    question: 'Records',
  },
  {
    answer:
      'A factory method is a method that creates and returns an object. Instead of calling a constructor directly everywhere, you call a named method such as of, from, parse, or create. This makes object creation easier to understand because the method name can explain the purpose. Factory methods can also validate input, return a subtype, reuse cached objects, or hide complex setup. A common rule is: use a constructor when creation is simple, and use a factory method when a name or extra creation logic makes the code clearer.',
    code: `class Money {
    private final double amount;

    private Money(double amount) {
        this.amount = amount;
    }

    static Money ofDollars(double amount) {
        if (amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
        return new Money(amount);
    }
}

Money fee = Money.ofDollars(25);`,
    question: 'Factory methods',
  },
  {
    answer:
      'Static members belong to the class itself, not to one object instance. A static constant is useful when every object should share the same value, such as a tax rate or default limit. A static method is useful when behavior does not depend on object state, such as a small calculation helper. Do not overuse static methods for business behavior that should belong to an object, because too much static code can make testing and extension harder.',
    code: `class MathUtil {
    static final double TAX_RATE = 0.15;

    static double addTax(double amount) {
        return amount + amount * TAX_RATE;
    }
}`,
    question: 'Static variables & methods',
  },
  {
    answer:
      'Packages organize Java classes into namespaces. They help large projects avoid name collisions and keep related code together. The package line at the top of a file declares where the class belongs. Imports let you use classes from other packages without writing their full names every time. In professional projects, package structure usually follows the domain and responsibility of the code, such as controller, service, repository, model, or feature-based folders.',
    code: `package com.nalinsacademy.examples;

import java.util.ArrayList;
import java.util.List;`,
    question: 'Packages',
  },
] as const;
