// src/jsonpath/tutorial.spec.ts
import jp from "jsonpath";

describe("Query Example", () => {
  test("query example", () => {
    const cities = [
      { name: "London", population: 8615246 },
      { name: "Berlin", population: 3517424 },
      { name: "Madrid", population: 3165235 },
      { name: "Rome", population: 2870528 },
    ];

    expect(jp.query(cities, "$..name")).toStrictEqual([
      "London",
      "Berlin",
      "Madrid",
      "Rome",
    ]);
  });
});

describe("JSONPath Syntax", () => {
  const data = {
    store: {
      book: [
        {
          category: "reference",
          author: "Nigel Rees",
          title: "Sayings of the Century",
          price: 8.95,
        },
        {
          category: "fiction",
          author: "Evelyn Waugh",
          title: "Sword of Honour",
          price: 12.99,
        },
        {
          category: "fiction",
          author: "Herman Melville",
          title: "Moby Dick",
          isbn: "0-553-21311-3",
          price: 8.99,
        },
        {
          category: "fiction",
          author: "J. R. R. Tolkien",
          title: "The Lord of the Rings",
          isbn: "0-395-19395-8",
          price: 22.99,
        },
      ],
      bicycle: {
        color: "red",
        price: 19.95,
      },
    },
  };

  test("The authors of all books in the store", () => {
    const result = jp.query(data, "$.store.book[*].author");

    expect(result).toStrictEqual([
      "Nigel Rees",
      "Evelyn Waugh",
      "Herman Melville",
      "J. R. R. Tolkien",
    ]);
  });

  test("All authors", () => {
    const result = jp.query(data, "$..author");

    expect(result).toStrictEqual([
      "Nigel Rees",
      "Evelyn Waugh",
      "Herman Melville",
      "J. R. R. Tolkien",
    ]);
  });

  test("All things in store, which are some books and a red bicycle", () => {
    const result = jp.query(data, "$.store.*");

    expect(result).toStrictEqual([
      [
        {
          category: "reference",
          author: "Nigel Rees",
          title: "Sayings of the Century",
          price: 8.95,
        },
        {
          category: "fiction",
          author: "Evelyn Waugh",
          title: "Sword of Honour",
          price: 12.99,
        },
        {
          category: "fiction",
          author: "Herman Melville",
          title: "Moby Dick",
          isbn: "0-553-21311-3",
          price: 8.99,
        },
        {
          category: "fiction",
          author: "J. R. R. Tolkien",
          title: "The Lord of the Rings",
          isbn: "0-395-19395-8",
          price: 22.99,
        },
      ],
      {
        color: "red",
        price: 19.95,
      },
    ]);
  });

  test("The price of everything in the store", () => {
    const result = jp.query(data, "$.store..price");

    expect(result).toStrictEqual([8.95, 12.99, 8.99, 22.99, 19.95]);
  });

  test("The third book", () => {
    const result = jp.query(data, "$..book[2]");

    expect(result).toStrictEqual([
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
    ]);
  });

  test("The last book via script subscript", () => {
    const result = jp.query(data, "$..book[(@.length-1)]");

    expect(result).toStrictEqual([
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
    ]);
  });

  test("The last book via slice", () => {
    const result = jp.query(data, "$..book[-1:]");

    expect(result).toStrictEqual([
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
    ]);
  });

  test("The first two books via subscript union", () => {
    const result = jp.query(data, "$..book[0,1]");

    expect(result).toStrictEqual([
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
      },
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
      },
    ]);
  });

  test("The first two books via subscript array slice", () => {
    const result = jp.query(data, "$..book[:2]");

    expect(result).toStrictEqual([
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
      },
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
      },
    ]);
  });

  test("Filter all books with isbn number", () => {
    const result = jp.query(data, "$..book[?(@.isbn)]");

    expect(result).toStrictEqual([
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
    ]);
  });

  test("Filter all books cheaper than 10", () => {
    const result = jp.query(data, "$..book[?(@.price<10)]");

    expect(result).toStrictEqual([
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
      },
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
    ]);
  });

  test("Filter all books that cost 8.95", () => {
    const result = jp.query(data, "$..book[?(@.price==8.95)]");

    expect(result).toStrictEqual([
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
      },
    ]);
  });

  test("Filter all fiction books cheaper than 30", () => {
    const result = jp.query(
      data,
      "$..book[?(@.price<30 && @.category=='fiction')]"
    );

    expect(result).toStrictEqual([
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
      },
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
    ]);
  });

  test("All members of JSON structure", () => {
    const result = jp.query(data, "$..*");

    expect(result).toStrictEqual([
      {
        book: [
          {
            category: "reference",
            author: "Nigel Rees",
            title: "Sayings of the Century",
            price: 8.95,
          },
          {
            category: "fiction",
            author: "Evelyn Waugh",
            title: "Sword of Honour",
            price: 12.99,
          },
          {
            category: "fiction",
            author: "Herman Melville",
            title: "Moby Dick",
            isbn: "0-553-21311-3",
            price: 8.99,
          },
          {
            category: "fiction",
            author: "J. R. R. Tolkien",
            title: "The Lord of the Rings",
            isbn: "0-395-19395-8",
            price: 22.99,
          },
        ],
        bicycle: {
          color: "red",
          price: 19.95,
        },
      },
      [
        {
          category: "reference",
          author: "Nigel Rees",
          title: "Sayings of the Century",
          price: 8.95,
        },
        {
          category: "fiction",
          author: "Evelyn Waugh",
          title: "Sword of Honour",
          price: 12.99,
        },
        {
          category: "fiction",
          author: "Herman Melville",
          title: "Moby Dick",
          isbn: "0-553-21311-3",
          price: 8.99,
        },
        {
          category: "fiction",
          author: "J. R. R. Tolkien",
          title: "The Lord of the Rings",
          isbn: "0-395-19395-8",
          price: 22.99,
        },
      ],
      {
        color: "red",
        price: 19.95,
      },
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
      },
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
      },
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
      "reference",
      "Nigel Rees",
      "Sayings of the Century",
      8.95,
      "fiction",
      "Evelyn Waugh",
      "Sword of Honour",
      12.99,
      "fiction",
      "Herman Melville",
      "Moby Dick",
      "0-553-21311-3",
      8.99,
      "fiction",
      "J. R. R. Tolkien",
      "The Lord of the Rings",
      "0-395-19395-8",
      22.99,
      "red",
      19.95,
    ]);
  });
});
