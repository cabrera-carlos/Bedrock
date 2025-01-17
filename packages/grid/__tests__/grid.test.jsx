import { spacing } from "@bedrock-layout/spacing-constants";
import React from "react";
import { create } from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { vi } from "vitest";

import { Grid } from "../src";

const Lorem = () => (
  <>
    {Array.from(Array(4).keys()).map((i) => (
      <p key={i}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        vestibulum tortor, vitae venenatis lectus. Praesent gravida dapibus
        neque sit amet molestie. Morbi blandit eu dolor a luctus. Vestibulum
        sollicitudin elit ac nunc scelerisque rhoncus. Nulla felis sapien,
        condimentum ut imperdiet vel, aliquet id ante. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Quisque ultrices, quam nec scelerisque malesuada, lectus elit semper
        diam, ac placerat purus tortor et enim.
      </p>
    ))}
  </>
);

describe("Grid", () => {
  describe("correct usage", () => {
    test("Grid is not null", () => {
      expect(Grid).toBeTruthy();
    });

    it("renders default with no gutter", () => {
      const grid = create(
        <Grid>
          <Lorem />
        </Grid>
      );
      expect(grid.toJSON()).toMatchSnapshot();
    });

    it("renders all the gutter options", () => {
      Object.keys(spacing).forEach((gutter) => {
        const grid = create(
          <Grid gutter={gutter}>
            <Lorem />
          </Grid>
        );
        expect(grid.toJSON()).toMatchSnapshot();
      });
    });

    it("renders custom gutter with number", () => {
      const grid = create(
        <Grid grid={20}>
          <Lorem />
        </Grid>
      );
      expect(grid.toJSON()).toMatchSnapshot();
    });

    it("renders custom gutter with string", () => {
      const grid = create(
        <Grid grid="3ch">
          <Lorem />
        </Grid>
      );
      expect(grid.toJSON()).toMatchSnapshot();
    });

    it("renders custom minItemWidth", () => {
      const grid = create(
        <Grid gutter="lg" minItemWidth={320}>
          <Lorem />
        </Grid>
      );
      expect(grid.toJSON()).toMatchSnapshot();
    });

    it("renders custom minItemWidth as string", () => {
      const grid = create(
        <Grid gutter="lg" minItemWidth="32rem">
          <Lorem />
        </Grid>
      );
      expect(grid.toJSON()).toMatchSnapshot();
    });

    it("renders with theme overrides", () => {
      const grid = create(
        <ThemeProvider
          theme={{
            breakPoints: { smallOnly: 320 },
            spacing: { "1x": "200px" },
          }}
        >
          <Grid gutter="1x">
            <Lorem />
          </Grid>
        </ThemeProvider>
      );
      expect(grid.toJSON()).toMatchSnapshot();
    });
  });

  describe("incorrect usage", () => {
    beforeEach(() => {
      vi.spyOn(console, "error");
      console.error.mockImplementation(() => undefined);
    });
    afterEach(() => {
      console.error.mockRestore();
    });

    it("renders default with wrong gutter input", () => {
      expect(console.error).not.toBeCalled();

      const errorStack = create(
        <Grid gutter={{ value: "incorrect" }}>
          <Lorem />
        </Grid>
      );

      expect(console.error).toBeCalled();
      expect(errorStack.toJSON()).toMatchSnapshot();
    });

    it("renders default with console error with minItemWidth input", () => {
      expect(console.error).not.toBeCalled();

      const errorStack = create(
        <Grid gutter="lg" minItemWidth={{ value: "incorrect" }}>
          <Lorem />
        </Grid>
      );

      expect(console.error).toBeCalled();
      expect(errorStack.toJSON()).toMatchSnapshot();
    });

    it("renders default with console error when minItemWidth is not valid CSSLength", () => {
      expect(console.error).not.toBeCalled();

      const errorStack = create(
        <Grid gutter="lg" minItemWidth="garbage">
          <Lorem />
        </Grid>
      );

      expect(console.error).toBeCalled();
      expect(errorStack.toJSON()).toMatchSnapshot();
    });
  });
});
