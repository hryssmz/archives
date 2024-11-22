// src/jmespath/tutorial.spec.ts
import { search } from "jmespath";

describe("Basic Expressions", () => {
  test("identifier", () => {
    const jsonDoc = { a: "foo", b: "bar", c: "baz" };

    expect(search(jsonDoc, "a")).toBe("foo");
    expect(search(jsonDoc, "b")).toBe("bar");
    expect(search(jsonDoc, "c")).toBe("baz");
    expect(search(jsonDoc, "d")).toBeNull();
  });

  test("subexpression", () => {
    const jsonDoc = { a: { b: { c: { d: "value" } } } };

    expect(search(jsonDoc, "a.b.c.d")).toBe("value");
    expect(search(jsonDoc, "b")).toBeNull();
    expect(search(jsonDoc, "b.c.d.e")).toBeNull();
  });

  test("index expression", () => {
    const jsonDoc = ["a", "b", "c", "d", "e", "f"];

    expect(search(jsonDoc, "[1]")).toBe("b");
    expect(search(jsonDoc, "[10]")).toBeNull();
    expect(search(jsonDoc, "[-1]")).toBe("f");
    expect(search(jsonDoc, "[-2]")).toBe("e");
  });

  test("combine basic expressions", () => {
    const jsonDoc = {
      a: {
        b: {
          c: [{ d: [0, [1, 2]] }, { d: [3, 4] }],
        },
      },
    };

    expect(search(jsonDoc, "a.b.c[0].d[1][0]")).toBe(1);
  });
});

describe("Slicing", () => {
  test("select a contiguous subset of an array", () => {
    const jsonDoc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(search(jsonDoc, "[0:5]")).toStrictEqual([0, 1, 2, 3, 4]);
    expect(search(jsonDoc, "[5:10]")).toStrictEqual([5, 6, 7, 8, 9]);
    expect(search(jsonDoc, "[:5]")).toStrictEqual([0, 1, 2, 3, 4]);
  });

  test("use the step value", () => {
    const jsonDoc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(search(jsonDoc, "[::2]")).toStrictEqual([0, 2, 4, 6, 8]);
    expect(search(jsonDoc, "[::-1]")).toStrictEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ]);
  });
});

describe("Projections", () => {
  test("list projection", () => {
    const jsonDoc = {
      people: [
        { first: "James", last: "d" },
        { first: "Jacob", last: "e" },
        { first: "Jayden", last: "f" },
        { missing: "different" },
      ],
      foo: { bar: "baz" },
    };

    expect(search(jsonDoc, "people[*].first")).toStrictEqual([
      "James",
      "Jacob",
      "Jayden",
    ]);
    expect(search(jsonDoc, "people[*].bar")).toStrictEqual([]);
    expect(search(jsonDoc, "foo[*].bar")).toBeNull();
  });

  test("slice projection", () => {
    const jsonDoc = {
      people: [
        { first: "James", last: "d" },
        { first: "Jacob", last: "e" },
        { first: "Jayden", last: "f" },
        { missing: "different" },
      ],
      foo: { bar: "baz" },
    };

    expect(search(jsonDoc, "people[:2].first")).toStrictEqual([
      "James",
      "Jacob",
    ]);
  });

  test("object projection", () => {
    const jsonDoc = {
      ops: {
        functionA: { numArgs: 2 },
        functionB: { numArgs: 3 },
        functionC: { variadic: true },
      },
    };

    expect(search(jsonDoc, "ops.*.numArgs")).toStrictEqual([2, 3]);
    expect(search(jsonDoc, "ops.*")).toStrictEqual([
      { numArgs: 2 },
      { numArgs: 3 },
      { variadic: true },
    ]);

    const opArray = [{ numArgs: 2 }, { numArgs: 3 }, { variadic: true }];

    expect(search(opArray, "[*].numArgs")).toStrictEqual([2, 3]);
  });

  test("flatten projection", () => {
    const jsonDoc = {
      reservations: [
        { instances: [{ state: "running" }, { state: "stopped" }] },
        { instances: [{ state: "terminated" }, { state: "running" }] },
      ],
    };

    expect(search(jsonDoc, "reservations[*].instances[*].state")).toStrictEqual(
      [
        ["running", "stopped"],
        ["terminated", "running"],
      ]
    );
    // flatten
    expect(search(jsonDoc, "reservations[].instances[].state")).toStrictEqual([
      "running",
      "stopped",
      "terminated",
      "running",
    ]);
    // flatten
    expect(search(jsonDoc, "reservations[*].instances[].state")).toStrictEqual([
      "running",
      "stopped",
      "terminated",
      "running",
    ]);
    // not flatten
    expect(search(jsonDoc, "reservations[].instances[*].state")).toStrictEqual([
      ["running", "stopped"],
      ["terminated", "running"],
    ]);
  });

  test("flatten a list", () => {
    const jsonDoc = [[0, 1], 2, [3], 4, [5, [6, 7]]];

    expect(search(jsonDoc, "[]")).toStrictEqual([0, 1, 2, 3, 4, 5, [6, 7]]);
    expect(search(jsonDoc, "[][]")).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(search(jsonDoc, "[][][]")).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7]);
  });

  test("filter projection", () => {
    const jsonDoc = {
      machines: [
        { name: "a", state: "running" },
        { name: "b", state: "stopped" },
        { name: "b", state: "running" },
      ],
    };

    expect(search(jsonDoc, "machines[?state=='running'].name")).toStrictEqual([
      "a",
      "b",
    ]);
    expect(search(jsonDoc, "machines[? state == 'stopped']")).toStrictEqual([
      { name: "b", state: "stopped" },
    ]);
  });
});

