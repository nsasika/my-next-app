import CodeBlock from '@/components/ui/CodeBlock';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

const javaTopics = [
  {
    code: `byte small = 120;
int salary = 250000;
long users = 9_000_000_000L;
double rate = 12.75;
boolean active = true;
char grade = 'A';`,
    note: 'Java has fixed-size primitive types. Use int for normal whole numbers, long for very large numbers, double for decimal calculations, boolean for true/false, and char for one UTF-16 code unit.',
    title: 'Primitive data types',
  },
  {
    code: `var name = "Nalin";
final int maxAttempts = 3;
int attempts = 0;
attempts++;`,
    note: 'Variables hold values and have a type. var lets the compiler infer the type from the right side. final means the variable cannot be reassigned.',
    title: 'Variables',
  },
  {
    code: `int total = 17;
int pageSize = 5;
int pages = (total + pageSize - 1) / pageSize;
double average = total / (double) pageSize;`,
    note: 'Integer arithmetic drops the decimal part. Cast one side to double when you need decimal division. Parentheses make business formulas easier to read.',
    title: 'Arithmetic operations',
  },
  {
    code: `String first = "Nalin";
String last = "Padmasiri";
String fullName = first + " " + last;
boolean hasPrefix = fullName.startsWith("Nalin");`,
    note: 'Strings are objects and immutable. Methods such as startsWith, contains, substring, and equals return new answers without changing the original string.',
    title: 'Strings',
  },
  {
    code: `Scanner in = new Scanner(System.in);
System.out.print("Name: ");
String name = in.nextLine();
System.out.printf("Hello, %s%n", name);`,
    note: 'Scanner is a simple way to read console input. System.out.print and printf are enough for small learning programs and interview examples.',
    title: 'Input output',
  },
  {
    code: `int[] scores = {80, 90, 75};
ArrayList<String> names = new ArrayList<>();
names.add("Nalin");
names.add("Alex");`,
    note: 'Arrays have fixed length. ArrayList grows and shrinks, so it is usually better for application data that changes while the program runs.',
    title: 'Arrays & array lists',
  },
  {
    code: `static double monthlyPayment(double amount, double annualRate) {
    double monthlyRate = annualRate / 12 / 100;
    return amount * monthlyRate;
}`,
    note: 'Functional decomposition means breaking a problem into named methods. Each method should do one clear job and return a useful result.',
    title: 'Functional decomposition',
  },
  {
    code: `class Account {
    private double balance;

    void deposit(double amount) {
        balance += amount;
    }
}`,
    note: 'A class groups state and behavior. Fields hold state; methods protect and change that state through clear operations.',
    title: 'Implementing classes/objects',
  },
  {
    code: `class Customer {
    private final String name;

    Customer(String name) {
        this.name = name;
    }
}`,
    note: 'Constructors create valid objects. Use them to require important values and to keep fields initialized before the object is used.',
    title: 'Object construction',
  },
  {
    code: `record UserSummary(String name, int loginCount) {}

UserSummary summary = new UserSummary("Nalin", 12);`,
    note: 'Records are compact immutable data carriers. Java generates the constructor, accessors, equals, hashCode, and toString for you.',
    title: 'Records',
  },
  {
    code: `class MathUtil {
    static final double TAX_RATE = 0.15;

    static double addTax(double amount) {
        return amount + amount * TAX_RATE;
    }
}`,
    note: 'Static members belong to the class, not one object. Use static constants and utility methods when the behavior does not depend on instance state.',
    title: 'Static variables & methods',
  },
  {
    code: `package com.nalinsacademy.examples;

import java.util.ArrayList;
import java.util.List;`,
    note: 'Packages organize code and avoid name collisions. Imports let you refer to classes from other packages without writing the full package name every time.',
    title: 'Packages',
  },
] as const;

export default function JavaExamplesPage() {
  return (
    <>
      <PageHeader
        description="Short theory notes and compact examples from the early Java for the Impatient style topics."
        eyebrow="Java track"
        tags={['Java', 'Chapter 1', 'Chapter 2', 'Interview basics']}
        title="Java Examples: Chapters 1 and 2"
      />

      <div className="grid gap-4 xl:grid-cols-2">
        {javaTopics.map((topic, index) => (
          <ContentCard key={topic.title}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
              Topic {index + 1}
            </p>
            <h2 className="mt-2 text-xl font-black text-slate-950">
              {topic.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {topic.note}
            </p>
            <div className="mt-4">
              <CodeBlock code={topic.code} language="java" />
            </div>
          </ContentCard>
        ))}
      </div>
    </>
  );
}
