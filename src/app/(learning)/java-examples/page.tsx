import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReadingList from '@/components/learning/ReadingList';
import ContentCard from '@/components/ui/ContentCard';
import PageHeader from '@/components/ui/PageHeader';

const chapterOneTopics = [
  {
    answer:
      'Java has fixed-size primitive types. Use int for normal whole numbers, long for very large numbers, double for decimal calculations, boolean for true/false, and char for one UTF-16 code unit.',
    code: `byte small = 120;
int salary = 250000;
long users = 9_000_000_000L;
double rate = 12.75;
boolean active = true;
char grade = 'A';`,
    eyebrow: 'Chapter 1',
    question: 'Primitive data types',
  },
  {
    answer:
      'Variables hold values and have a type. var lets the compiler infer the type from the right side. final means the variable cannot be reassigned.',
    code: `var name = "Nalin";
final int maxAttempts = 3;
int attempts = 0;
attempts++;`,
    eyebrow: 'Chapter 1',
    question: 'Variables',
  },
  {
    answer:
      'Integer arithmetic drops the decimal part. Cast one side to double when you need decimal division. Parentheses make business formulas easier to read.',
    code: `int total = 17;
int pageSize = 5;
int pages = (total + pageSize - 1) / pageSize;
double average = total / (double) pageSize;`,
    eyebrow: 'Chapter 1',
    question: 'Arithmetic operations',
  },
  {
    answer:
      'Strings are objects and immutable. Methods such as startsWith, contains, substring, and equals return new answers without changing the original string.',
    code: `String first = "Nalin";
String last = "Padmasiri";
String fullName = first + " " + last;
boolean hasPrefix = fullName.startsWith("Nalin");`,
    eyebrow: 'Chapter 1',
    question: 'Strings',
  },
  {
    answer:
      'Scanner is a simple way to read console input. System.out.print and printf are enough for small learning programs and interview examples.',
    code: `Scanner in = new Scanner(System.in);
System.out.print("Name: ");
String name = in.nextLine();
System.out.printf("Hello, %s%n", name);`,
    eyebrow: 'Chapter 1',
    question: 'Input output',
  },
  {
    answer:
      'Arrays have fixed length. ArrayList grows and shrinks, so it is usually better for application data that changes while the program runs.',
    code: `int[] scores = {80, 90, 75};
ArrayList<String> names = new ArrayList<>();
names.add("Nalin");
names.add("Alex");`,
    eyebrow: 'Chapter 1',
    question: 'Arrays & array lists',
  },
] as const;

const chapterTwoTopics = [
  {
    answer:
      'Functional decomposition means breaking a problem into named methods. Each method should do one clear job and return a useful result.',
    code: `static double monthlyPayment(double amount, double annualRate) {
    double monthlyRate = annualRate / 12 / 100;
    return amount * monthlyRate;
}`,
    eyebrow: 'Chapter 2',
    question: 'Functional decomposition',
  },
  {
    answer:
      'A class groups state and behavior. Fields hold state; methods protect and change that state through clear operations.',
    code: `class Account {
    private double balance;

    void deposit(double amount) {
        balance += amount;
    }
}`,
    eyebrow: 'Chapter 2',
    question: 'Implementing classes/objects',
  },
  {
    answer:
      'Constructors create valid objects. Use them to require important values and to keep fields initialized before the object is used.',
    code: `class Customer {
    private final String name;

    Customer(String name) {
        this.name = name;
    }
}`,
    eyebrow: 'Chapter 2',
    question: 'Object construction',
  },
  {
    answer:
      'Records are compact immutable data carriers. Java generates the constructor, accessors, equals, hashCode, and toString for you.',
    code: `record UserSummary(String name, int loginCount) {}

UserSummary summary = new UserSummary("Nalin", 12);`,
    eyebrow: 'Chapter 2',
    question: 'Records',
  },
  {
    answer:
      'Static members belong to the class, not one object. Use static constants and utility methods when the behavior does not depend on instance state.',
    code: `class MathUtil {
    static final double TAX_RATE = 0.15;

    static double addTax(double amount) {
        return amount + amount * TAX_RATE;
    }
}`,
    eyebrow: 'Chapter 2',
    question: 'Static variables & methods',
  },
  {
    answer:
      'Packages organize code and avoid name collisions. Imports let you refer to classes from other packages without writing the full package name every time.',
    code: `package com.nalinsacademy.examples;

import java.util.ArrayList;
import java.util.List;`,
    eyebrow: 'Chapter 2',
    question: 'Packages',
  },
] as const;

export default function JavaExamplesPage() {
  return (
    <>
      <PageHeader
        description="Short theory notes and compact examples, organized chapter by chapter for focused reading."
        eyebrow="Java track"
        tags={['Java', 'Chapter 1', 'Chapter 2', 'Interview basics']}
        title="Core Java for the Impatient, 3rd Edition"
      />

      <ContentCard className="mb-6 overflow-hidden bg-slate-950 text-white">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-lg bg-sky-500 text-white shadow-sm">
            <AutoStoriesIcon fontSize="large" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
              Book reference
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Core Java for the Impatient, 3rd Edition
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Author: Cay S. Horstmann. These notes are short learning summaries
              written for interview preparation, not a replacement for the book.
            </p>
          </div>
        </div>
      </ContentCard>

      <section className="grid gap-6 xl:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
              <MenuBookIcon fontSize="small" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                Chapter 1
              </p>
              <h2 className="text-xl font-black text-slate-950">
                Fundamental programming structures
              </h2>
            </div>
          </div>
          <ReadingList codeLanguage="java" items={chapterOneTopics} />
        </div>

        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex rounded-lg bg-sky-100 p-3 text-sky-800">
              <MenuBookIcon fontSize="small" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
                Chapter 2
              </p>
              <h2 className="text-xl font-black text-slate-950">
                Object-oriented programming
              </h2>
            </div>
          </div>
          <ReadingList codeLanguage="java" items={chapterTwoTopics} />
        </div>
      </section>
    </>
  );
}
