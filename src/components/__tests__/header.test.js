import React from "react"
import renderer from "react-test-renderer"

import Header from "../Header"

describe("Header", () => {
  it("renders correctly in Jest test", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})