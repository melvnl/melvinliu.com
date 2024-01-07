---
title: The Price of Utilizing Random UUID on Database Performance
slug: the-price-of-utilizing-random-uuid-on-database-performance
cover: "/static/images/blogs/19.png"
blurUrl: "data:image/jpeg;base64,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"
description: Understanding the performance impact of using popular random UUID (v4) as primary key in SQL databases
date: "2024-01-07"
---

## Backstory

During my previous university semester, while working on my final project—a basic live attendance tool with React and Firebase. I recall receiving feedback from a project evaluator who expressed dissatisfaction with my database indexing using UUIDv4. This critique was due to specific technical issues. After some years, I recently came across a video by Hussein Nasser [video](https://www.youtube.com/watch?v=OAOQ7U0XAi0), where he explained the problems associated with UUIDv4, shedding light on the concerns raised during my project evaluation.

[![Hussein Nasser Thumbnail](https://img.youtube.com/vi/OAOQ7U0XAi0/0.jpg)](https://www.youtube.com/watch?v=OAOQ7U0XAi0)

## What are UUIDs?

UUIDs, or Universally Unique Identifiers, are 128-bit identifiers used to uniquely identify information in computer systems without requiring a centralized authority. They consist of 32 hexadecimal digits typically displayed in five groups (8-4-4-4-12) separated by hyphens.

In databases, UUIDs are frequently used as primary keys due to their inherent uniqueness. Unlike incrementing integers, which might cause conflicts in distributed systems or when merging data from various sources, UUIDs offer a reliable solution. Their generation algorithms consider factors like the current timestamp, random numbers, and unique system or network identifiers, ensuring a near-zero probability of collision between identifiers, thus preserving data integrity.

The different versions of UUIDs (1 to 5) use various algorithms and sources to generate unique identifiers:

  - Version 1 (Time-based): Generated from the current timestamp and the MAC address of the network interface. This version ensures that UUIDs are time-ordered and are based on the host that generates them.
  - Version 2 (DCE Security): Similar to Version 1 but using POSIX UID/GID values.
  - Version 3 (Name-based, MD5): Generated using a namespace and an MD5 hash of the name to create the UUID. This version ensures uniqueness based on the namespace and the name.
  - Version 4 (Random): Generated using random or pseudo-random numbers. It does not include meaningful information such as timestamps or MAC addresses but ensures randomness and a higher probability of uniqueness.
  - Version 5 (Name-based, SHA-1): Similar to Version 3 but using the more secure SHA-1 hash algorithm for creating the UUID.

Each version has its specific use cases and considerations regarding uniqueness, generation method, and security. The choice of UUID version in a particular application or system depends on the specific requirements for uniqueness, ordering, and security measures.

## The popular UUIDv4 (and it's problem)

From all version of UUID one rise above all, UUIDv4 is popular among the other to be used as primary key in databases due to its high probability of uniqueness derived from randomness. It doesn't rely on specific system details or time, making it easily generated across platforms while maintaining data security and privacy. Its simplicity, strong uniqueness, and ease of implementation make it a popular choice for ensuring distinct primary keys in database systems, but this come with a price.

To comprehend the influence of using UUIDv4 values as the primary key, it's crucial to examine how InnoDB organizes data. InnoDB arranges a table's rows within the primary key's b-tree, referred to as a clustered index in database terminology. This index automatically arranges rows based on the primary key.

When a new row with a randomly generated primary key value is inserted, InnoDB undertakes a sequence of actions. It locates the page where the row should reside, retrieves it into the buffer pool if not already present, inserts the row, and eventually writes the page back to disk. In scenarios with entirely random values and extensive tables, all b-tree leaf pages are susceptible to receiving the new row, resulting in no specific 'hot pages.' Inserting rows that don't follow the primary key order leads to page splits, reducing the filling factor.

For tables much larger than the buffer pool, inserting a row will likely require reading a table page from the disk. Consequently, the page in the buffer pool where the new row is inserted becomes 'dirty.' The probability of this page receiving a second row before requiring flushing to disk is minimal. Typically, each insert operation results in two I/O operations – one read and one write. This primary impact significantly affects the I/O rate and acts as a significant scalability limitation.

## UUID V7 and ULID

UUIDv7 and ULID aim to address some of the challenges posed by UUIDv4:
  - UUIDv7: This version of UUID is proposed to introduce a sortable feature based on time. Unlike UUIDv4, which is purely random, UUIDv7 incorporates a time-based element to generate identifiers, thereby allowing for chronological ordering. By introducing time into the UUID generation process, it aims to improve the sorting and indexing capabilities, potentially resolving the issues related to randomness seen in UUIDv4.
  - ULID (Universally Unique Lexicographically Sortable Identifier): ULID is a different approach to identifier generation. It combines randomness with a time component to create identifiers that are both unique and sortable. ULIDs offer the advantages of being roughly time sortable while maintaining a high level of randomness, making them suitable for scenarios where ordered data retrieval is essential.

Both UUIDv7 and ULID attempt to mitigate the problems caused by the randomness of UUIDv4 by incorporating elements of time or lexicographic sorting. These improvements aim to enhance the efficiency of sorting, indexing, and querying in databases, particularly in situations where ordered data presentation or querying based on creation time is necessary.


## Real Use Case (Shopify ULID Case)

In Jul 28, 2022, Shopify engineering publish an article about "Building Resilient Payment Systems", where they explain how they use ULID (Universally Unique Lexicographically Sortable Identifiers) as idempotency key, they claim to improve database write operation speed by 50% using ULID.
You can read it here, [shopify.engineering/building-resilient-payment-systems](https://shopify.engineering/building-resilient-payment-systems)

**You can find me on**

Twitter: [https://twitter.com/mlven23](https://twitter.com/mlven23)\
GitHub: [https://github.com/melvnl](https://github.com/melvnl)\
LinkedIn: [https://github.com/melvnl](https://www.linkedin.com/in/melvin-liu/)

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
