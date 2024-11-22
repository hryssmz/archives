// src/jmespath/example.spec.ts
import { search } from "jmespath";

describe("Filters and Multiselect Lists", () => {
  test("filters and multiselect lists", () => {
    const jsonDoc = {
      people: [
        { age: 20, other: "foo", name: "Bob" },
        { age: 25, other: "bar", name: "Fred" },
        { age: 30, other: "baz", name: "George" },
      ],
    };

    expect(search(jsonDoc, "people[?age > `20`].[name, age]")).toStrictEqual([
      ["Fred", 25],
      ["George", 30],
    ]);
  });
});

describe("Filters and Multiselect Hashes", () => {
  test("filters and multiselect hashes", () => {
    const jsonDoc = {
      people: [
        { age: 20, other: "foo", name: "Bob" },
        { age: 25, other: "bar", name: "Fred" },
        { age: 30, other: "baz", name: "George" },
      ],
    };

    expect(
      search(jsonDoc, "people[?age > `20`].{name: name, age: age}")
    ).toStrictEqual([
      { name: "Fred", age: 25 },
      { name: "George", age: 30 },
    ]);
  });

  test("multiselect hashes with expressions", () => {
    const jsonDoc = {
      people: [
        { age: 20, tags: ["a", "b", "c"], name: "Bob" },
        { age: 25, tags: ["d", "e", "f"], name: "Fred" },
        { age: 30, tags: ["g", "h", "i"], name: "George" },
      ],
    };

    expect(
      search(jsonDoc, "people[*].{name: name, tags: tags[0]}")
    ).toStrictEqual([
      { name: "Bob", tags: "a" },
      { name: "Fred", tags: "d" },
      { name: "George", tags: "g" },
    ]);
  });
});

describe("Working with Nested Data", () => {
  test("flatten operator, multiselect lists, filters, and pipes", () => {
    const jsonDoc = {
      reservations: [
        {
          instances: [
            {
              type: "small",
              state: { name: "running" },
              tags: [
                { Key: "Name", Values: ["Web"] },
                { Key: "version", Values: ["1"] },
              ],
            },
            {
              type: "large",
              state: { name: "stopped" },
              tags: [
                { Key: "Name", Values: ["Web"] },
                { Key: "version", Values: ["1"] },
              ],
            },
          ],
        },
        {
          instances: [
            {
              type: "medium",
              state: { name: "terminated" },
              tags: [
                { Key: "Name", Values: ["Web"] },
                { Key: "version", Values: ["1"] },
              ],
            },
            {
              type: "xlarge",
              state: { name: "running" },
              tags: [
                { Key: "Name", Values: ["DB"] },
                { Key: "version", Values: ["1"] },
              ],
            },
          ],
        },
      ],
    };

    expect(
      search(
        jsonDoc,
        "reservations[].instances[].[tags[?Key=='Name'].Values[] | [0], type, state.name]"
      )
    ).toStrictEqual([
      ["Web", "small", "running"],
      ["Web", "large", "stopped"],
      ["Web", "medium", "terminated"],
      ["DB", "xlarge", "running"],
    ]);

    expect(search(jsonDoc, "reservations[].instances[]")).toStrictEqual([
      {
        type: "small",
        state: { name: "running" },
        tags: [
          { Key: "Name", Values: ["Web"] },
          { Key: "version", Values: ["1"] },
        ],
      },
      {
        type: "large",
        state: { name: "stopped" },
        tags: [
          { Key: "Name", Values: ["Web"] },
          { Key: "version", Values: ["1"] },
        ],
      },
      {
        type: "medium",
        state: { name: "terminated" },
        tags: [
          { Key: "Name", Values: ["Web"] },
          { Key: "version", Values: ["1"] },
        ],
      },
      {
        type: "xlarge",
        state: { name: "running" },
        tags: [
          { Key: "Name", Values: ["DB"] },
          { Key: "version", Values: ["1"] },
        ],
      },
    ]);
  });

  test("filtering and selecting nested data", () => {
    const jsonDoc = {
      people: [
        {
          general: { id: 100, age: 20, other: "foo", name: "Bob" },
          history: { first_login: "2014-01-01", last_login: "2014-01-02" },
        },
        {
          general: { id: 101, age: 30, other: "bar", name: "Bill" },
          history: { first_login: "2014-05-01", last_login: "2014-05-02" },
        },
      ],
    };

    expect(
      search(jsonDoc, "people[?general.id==`100`].general | [0]")
    ).toStrictEqual({ id: 100, age: 20, other: "foo", name: "Bob" });
    expect(search(jsonDoc, "people[?general.id==`100`]")).toStrictEqual([
      {
        general: { id: 100, age: 20, other: "foo", name: "Bob" },
        history: { first_login: "2014-01-01", last_login: "2014-01-02" },
      },
    ]);
    expect(search(jsonDoc, "people[?general.id==`100`].general")).toStrictEqual(
      [{ id: 100, age: 20, other: "foo", name: "Bob" }]
    );
    expect(
      search(jsonDoc, "people[?general.id==`100`] | [0].general")
    ).toStrictEqual({ id: 100, age: 20, other: "foo", name: "Bob" });
  });
});

describe("Using Functions", () => {
  test("sort_by()", () => {
    const jsonDoc = {
      Contents: [
        { Date: "2014-12-21T05:18:08.000Z", Key: "logs/bb", Size: 303 },
        { Date: "2014-12-20T05:19:10.000Z", Key: "logs/aa", Size: 308 },
        { Date: "2014-12-20T05:19:12.000Z", Key: "logs/qux", Size: 297 },
        { Date: "2014-11-20T05:22:23.000Z", Key: "logs/baz", Size: 329 },
        { Date: "2014-12-20T05:25:24.000Z", Key: "logs/bar", Size: 604 },
        { Date: "2014-12-20T05:27:12.000Z", Key: "logs/foo", Size: 647 },
      ],
    };

    expect(
      search(jsonDoc, "sort_by(Contents, &Date)[*].{Key: Key, Size: Size}")
    ).toStrictEqual([
      { Key: "logs/baz", Size: 329 },
      { Key: "logs/aa", Size: 308 },
      { Key: "logs/qux", Size: 297 },
      { Key: "logs/bar", Size: 604 },
      { Key: "logs/foo", Size: 647 },
      { Key: "logs/bb", Size: 303 },
    ]);
  });
});

describe("Pipes", () => {
  test("JMESPath front page", () => {
    const jsonDoc = {
      locations: [
        { name: "Seattle", state: "WA" },
        { name: "New York", state: "NY" },
        { name: "Bellevue", state: "WA" },
        { name: "Olympia", state: "WA" },
      ],
    };

    expect(
      search(
        jsonDoc,
        "locations[?state == 'WA'].name | sort(@)[-2:] | {WashingtonCities: join(', ', @)}"
      )
    ).toStrictEqual({
      WashingtonCities: "Olympia, Seattle",
    });
  });
});
