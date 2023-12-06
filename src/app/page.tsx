"use client";
import { Menu } from "@ark-ui/react";
import { useState } from "react";
import { MySlider } from "./slider";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>hi</h1>
      <MySlider />
      <button onClick={() => setIsOpen(!isOpen)}>
        Trigger from the outside
      </button>

      <Menu.Root open={isOpen} onSelect={(id) => console.log(id)}>
        <Menu.Trigger>Open menu</Menu.Trigger>
        <Menu.ContextTrigger>
          <div
            style={{
              width: "100%",
              height: "20rem",
              border: "1px solid lightgray",
            }}
          >
            Some content
          </div>
        </Menu.ContextTrigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup id="group-1">
              <Menu.ItemGroupLabel htmlFor="group-1">
                Group 1
              </Menu.ItemGroupLabel>
              <Menu.Item id="share">Share...</Menu.Item>
              <Menu.Item id="move">Move...</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup id="group-2">
              <Menu.ItemGroupLabel htmlFor="group-2">
                Group 2
              </Menu.ItemGroupLabel>
              <Menu.Item id="rename">Rename...</Menu.Item>
              <Menu.Item id="delete">Delete...</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </div>
  );
}