describe("Pipe Expressions", () => {
  test("get the first element in a list", () => {
    const jsonDoc = {
      people: [
        { first: "James", last: "d" },
        { first: "Jacob", last: "e" },
        { first: "Jayden", last: "f" },
        { missing: "different" },
      ],
      foo: { bar: "baz" },
    };

    expect(search(jsonDoc, "people[*].first")).toStrictEqual([
      "James",
      "Jacob",
      "Jayden",
    ]);
    expect(search(jsonDoc, "people[*].first[0]")).toStrictEqual([]);
    expect(search(jsonDoc, "people[0].first")).toBe("James");

    expect(search(jsonDoc, "people[*].first | [0]")).toBe("James");

    const firstNames = search(jsonDoc, "people[*].first");

    expect(search(firstNames, "[0]")).toBe("James");
  });
});

describe("MultiSelect", () => {
  test("multiselect list", () => {
    const jsonDoc = {
      people: [
        { name: "a", state: { name: "up" } },
        { name: "b", state: { name: "down" } },
        { name: "c", state: { name: "up" } },
      ],
    };

    expect(search(jsonDoc, "people[].[name, state.name]")).toStrictEqual([
      ["a", "up"],
      ["b", "down"],
      ["c", "up"],
    ]);
    expect(search(jsonDoc, "people[].[foo, bar]")).toStrictEqual([
      [null, null],
      [null, null],
      [null, null],
    ]);
  });

  test("multiselect hash", () => {
    const jsonDoc = {
      people: [
        { name: "a", state: { name: "up" } },
        { name: "b", state: { name: "down" } },
        { name: "c", state: { name: "up" } },
      ],
    };

    expect(
      search(jsonDoc, "people[].{Name: name, State: state.name}")
    ).toStrictEqual([
      { Name: "a", State: "up" },
      { Name: "b", State: "down" },
      { Name: "c", State: "up" },
    ]);
  });
});

describe("Functions", () => {
  test("length()", () => {
    const jsonDoc = {
      people: [
        { name: "b", age: 30, state: { name: "up" } },
        { name: "a", age: 50, state: { name: "down" } },
        { name: "c", age: 40, state: { name: "up" } },
      ],
    };

    expect(search(jsonDoc, "length(people)")).toBe(3);
  });

  test("max_by()", () => {
    const jsonDoc = {
      people: [
        { name: "b", age: 30 },
        { name: "a", age: 50 },
        { name: "c", age: 40 },
      ],
    };

    expect(search(jsonDoc, "max_by(people, &age).name")).toBe("a");
  });

  test("combine with expressions", () => {
    const jsonDoc = {
      myarray: ["foo", "foobar", "barfoo", "bar", "baz", "barbaz", "barfoobaz"],
    };

    expect(
      search(jsonDoc, "myarray[?contains(@, 'foo') == `true`]")
    ).toStrictEqual(["foo", "foobar", "barfoo", "barfoobaz"]);
  });
});
